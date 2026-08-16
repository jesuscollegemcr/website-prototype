import React from 'react';
import {
  IconMapPin,
  IconMail,
  IconPhone,
  IconInstagram,
  IconFacebook,
  IconTwitter,
  IconArrowRight
} from './Icons';
import { CONTACT_DATA } from '../data/siteData';

export default function ContactSection() {
  return (
    <section id="contact" className="content-section section-alternate">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Get in Touch</span>
          <h2 className="section-title">Contact &amp; Location</h2>
          <p className="section-subtitle max-w-700">
            Have questions about the Jesus MCR, postgraduate life, or upcoming events? Get in touch with us directly.
          </p>
          <div className="section-divider" />
        </div>

        <div className="contact-cards-grid">
          <div className="contact-card">
            <div className="contact-icon-box">
              <IconMapPin size={24} />
            </div>
            <h3 className="contact-card-title">Postal Address</h3>
            <p className="contact-card-detail">
              Jesus College, Turl Street<br />
              Oxford, OX1 3DW<br />
              United Kingdom
            </p>
            <a
              href="https://maps.google.com/?q=Jesus+College+Oxford"
              target="_blank"
              rel="noreferrer"
              className="contact-card-link"
            >
              <span>View on Google Maps</span>
              <IconArrowRight size={14} />
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon-box">
              <IconMail size={24} />
            </div>
            <h3 className="contact-card-title">General Inquiries</h3>
            <p className="contact-card-detail">
              For administrative, constitutional, or general inquiries:
            </p>
            <a
              href={`mailto:${CONTACT_DATA.email}`}
              className="contact-primary-email"
            >
              {CONTACT_DATA.email}
            </a>
            <div style={{ marginTop: '12px', fontSize: '0.875rem' }}>
              <span>President: </span>
              <a
                href={`mailto:${CONTACT_DATA.presidentEmail}`}
                style={{ color: 'var(--color-primary)', fontWeight: 600 }}
              >
                {CONTACT_DATA.presidentEmail}
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon-box">
              <IconPhone size={24} />
            </div>
            <h3 className="contact-card-title">Porters&rsquo; Lodge</h3>
            <p className="contact-card-detail">
              The main college lodge is staffed 24/7 for key access, parcel collection, and emergencies:
            </p>
            <p className="contact-phone-number">
              {CONTACT_DATA.lodgePhone}
            </p>
          </div>
        </div>

        <div className="contact-social-banner">
          <div className="social-banner-text">
            <h3>Follow the Jesus MCR Community</h3>
            <p>Stay up to date with photos, announcements, and informal social activities on our channels:</p>
          </div>
          <div className="social-banner-links">
            <a
              href="https://instagram.com/jesuscollege_mcr"
              target="_blank"
              rel="noreferrer"
              className="btn btn-social"
            >
              <IconInstagram size={18} />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/groups/jesuscollegemcr/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-social"
            >
              <IconFacebook size={18} />
              <span>Facebook Group</span>
            </a>
            <a
              href="https://twitter.com/JesusOxMCR"
              target="_blank"
              rel="noreferrer"
              className="btn btn-social"
            >
              <IconTwitter size={18} />
              <span>Twitter / X</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
