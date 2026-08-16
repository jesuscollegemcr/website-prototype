import React from 'react';
import Crest from './Crest';
import {
  IconMapPin,
  IconMail,
  IconPhone,
  IconInstagram,
  IconFacebook,
  IconTwitter
} from './Icons';
import { CONTACT_DATA } from '../data/siteData';

export default function Footer() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <Crest size={46} />
              <div>
                <h3 className="footer-title">JESUS COLLEGE MCR</h3>
                <p className="footer-sub">Middle Common Room • Oxford</p>
              </div>
            </div>
            <p className="footer-desc">
              The Middle Common Room (MCR) is the postgraduate community of Jesus College in the University of Oxford, representing over 300 graduate scholars and researchers.
            </p>
            <p className="footer-motto">
              &ldquo;Floreat Ecclesia, Vivat Rex, Habeat Jesus Gloriam&rdquo;
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => handleScrollTo(e, 'home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#facilities" onClick={(e) => handleScrollTo(e, 'facilities')}>
                  Our Facilities
                </a>
              </li>
              <li>
                <a href="#events" onClick={(e) => handleScrollTo(e, 'events')}>
                  Events &amp; Term Card
                </a>
              </li>
              <li>
                <a href="#committee" onClick={(e) => handleScrollTo(e, 'committee')}>
                  MCR Committee
                </a>
              </li>
              <li>
                <a href="#honorary" onClick={(e) => handleScrollTo(e, 'honorary')}>
                  Honorary Membership
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Location &amp; Porters</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <IconMapPin size={18} className="footer-icon" />
                <span>
                  Jesus College, Turl Street<br />
                  Oxford, OX1 3DW, United Kingdom
                </span>
              </div>
              <div className="footer-contact-item">
                <IconMail size={16} className="footer-icon" />
                <a href={`mailto:${CONTACT_DATA.email}`}>{CONTACT_DATA.email}</a>
              </div>
              <div className="footer-contact-item">
                <IconPhone size={16} className="footer-icon" />
                <span>Porters&rsquo; Lodge: {CONTACT_DATA.lodgePhone}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="footer-social-links">
              <a
                href="https://instagram.com/jesuscollege_mcr"
                target="_blank"
                rel="noreferrer"
                className="social-badge"
              >
                <IconInstagram size={18} />
                <span>@jesuscollege_mcr</span>
              </a>
              <a
                href="https://www.facebook.com/groups/jesuscollegemcr/"
                target="_blank"
                rel="noreferrer"
                className="social-badge"
              >
                <IconFacebook size={18} />
                <span>Jesus College MCR Facebook</span>
              </a>
              <a
                href="https://twitter.com/JesusOxMCR"
                target="_blank"
                rel="noreferrer"
                className="social-badge"
              >
                <IconTwitter size={18} />
                <span>@JesusOxMCR</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Jesus College Middle Common Room (MCR), University of Oxford.
          </p>
          <div className="footer-bottom-links">
            <a href="https://www.jesus.ox.ac.uk" target="_blank" rel="noreferrer">
              Jesus College Oxford
            </a>
            <span>•</span>
            <a href="https://www.ox.ac.uk" target="_blank" rel="noreferrer">
              University of Oxford
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
