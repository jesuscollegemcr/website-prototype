import React, { useState } from 'react';
import {
  IconCalendar,
  IconClock,
  IconDownload,
  IconSparkles,
  IconX
} from './Icons';
import { TERM_CARD_DATA } from '../data/siteData';

export default function EventsSection() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <section id="events" className="content-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Events &amp; Term Card</span>
          <h2 className="section-title">{TERM_CARD_DATA.title}</h2>
          <p className="section-subtitle">
            {TERM_CARD_DATA.description}
          </p>
          <div className="section-divider" />
        </div>

        <div className="term-card-showcase">
          <div className="term-card-preview-box">
            <div className="term-card-badge-bar">
              <span className="term-card-pill">
                <IconCalendar size={15} />
                {TERM_CARD_DATA.term}
              </span>
              <a
                href={TERM_CARD_DATA.image}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline"
                download="Jesus_MCR_Term_Card.png"
              >
                <IconDownload size={15} />
                <span>Download Term Card</span>
              </a>
            </div>

            <div
              className="term-card-img-container"
              onClick={() => setIsImageModalOpen(true)}
              role="button"
              tabIndex={0}
              title="Click to expand term card"
            >
              <img
                src={TERM_CARD_DATA.image}
                alt={`${TERM_CARD_DATA.term} Term Card`}
                className="term-card-img"
              />
              <div className="term-card-overlay-hint">
                <span>Click to view full size</span>
              </div>
            </div>
          </div>

          <div className="term-highlights-column">
            <h3 className="term-highlights-title">Regular Term Highlights</h3>

            <div className="term-highlights-list">
              {TERM_CARD_DATA.highlights.map((item, idx) => (
                <div key={idx} className="term-highlight-card">
                  <div className="highlight-time-badge">
                    <span className="highlight-day">{item.day}</span>
                    <span className="highlight-time">
                      <IconClock size={13} />
                      {item.time}
                    </span>
                  </div>
                  <div className="highlight-details">
                    <h4 className="highlight-name">{item.title}</h4>
                    <p className="highlight-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="term-card-cta-box">
              <IconSparkles size={20} className="cta-icon" />
              <div>
                <h4>Looking to organize an MCR event?</h4>
                <p>
                  Have an idea for a talk, tasting, sports outing, or craft night? Reach out to our Social Secretaries or Reps below!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isImageModalOpen && (
        <div
          className="image-modal-backdrop"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="image-modal-close"
              onClick={() => setIsImageModalOpen(false)}
              aria-label="Close modal"
            >
              <IconX size={24} />
            </button>
            <img
              src={TERM_CARD_DATA.image}
              alt={`${TERM_CARD_DATA.term} Full Term Card`}
              className="image-modal-img"
            />
          </div>
        </div>
      )}
    </section>
  );
}
