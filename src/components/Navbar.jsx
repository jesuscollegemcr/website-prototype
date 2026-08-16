import React, { useState } from 'react';
import Crest from './Crest';
import {
  IconSearch,
  IconMoon,
  IconSun,
  IconMenu,
  IconX,
  IconCalendar,
  IconShield
} from './Icons';

export default function Navbar({
  activePage,
  setActivePage,
  theme,
  toggleTheme,
  onOpenSearch
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'events', label: 'Term Card & Events' },
    { id: 'freshers', label: 'Freshers Hub' },
    { id: 'committee', label: 'Committee' },
    { id: 'facilities', label: 'Facilities & Life' },
    { id: 'academic', label: 'Academic & Colloquium' },
    { id: 'welfare', label: 'Welfare & Support' },
    { id: 'portal', label: 'Bookings & Portal' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <aside aria-label="College Term Notice" className="term-notice-bar">
        <div className="container">
          <div className="term-notice-inner">
            <div className="term-announcement">
              <span className="term-badge">
                <IconCalendar size={13} />
                Michaelmas Term 2026 • Week 4
              </span>
              <span style={{ opacity: 0.9 }}>
                Upcoming: <strong>Fifth Week Wine & Cheese</strong> (Fri Nov 20) &amp; <strong>Colloquium Talk Proposals Open</strong>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.8rem' }}>
              <span>Porch / Lodge: +44 (0)1865 279700</span>
              <span style={{ color: 'var(--color-gold-light)' }}>•</span>
              <a
                href="#portal"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('portal');
                }}
                style={{ color: 'var(--color-gold-light)', textDecoration: 'none', fontWeight: 600 }}
              >
                Sign up for Formal Hall &rarr;
              </a>
            </div>
          </div>
        </div>
      </aside>

      <header className="navbar-header">
        <div className="container">
          <div className="navbar-inner">
            <div
              className="brand-link"
              onClick={() => handleNavClick('home')}
              role="button"
              tabIndex={0}
            >
              <Crest size={44} />
              <div className="brand-titles">
                <span className="brand-name">JESUS COLLEGE MCR</span>
                <span className="brand-sub">Middle Common Room • Oxford</span>
              </div>
            </div>

            <nav className="nav-menu" aria-label="Primary Navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="nav-actions">
              <button
                className="btn-icon"
                onClick={onOpenSearch}
                title="Quick Search (Events, Glossary, Reps)"
                aria-label="Quick Search"
              >
                <IconSearch size={17} />
              </button>

              <button
                className="btn-icon"
                onClick={toggleTheme}
                title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <IconSun size={17} /> : <IconMoon size={17} />}
              </button>

              <button
                className="mobile-toggle-btn"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle Mobile Navigation"
              >
                {mobileOpen ? <IconX size={22} /> : <IconMenu size={22} />}
              </button>
            </div>
          </div>
        </div>

        <div className={`mobile-nav-drawer ${mobileOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activePage === item.id ? 'active' : ''}`}
              style={{ textAlign: 'left', width: '100%', padding: '12px 16px' }}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>
    </>
  );
}
