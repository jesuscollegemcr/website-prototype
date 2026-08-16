import React from 'react';
import Crest from './Crest';
import { IconMapPin, IconMail, IconHeart } from './Icons';

export default function Footer({ setActivePage }) {
  const handleLink = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'var(--color-primary-deep)',
      color: '#FFFFFF',
      borderTop: '3px solid var(--color-gold)',
      paddingTop: '60px',
      paddingBottom: '36px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '48px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <Crest size={48} />
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  letterSpacing: '0.04em',
                  color: 'var(--color-gold-light)'
                }}>
                  JESUS COLLEGE MCR
                </h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Middle Common Room • Oxford
                </p>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', opacity: 0.85, lineHeight: 1.65, marginBottom: '18px' }}>
              The vibrant postgraduate home of Jesus College in the University of Oxford. Supporting over 350 DPhil, Master's, and graduate scholars from over 50 countries.
            </p>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '0.85rem',
              color: 'var(--color-gold-light)',
              opacity: 0.95
            }}>
              "Floreat Ecclesia, Vivat Rex, Habeat Jesus Gloriam"
            </p>
          </div>

          <div>
            <h4 style={{
              fontSize: '0.95rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-gold-light)',
              marginBottom: '16px',
              borderBottom: '1px solid rgba(197, 155, 39, 0.3)',
              paddingBottom: '8px'
            }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <li>
                <button
                  onClick={() => handleLink('events')}
                  style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  &rarr; Term Card &amp; Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('freshers')}
                  style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  &rarr; Freshers’ Guide &amp; Glossary
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('committee')}
                  style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  &rarr; Committee Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('facilities')}
                  style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  &rarr; Harold Wilson Room &amp; Boathouse
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('academic')}
                  style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  &rarr; Graduate Colloquium &amp; Grants
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('portal')}
                  style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.85)', cursor: 'pointer', padding: 0, font: 'inherit' }}
                >
                  &rarr; Formal Hall &amp; Punt Bookings
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{
              fontSize: '0.95rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-gold-light)',
              marginBottom: '16px',
              borderBottom: '1px solid rgba(197, 155, 39, 0.3)',
              paddingBottom: '8px'
            }}>
              Location &amp; Porters' Lodge
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem', opacity: 0.85, lineHeight: 1.6 }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <IconMapPin size={20} style={{ flexShrink: 0, color: 'var(--color-gold-light)' }} />
                <span>
                  Jesus College, Turl Street<br />
                  Oxford, OX1 3DW, United Kingdom
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <IconMail size={18} style={{ flexShrink: 0, color: 'var(--color-gold-light)' }} />
                <span>mcr.president@jesus.ox.ac.uk</span>
              </div>
              <div>
                <strong>Porters' Lodge (24/7):</strong><br />
                +44 (0)1865 279700
              </div>
            </div>
          </div>

          <div>
            <h4 style={{
              fontSize: '0.95rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--color-gold-light)',
              marginBottom: '16px',
              borderBottom: '1px solid rgba(197, 155, 39, 0.3)',
              paddingBottom: '8px'
            }}>
              Welfare &amp; Emergency
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', opacity: 0.9 }}>
              <p>
                <strong>Jericho Health Centre (GP):</strong><br />
                +44 (0)1865 311234
              </p>
              <p>
                <strong>Oxford Nightline (8pm-8am):</strong><br />
                +44 (0)1865 270270
              </p>
              <p>
                <strong>University Security Services:</strong><br />
                Emergency: +44 (0)1865 289999
              </p>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem',
          opacity: 0.75
        }}>
          <div>
            &copy; {new Date().getFullYear()} Jesus College Middle Common Room (MCR), University of Oxford. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Accessibility</span>
            <span>•</span>
            <span>Oxford Single Sign-On</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
