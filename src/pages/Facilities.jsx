import React, { useState } from 'react';
import {
  IconShield,
  IconCoffee,
  IconBookOpen,
  IconUtensils,
  IconMapPin,
  IconClock,
  IconSparkles,
  IconUsers
} from '../components/Icons';
import { FACILITIES } from '../data/facilitiesData';

export default function Facilities({ setActivePage, addToast }) {
  const [selectedFacility, setSelectedFacility] = useState(FACILITIES[0].id);

  const activeFac = FACILITIES.find((f) => f.id === selectedFacility) || FACILITIES[0];

  return (
    <div className="animate-fade-in section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <IconShield size={13} />
            Collegiate Infrastructure
          </div>
          <h1 className="section-title">
            Facilities, Dining &amp; Graduate Spaces
          </h1>
          <p className="section-desc">
            Explore our state-of-the-art study hubs, 16th-century dining halls, 24/7 common rooms, boathouse, and punt fleet.
          </p>
        </div>

        {/* Facility Selector Nav */}
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '12px',
          marginBottom: '36px',
          borderBottom: '1px solid var(--color-border)'
        }}>
          {FACILITIES.map((fac) => (
            <button
              key={fac.id}
              onClick={() => setSelectedFacility(fac.id)}
              style={{
                padding: '10px 18px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                border: '1.5px solid',
                background: selectedFacility === fac.id ? 'var(--color-primary)' : 'var(--color-surface)',
                color: selectedFacility === fac.id ? '#FFFFFF' : 'var(--color-text-main)',
                borderColor: selectedFacility === fac.id ? 'var(--color-primary)' : 'var(--color-border)',
                transition: 'all var(--transition-fast)'
              }}
            >
              {fac.title.split(' ')[0]} {fac.title.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Selected Facility Deep Dive */}
        <div className="card card-crest-accent" style={{ padding: '36px', marginBottom: '48px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '18px' }}>
            <div>
              <span className="badge badge-gold" style={{ marginBottom: '8px' }}>
                {activeFac.category}
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary-dark)', margin: 0 }}>
                {activeFac.title}
              </h2>
            </div>
            <button
              className="btn btn-gold"
              onClick={() => {
                setActivePage('portal');
                addToast(`Redirecting to portal to reserve slots for ${activeFac.title}`);
              }}
            >
              Reserve / Book Access &rarr;
            </button>
          </div>

          <p style={{
            fontSize: '1.1rem',
            fontStyle: 'italic',
            color: 'var(--color-gold-deep)',
            marginBottom: '24px',
            fontFamily: 'var(--font-serif)'
          }}>
            "{activeFac.tagline}"
          </p>

          <div className="grid-2" style={{ marginBottom: '28px' }}>
            <div style={{
              background: 'var(--color-surface-muted)',
              padding: '18px 20px',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '0.9rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconMapPin size={16} style={{ color: 'var(--color-primary)' }} />
                <span><strong>Location:</strong> {activeFac.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconClock size={16} style={{ color: 'var(--color-gold-deep)' }} />
                <span><strong>Access Hours:</strong> {activeFac.hours}</span>
              </div>
            </div>

            <div style={{
              background: 'var(--color-primary-subtle)',
              padding: '18px 20px',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.875rem',
              color: 'var(--color-primary-dark)',
              lineHeight: 1.6
            }}>
              <strong>Community Guidelines:</strong><br />
              {activeFac.rules}
            </div>
          </div>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-primary-dark)', marginBottom: '14px' }}>
            Key Features &amp; Equipment
          </h3>

          <ul style={{
            listStyle: 'none',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '14px',
            padding: 0
          }}>
            {activeFac.features.map((feat, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  fontSize: '0.925rem',
                  color: 'var(--color-text-main)',
                  background: 'var(--color-surface)',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)'
                }}
              >
                <span style={{ color: 'var(--color-gold-deep)', fontWeight: 700 }}>✔</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* All Facilities Overview Grid */}
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-primary-dark)', marginBottom: '24px', textAlign: 'center' }}>
          All College Postgraduate Amenities
        </h2>

        <div className="grid-3">
          {FACILITIES.map((f) => (
            <div
              key={f.id}
              className="card"
              style={{
                cursor: 'pointer',
                borderColor: selectedFacility === f.id ? 'var(--color-primary)' : 'var(--color-border)'
              }}
              onClick={() => setSelectedFacility(f.id)}
            >
              <span className="badge badge-green" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                {f.category}
              </span>
              <h3 className="card-title" style={{ fontSize: '1.2rem' }}>
                {f.title}
              </h3>
              <p className="card-text" style={{ fontSize: '0.875rem' }}>
                {f.tagline}
              </p>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)', marginBottom: '14px' }}>
                {f.location}
              </div>
              <button
                className="btn btn-outline btn-sm"
                style={{ marginTop: 'auto' }}
              >
                View Details &amp; Hours &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
