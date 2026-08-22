import React, { useState } from 'react';
import {
  IconMail,
  IconChevronDown,
  IconChevronUp,
  IconSparkles,
  IconLinkedin,
  IconInstagram,
  IconGlobe,
  IconScholar
} from './Icons';
import { COMMITTEE_MEMBERS } from '../data/committeeData';

const LINK_CONFIG = {
  website: { label: 'Personal Website', Icon: IconGlobe },
  scholar: { label: 'Google Scholar', Icon: IconScholar },
  linkedin: { label: 'LinkedIn', Icon: IconLinkedin },
  instagram: { label: 'Instagram', Icon: IconInstagram }
};

const normalizeLinkKey = (key) => {
  if (key === 'insta') return 'instagram';
  if (key === 'personalWebsite' || key === 'site') return 'website';
  if (key === 'googleScholar') return 'scholar';
  return key;
};

const getMemberLinks = (links) => {
  if (!links) return [];
  return Object.entries(links)
    .map(([rawKey, url]) => {
      const key = normalizeLinkKey(rawKey);
      const config = LINK_CONFIG[key];
      if (!url || !config) return null;
      return {
        key,
        url,
        label: config.label,
        Icon: config.Icon
      };
    })
    .filter(Boolean);
};

export default function CommitteeSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVacantFolderOpen, setIsVacantFolderOpen] = useState(false);
  const [expandedBios, setExpandedBios] = useState({});
  const [allExpanded, setAllExpanded] = useState(false);

  const activeMembers = COMMITTEE_MEMBERS.filter((m) => !m.isVacant);
  const vacantMembers = COMMITTEE_MEMBERS.filter((m) => m.isVacant);

  const categories = [
    { id: 'all', label: 'All Active' },
    { id: 'exec', label: 'Executive' },
    { id: 'social', label: 'Social' },
    { id: 'reps', label: 'Representatives & EDI' },
    { id: 'operations', label: 'Operations & IT' }
  ];

  const filteredActive = selectedCategory === 'all'
    ? activeMembers
    : activeMembers.filter((m) => m.category === selectedCategory);

  const filteredVacant = selectedCategory === 'all'
    ? vacantMembers
    : vacantMembers.filter((m) => m.category === selectedCategory);

  const toggleBio = (id) => {
    setExpandedBios((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedBios({});
      setAllExpanded(false);
    } else {
      const allTrue = {};
      filteredActive.forEach((m) => {
        allTrue[m.id] = true;
      });
      setExpandedBios(allTrue);
      setAllExpanded(true);
    }
  };

  return (
    <section id="committee" className="content-section section-alternate">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Leadership &amp; Representation</span>
          <h2 className="section-title">MCR Committee</h2>
          <p className="section-subtitle max-w-700">
            The MCR Committee is an elected group of volunteers who cater to the needs of our members academically and socially, and liaise with the College Governing Body.
          </p>
          <div className="section-divider" />
        </div>

        <div className="committee-controls-bar">
          <div className="committee-filter-bar" role="tablist" aria-label="Filter committee by category">
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={selectedCategory === cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="committee-mobile-actions">
            <button
              type="button"
              className="committee-expand-all-btn"
              onClick={toggleAll}
            >
              {allExpanded ? 'Collapse All Bios' : 'Expand All Bios'}
            </button>
          </div>
        </div>

        <div className="committee-grid">
          {filteredActive.map((member) => {
            const isBioExpanded = !!expandedBios[member.id] || allExpanded;
            const memberLinks = getMemberLinks(member.links);

            return (
              <div
                key={member.id}
                className={`committee-card ${isBioExpanded ? 'bio-expanded' : ''}`}
              >
                <div className="committee-card-top-mobile">
                  <div className="committee-img-box">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="committee-img"
                        style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          if (e.target.nextElementSibling) {
                            e.target.nextElementSibling.style.display = 'flex';
                          }
                        }}
                      />
                    ) : null}
                    <div
                      className="committee-img-fallback"
                      style={{ display: member.image ? 'none' : 'flex' }}
                    >
                      <span>{member.name.split(' ').map((n) => n[0]).join('')}</span>
                    </div>
                    <div className="committee-role-badge">
                      {member.role}
                    </div>
                  </div>

                  <div className="committee-mobile-header-text">
                    <div className="committee-mobile-title-row">
                      <h3 className="committee-name">{member.name}</h3>
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="committee-mobile-email-btn"
                          title={`Email ${member.name}`}
                          aria-label={`Email ${member.name}`}
                        >
                          <IconMail size={16} />
                        </a>
                      )}
                    </div>
                    <div className="committee-mobile-meta-row">
                      <span className="committee-mobile-role-pill">{member.role}</span>
                      {memberLinks.length > 0 && (
                        <div className="committee-mobile-links-row" aria-label={`${member.name}'s profile links`}>
                          {memberLinks.map(({ key, url, label, Icon }) => (
                            <a
                              key={key}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`committee-mobile-link-btn committee-link-${key}`}
                              title={`${member.name} - ${label}`}
                              aria-label={`${member.name}'s ${label}`}
                            >
                              <Icon size={13} />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="committee-info">
                  <h3 className="committee-name committee-desktop-only">{member.name}</h3>

                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="committee-email-link committee-desktop-only"
                      title={`Email ${member.name}`}
                    >
                      <IconMail size={14} />
                      <span>{member.email}</span>
                    </a>
                  )}

                  {memberLinks.length > 0 && (
                    <div className="committee-links-row committee-desktop-only" aria-label={`${member.name}'s profile links`}>
                      {memberLinks.map(({ key, url, label, Icon }) => (
                        <a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`committee-link-btn committee-link-${key}`}
                          title={`${member.name} - ${label}`}
                          aria-label={`${member.name}'s ${label}`}
                        >
                          <Icon size={15} />
                        </a>
                      ))}
                    </div>
                  )}

                  {member.bio && (
                    <div className="committee-bio-wrapper">
                      <p className={`committee-bio ${isBioExpanded ? 'expanded' : ''}`}>
                        {member.bio}
                      </p>
                      <button
                        type="button"
                        className="committee-bio-toggle-btn"
                        onClick={() => toggleBio(member.id)}
                        aria-expanded={isBioExpanded}
                      >
                        <span>{isBioExpanded ? 'Hide bio' : 'Read bio'}</span>
                        {isBioExpanded ? <IconChevronUp size={13} /> : <IconChevronDown size={13} />}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {vacantMembers.length > 0 && (
          <div className="vacant-folder-wrapper">
            <button
              className="vacant-folder-toggle"
              onClick={() => setIsVacantFolderOpen(!isVacantFolderOpen)}
              aria-expanded={isVacantFolderOpen}
            >
              <div className="vacant-toggle-left">
                <span className="vacant-folder-icon">📂</span>
                <div>
                  <h4 className="vacant-toggle-title">
                    Vacant Committee Positions ({vacantMembers.length})
                  </h4>
                  <p className="vacant-toggle-subtitle">
                    {isVacantFolderOpen
                      ? 'Click to collapse vacant positions folder'
                      : 'Looking to get involved? Click to view open roles and opportunities to join the team'}
                  </p>
                </div>
              </div>

              <div className="vacant-toggle-indicator">
                {isVacantFolderOpen ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}
              </div>
            </button>

            {isVacantFolderOpen && (
              <div className="vacant-folder-content">
                <div className="vacant-intro-banner">
                  <IconSparkles size={20} className="vacant-banner-icon" />
                  <div>
                    <h5 className="vacant-banner-heading">Get Involved in the Jesus MCR</h5>
                    <p className="vacant-banner-text">
                      The roles below are currently vacant and open for co-option or upcoming elections. If you are interested in taking on one of these positions or learning more about the responsibilities, please email{' '}
                      <a href="mailto:mcr.president@jesus.ox.ac.uk" className="vacant-banner-link">
                        mcr.president@jesus.ox.ac.uk
                      </a>.
                    </p>
                  </div>
                </div>

                <div className="vacant-cards-grid">
                  {filteredVacant.map((vacant) => (
                    <div key={vacant.id} className="vacant-role-card">
                      <div className="vacant-card-top">
                        <span className="vacant-status-badge">Open Position</span>
                        <span className="vacant-category-tag">{vacant.category}</span>
                      </div>

                      <h4 className="vacant-role-name">
                        {vacant.role}{vacant.spots > 1 ? ` (x${vacant.spots})` : ''}
                      </h4>
                      <p className="vacant-role-desc">{vacant.bio}</p>

                      <div className="vacant-card-footer">
                        <a
                          href={`mailto:mcr.president@jesus.ox.ac.uk?subject=Interest%20in%20${encodeURIComponent(vacant.role)}%20Position`}
                          className="btn btn-sm btn-outline vacant-apply-btn"
                        >
                          <IconMail size={14} />
                          <span>Inquire About Role</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}


