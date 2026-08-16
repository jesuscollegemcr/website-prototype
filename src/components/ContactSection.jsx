import React from 'react';
import {
  IconMapPin,
  IconMail,
  IconInstagram,
  IconArrowRight,
  IconExternalLink
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
              For administrative or general graduate inquiries:
            </p>
            <a
              href={`mailto:${CONTACT_DATA.email}`}
              className="contact-primary-email"
            >
              {CONTACT_DATA.email}
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon-box">
              <IconInstagram size={24} />
            </div>
            <h3 className="contact-card-title">Follow Us on Instagram</h3>
            <p className="contact-card-detail">
              Stay up to date with photos, events, and MCR community updates:
            </p>
            <a
              href={CONTACT_DATA.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="contact-card-link"
            >
              <span>{CONTACT_DATA.instagram.handle}</span>
              <IconExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
