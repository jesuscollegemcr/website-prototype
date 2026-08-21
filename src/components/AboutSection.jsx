import React from 'react';
import { IconBookOpen, IconUsers } from './Icons';
import { ABOUT_DATA } from '../data/siteData';
import AboutCarousel from './AboutCarousel';

export default function AboutSection() {
  return (
    <section id="about" className="content-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">About Us</span>
          <h2 className="section-title">{ABOUT_DATA.title}</h2>
          <div className="section-divider" />
        </div>

        <div className="about-grid">
          <div className="about-text-col">
            <p className="about-lead">
              {ABOUT_DATA.lead}
            </p>

            <div className="about-paragraphs">
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx} className="about-paragraph">
                  {p}
                </p>
              ))}
            </div>

            <div className="about-highlights-grid">
              <div className="about-highlight-card">
                <div className="highlight-icon-box">
                  <IconUsers size={22} />
                </div>
                <div>
                  <h4 className="highlight-title">Vibrant Community</h4>
                  <p className="highlight-desc">
                    Doctoral, Master’s, and postgraduate researchers spanning sciences, humanities, law, medicine, and social sciences.
                  </p>
                </div>
              </div>

              <div className="about-highlight-card">
                <div className="highlight-icon-box">
                  <IconBookOpen size={22} />
                </div>
                <div>
                  <h4 className="highlight-title">Central Oxford Location</h4>
                  <p className="highlight-desc">
                    Situated on Turl Street in historic city center, moments from the Bodleian Library and Radcliffe Camera.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-carousel-col">
            <AboutCarousel images={ABOUT_DATA.images} />
          </div>
        </div>
      </div>
    </section>
  );
}
