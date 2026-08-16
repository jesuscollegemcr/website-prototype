import React from 'react';
import Crest from '../components/Crest';
import {
  IconCalendar,
  IconArrowRight,
  IconSparkles,
  IconBookOpen,
  IconUtensils,
  IconHeart,
  IconUsers,
  IconMapPin,
  IconClock,
  IconAward
} from '../components/Icons';
import { EVENTS } from '../data/termCardData';

export default function Home({ setActivePage, addToast }) {
  const featuredEvents = EVENTS.filter((e) => e.featured).slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--color-primary-deep) 0%, var(--color-primary-dark) 60%, #004D2C 100%)',
        color: '#FFFFFF',
        padding: '72px 0 64px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '4px solid var(--color-gold)'
      }}>
        {/* Background decorative rings */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          border: '1px solid rgba(197, 155, 39, 0.15)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30%',
          left: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: '1 1 560px', maxWidth: '680px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(197, 155, 39, 0.22)',
                border: '1px solid rgba(197, 155, 39, 0.45)',
                color: 'var(--color-gold-light)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.825rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '20px'
              }}>
                <IconSparkles size={14} />
                University of Oxford • Founded 1571
              </div>

              <h1 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.3rem, 5vw, 3.4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '18px',
                color: '#FFFFFF',
                letterSpacing: '-0.01em'
              }}>
                Welcome to <span style={{ color: 'var(--color-gold-light)' }}>Jesus College</span> Middle Common Room
              </h1>

              <p style={{
                fontSize: '1.15rem',
                lineHeight: 1.65,
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '32px',
                fontWeight: 400
              }}>
                The postgraduate heart of Jesus College. A thriving, inclusive community of over 350 DPhil researchers, Master's scholars, and graduate students in the center of historic Oxford.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button
                  className="btn btn-gold btn-lg"
                  onClick={() => setActivePage('events')}
                >
                  <IconCalendar size={18} />
                  Michaelmas Term Card
                </button>

                <button
                  className="btn btn-outline btn-lg"
                  style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.75)' }}
                  onClick={() => setActivePage('freshers')}
                >
                  <IconBookOpen size={18} />
                  Freshers’ Survival Hub
                </button>

                <button
                  className="btn btn-ghost btn-lg"
                  style={{ color: 'var(--color-gold-light)' }}
                  onClick={() => setActivePage('portal')}
                >
                  Book Formal Hall &rarr;
                </button>
              </div>
            </div>

            <div style={{
              flex: '0 0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(5, 38, 23, 0.65)',
              padding: '36px 32px',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(197, 155, 39, 0.35)',
              boxShadow: 'var(--shadow-lg)',
              backdropFilter: 'blur(10px)',
              textAlign: 'center',
              maxWidth: '340px'
            }}>
              <Crest size={96} />
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                color: 'var(--color-gold-light)',
                marginTop: '16px',
                marginBottom: '4px',
                letterSpacing: '0.04em'
              }}>
                COLLEGIUM IESU
              </h2>
              <p style={{
                fontSize: '0.8rem',
                color: 'rgba(255, 255, 255, 0.75)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px'
              }}>
                IN ACADEMIA OXONIENSI
              </p>
              <div style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                paddingTop: '14px',
                fontSize: '0.85rem',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.5
              }}>
                Harold Wilson Common Room • Cheng Digital Hub • Cherwell Fleet
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Banner */}
      <section style={{
        background: 'var(--color-surface-muted)',
        borderBottom: '1px solid var(--color-border)',
        padding: '24px 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                350+
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                Postgraduate Scholars
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-gold-deep)' }}>
                50+
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                Global Nationalities
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                1571
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                Year of Foundation
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-gold-deep)' }}>
                4 Punts
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                Private Cherwell Fleet
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                £600
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
                Annual Travel Grants
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Upcoming Events */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '36px',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <div className="section-tag">
                <IconCalendar size={13} />
                Term Calendar Highlights
              </div>
              <h2 className="section-title" style={{ margin: 0 }}>
                What’s On in the MCR
              </h2>
            </div>
            <button
              className="btn btn-outline"
              onClick={() => setActivePage('events')}
            >
              View Full Michaelmas Term Card &rarr;
            </button>
          </div>

          <div className="grid-3">
            {featuredEvents.map((event) => (
              <div key={event.id} className="card card-crest-accent">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className="badge badge-gold">
                    {event.week} • {event.day}
                  </span>
                  <span className="badge badge-green">
                    {event.category.toUpperCase()}
                  </span>
                </div>

                <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '8px' }}>
                  {event.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <IconClock size={14} style={{ color: 'var(--color-gold-deep)' }} />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <IconMapPin size={14} style={{ color: 'var(--color-primary)' }} />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="card-text">
                  {event.summary}
                </p>

                <div style={{
                  borderTop: '1px solid var(--color-border)',
                  paddingTop: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-subtle)' }}>
                    {event.dressCode}
                  </span>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => {
                      addToast(`Added "${event.title}" to your saved schedule.`);
                    }}
                  >
                    Save Event
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars of Jesus College Postgraduate Life */}
      <section className="section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">
              <IconAward size={13} />
              Collegiate Experience
            </div>
            <h2 className="section-title">
              Life as a Jesus Postgraduate
            </h2>
            <p className="section-desc">
              From Elizabethan traditions to 21st-century digital research, Jesus College provides an unmatched environment for postgraduate research and social connection.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-primary-subtle)',
                color: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <IconUsers size={24} />
              </div>
              <h3 className="card-title">Harold Wilson Common Room</h3>
              <p className="card-text">
                Our vibrant social hub in Third Quad. Enjoy fresh bean-to-cup barista coffee, cheap MCR bar pints, fireside sofas, board game tournaments, and weekend Welfare Teas.
              </p>
              <button
                className="btn btn-ghost"
                style={{ paddingLeft: 0, color: 'var(--color-primary)' }}
                onClick={() => setActivePage('facilities')}
              >
                Explore Common Room &rarr;
              </button>
            </div>

            <div className="card">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-gold-subtle)',
                color: 'var(--color-gold-deep)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <IconSparkles size={24} />
              </div>
              <h3 className="card-title">Cheng Digital Hub</h3>
              <p className="card-text">
                Opened for our 450th anniversary, the Fourth Quad Cheng Building provides 24/7 graduate carrels, podcast recording studios, 4K digital presentation suites, and cafe pavilion.
              </p>
              <button
                className="btn btn-ghost"
                style={{ paddingLeft: 0, color: 'var(--color-gold-deep)' }}
                onClick={() => setActivePage('facilities')}
              >
                View Study Suites &rarr;
              </button>
            </div>

            <div className="card">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-crimson-subtle)',
                color: 'var(--color-crimson)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <IconUtensils size={24} />
              </div>
              <h3 className="card-title">Formal Hall &amp; Exchange Banquets</h3>
              <p className="card-text">
                Candlelit three-course dining in the 1571 Elizabethan Hall. Regular inter-collegiate exchange dinners with sister colleges across Oxford and Jesus College Cambridge.
              </p>
              <button
                className="btn btn-ghost"
                style={{ paddingLeft: 0, color: 'var(--color-crimson)' }}
                onClick={() => setActivePage('portal')}
              >
                Book Guest Nights &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* President's Welcome Message */}
      <section className="section">
        <div className="container-narrow">
          <div className="card card-gold-accent" style={{ padding: '36px 40px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: 'var(--radius-pill)',
                background: 'var(--color-primary)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                border: '3px solid var(--color-gold)',
                flexShrink: 0
              }}>
                GE
              </div>

              <div style={{ flex: '1 1 300px' }}>
                <div className="section-tag" style={{ marginBottom: '8px' }}>
                  President’s Welcome
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-primary-dark)', marginBottom: '4px' }}>
                  A Message from the MCR President
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-gold-deep)', fontWeight: 600, marginBottom: '16px' }}>
                  Gareth L. Evans • DPhil in Statistics &amp; Machine Learning
                </p>

                <p style={{ fontSize: '1rem', color: 'var(--color-text-main)', lineHeight: 1.7, marginBottom: '14px' }}>
                  "On behalf of the entire MCR Committee, I am delighted to welcome you to Jesus College MCR! Whether you are joining us for a 1-year taught Master's or embarking on a multi-year DPhil dissertation, the MCR is here to be your home away from home.
                </p>
                <p style={{ fontSize: '1rem', color: 'var(--color-text-main)', lineHeight: 1.7, marginBottom: '20px' }}>
                  Our graduate body is famously friendly, vibrant, and intellectually curious. From our weekly Sunday Welfare Teas and interdisciplinary Research Colloquia to bops, punting picnics, and formal guest nights, there are endless opportunities to make lifelong friends. Please don't hesitate to reach out to me or any committee officer!"
                </p>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setActivePage('committee')}
                  >
                    Meet the Committee
                  </button>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => setActivePage('welfare')}
                  >
                    Welfare &amp; Peer Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
