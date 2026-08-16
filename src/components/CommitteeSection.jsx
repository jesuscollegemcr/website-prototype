import React, { useState } from 'react';
import { IconMail } from './Icons';
import { COMMITTEE_MEMBERS } from '../data/committeeData';

export default function CommitteeSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Officers' },
    { id: 'exec', label: 'Executive' },
    { id: 'social', label: 'Social' },
    { id: 'reps', label: 'Representatives & EDI' },
    { id: 'operations', label: 'IT & Sports' }
  ];

  const filteredMembers = selectedCategory === 'all'
    ? COMMITTEE_MEMBERS
    : COMMITTEE_MEMBERS.filter((m) => m.category === selectedCategory);

  return (
    <section id="committee" className="content-section section-alternate">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Leadership &amp; Representation</span>
          <h2 className="section-title">MCR Committee</h2>
          <p className="section-subtitle max-w-700">
            The MCR Committee is an elected group of volunteers who cater to the needs of our members academically and socially. The MCR also liaises with the Jesus College Governing Body, other College Committees, the Senior Common Room (SCR), the Junior Common Room (JCR), and the MCRs at other Colleges on a variety of matters that concern our members.
          </p>
          <div className="section-divider" />
        </div>

        <div className="committee-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="committee-grid">
          {filteredMembers.map((member) => (
            <div key={member.id} className="committee-card">
              <div className="committee-img-box">
                <img
                  src={member.image}
                  alt={member.name}
                  className="committee-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="committee-img-fallback" style={{ display: 'none' }}>
                  <span>{member.name.split(' ').map((n) => n[0]).join('')}</span>
                </div>
                <div className="committee-role-badge">
                  {member.role}
                </div>
              </div>

              <div className="committee-info">
                <h3 className="committee-name">{member.name}</h3>

                <a
                  href={`mailto:${member.email}`}
                  className="committee-email-link"
                  title={`Email ${member.name}`}
                >
                  <IconMail size={14} />
                  <span>{member.email}</span>
                </a>

                <p className="committee-bio">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
