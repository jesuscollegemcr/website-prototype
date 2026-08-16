import React, { useState, useMemo } from 'react';
import {
  IconCalendar,
  IconClock,
  IconMapPin,
  IconDownload,
  IconSearch,
  IconUtensils,
  IconHeart,
  IconUsers,
  IconAward,
  IconBookOpen,
  IconShield,
  IconSparkles
} from '../components/Icons';
import { TERMS, EVENT_CATEGORIES, EVENTS } from '../data/termCardData';
import Modal from '../components/Modal';

export default function Events({ setActivePage, addToast }) {
  const [selectedTerm, setSelectedTerm] = useState('michaelmas-2026');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedWeek, setSelectedWeek] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeEventModal, setActiveEventModal] = useState(null);

  const weeks = ['all', 'Week 0', 'Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'];

  const filteredEvents = useMemo(() => {
    return EVENTS.filter((event) => {
      if (event.term !== selectedTerm) return false;
      if (selectedCategory !== 'all' && event.category !== selectedCategory) return false;
      if (selectedWeek !== 'all' && event.week !== selectedWeek) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = event.title.toLowerCase().includes(q);
        const matchSummary = event.summary.toLowerCase().includes(q);
        const matchLoc = event.location.toLowerCase().includes(q);
        if (!matchTitle && !matchSummary && !matchLoc) return false;
      }
      return true;
    });
  }, [selectedTerm, selectedCategory, selectedWeek, searchQuery]);

  const handleExportICS = (event) => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Jesus College MCR Oxford//Term Card//EN
