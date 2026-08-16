import React, { useState } from 'react';
import {
  IconBookOpen,
  IconAward,
  IconClock,
  IconMapPin,
  IconSparkles,
  IconUsers,
  IconCheck
} from '../components/Icons';
import { COLLOQUIUM_TALKS, GRANTS_AND_FUNDING } from '../data/researchData';
import Modal from '../components/Modal';

export default function Academic({ setActivePage, addToast }) {
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const [proposalForm, setProposalForm] = useState({
    name: '',
    email: '',
    degree: 'DPhil in Statistics',
    year: '2nd Year',
    title: '',
    abstract: ''
  });

  const handleSubmitProposal = (e) => {
    e.preventDefault();
    if (!proposalForm.title || !proposalForm.abstract) {
      alert('Please provide a presentation title and brief abstract.');
      return;
    }
    addToast(`Thank you ${proposalForm.name || 'Scholar'}! Your talk proposal has been submitted to the Academic Officer.`);
    setIsProposalModalOpen(false);
    setProposalForm({
      name: '',
      email: '',
      degree: 'DPhil in Statistics',
      year: '2nd Year',
      title: '',
      abstract: ''
    });
  };

  return (
    <div className="animate-fade-in section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <IconBookOpen size={13} />
            Postgraduate Research &amp; Scholarly Community
          </div>
          <h1 className="section-title">
            Academic Colloquium &amp; Research Grants
          </h1>
          <p className="section-desc">
            Jesus College MCR fosters vibrant interdisciplinary dialogue. Present your research at our termly colloquia in the Cheng Digital Hub and access college conference travel grants.
          </p>
        </div>

        {/* Action Callout Bar */}
        <div style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
          color: '#FFFFFF',
          padding: '28px 32px',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid rgba(197, 155, 39, 0.4)'
        }}>
          <div>
            <span className="badge badge-gold" style={{ marginBottom: '8px' }}>
              Call for Speakers • Michaelmas &amp; Hilary
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', margin: '4px 0 6px', color: '#FFFFFF' }}>
              Present Your Research at the Graduate Colloquium
            </h2>
            <p style={{ fontSize: '0.925rem', opacity: 0.9, margin: 0, maxWidth: '640px' }}>
              Share your DPhil or MSc findings in a supportive, friendly 15-minute format followed by Q&amp;A and a college-funded wine reception.
            </p>
          </div>
          <button
            className="btn btn-gold btn-lg"
            onClick={() => setIsProposalModalOpen(true)}
          >
            <IconSparkles size={18} />
            Submit Talk Proposal
          </button>
        </div>

        {/* Colloquium Schedule */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '24px'
          }}>
            <IconAward size={22} style={{ color: 'var(--color-gold-deep)' }} />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-primary-dark)', margin: 0 }}>
              Term Colloquia Schedule
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {COLLOQUIUM_TALKS.map((colloq) => (
              <div key={colloq.id} className="card card-crest-accent" style={{ padding: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
                  <div>
                    <span className="badge badge-gold" style={{ marginBottom: '6px' }}>
                      {colloq.term}
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary-dark)', margin: 0 }}>
                      {colloq.theme}
                    </h3>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', background: 'var(--color-surface-muted)', padding: '6px 12px', borderRadius: 'var(--radius-sm)' }}>
                    <strong>{colloq.date}</strong> • {colloq.venue}
                  </div>
                </div>

                <div className="grid-2" style={{ marginTop: '16px' }}>
                  {colloq.presentations.map((pres, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'var(--color-surface-muted)',
                        padding: '20px',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--color-border)',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--color-text-main)', marginBottom: '4px' }}>
                        {pres.speaker}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '12px' }}>
                        {pres.degree}
                      </div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-primary-dark)', marginBottom: '10px' }}>
                        "{pres.title}"
                      </h4>
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: 1.6, margin: 0 }}>
                        {pres.abstract}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grants and Funding Section */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '24px'
          }}>
            <IconAward size={22} style={{ color: 'var(--color-primary)' }} />
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-primary-dark)', margin: 0 }}>
              MCR &amp; College Academic Grants
            </h2>
          </div>

          <div className="grid-3">
            {GRANTS_AND_FUNDING.map((grant) => (
              <div key={grant.id} className="card card-gold-accent">
                <span className="badge badge-green" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                  {grant.maxAmount}
                </span>
                <h3 className="card-title" style={{ fontSize: '1.25rem' }}>
                  {grant.title}
                </h3>
                <p className="card-text">
                  {grant.description}
                </p>
                <div style={{
                  background: 'var(--color-surface-muted)',
                  padding: '12px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.825rem',
                  color: 'var(--color-text-muted)',
                  marginBottom: '16px'
                }}>
                  <strong>Eligibility:</strong> {grant.eligibility}<br />
                  <strong>Deadlines:</strong> {grant.deadlines}
                </div>
                <button
                  className="btn btn-outline btn-sm"
                  style={{ marginTop: 'auto' }}
                  onClick={() => {
                    setActivePage('portal');
                    addToast(`Opened reimbursement claim portal for ${grant.title}`);
                  }}
                >
                  Submit Grant Claim &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Talk Proposal Modal */}
      <Modal
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
        title="Colloquium Presentation Proposal"
      >
        <form onSubmit={handleSubmitProposal}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              required
              className="form-control"
              placeholder="e.g. Gareth L. Evans"
              value={proposalForm.name}
              onChange={(e) => setProposalForm({ ...proposalForm, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Oxford Email Address (@jesus.ox.ac.uk or @ox.ac.uk)</label>
            <input
              type="email"
              required
              className="form-control"
              placeholder="e.g. gareth.evans@jesus.ox.ac.uk"
              value={proposalForm.email}
              onChange={(e) => setProposalForm({ ...proposalForm, email: e.target.value })}
            />
          </div>

          <div className="grid-2" style={{ gap: '14px' }}>
            <div className="form-group">
              <label className="form-label">Degree Course</label>
              <input
                type="text"
                required
                className="form-control"
                placeholder="e.g. DPhil in Statistics"
                value={proposalForm.degree}
                onChange={(e) => setProposalForm({ ...proposalForm, degree: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Current Academic Year</label>
              <select
                className="form-control"
                value={proposalForm.year}
                onChange={(e) => setProposalForm({ ...proposalForm, year: e.target.value })}
              >
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th+ Year">4th+ Year</option>
                <option value="Master's (MSc / MSt / BCL)">Master's (MSc / MSt / BCL)</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Proposed Presentation Title</label>
            <input
              type="text"
              required
              className="form-control"
              placeholder="e.g. Asymptotic Theory for High-Dimensional Graphical Models"
              value={proposalForm.title}
              onChange={(e) => setProposalForm({ ...proposalForm, title: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Short Abstract / Summary (100-200 words)</label>
            <textarea
              required
              className="form-control"
              placeholder="Describe your research question, methodology, and key takeaways for a multi-disciplinary graduate audience..."
              value={proposalForm.abstract}
              onChange={(e) => setProposalForm({ ...proposalForm, abstract: e.target.value })}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setIsProposalModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit Proposal to Academic Rep
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
