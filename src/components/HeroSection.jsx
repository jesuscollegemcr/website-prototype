import React from 'react';
import Crest from './Crest';
import { IconArrowRight, IconUsers, IconCalendar } from './Icons';
import { HERO_DATA } from '../data/siteData';

export default function HeroSection() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background-wrapper">
        <img
          src={HERO_DATA.heroImage}
          alt="Jesus College Oxford"
          className="hero-background-img"
        />
        <div className="hero-overlay" />
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-crest-badge">
            <Crest size={64} />
          </div>

          <span className="hero-pill">
            Middle Common Room • Jesus College Oxford
          </span>

          <h1 className="hero-title">
            {HERO_DATA.title}
          </h1>

          <p className="hero-intro">
            {HERO_DATA.intro}
          </p>

          <div className="hero-actions">
            <a
              href="#about"
              className="btn btn-primary"
              onClick={(e) => handleScrollTo(e, 'about')}
            >
              <span>Explore About &amp; Facilities</span>
              <IconArrowRight size={16} />
            </a>

            <a
              href="#committee"
              className="btn btn-secondary"
              onClick={(e) => handleScrollTo(e, 'committee')}
            >
              <IconUsers size={16} />
              <span>Meet the Committee</span>
            </a>

            <a
              href="#events"
              className="btn btn-outline"
              onClick={(e) => handleScrollTo(e, 'events')}
            >
              <IconCalendar size={16} />
              <span>Events &amp; Calendar</span>
            </a>
          </div>

          <div className="hero-stats-row">
            <div className="hero-stat-card">
              <span className="hero-stat-number">300+</span>
              <span className="hero-stat-label">Postgraduate Scholars</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-card">
              <span className="hero-stat-number">1571</span>
              <span className="hero-stat-label">Historic Foundation</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-card">
              <span className="hero-stat-number">50+</span>
              <span className="hero-stat-label">Nationalities Represented</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-card">
              <span className="hero-stat-number">2</span>
              <span className="hero-stat-label">Dedicated Common Rooms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