BEGIN:VEVENT
SUMMARY:${event.title}
DESCRIPTION:${event.summary} Dress code: ${event.dressCode}
LOCATION:${event.location}, Jesus College, Oxford
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${event.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    addToast(`Exported "${event.title}" to calendar (.ics).`);
  };

  return (
    <div className="animate-fade-in section">
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <div className="section-tag">
            <IconCalendar size={13} />
            Postgraduate Timetable
          </div>
          <h1 className="section-title">
            MCR Term Card &amp; Events Calendar
          </h1>
          <p className="section-desc">
            Explore and subscribe to our full schedule of Formal Halls, Guest Nights, Welfare Teas, Graduate Research Colloquia, Bops, and sporting outings.
          </p>
        </div>

        {/* Term Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '32px',
          flexWrap: 'wrap'
        }}>
          {TERMS.map((term) => (
            <button
              key={term.id}
              className={`btn ${selectedTerm === term.id ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '10px 24px', borderRadius: 'var(--radius-pill)' }}
              onClick={() => {
                setSelectedTerm(term.id);
                setSelectedWeek('all');
              }}
            >
              {term.label} {term.isCurrent && '★ (Active)'}
            </button>
          ))}
        </div>

        {/* Controls Bar: Search & Category Chips */}
        <div style={{
          background: 'var(--color-surface)',
          padding: '24px',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          marginBottom: '36px',
          boxShadow: 'var(--shadow-xs)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '20px',
            flexWrap: 'wrap'
          }}>
            <div className="search-box-wrapper" style={{ maxWidth: '400px' }}>
              <input
                type="text"
                className="search-input"
                placeholder="Search term events (e.g. Formal, Colloquium, Wine)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="search-icon">
                <IconSearch size={18} />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem' }}>
              <span style={{ fontWeight: 600, color: 'var(--color-text-muted)' }}>Showing:</span>
              <span className="badge badge-gold" style={{ fontSize: '0.85rem' }}>
                {filteredEvents.length} Events Found
              </span>
            </div>
          </div>

          {/* Categories */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-subtle)', marginBottom: '8px' }}>
              Filter by Category:
            </div>
            <div className="tabs-container" style={{ marginBottom: 0 }}>
              {EVENT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Weeks Filter */}
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-subtle)', marginBottom: '8px' }}>
              Filter by Oxford Term Week:
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {weeks.map((w) => (
                <button
                  key={w}
                  onClick={() => setSelectedWeek(w)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: '1px solid',
                    background: selectedWeek === w ? 'var(--color-gold)' : 'var(--color-surface-muted)',
                    color: selectedWeek === w ? '#141F1A' : 'var(--color-text-muted)',
                    borderColor: selectedWeek === w ? 'var(--color-gold-deep)' : 'var(--color-border)',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  {w === 'all' ? 'All Weeks' : w}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '64px 20px',
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-lg)',
            border: '1px dashed var(--color-border)'
          }}>
            <IconCalendar size={36} style={{ color: 'var(--color-text-subtle)', marginBottom: '12px' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-text-main)', marginBottom: '8px' }}>
              No events found for this filter
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
              Try selecting "All Categories" or reset your term week selection.
            </p>
            <button
              className="btn btn-outline btn-sm"
              style={{ marginTop: '16px' }}
              onClick={() => {
                setSelectedCategory('all');
                setSelectedWeek('all');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid-2">
            {filteredEvents.map((event) => (
              <div key={event.id} className="card card-crest-accent" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span className="badge badge-gold">
                      {event.week} • {event.day}
                    </span>
                    <span className="badge badge-green">
                      {event.category.toUpperCase()}
                    </span>
                  </div>
                  {event.signupRequired && (
                    <span className="badge badge-crimson">
                      Booking Required
                    </span>
                  )}
                </div>

                <h3 className="card-title" style={{ fontSize: '1.25rem' }}>
                  {event.title}
                </h3>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  fontSize: '0.875rem',
                  color: 'var(--color-text-muted)',
                  marginBottom: '16px',
                  background: 'var(--color-surface-muted)',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <IconClock size={15} style={{ color: 'var(--color-gold-deep)', flexShrink: 0 }} />
                    <span><strong>{event.date}</strong> at {event.time}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <IconMapPin size={15} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{event.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <IconUsers size={15} style={{ color: 'var(--color-text-subtle)', flexShrink: 0 }} />
                    <span>Dress Code: <strong>{event.dressCode}</strong> ({event.capacity})</span>
                  </div>
                </div>

                <p className="card-text">
                  {event.summary}
                </p>

                {event.speakers && (
                  <div style={{
                    marginBottom: '16px',
                    padding: '10px 14px',
                    background: 'var(--color-primary-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.825rem'
                  }}>
                    <strong style={{ color: 'var(--color-primary-dark)' }}>Colloquium Speakers:</strong>
                    <ul style={{ paddingLeft: '18px', marginTop: '4px', color: 'var(--color-text-main)' }}>
                      {event.speakers.map((s, idx) => (
                        <li key={idx}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div style={{
                  borderTop: '1px solid var(--color-border)',
                  paddingTop: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px',
                  flexWrap: 'wrap'
                }}>
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => handleExportICS(event)}
                    title="Download .ics Calendar File"
                  >
                    <IconDownload size={15} />
                    Add to Calendar
                  </button>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => setActiveEventModal(event)}
                    >
                      Details &amp; Info
                    </button>

                    {event.signupRequired ? (
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                          setActivePage('portal');
                          addToast(`Redirecting to booking portal for "${event.title}".`);
                        }}
                      >
                        Book Seat &rarr;
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                          addToast(`Saved "${event.title}" to your MCR diary.`);
                        }}
                      >
                        RSVP (Free)
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Event Details Modal */}
      {activeEventModal && (
        <Modal
          isOpen={true}
          onClose={() => setActiveEventModal(null)}
          title={activeEventModal.title}
        >
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span className="badge badge-gold">{activeEventModal.week}</span>
              <span className="badge badge-green">{activeEventModal.category.toUpperCase()}</span>
              <span className="badge badge-green">{activeEventModal.capacity}</span>
            </div>

            <div style={{
              background: 'var(--color-surface-muted)',
              padding: '16px',
              borderRadius: 'var(--radius-md)',
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '0.9rem'
            }}>
              <div><strong>Date &amp; Time:</strong> {activeEventModal.date} ({activeEventModal.day}) • {activeEventModal.time}</div>
              <div><strong>Location:</strong> {activeEventModal.location}</div>
              <div><strong>Dress Code:</strong> {activeEventModal.dressCode}</div>
              <div><strong>Registration:</strong> {activeEventModal.signupRequired ? 'Mandatory signup via College Portal' : 'Open drop-in for all MCR members & guests'}</div>
            </div>

            <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--color-text-main)', marginBottom: '24px' }}>
              {activeEventModal.summary}
            </p>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button
                className="btn btn-outline"
                onClick={() => handleExportICS(activeEventModal)}
              >
                <IconDownload size={16} />
                Download .ICS
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  addToast(`Confirmed RSVP for "${activeEventModal.title}".`);
                  setActiveEventModal(null);
                }}
              >
                Confirm Attendance
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
