import React from 'react';
import {
  IconCoffee,
  IconGamepad,
  IconBookOpen,
  IconHeart,
  IconMapPin,
  IconTv,
  IconTarget
} from './Icons';
import { FACILITIES_DATA } from '../data/siteData';

const iconMap = {
  coffee: <IconCoffee size={24} />,
  gamepad: <IconGamepad size={24} />,
  tv: <IconTv size={24} />,
  television: <IconTv size={24} />,
  darts: <IconTarget size={24} />,
  target: <IconTarget size={24} />,
  book: <IconBookOpen size={24} />,
  heart: <IconHeart size={24} />
};

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="content-section section-alternate">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Physical Spaces</span>
          <h2 className="section-title">Our Facilities</h2>
          <p className="section-subtitle">
            Dedicated spaces on the main college site and across the city for studying, socialising, and unwinding.
          </p>
          <div className="section-divider" />
        </div>

        <div className="facilities-grid">
          {FACILITIES_DATA.map((facility) => (
            <div key={facility.id} className="facility-card">
              <div className="facility-card-header">
                <div className="facility-icon-circle">
                  {iconMap[facility.icon] || <IconCoffee size={24} />}
                </div>
                <span className="facility-tag">{facility.tag}</span>
              </div>

              <h3 className="facility-title">{facility.title}</h3>

              <div className="facility-location">
                <IconMapPin size={15} />
                <span>{facility.location}</span>
              </div>

              <p className="facility-description">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
