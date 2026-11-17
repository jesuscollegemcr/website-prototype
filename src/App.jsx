import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FacilitiesSection from './components/FacilitiesSection';
import EventsSection from './components/EventsSection';
import CommitteeSection from './components/CommitteeSection';
import HonorarySection from './components/HonorarySection';
import ContactSection from './components/ContactSection';
import ConstitutionPage from './components/ConstitutionPage';
import { IconChevronUp } from './components/Icons';

const isConstitutionPage = window.location.pathname.replace(/\/+$/, '') === '/constitution';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('jesus_mcr_theme') || 'light';
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('jesus_mcr_theme', theme);
  }, [theme]);

  // Deep links like /#committee or /constitution#finance: the browser tries to
  // jump before React renders, so scroll to the section once it exists.
  useEffect(() => {
    // Wait for web fonts: they reflow the page and would shift the target.
    document.fonts.ready.then(() => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const element = id && document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        window.scrollTo({ top: element.getBoundingClientRect().top + window.pageYOffset - headerOffset });
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app-wrapper">
      <Navbar theme={theme} toggleTheme={toggleTheme} isConstitutionPage={isConstitutionPage} />

      <main className="main-content">
        {isConstitutionPage ? (
          <ConstitutionPage />
        ) : (
          <>
            <HeroSection />
            <AboutSection />
            <FacilitiesSection />
            <EventsSection />
            <CommitteeSection />
            <HonorarySection />
            <ContactSection />
          </>
        )}
      </main>

      <Footer />

      {showScrollTop && (
        <button
          className="btn-scroll-top"
          onClick={scrollToTop}
          title="Scroll back to top"
          aria-label="Scroll back to top"
        >
          <IconChevronUp size={20} />
        </button>
      )}
    </div>
  );
}
