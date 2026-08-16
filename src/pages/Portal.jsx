import React, { useState } from 'react';
import {
  IconUtensils,
  IconClock,
  IconDownload,
  IconCheck,
  IconShield,
  IconSparkles,
  IconMapPin,
  IconUsers
} from '../components/Icons';
import { FORMAL_MENUS, MCR_DOCUMENTS } from '../data/portalData';

export default function Portal({ setActivePage, addToast }) {
  const [activePortalTab, setActivePortalTab] = useState('formal');

  const [selectedFormal, setSelectedFormal] = useState(FORMAL_MENUS[0].id);
  const [memberTickets, setMemberTickets] = useState(1);
  const [guestTickets, setGuestTickets] = useState(0);
  const [dietaryChoice, setDietaryChoice] = useState('standard');
  const [specialDietNotes, setSpecialDietNotes] = useState('');
  const [studentBodCard, setStudentBodCard] = useState('2419876');

  const [puntSlot, setPuntSlot] = useState('14:00 - 16:00');
  const [puntDate, setPuntDate] = useState('2026-10-24');
  const [puntName, setPuntName] = useState('Alexander Vance');

  const [claimCategory, setClaimCategory] = useState('travel-grant');
  const [claimAmount, setClaimAmount] = useState('120.00');
  const [claimDesc, setClaimDesc] = useState('');

  const activeFormalObj = FORMAL_MENUS.find((m) => m.id === selectedFormal) || FORMAL_MENUS[0];

  const handleBookFormal = (e) => {
    e.preventDefault();
    const totalCost = (memberTickets * 14.50) + (guestTickets * 19.50);
    addToast(`Booked ${memberTickets} Member + ${guestTickets} Guest tickets for ${activeFormalObj.title}. Total £${totalCost.toFixed(2)} charged to Battels #${studentBodCard}.`);
  };

  const handleBookPunt = (e) => {
    e.preventDefault();
    addToast(`Punt reserved at Cherwell Boathouse for ${puntName} on ${puntDate} (${puntSlot}). Check your Oxford email for entry code.`);
  };

  const handleClaimSubmit = (e) => {
    e.preventDefault();
    if (!claimDesc.trim()) {
      alert('Please describe your reimbursement expense.');
      return;
    }
    addToast(`Submitted reimbursement claim of £${claimAmount} (${claimCategory}) to MCR Treasurer Sophie de Villiers.`);
    setClaimDesc('');
  };

  const handleDownloadDoc = (doc) => {
    const fakeContent = `Jesus College MCR Oxford
Document: ${doc.title}
Version: ${doc.version}
Category: ${doc.category}

Summary:
${doc.desc}

Official Middle Common Room publication, Jesus College in the University of Oxford.`;

    const blob = new Blob([fakeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${doc.id}.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    addToast(`Downloaded official document "${doc.title}".`);
  };

  return (
    <div className="animate-fade-in section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <IconSparkles size={13} />
            Postgraduate Member Services
          </div>
          <h1 className="section-title">
            Bookings, Dining &amp; Services Portal
          </h1>
          <p className="section-desc">
            Book your Formal Hall and Guest Night seats, reserve Cherwell punts, submit MCR committee expense claims, and access constitutional documents.
          </p>
        </div>

        {/* Portal Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '36px',
          flexWrap: 'wrap'
        }}>
          <button
            className={`tab-btn ${activePortalTab === 'formal' ? 'active' : ''}`}
            onClick={() => setActivePortalTab('formal')}
          >
            Formal Hall &amp; Guest Nights
          </button>
          <button
            className={`tab-btn ${activePortalTab === 'punt' ? 'active' : ''}`}
            onClick={() => setActivePortalTab('punt')}
          >
            Cherwell Punt &amp; Study Room
          </button>
          <button
            className={`tab-btn ${activePortalTab === 'claims' ? 'active' : ''}`}
            onClick={() => setActivePortalTab('claims')}
          >
            Reimbursement Calculator
          </button>
          <button
            className={`tab-btn ${activePortalTab === 'docs' ? 'active' : ''}`}
            onClick={() => setActivePortalTab('docs')}
          >
            Constitution &amp; Documents
          </button>
        </div>

        {/* TAB 1: FORMAL HALL */}
        {activePortalTab === 'formal' && (
          <div className="grid-2">
            {/* Menu Details */}
            <div className="card card-crest-accent">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                <span className="badge badge-gold">
                  {activeFormalObj.date}
                </span>
                <span className="badge badge-crimson">
                  {activeFormalObj.seatsRemaining} Seats Remaining
                </span>
              </div>

              <h2 className="card-title" style={{ fontSize: '1.4rem', margin: '4px 0 12px' }}>
                {activeFormalObj.title}
              </h2>

              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                Time: <strong>{activeFormalObj.time}</strong> • Pricing: <strong>{activeFormalObj.price}</strong>
              </p>

              <div style={{
                background: 'var(--color-surface-muted)',
                padding: '18px',
                borderRadius: 'var(--radius-md)',
                marginBottom: '20px'
              }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-primary-dark)', marginBottom: '12px' }}>
                  Three-Course Menu
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
                  <div>
                    <strong style={{ color: 'var(--color-gold-deep)' }}>Starter:</strong><br />
                    {activeFormalObj.courses.starter}
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-gold-deep)' }}>Main Course:</strong><br />
                    {activeFormalObj.courses.main}
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-gold-deep)' }}>Dessert:</strong><br />
                    {activeFormalObj.courses.dessert}
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                <em>Dress Code: Dark suit/dress with Oxford graduate gown. Port and dessert wine served afterwards in Harold Wilson Room.</em>
              </div>
            </div>

            {/* Booking Form */}
            <div className="card card-gold-accent" style={{ padding: '32px' }}>
              <h2 className="card-title" style={{ fontSize: '1.35rem', marginBottom: '16px' }}>
                Reserve Formal Hall Seats
              </h2>

              <form onSubmit={handleBookFormal}>
                <div className="form-group">
                  <label className="form-label">Select Dinner Date</label>
                  <select
                    className="form-control"
                    value={selectedFormal}
                    onChange={(e) => setSelectedFormal(e.target.value)}
                  >
                    {FORMAL_MENUS.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.title} ({m.date})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Bodleian Card / Battels Account #</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g. 2419876"
                    value={studentBodCard}
                    onChange={(e) => setStudentBodCard(e.target.value)}
                  />
                </div>

                <div className="grid-2" style={{ gap: '12px' }}>
                  <div className="form-group">
                    <label className="form-label">Member Tickets (£14.50)</label>
                    <select
                      className="form-control"
                      value={memberTickets}
                      onChange={(e) => setMemberTickets(Number(e.target.value))}
                    >
                      <option value={1}>1 Member</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Guest Tickets (£19.50)</label>
                    <select
                      className="form-control"
                      value={guestTickets}
                      onChange={(e) => setGuestTickets(Number(e.target.value))}
                    >
                      <option value={0}>0 Guests</option>
                      <option value={1}>1 Guest (+£19.50)</option>
                      <option value={2}>2 Guests (+£39.00)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Dietary Preference</label>
                  <select
                    className="form-control"
                    value={dietaryChoice}
                    onChange={(e) => setDietaryChoice(e.target.value)}
                  >
                    <option value="standard">Standard Menu</option>
                    <option value="vegetarian">Vegetarian Menu</option>
                    <option value="vegan">Vegan Menu</option>
                    <option value="halal">Halal Option</option>
                    <option value="kosher">Kosher Option</option>
                    <option value="gluten-free">Gluten-Free</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Allergies or Special Seating Notes</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Nut allergy, seated next to DPhil Statistics cohort"
                    value={specialDietNotes}
                    onChange={(e) => setSpecialDietNotes(e.target.value)}
                  />
                </div>

                <div style={{
                  background: 'var(--color-surface-muted)',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                  fontWeight: 700
                }}>
                  <span>Total Battels Charge:</span>
                  <span style={{ fontSize: '1.2rem', color: 'var(--color-primary)' }}>
                    £{((memberTickets * 14.50) + (guestTickets * 19.50)).toFixed(2)}
                  </span>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Confirm Booking &amp; Charge to Battels
                </button>
              </form>
            </div>
          </div>
        )}

        {/* TAB 2: PUNT & STUDY ROOM */}
        {activePortalTab === 'punt' && (
          <div className="grid-2">
            <div className="card card-crest-accent" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge badge-green">Trinity &amp; Michaelmas Slots</span>
              </div>
              <h2 className="card-title" style={{ fontSize: '1.4rem' }}>
                Cherwell Punting Reservation
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                Jesus College MCR owns a fleet of 4 punts moored at the <strong>Cherwell Boathouse</strong>. Free for all current graduate students.
              </p>

              <form onSubmit={handleBookPunt}>
                <div className="form-group">
                  <label className="form-label">Lead Rower Name</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={puntName}
                    onChange={(e) => setPuntName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Booking Date</label>
                  <input
                    type="date"
                    required
                    className="form-control"
                    value={puntDate}
                    onChange={(e) => setPuntDate(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Time Window (2-hour slots)</label>
                  <select
                    className="form-control"
                    value={puntSlot}
                    onChange={(e) => setPuntSlot(e.target.value)}
                  >
                    <option value="10:00 - 12:00">10:00 - 12:00 (Morning)</option>
                    <option value="12:00 - 14:00">12:00 - 14:00 (Lunchtime)</option>
                    <option value="14:00 - 16:00">14:00 - 16:00 (Afternoon - Popular)</option>
                    <option value="16:00 - 18:00">16:00 - 18:00 (Early Evening)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Punt Selection</label>
                  <select className="form-control">
                    <option>Punt #1 - "The Hugh Price"</option>
                    <option>Punt #2 - "The Welsh Dragon"</option>
                    <option>Punt #3 - "The Harold Wilson"</option>
                    <option>Punt #4 - "The Turl Street Stroller"</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-gold" style={{ width: '100%' }}>
                  Reserve MCR Punt (Free)
                </button>
              </form>
            </div>

            <div className="card card-gold-accent" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="badge badge-gold">Cheng Digital Hub</span>
              </div>
              <h2 className="card-title" style={{ fontSize: '1.4rem' }}>
                Graduate Seminar &amp; Podcast Room
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
                Reserve sound-insulated podcast recording suites or group study project rooms in the Fourth Quad Cheng Building.
              </p>

              <form onSubmit={(e) => {
                e.preventDefault();
                addToast('Study Pod reserved! Door code sent to your Oxford email.');
              }}>
                <div className="form-group">
                  <label className="form-label">Room Type</label>
                  <select className="form-control">
                    <option>Digital Hub Video Interview Pod A (1-2 persons)</option>
                    <option>Podcast &amp; Audio Recording Suite (1-4 persons)</option>
                    <option>Graduate Seminar Room 2 (Up to 12 persons with 4K Screen)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Duration</label>
                  <select className="form-control">
                    <option>1 Hour</option>
                    <option>2 Hours</option>
                    <option>3 Hours</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Equipment Needed</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <input type="checkbox" defaultChecked /> Shure Podcast Microphones
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <input type="checkbox" defaultChecked /> HDMI / USB-C 4K Screen Connection
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <input type="checkbox" /> High-Resolution Document Camera
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '16px' }}>
                  Reserve Study Suite
                </button>
              </form>
            </div>
          </div>
        )}

        {/* TAB 3: REIMBURSEMENT CALCULATOR */}
        {activePortalTab === 'claims' && (
          <div className="container-narrow">
            <div className="card card-crest-accent" style={{ padding: '36px' }}>
              <h2 className="card-title" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
                MCR Committee &amp; Grant Expense Reimbursement
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                Claims are reviewed by the MCR Treasurer (Sophie de Villiers) and disbursed directly via UK bank transfer within 5 business days.
              </p>

              <form onSubmit={handleClaimSubmit}>
                <div className="grid-2" style={{ gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Claim Type</label>
                    <select
                      className="form-control"
                      value={claimCategory}
                      onChange={(e) => setClaimCategory(e.target.value)}
                    >
                      <option value="travel-grant">Academic Travel / Conference Grant (£600 max)</option>
                      <option value="book-grant">Graduate Book &amp; Software Grant (£150 max)</option>
                      <option value="welfare-tea">Welfare Tea / Provisions Expense</option>
                      <option value="society-event">Sports / Society Equipment</option>
                      <option value="general-mcr">MCR Committee Operational Cost</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Claim Amount (£ GBP)</label>
                    <input
                      type="number"
                      step="0.01"
                      required
                      className="form-control"
                      value={claimAmount}
                      onChange={(e) => setClaimAmount(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid-2" style={{ gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Account Name &amp; Sort Code</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="e.g. G L EVANS • 20-65-82"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">UK Bank Account Number</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="e.g. 83920184"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Itemized Expense Description</label>
                  <textarea
                    required
                    className="form-control"
                    rows="3"
                    placeholder="e.g. London-Oxford train tickets and registration fee for Royal Statistical Society Conference 2026..."
                    value={claimDesc}
                    onChange={(e) => setClaimDesc(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  Submit Claim to MCR Treasurer
                </button>
              </form>
            </div>
          </div>
        )}

        {/* TAB 4: DOCUMENTS */}
        {activePortalTab === 'docs' && (
          <div>
            <div className="grid-2">
              {MCR_DOCUMENTS.map((doc) => (
                <div key={doc.id} className="card card-gold-accent" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <span className="badge badge-green">
                      {doc.category}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)' }}>
                      {doc.fileSize}
                    </span>
                  </div>

                  <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '6px' }}>
                    {doc.title}
                  </h3>

                  <div style={{ fontSize: '0.8rem', color: 'var(--color-gold-deep)', fontWeight: 600, marginBottom: '12px' }}>
                    {doc.version}
                  </div>

                  <p className="card-text" style={{ fontSize: '0.875rem', marginBottom: '16px' }}>
                    {doc.desc}
                  </p>

                  <button
                    className="btn btn-outline btn-sm"
                    style={{ marginTop: 'auto' }}
                    onClick={() => handleDownloadDoc(doc)}
                  >
                    <IconDownload size={15} />
                    Download Document (.pdf / .txt)
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
