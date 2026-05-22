import { Outlet, Navigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { useEffect, useState } from 'react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminLayout() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-zinc-400">Loading...</div>;
  }

  // Allow mock access if Supabase is not configured
  if (!session && supabase) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col font-sans">
      <header className="bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter">DBL<span className="text-zinc-500 font-normal ml-2">Admin</span></div>
        <button 
          onClick={handleLogout}
          className="text-zinc-400 hover:text-white flex items-center gap-2 text-sm transition-colors"
        >
          <LogOut size={16} /> Logout
        </button>
      </header>
      <main className="flex-grow p-6 md:p-10 max-w-7xl mx-auto w-full">
        <Outlet context={{ session }} />
      </main>
    </div>
  );
}
