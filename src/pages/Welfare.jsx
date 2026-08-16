import React, { useState } from 'react';
import {
  IconHeart,
  IconShield,
  IconUsers,
  IconMail,
  IconCoffee,
  IconSparkles,
  IconCheck
} from '../components/Icons';
import { WELFARE_RESOURCES, WELFARE_FAQ } from '../data/welfareData';

export default function Welfare({ setActivePage, addToast }) {
  const [anonMessage, setAnonMessage] = useState('');
  const [anonTopic, setAnonTopic] = useState('welfare-tea-request');

  const handleSendAnonMessage = (e) => {
    e.preventDefault();
    if (!anonMessage.trim()) return;
    addToast('Your confidential welfare message has been sent to the MCR Welfare Officers.');
    setAnonMessage('');
  };

  return (
    <div className="animate-fade-in section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <IconHeart size={13} />
            Health &amp; Postgraduate Wellbeing
          </div>
          <h1 className="section-title">
            Welfare, Peer Support &amp; Health
          </h1>
          <p className="section-desc">
            Your wellbeing is our highest priority. Whether you need a warm chat over Sunday Welfare Tea, confidential peer support, GP appointments, or university counselling, support is always close at hand.
          </p>
        </div>

        {/* 5th Week Blues & Weekly Teas Banner */}
        <div className="grid-2" style={{ marginBottom: '48px' }}>
          <div className="card card-crest-accent">
            <span className="badge badge-green" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
              Every Sunday 16:00 - 18:00
            </span>
            <h3 className="card-title">Sunday MCR Welfare Teas</h3>
            <p className="card-text">
              Join us in the Harold Wilson Common Room every Sunday afternoon. Enjoy freshly baked Welsh cakes, artisanal brownies, fresh seasonal berries, herbal teas, and hot chocolate. A relaxed space to decompress with friends.
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>
              Hosted by your MCR Welfare Officers (Megan &amp; Kofi)
            </div>
          </div>

          <div className="card card-gold-accent">
            <span className="badge badge-gold" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
              Free Provisions in MCR
            </span>
            <h3 className="card-title">Free Welfare Cupboard</h3>
            <p className="card-text">
              The MCR provides 100% free and confidential welfare supplies inside the Harold Wilson Room cupboard: sanitary pads/tampons, condoms, lube, pregnancy tests, earplugs for study concentration, and herbal sleep teas.
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-gold-deep)', fontWeight: 600 }}>
              Restocked weekly • No questions asked
            </div>
          </div>
        </div>

        {/* Welfare Contacts Grid */}
        <div style={{ marginBottom: '56px' }}>
          {WELFARE_RESOURCES.map((group, gIdx) => (
            <div key={gIdx} style={{ marginBottom: '40px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
                borderBottom: '2px solid var(--color-border)',
                paddingBottom: '8px'
              }}>
                <IconShield size={20} style={{ color: 'var(--color-primary)' }} />
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-primary-dark)', margin: 0 }}>
                  {group.category}
                </h2>
              </div>

              <div className="grid-2">
                {group.contacts.map((contact, cIdx) => (
                  <div key={cIdx} className="card" style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                      <span className="badge badge-gold" style={{ fontSize: '0.75rem' }}>
                        {contact.role}
                      </span>
                      {contact.confidential && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                          {contact.confidential}
                        </span>
                      )}
                    </div>

                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '6px' }}>
                      {contact.name}
                    </h3>

                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '14px' }}>
                      {contact.desc}
                    </p>

                    <div style={{
                      marginTop: 'auto',
                      paddingTop: '12px',
                      borderTop: '1px solid var(--color-border)',
                      fontSize: '0.85rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}>
                      {contact.email && (
                        <div>
                          <strong>Email:</strong>{' '}
                          <a href={`mailto:${contact.email}`} style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                            {contact.email}
                          </a>
                        </div>
                      )}
                      {contact.phone && (
                        <div>
                          <strong>Phone:</strong> {contact.phone}
                        </div>
                      )}
                      {contact.address && (
                        <div>
                          <strong>Address:</strong> {contact.address}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Anonymous Welfare Drop Box Simulator */}
        <div className="grid-2" style={{ marginBottom: '56px' }}>
          <div className="card card-crest-accent" style={{ padding: '32px' }}>
            <h3 className="card-title">Confidential Welfare Message / Suggestion Box</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>
              Want to request a specific snack for Welfare Tea, suggest a wellbeing initiative, or ask a question anonymously? Submit your note directly to the Welfare Officers here.
            </p>

            <form onSubmit={handleSendAnonMessage}>
              <div className="form-group">
                <label className="form-label">Subject / Category</label>
                <select
                  className="form-control"
                  value={anonTopic}
                  onChange={(e) => setAnonTopic(e.target.value)}
                >
                  <option value="welfare-tea-request">Sunday Welfare Tea Food Suggestion</option>
                  <option value="welfare-supplies">Welfare Cupboard Restock Request</option>
                  <option value="wellbeing-event">Event Idea (e.g. Yoga, Dog Petting, Meditation)</option>
                  <option value="general-welfare">Confidential Question or Feedback</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Your Message</label>
                <textarea
                  required
                  className="form-control"
                  rows="4"
                  placeholder="Type your message here (no identifying information is recorded)..."
                  value={anonMessage}
                  onChange={(e) => setAnonMessage(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Anonymous Note
              </button>
            </form>
          </div>

          {/* Welfare FAQs */}
          <div className="card card-gold-accent" style={{ padding: '32px' }}>
            <h3 className="card-title">Welfare &amp; Wellbeing FAQs</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
              {WELFARE_FAQ.map((faq, idx) => (
                <div key={idx} style={{ background: 'var(--color-surface-muted)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                  <h4 style={{ fontSize: '0.95rem', color: 'var(--color-primary-dark)', marginBottom: '6px' }}>
                    {faq.q}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.55 }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
