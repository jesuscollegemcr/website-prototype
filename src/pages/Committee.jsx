import React, { useState, useMemo } from 'react';
import {
  IconUsers,
  IconMail,
  IconSearch,
  IconMapPin,
  IconBookOpen,
  IconAward,
  IconShield
} from '../components/Icons';
import { COMMITTEE_CATEGORIES, COMMITTEE_MEMBERS } from '../data/committeeData';

export default function Committee({ setActivePage, addToast }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMembers = useMemo(() => {
    return COMMITTEE_MEMBERS.filter((member) => {
      if (selectedCategory !== 'all' && member.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          member.name.toLowerCase().includes(q) ||
          member.role.toLowerCase().includes(q) ||
          member.course.toLowerCase().includes(q) ||
          member.pidge.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="animate-fade-in section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <IconUsers size={13} />
            MCR Executive &amp; General Committee 2026/27
          </div>
          <h1 className="section-title">
            Meet Your MCR Committee
          </h1>
          <p className="section-desc">
            Elected annually by the postgraduate members of Jesus College. Your committee represents graduate interests to College Governing Body, manages MCR budgets, runs social events, and provides peer support.
          </p>
        </div>

        {/* Filters and Search Bar */}
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
            gap: '20px',
            alignItems: 'center',
            marginBottom: '20px',
            flexWrap: 'wrap'
          }}>
            <div className="search-box-wrapper" style={{ maxWidth: '400px' }}>
              <input
                type="text"
                className="search-input"
                placeholder="Search committee officers by name, role, degree..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="search-icon">
                <IconSearch size={18} />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
              <span style={{ fontWeight: 600, color: 'var(--color-text-muted)' }}>Showing:</span>
              <span className="badge badge-gold">
                {filteredMembers.length} Officers
              </span>
            </div>
          </div>

          {/* Category Chips */}
          <div className="tabs-container" style={{ marginBottom: 0 }}>
            {COMMITTEE_CATEGORIES.map((cat) => (
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

        {/* Committee Grid */}
        {filteredMembers.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '48px 20px',
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-lg)',
            border: '1px dashed var(--color-border)'
          }}>
            <p style={{ color: 'var(--color-text-muted)' }}>No officers match your search.</p>
          </div>
        ) : (
          <div className="grid-3">
            {filteredMembers.map((member) => (
              <div key={member.id} className="card card-crest-accent" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: 'var(--radius-pill)',
                    background: member.color || 'var(--color-primary)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    border: '2px solid var(--color-gold)',
                    flexShrink: 0
                  }}>
                    {member.avatarInitial}
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <span className="badge badge-green" style={{ fontSize: '0.7rem', marginBottom: '4px' }}>
                      {member.role}
                    </span>
                    <h3 className="card-title" style={{ fontSize: '1.15rem', margin: 0 }}>
                      {member.name}
                    </h3>
                  </div>
                </div>

                <div style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-gold-deep)',
                  fontWeight: 600,
                  marginBottom: '12px'
                }}>
                  {member.course} ({member.matriculation})
                </div>

                <p className="card-text" style={{ fontSize: '0.875rem', marginBottom: '16px' }}>
                  {member.bio}
                </p>

                <div style={{
                  background: 'var(--color-surface-muted)',
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8rem',
                  color: 'var(--color-text-muted)',
                  marginBottom: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <IconMapPin size={14} style={{ color: 'var(--color-primary)' }} />
                  <span>Pidge: <strong>{member.pidge}</strong></span>
                </div>

                <div style={{
                  borderTop: '1px solid var(--color-border)',
                  paddingTop: '14px',
                  marginTop: 'auto',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <a
                    href={`mailto:${member.email}`}
                    className="btn btn-outline btn-sm"
                    style={{ width: '100%' }}
                    onClick={(e) => {
                      addToast(`Opening mail client to ${member.email}`);
                    }}
                  >
                    <IconMail size={15} />
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Committee Governance Callout */}
        <div style={{ marginTop: '56px' }}>
          <div className="card card-gold-accent" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-gold-subtle)',
                color: 'var(--color-gold-deep)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <IconShield size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 className="card-title">MCR General Meetings &amp; Elections</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: '14px' }}>
                  The MCR holds two Ordinary General Meetings (OGMs) each term in the Harold Wilson Room. All full postgraduate members have equal speaking and voting rights on motions, constitutional amendments, and budget allocations. Executive and general elections take place in Trinity Term.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => setActivePage('portal')}
                  >
                    Download MCR Constitution
                  </button>
                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => setActivePage('events')}
                  >
                    View Next OGM Date
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
