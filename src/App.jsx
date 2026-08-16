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
import { IconChevronUp } from './components/Icons';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('jesus_mcr_theme') || 'light';
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('jesus_mcr_theme', theme);
  }, [theme]);

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
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <FacilitiesSection />
        <EventsSection />
        <CommitteeSection />
        <HonorarySection />
        <ContactSection />
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
