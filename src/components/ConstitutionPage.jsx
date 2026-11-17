import React, { useEffect } from 'react';
import Crest from './Crest';
import { CONSTITUTION } from '../data/constitutionData';

const DOCX_URL = '/documents/MCR-Constitution-July-2026.docx';

// Clause text marks amendment references as ^{44}; render them as superscripts.
const renderText = (text) =>
  text.split(/\^\{([^}]*)\}/).map((part, i) =>
    i % 2 === 1 ? (
      <sup key={i} className="amendment-ref" title={`Amendment ${part.trim()}`}>
        {part.trim()}
      </sup>
    ) : (
      part
    )
  );

export default function ConstitutionPage() {
  useEffect(() => {
    document.title = 'Constitution | Jesus College MCR';
  }, []);

  return (
    <section className="content-section constitution-page">
      <div className="container">
        <div className="section-header">
          <Crest size={56} />
          <span className="section-badge">Governance</span>
          <h1 className="section-title">{CONSTITUTION.title}</h1>
          <p className="section-subtitle max-w-700">
            {CONSTITUTION.adopted}. This is the full text of the current version (July 2026).
          </p>
          <div className="constitution-actions">
            <a className="btn btn-primary btn-sm" href={DOCX_URL} download>
              Download the official document (.docx)
            </a>
          </div>
          <div className="section-divider" />
        </div>

        <div className="constitution-layout">
          <aside className="constitution-toc">
            <nav aria-label="Constitution contents">
              <h2 className="constitution-toc-title">Contents</h2>
              <ol>
                {CONSTITUTION.sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>
                      <span className="constitution-toc-numeral">{s.numeral}.</span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="constitution-body">
            <p className="constitution-note">
              Superscript numbers (for example <sup className="amendment-ref">44</sup>) mark
              clauses changed by numbered amendments.
            </p>
            {CONSTITUTION.sections.map((s) => (
              <section key={s.id} id={s.id} className="constitution-section">
                <h2 className="constitution-section-title">
                  <span className="constitution-numeral">{s.numeral}.</span> {s.title}
                </h2>
                <ol className="constitution-clauses">
                  {s.clauses.map((c, i) => (
                    <li key={i} className={`constitution-clause level-${c.level}`}>
                      <span className="clause-label">{c.label}.</span>
                      {c.text && <span className="clause-text">{renderText(c.text)}</span>}
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}
