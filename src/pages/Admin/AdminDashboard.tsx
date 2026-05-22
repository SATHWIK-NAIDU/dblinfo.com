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
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center text-zinc-400">
        Supabase is not configured. Admin panel depends on Supabase connection.
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-white">Lead Dashboard</h1>
        <div className="relative w-full md:w-72">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
            <Search size={16} />
          </div>
          <input
            type="text"
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-zinc-800 rounded-md leading-5 bg-zinc-900 text-zinc-300 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-800">
            <thead className="bg-zinc-950/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Contact Info</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Details</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Message</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-zinc-900 divide-y divide-zinc-800">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-zinc-500">Loading leads...</td>
                </tr>
              ) : filteredLeads.length === 0 ? (
                <tr>
                   <td colSpan={5} className="px-6 py-8 text-center text-zinc-500">No leads found.</td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-zinc-800/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-white">{lead.name}</div>
                      <div className="text-sm text-zinc-400">{lead.email}</div>
                      <div className="text-sm text-zinc-500">{lead.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-zinc-300">{lead.company || '-'}</div>
                      <div className="text-xs text-zinc-500 mt-1">Budget: {lead.budget || '-'}</div>
                      <div className="text-xs text-indigo-400 mt-1">{lead.services_interested}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-400 max-w-xs truncate" title={lead.message}>
                      {lead.message}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={lead.status || 'New'}
                        onChange={(e) => updateStatus(lead.id, e.target.value)}
                        className={`text-sm rounded-full px-3 py-1 font-medium bg-zinc-950 border focus:outline-none ${
                          lead.status === 'Closed' ? 'border-green-500/30 text-green-400' :
                          lead.status === 'Contacted' ? 'border-blue-500/30 text-blue-400' :
                          'border-yellow-500/30 text-yellow-400'
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
