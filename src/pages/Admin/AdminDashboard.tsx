import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Search } from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  budget: string;
  services_interested: string;
  message: string;
  status: 'New' | 'Contacted' | 'Closed';
  created_at: string;
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { session } = useOutletContext<{ session: any }>();

  const fetchLeads = async () => {
    if (!session) return;
    try {
      const res = await fetch('/api/leads', {
        headers: {
          'Authorization': `Bearer ${session.access_token}`
        }
      });
      const data = await res.json();
      if (res.ok && data.leads) {
        setLeads(data.leads);
        setFilteredLeads(data.leads);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [session]);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = leads.filter(l =>
      l.name?.toLowerCase().includes(term) ||
      l.email?.toLowerCase().includes(term) ||
      l.company?.toLowerCase().includes(term)
    );
    setFilteredLeads(filtered);
  }, [searchTerm, leads]);

  const updateStatus = async (id: string, status: string) => {
    if (!session) return;
    try {
      setLeads(leads.map(l => l.id === id ? { ...l, status: status as any } : l));
      await fetch(`/api/leads/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`
        },
        body: JSON.stringify({ status })
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!supabase) {
    return (
      <div className="bg-white border border-brown/10 rounded-3xl p-10 text-center text-brown/70 font-sans shadow-md">
        Supabase is not configured. Admin panel depends on Supabase connection.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-serif font-bold tracking-tight text-brown">Lead Dashboard</h1>
        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brown/50">
            <Search size={16} />
          </div>
          <input
            type="text"
            placeholder="Search leads by name, email or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-4 py-2.5 border border-brown/15 rounded-xl leading-5 bg-white text-brown placeholder-brown/40 focus:outline-none focus:ring-1 focus:ring-orange focus:border-orange sm:text-sm font-sans font-medium transition-all"
          />
        </div>
      </div>

      {/* Mobile Card Layout (Visible on mobile/tablet, hidden on desktop) */}
      <div className="block md:hidden space-y-4">
        {loading ? (
          <div className="bg-white border border-brown/8 rounded-2xl p-8 text-center text-brown/50 font-medium">
            Loading leads...
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="bg-white border border-brown/8 rounded-2xl p-8 text-center text-brown/50 font-medium">
            No leads found.
          </div>
        ) : (
          filteredLeads.map((lead) => (
            <div key={lead.id} className="bg-white border border-brown/8 rounded-2xl p-5 space-y-4 hover:border-orange/20 transition-all duration-300 shadow-sm">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <div className="text-[10px] text-brown/50 font-bold uppercase tracking-wider">{new Date(lead.created_at).toLocaleDateString()}</div>
                  <div className="text-lg font-bold text-brown font-serif mt-0.5 leading-tight">{lead.name}</div>
                  <div className="text-xs text-brown/70 mt-0.5 font-semibold">{lead.company || 'No Company'}</div>
                </div>
                <div className="shrink-0">
                  <select
                    value={lead.status || 'New'}
                    onChange={(e) => updateStatus(lead.id, e.target.value)}
                    className={`text-xs rounded-full px-3 py-1 font-bold bg-[#FAF6F1] border focus:outline-none transition-colors cursor-pointer ${lead.status === 'Closed' ? 'border-green-600/20 text-green-700 bg-green-500/5' :
                        lead.status === 'Contacted' ? 'border-blue-600/20 text-blue-700 bg-blue-500/5' :
                          'border-orange/20 text-orange bg-orange/5'
                      }`}
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-brown/10 pt-4 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-brown/55 font-bold uppercase tracking-widest text-[9px] mb-0.5">Email</div>
                  <a href={`mailto:${lead.email}`} className="text-brown hover:text-orange transition-colors font-semibold break-all block">
                    {lead.email}
                  </a>
                </div>
                <div>
                  <div className="text-brown/55 font-bold uppercase tracking-widest text-[9px] mb-0.5">Phone</div>
                  <a href={`tel:${lead.phone}`} className="text-brown hover:text-orange transition-colors font-semibold block">
                    {lead.phone || '-'}
                  </a>
                </div>
                <div>
                  <div className="text-brown/55 font-bold uppercase tracking-widest text-[9px] mb-0.5">Budget</div>
                  <div className="text-brown font-semibold">{lead.budget || '-'}</div>
                </div>
                <div>
                  <div className="text-brown/55 font-bold uppercase tracking-widest text-[9px] mb-0.5">Interest</div>
                  <div className="text-orange font-bold">{lead.services_interested || '-'}</div>
                </div>
              </div>

              {lead.message && (
                <div className="bg-[#FAF6F1] border border-brown/5 rounded-xl p-3.5">
                  <div className="text-brown/50 text-[9px] font-bold uppercase tracking-widest mb-1">Message</div>
                  <div className="text-brown/80 text-xs leading-relaxed whitespace-pre-wrap font-medium">{lead.message}</div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Desktop/Tablet Table Layout (Visible on desktop/laptops, hidden on mobile) */}
      <div className="hidden md:block bg-white border border-brown/8 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-brown/10">
            <thead className="bg-[#FAF6F1]/80 border-b border-brown/10">
              <tr>
                <th scope="col" className="px-6 py-4.5 text-left text-[10px] font-extrabold text-brown/60 uppercase tracking-widest">Date</th>
                <th scope="col" className="px-6 py-4.5 text-left text-[10px] font-extrabold text-brown/60 uppercase tracking-widest">Contact Info</th>
                <th scope="col" className="px-6 py-4.5 text-left text-[10px] font-extrabold text-brown/60 uppercase tracking-widest">Details</th>
                <th scope="col" className="px-6 py-4.5 text-left text-[10px] font-extrabold text-brown/60 uppercase tracking-widest">Message</th>
                <th scope="col" className="px-6 py-4.5 text-left text-[10px] font-extrabold text-brown/60 uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-brown/10">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-brown/50 font-medium">Loading leads...</td>
                </tr>
              ) : filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-brown/50 font-medium">No leads found.</td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-brown/2 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-brown/70 font-semibold">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-base font-bold font-serif text-brown">{lead.name}</div>
                      <div className="text-xs text-brown/70 font-medium mt-0.5">
                        <a href={`mailto:${lead.email}`} className="hover:text-orange transition-colors">
                          {lead.email}
                        </a>
                      </div>
                      <div className="text-xs text-brown/50 font-semibold mt-0.5">{lead.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-bold text-brown">{lead.company || '-'}</div>
                      <div className="text-xs text-brown/60 mt-1 font-semibold">Budget: <span className="text-brown">{lead.budget || '-'}</span></div>
                      <div className="text-xs text-orange font-bold mt-1">{lead.services_interested}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-brown/85 max-w-xs truncate font-medium" title={lead.message}>
                      {lead.message}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={lead.status || 'New'}
                        onChange={(e) => updateStatus(lead.id, e.target.value)}
                        className={`text-xs rounded-full px-3 py-1 font-bold bg-[#FAF6F1] border focus:outline-none transition-colors cursor-pointer ${lead.status === 'Closed' ? 'border-green-600/20 text-green-700 bg-green-500/5' :
                            lead.status === 'Contacted' ? 'border-blue-600/20 text-blue-700 bg-blue-500/5' :
                              'border-orange/20 text-orange bg-orange/5'
                          }`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
