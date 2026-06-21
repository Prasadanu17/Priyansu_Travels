import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingContact from './components/ui/FloatingContact';
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Services from './pages/Services';
import Travel from './pages/Travel';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PriyansuPrivacy';
import TermsOfService from './pages/TermsOfService';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/about"        element={<About />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/services"     element={<Services />} />
          <Route path="/travel"       element={<Travel />} />
          <Route path="/travel/:slug" element={<Travel />} />
          <Route path="/contact"      element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
