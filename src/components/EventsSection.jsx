import React, { useState } from 'react';
import {
  IconCalendar,
  IconClock,
  IconSparkles,
  IconX,
  IconExternalLink,
  IconCopy,
  IconCheck,
  IconMaximize
} from './Icons';
import { CALENDAR_DATA } from '../data/siteData';

export default function EventsSection() {
  const [viewMode, setViewMode] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      return 'AGENDA';
    }
    return 'MONTH';
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedIcal, setCopiedIcal] = useState(false);

  const getCalendarEmbedUrl = (mode) => {
    const params = new URLSearchParams({
      src: CALENDAR_DATA.calendarId,
      ctz: 'Europe/London',
      mode: mode,
      showTitle: '0',
      showNav: '1',
      showDate: '1',
      showPrint: '0',
      showTabs: '0',
      showCalendars: '0',
      showTz: '0',
      bgcolor: '%23ffffff'
    });
    return `https://calendar.google.com/calendar/embed?${params.toString()}`;
  };

  const handleCopyIcal = async () => {
    try {
      await navigator.clipboard.writeText(CALENDAR_DATA.icalUrl);
      setCopiedIcal(true);
      setTimeout(() => setCopiedIcal(false), 2500);
    } catch {
      setCopiedIcal(false);
    }
  };

  return (
    <section id="events" className="content-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Events &amp; Calendar</span>
          <h2 className="section-title">{CALENDAR_DATA.title}</h2>
          <p className="section-subtitle">
            {CALENDAR_DATA.description}
          </p>
          <div className="section-divider" />
        </div>

        {CALENDAR_DATA.notice && (
          <div className="events-notice-banner">
            <div className="events-notice-icon-box">
              <IconSparkles size={20} className="events-notice-icon" />
            </div>
            <div className="events-notice-body">
              <span className="events-notice-badge">Notice</span>
              <p className="events-notice-text">
                {CALENDAR_DATA.notice}
              </p>
            </div>
          </div>
        )}

        <div className="events-calendar-showcase">
          <div className="calendar-main-card">
            <div className="calendar-toolbar">
              <div className="calendar-toolbar-left">
                <span className="calendar-live-badge">
                  <span className="calendar-live-dot" />
                  <span>{CALENDAR_DATA.term}</span>
                </span>

                <div className="calendar-view-tabs" role="tablist" aria-label="Calendar view mode">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={viewMode === 'MONTH'}
                    className={`calendar-tab-btn ${viewMode === 'MONTH' ? 'active' : ''}`}
                    onClick={() => setViewMode('MONTH')}
                  >
                    Month
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={viewMode === 'WEEK'}
                    className={`calendar-tab-btn ${viewMode === 'WEEK' ? 'active' : ''}`}
                    onClick={() => setViewMode('WEEK')}
                  >
                    Week
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={viewMode === 'AGENDA'}
                    className={`calendar-tab-btn ${viewMode === 'AGENDA' ? 'active' : ''}`}
                    onClick={() => setViewMode('AGENDA')}
                  >
                    Schedule
                  </button>
                </div>
              </div>

              <div className="calendar-toolbar-right">
                <a
                  href={CALENDAR_DATA.googleCalendarAddUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-outline calendar-action-btn"
                  title="Add this calendar to your Google Calendar account"
                >
                  <IconCalendar size={14} />
                  <span>Add to Google Calendar</span>
                  <IconExternalLink size={12} />
                </a>

                <button
                  type="button"
                  className="btn-icon-subtle"
                  onClick={() => setIsModalOpen(true)}
                  title="Open fullscreen calendar view"
                  aria-label="Expand calendar"
                >
                  <IconMaximize size={16} />
                </button>
              </div>
            </div>

            <div className="calendar-iframe-container">
              <iframe
                key={viewMode}
                src={getCalendarEmbedUrl(viewMode)}
                title="Jesus College MCR Calendar"
                className="calendar-iframe"
                loading="lazy"
              />
            </div>

            <div className="calendar-card-footer">
              <div className="calendar-footer-meta">
                <span className="calendar-tz-indicator">Timezone: Europe/London (GMT/BST)</span>
                <span className="calendar-sync-note">• Live updates from MCR Committee</span>
              </div>

              <div className="calendar-footer-actions">
                <button
                  type="button"
                  className={`btn-subtle-link ${copiedIcal ? 'copied' : ''}`}
                  onClick={handleCopyIcal}
                  title="Copy iCal subscription URL"
                >
                  {copiedIcal ? <IconCheck size={14} /> : <IconCopy size={14} />}
                  <span>{copiedIcal ? 'iCal Link Copied!' : 'Copy iCal Link'}</span>
                </button>

                <a
                  href={CALENDAR_DATA.googleCalendarUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-subtle-link"
                >
                  <span>Open in Google Calendar</span>
                  <IconExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>

          <div className="events-sidebar-column">
            <div className="calendar-sync-card">
              <div className="sync-card-header">
                <IconCalendar size={20} className="sync-icon" />
                <div>
                  <h3 className="sync-card-title">Sync to Your Calendar</h3>
                  <p className="sync-card-subtitle">
                    Keep up to date with MCR dinners, guest nights, and social events on your device.
                  </p>
                </div>
              </div>

              <div className="sync-card-actions">
                <a
                  href={CALENDAR_DATA.googleCalendarAddUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-primary sync-btn"
                >
                  <IconCalendar size={15} />
                  <span>Google Calendar</span>
                  <IconExternalLink size={13} />
                </a>

                <a
                  href={CALENDAR_DATA.webcalUrl}
                  className="btn btn-sm btn-outline sync-btn"
                  title="Subscribe in Apple Calendar, Outlook, or Thunderbird"
                >
                  <IconCalendar size={15} />
                  <span>Apple / Outlook (iCal)</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyIcal}
                  className="btn btn-sm btn-secondary sync-btn copy-btn"
                >
                  {copiedIcal ? <IconCheck size={15} /> : <IconCopy size={15} />}
                  <span>{copiedIcal ? 'URL Copied to Clipboard!' : 'Copy Subscription URL'}</span>
                </button>
              </div>
            </div>

            <div className="term-highlights-section">
              <h3 className="term-highlights-title">Regular Term Highlights</h3>

              <div className="term-highlights-list">
                {CALENDAR_DATA.highlights.map((item, idx) => (
                  <div key={idx} className="term-highlight-card">
                    <div className="highlight-time-badge">
                      <span className="highlight-day">{item.day}</span>
                      <span className="highlight-time">
                        <IconClock size={13} />
                        {item.time}
                      </span>
                    </div>
                    <div className="highlight-details">
                      <h4 className="highlight-name">{item.title}</h4>
                      <p className="highlight-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="term-card-cta-box">
              <IconSparkles size={20} className="cta-icon" />
              <div>
                <h4>Looking to organize or co-host an MCR event?</h4>
                <p>
                  Have an idea for a talk, tasting, sports outing, or craft night? Or are you another Oxford or Cambridge MCR looking to co-organize an exchange dinner or joint event? Reach out to our Social Secretaries or Reps below!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="calendar-modal-backdrop"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="calendar-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="calendar-modal-header">
              <div className="calendar-modal-title-group">
                <span className="calendar-modal-title">Jesus College MCR Calendar</span>
                <span className="calendar-modal-subtitle">Europe/London • Live Schedule</span>
              </div>

              <div className="calendar-modal-controls">
                <div className="calendar-view-tabs" role="tablist" aria-label="Modal calendar view mode">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={viewMode === 'MONTH'}
                    className={`calendar-tab-btn ${viewMode === 'MONTH' ? 'active' : ''}`}
                    onClick={() => setViewMode('MONTH')}
                  >
                    Month
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={viewMode === 'WEEK'}
                    className={`calendar-tab-btn ${viewMode === 'WEEK' ? 'active' : ''}`}
                    onClick={() => setViewMode('WEEK')}
                  >
                    Week
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={viewMode === 'AGENDA'}
                    className={`calendar-tab-btn ${viewMode === 'AGENDA' ? 'active' : ''}`}
                    onClick={() => setViewMode('AGENDA')}
                  >
                    Schedule
                  </button>
                </div>

                <a
                  href={CALENDAR_DATA.googleCalendarAddUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-primary"
                >
                  <IconCalendar size={14} />
                  <span>Add to Google Calendar</span>
                  <IconExternalLink size={12} />
                </a>

                <button
                  type="button"
                  className="calendar-modal-close"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close fullscreen calendar modal"
                >
                  <IconX size={20} />
                </button>
              </div>
            </div>

            <div className="calendar-modal-body">
              <iframe
                key={`modal-${viewMode}`}
                src={getCalendarEmbedUrl(viewMode)}
                title="Jesus College MCR Calendar Fullscreen"
                className="calendar-modal-iframe"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
