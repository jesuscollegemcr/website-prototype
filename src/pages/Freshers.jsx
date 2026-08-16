import React, { useState, useEffect, useMemo } from 'react';
import {
  IconBookOpen,
  IconCheck,
  IconSearch,
  IconMapPin,
  IconShield,
  IconAward,
  IconCoffee,
  IconDownload
} from '../components/Icons';
import { FRESHERS_CHECKLIST, SUB_FUSC_RULES } from '../data/checklistData';
import { GLOSSARY_TERMS } from '../data/glossaryData';

export default function Freshers({ setActivePage, addToast }) {
  const [completedItems, setCompletedItems] = useState(() => {
    const saved = localStorage.getItem('jesus_mcr_freshers_checklist');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return {};
      }
    }
    return {};
  });

  const [activeTab, setActiveTab] = useState('checklist');
  const [glossarySearch, setGlossarySearch] = useState('');
  const [selectedGlossaryCategory, setSelectedGlossaryCategory] = useState('all');

  useEffect(() => {
    localStorage.setItem('jesus_mcr_freshers_checklist', JSON.stringify(completedItems));
  }, [completedItems]);

  const toggleChecklist = (id, title) => {
    setCompletedItems((prev) => {
      const nextState = { ...prev, [id]: !prev[id] };
      if (!prev[id]) {
        addToast(`Completed: ${title}`);
      }
      return nextState;
    });
  };

  const allItemsCount = useMemo(() => {
    return FRESHERS_CHECKLIST.reduce((acc, phase) => acc + phase.items.length, 0);
  }, []);

  const completedCount = useMemo(() => {
    return Object.values(completedItems).filter(Boolean).length;
  }, [completedItems]);

  const progressPercentage = Math.round((completedCount / allItemsCount) * 100);

  const filteredGlossary = useMemo(() => {
    return GLOSSARY_TERMS.filter((item) => {
      if (selectedGlossaryCategory !== 'all' && item.category !== selectedGlossaryCategory) {
        return false;
      }
      if (glossarySearch.trim()) {
        const q = glossarySearch.toLowerCase();
        return (
          item.term.toLowerCase().includes(q) ||
          item.definition.toLowerCase().includes(q) ||
          item.context.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [glossarySearch, selectedGlossaryCategory]);

  const glossaryCategories = useMemo(() => {
    const cats = new Set(GLOSSARY_TERMS.map((t) => t.category));
    return ['all', ...Array.from(cats)];
  }, []);

  return (
    <div className="animate-fade-in section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <IconBookOpen size={13} />
            Postgraduate Induction 2026/27
          </div>
          <h1 className="section-title">
            Freshers’ Survival Hub &amp; Oxford Guide
          </h1>
          <p className="section-desc">
            Everything you need to navigate arriving at Oxford, settling into Jesus College, dressing for Matriculation, and decoding Oxford traditions.
          </p>
        </div>

        {/* Section Navigation Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '36px',
          flexWrap: 'wrap'
        }}>
          <button
            className={`tab-btn ${activeTab === 'checklist' ? 'active' : ''}`}
            onClick={() => setActiveTab('checklist')}
          >
            Arrival Checklist ({completedCount}/{allItemsCount})
          </button>
          <button
            className={`tab-btn ${activeTab === 'subfusc' ? 'active' : ''}`}
            onClick={() => setActiveTab('subfusc')}
          >
            Sub Fusc &amp; Matriculation
          </button>
          <button
            className={`tab-btn ${activeTab === 'housing' ? 'active' : ''}`}
            onClick={() => setActiveTab('housing')}
          >
            College Accommodation
          </button>
          <button
            className={`tab-btn ${activeTab === 'glossary' ? 'active' : ''}`}
            onClick={() => setActiveTab('glossary')}
          >
            Oxford Lingo Dictionary
          </button>
        </div>

        {/* TAB 1: CHECKLIST */}
        {activeTab === 'checklist' && (
          <div>
            {/* Progress Bar Card */}
            <div style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px 28px',
              marginBottom: '32px',
              boxShadow: 'var(--shadow-xs)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-primary-dark)', margin: 0 }}>
                    Your Freshers’ Onboarding Progress
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>
                    Track tasks across Pre-Arrival, First 48 Hours, and Freshers’ Week.
                  </p>
                </div>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: 'var(--color-gold-deep)'
                }}>
                  {progressPercentage}%
                </div>
              </div>

              <div style={{
                height: '10px',
                background: 'var(--color-surface-muted)',
                borderRadius: 'var(--radius-pill)',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '100%',
                  width: `${progressPercentage}%`,
                  background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-gold) 100%)',
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </div>

            {/* Checklist Phases */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {FRESHERS_CHECKLIST.map((phaseGroup, pIdx) => (
                <div key={pIdx}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px',
                    borderBottom: '2px solid var(--color-border)',
                    paddingBottom: '8px'
                  }}>
                    <span className="badge badge-green" style={{ fontSize: '0.85rem', padding: '4px 12px' }}>
                      Phase {pIdx + 1}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary-dark)', margin: 0 }}>
                      {phaseGroup.phase}
                    </h3>
                  </div>

                  <div className="grid-2">
                    {phaseGroup.items.map((item) => {
                      const isDone = !!completedItems[item.id];
                      return (
                        <div
                          key={item.id}
                          onClick={() => toggleChecklist(item.id, item.title)}
                          className="card"
                          style={{
                            cursor: 'pointer',
                            padding: '20px 24px',
                            border: isDone ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border)',
                            background: isDone ? 'var(--color-primary-subtle)' : 'var(--color-surface)',
                            transition: 'all var(--transition-fast)'
                          }}
                        >
                          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                            <div style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: 'var(--radius-xs)',
                              border: isDone ? '2px solid var(--color-primary)' : '2px solid var(--color-border-focus)',
                              background: isDone ? 'var(--color-primary)' : 'transparent',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#FFFFFF',
                              flexShrink: 0,
                              marginTop: '2px',
                              transition: 'all var(--transition-fast)'
                            }}>
                              {isDone && <IconCheck size={16} />}
                            </div>

                            <div style={{ flex: 1 }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                                <span style={{
                                  fontSize: '1rem',
                                  fontWeight: 700,
                                  color: isDone ? 'var(--color-primary-dark)' : 'var(--color-text-main)',
                                  textDecoration: isDone ? 'line-through' : 'none'
                                }}>
                                  {item.title}
                                </span>
                                {item.essential && (
                                  <span className="badge badge-crimson" style={{ fontSize: '0.7rem' }}>
                                    Essential
                                  </span>
                                )}
                              </div>
                              <p style={{
                                fontSize: '0.85rem',
                                color: 'var(--color-text-muted)',
                                margin: 0,
                                lineHeight: 1.5
                              }}>
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: SUB FUSC & MATRICULATION */}
        {activeTab === 'subfusc' && (
          <div>
            <div className="grid-2" style={{ marginBottom: '40px' }}>
              <div className="card card-gold-accent">
                <h3 className="card-title">What is Sub Fusc?</h3>
                <p className="card-text">
                  Oxford's historic academic dress dates back hundreds of years. At Jesus College, postgraduates wear Sub Fusc with an Advanced Student / Graduate Gown during <strong>Matriculation</strong> (Week 1), official university degree ceremonies in the Sheldonian Theatre, and university examinations.
                </p>
                <div style={{
                  background: 'var(--color-surface-muted)',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.875rem',
                  lineHeight: 1.6
                }}>
                  <strong>Where to buy or rent in Oxford:</strong>
                  <ul style={{ paddingLeft: '20px', marginTop: '6px' }}>
                    <li><strong>Walters of Oxford:</strong> 10 Turl Street (directly opposite Jesus College!)</li>
                    <li><strong>Shepherd &amp; Woodward:</strong> 109-113 High Street</li>
                    <li><strong>Castell &amp; Son:</strong> 13 Broad Street</li>
                  </ul>
                </div>
              </div>

              <div className="card card-crest-accent">
                <h3 className="card-title">Matriculation Day Schedule</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  <div><strong>09:30:</strong> Freshers assemble in Second Quad in full Sub Fusc.</div>
                  <div><strong>10:00:</strong> Official College Freshers &amp; Matriculation Photograph.</div>
                  <div><strong>10:45:</strong> Procession through Broad Street to the Sheldonian Theatre.</div>
                  <div><strong>11:15:</strong> Vice-Chancellor's Latin ceremony conferring University membership.</div>
                  <div><strong>12:30:</strong> Champagne &amp; Canapé Reception in Fellows' Garden.</div>
                  <div><strong>19:00:</strong> Matriculation Formal Banquet in College Hall.</div>
                </div>
              </div>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-primary-dark)', marginBottom: '20px' }}>
              Sub Fusc Component Guide
            </h3>

            <div className="grid-3">
              {SUB_FUSC_RULES.map((rule, idx) => (
                <div key={idx} className="card" style={{ padding: '20px' }}>
                  <span className="badge badge-gold" style={{ alignSelf: 'flex-start', marginBottom: '10px' }}>
                    {rule.element}
                  </span>
                  <p style={{ fontSize: '0.925rem', color: 'var(--color-text-main)', margin: 0, lineHeight: 1.55 }}>
                    {rule.rule}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: HOUSING */}
        {activeTab === 'housing' && (
          <div className="grid-2">
            <div className="card card-crest-accent">
              <span className="badge badge-green" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                North Oxford Annex
              </span>
              <h3 className="card-title">Stevens Close &amp; Woodstock Road</h3>
              <p className="card-text">
                Situated in leafy North Oxford (approx. 15-minute walk or 5-minute cycle from Main College), Stevens Close is our primary graduate residential complex.
              </p>
              <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
                <li>Self-catered flats with ensuite and standard single graduate rooms</li>
                <li>Large graduate common room with TV, ping-pong, and kitchen</li>
                <li>Private secluded gardens, BBQ area, and secure bike sheds</li>
                <li>On-site laundry facilities and recycling hubs</li>
              </ul>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                Address: Stevens Close, Woodstock Road, Oxford OX2 6JW
              </div>
            </div>

            <div className="card card-gold-accent">
              <span className="badge badge-gold" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                East Oxford Annex
              </span>
              <h3 className="card-title">Herbert Close (Cowley Road / St Clement’s)</h3>
              <p className="card-text">
                Located near South Park and the vibrant culinary culture of Cowley Road. Ideal for graduate students close to Old Road Campus and Headington medical departments.
              </p>
              <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
                <li>Modern graduate flats with communal kitchens and study desks</li>
                <li>Landscaped communal courtyard and barbecue patio</li>
                <li>Easy access to Oxford Brookes libraries and Churchill Hospital</li>
                <li>Secure fob entry, bike storage, and package reception</li>
              </ul>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                Address: Herbert Close, Oxford OX4 1EE
              </div>
            </div>

            <div className="card">
              <span className="badge badge-green" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                Central Oxford
              </span>
              <h3 className="card-title">Ship Street Centre &amp; Main Quad Rooms</h3>
              <p className="card-text">
                Centrally located rooms right across from the Porters' Lodge on Ship Street and within the historic quads of Jesus College.
              </p>
              <ul style={{ paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                <li>Direct access to Meyricke Library, Dining Hall, and Harold Wilson MCR</li>
                <li>Shared kitchen facilities and scout cleaning service</li>
                <li>Steps away from the Bodleian Library and central science area</li>
              </ul>
            </div>

            <div className="card">
              <span className="badge badge-gold" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                Living Support
              </span>
              <h3 className="card-title">Accommodation Officers &amp; Maintenance</h3>
              <p className="card-text">
                For room changes, maintenance repair tickets, or summer holiday storage bookings:
              </p>
              <div style={{
                background: 'var(--color-surface-muted)',
                padding: '14px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                lineHeight: 1.6
              }}>
                <div><strong>College Accommodation Office:</strong> accommodation@jesus.ox.ac.uk</div>
                <div><strong>Maintenance Ticket Portal:</strong> lodge@jesus.ox.ac.uk</div>
                <div><strong>MCR Housing Representative:</strong> mcr.housing@jesus.ox.ac.uk</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: GLOSSARY */}
        {activeTab === 'glossary' && (
          <div>
            <div style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              marginBottom: '32px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '20px',
                alignItems: 'center',
                flexWrap: 'wrap',
                marginBottom: '16px'
              }}>
                <div className="search-box-wrapper" style={{ maxWidth: '400px' }}>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search Oxford terminology (e.g. Battels, Pidge, Bop)..."
                    value={glossarySearch}
                    onChange={(e) => setGlossarySearch(e.target.value)}
                  />
                  <div className="search-icon">
                    <IconSearch size={18} />
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                    Category:
                  </span>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {glossaryCategories.map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedGlossaryCategory(c)}
                        style={{
                          padding: '4px 12px',
                          borderRadius: 'var(--radius-pill)',
                          fontSize: '0.775rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          border: '1px solid',
                          background: selectedGlossaryCategory === c ? 'var(--color-primary)' : 'var(--color-surface-muted)',
                          color: selectedGlossaryCategory === c ? '#FFFFFF' : 'var(--color-text-muted)',
                          borderColor: selectedGlossaryCategory === c ? 'var(--color-primary)' : 'var(--color-border)'
                        }}
                      >
                        {c === 'all' ? 'All' : c}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-2">
              {filteredGlossary.map((item, idx) => (
                <div key={idx} className="card card-gold-accent">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <h3 className="card-title" style={{ margin: 0, fontSize: '1.3rem' }}>
                      {item.term}
                    </h3>
                    <span className="badge badge-green" style={{ fontSize: '0.7rem' }}>
                      {item.category}
                    </span>
                  </div>

                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--color-gold-deep)',
                    marginBottom: '10px'
                  }}>
                    {item.pronunciation}
                  </div>

                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', marginBottom: '12px', lineHeight: 1.6 }}>
                    {item.definition}
                  </p>

                  <div style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-text-muted)',
                    background: 'var(--color-surface-muted)',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontStyle: 'italic',
                    lineHeight: 1.5
                  }}>
                    <strong>At Jesus:</strong> {item.context}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
