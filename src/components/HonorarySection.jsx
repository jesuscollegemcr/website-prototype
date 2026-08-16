import React from 'react';
import { IconAward, IconCheck, IconMail } from './Icons';
import { HONORARY_MEMBERSHIP_DATA } from '../data/siteData';

export default function HonorarySection() {
  return (
    <section id="honorary" className="content-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">College Membership</span>
          <h2 className="section-title">{HONORARY_MEMBERSHIP_DATA.title}</h2>
          <p className="section-subtitle max-w-700">
            {HONORARY_MEMBERSHIP_DATA.intro}
          </p>
          <div className="section-divider" />
        </div>

        <div className="honorary-card-wrapper">
          <div className="honorary-criteria-card">
            <div className="honorary-card-header">
              <div className="honorary-icon-badge">
                <IconAward size={26} />
              </div>
              <div>
                <h3 className="honorary-heading">Eligibility Criteria</h3>
                <p className="honorary-sub">
                  Candidates qualifying under any of the provisions below may be considered for MCR Honorary Membership:
                </p>
              </div>
            </div>

            <ul className="honorary-criteria-list">
              {HONORARY_MEMBERSHIP_DATA.criteria.map((item, idx) => (
                <li key={idx} className="honorary-criteria-item">
                  <div className="criteria-check-icon">
                    <IconCheck size={16} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="honorary-apply-box">
              <div className="apply-info">
                <h4>How to Apply</h4>
                <p>
                  {HONORARY_MEMBERSHIP_DATA.applicationNote}{' '}
                  <a href={`mailto:${HONORARY_MEMBERSHIP_DATA.email}`} className="apply-email-link">
                    {HONORARY_MEMBERSHIP_DATA.email}
                  </a>
                </p>
              </div>
              <a
                href={`mailto:${HONORARY_MEMBERSHIP_DATA.email}?subject=Honorary%20Membership%20Application`}
                className="btn btn-primary"
              >
                <IconMail size={16} />
                <span>Apply for Membership</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
