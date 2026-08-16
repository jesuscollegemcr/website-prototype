import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import Toast from './components/Toast';

import Home from './pages/Home';
import Events from './pages/Events';
import Freshers from './pages/Freshers';
import Committee from './pages/Committee';
import Facilities from './pages/Facilities';
import Academic from './pages/Academic';
import Welfare from './pages/Welfare';
import Portal from './pages/Portal';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('jesus_mcr_theme') || 'light';
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('jesus_mcr_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const addToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="app-wrapper">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main className="main-content">
        {activePage === 'home' && <Home setActivePage={setActivePage} addToast={addToast} />}
        {activePage === 'events' && <Events setActivePage={setActivePage} addToast={addToast} />}
        {activePage === 'freshers' && <Freshers setActivePage={setActivePage} addToast={addToast} />}
        {activePage === 'committee' && <Committee setActivePage={setActivePage} addToast={addToast} />}
        {activePage === 'facilities' && <Facilities setActivePage={setActivePage} addToast={addToast} />}
        {activePage === 'academic' && <Academic setActivePage={setActivePage} addToast={addToast} />}
        {activePage === 'welfare' && <Welfare setActivePage={setActivePage} addToast={addToast} />}
        {activePage === 'portal' && <Portal setActivePage={setActivePage} addToast={addToast} />}
      </main>

      <Footer setActivePage={setActivePage} />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={(page) => setActivePage(page)}
      />

      <Toast toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
