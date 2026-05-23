/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { ThemeProvider } from './context/ThemeContext';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/Policies/PrivacyPolicy';
import TermsConditions from './pages/Policies/TermsConditions';
import CookiePolicy from './pages/Policies/CookiePolicy';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public Pages */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

