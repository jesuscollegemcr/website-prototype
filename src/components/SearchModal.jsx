import React, { useState, useMemo } from 'react';
import Modal from './Modal';
import { IconSearch, IconCalendar, IconUsers, IconBookOpen, IconShield, IconArrowRight } from './Icons';
import { EVENTS } from '../data/termCardData';
import { COMMITTEE_MEMBERS } from '../data/committeeData';
import { GLOSSARY_TERMS } from '../data/glossaryData';
import { FACILITIES } from '../data/facilitiesData';

export default function SearchModal({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const found = [];

    EVENTS.forEach((e) => {
      if (
        e.title.toLowerCase().includes(q) ||
        e.summary.toLowerCase().includes(q) ||
        e.location.toLowerCase().includes(q)
      ) {
        found.push({
          type: 'event',
          title: e.title,
          sub: `${e.date} • ${e.location}`,
          badge: 'Event',
          page: 'events',
          icon: <IconCalendar size={16} />
        });
      }
    });

    COMMITTEE_MEMBERS.forEach((m) => {
      if (
        m.name.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        m.course.toLowerCase().includes(q)
      ) {
        found.push({
          type: 'committee',
          title: `${m.name} (${m.role})`,
          sub: `${m.course} • ${m.email}`,
          badge: 'Committee',
          page: 'committee',
          icon: <IconUsers size={16} />
        });
      }
    });

    GLOSSARY_TERMS.forEach((g) => {
      if (
        g.term.toLowerCase().includes(q) ||
        g.definition.toLowerCase().includes(q)
      ) {
        found.push({
          type: 'glossary',
          title: g.term,
          sub: g.definition,
          badge: 'Oxford Lingo',
          page: 'freshers',
          icon: <IconBookOpen size={16} />
        });
      }
    });

    FACILITIES.forEach((f) => {
      if (
        f.title.toLowerCase().includes(q) ||
        f.tagline.toLowerCase().includes(q) ||
        f.location.toLowerCase().includes(q)
      ) {
        found.push({
          type: 'facility',
          title: f.title,
          sub: f.location,
          badge: 'Facility',
          page: 'facilities',
          icon: <IconShield size={16} />
        });
      }
    });

    return found.slice(0, 8);
  }, [query]);

  const handleSelect = (page) => {
    onNavigate(page);
    onClose();
    setQuery('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Search Jesus College MCR" maxWidth="600px">
      <div style={{ marginBottom: '20px' }}>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            className="search-input"
            style={{ width: '100%', paddingLeft: '44px', fontSize: '1rem' }}
            placeholder="Search events, committee officers, Oxford glossary, facilities..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <div className="search-icon">
            <IconSearch size={20} />
          </div>
        </div>
      </div>

      {query && results.length === 0 && (
        <div style={{ textAlign: 'center', padding: '32px 16px', color: 'var(--color-text-muted)' }}>
          <p>No results found for "<strong>{query}</strong>".</p>
          <p style={{ fontSize: '0.85rem', marginTop: '6px' }}>
            Try searching for "Formal", "President", "Battels", "Sub Fusc", or "Punting".
          </p>
        </div>
      )}

      {results.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {results.map((res, i) => (
            <div
              key={i}
              onClick={() => handleSelect(res.page)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-primary)';
                e.currentTarget.style.background = 'var(--color-surface-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.background = 'var(--color-surface)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                <div style={{
                  color: 'var(--color-primary)',
                  background: 'var(--color-primary-subtle)',
                  padding: '8px',
                  borderRadius: 'var(--radius-pill)',
                  display: 'flex'
                }}>
                  {res.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
                      {res.title}
                    </span>
                    <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>
                      {res.badge}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-text-muted)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '380px',
                    margin: 0
                  }}>
                    {res.sub}
                  </p>
                </div>
              </div>
              <IconArrowRight size={16} style={{ color: 'var(--color-gold-deep)', flexShrink: 0 }} />
            </div>
          ))}
        </div>
      )}

      {!query && (
        <div style={{ padding: '16px 0' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-text-subtle)', marginBottom: '10px' }}>
            Popular Searches
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['Formal Hall', 'Sub Fusc', 'Harold Wilson Room', 'Colloquium', 'Jericho GP', 'Cherwell Punts', 'Welfare Tea'].map((tag) => (
              <button
                key={tag}
                className="badge badge-green"
                style={{ cursor: 'pointer', padding: '6px 12px', fontSize: '0.85rem' }}
                onClick={() => setQuery(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}
    </Modal>
  );
}
