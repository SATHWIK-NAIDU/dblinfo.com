import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import NewsletterPopup from '../common/NewsletterPopup';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-cream text-brown font-sans selection:bg-orange/20 selection:text-orange-dk">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <NewsletterPopup />
    </div>
  );
}
