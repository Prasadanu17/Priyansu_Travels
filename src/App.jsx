import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileBookingBar from './components/ui/MobileBookingBar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Travel from './pages/Travel';
import Contact from './pages/Contact';

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
          <Route path="/services"     element={<Services />} />
          <Route path="/travel"       element={<Travel />} />
          <Route path="/travel/:slug" element={<Travel />} />
          <Route path="/contact"      element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  );
}
