import { Footer, Nav, SkipLink } from './components/Layout.jsx'
import { usePageMeta, useLang } from './i18n.jsx'
import { caseStudy } from './content/case.js'

const BASE = import.meta.env.BASE_URL
const PDF = `${BASE}caso-sistema-de-cobros-presencial.pdf`

const SECTION_IDS = ['contexto', 'resumen', 'inicios', 'aprendizajes']

export default function CasePage() {
  const { lang } = useLang()
  const t = caseStudy[lang]
  usePageMeta(t.meta.title, t.meta.description)

  return (
    <>
      <SkipLink />
      <Nav home={false} />
      <main id="main" tabIndex={-1}>
        <header className="case-hero">
          <div className="container">
            <a className="case-back" href={`${BASE}#portfolio`}>{t.back}</a>
            <p className="case-hero-label">{t.label}</p>
            <h1 className="case-hero-title">{t.title}</h1>
            <p className="case-hero-lead">{t.lead}</p>
            <dl className="case-hero-meta">
              {t.info.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <nav className="case-toc" aria-label={t.tocAria}>
              <span className="case-toc-label">{t.tocLabel}</span>
              {t.toc.map((label, i) => <a key={SECTION_IDS[i]} href={`#${SECTION_IDS[i]}`}>{label}</a>)}
            </nav>
          </div>
        </header>

        <section id="contexto" className="section case-section">
          <div className="container">
            <h2 className="section-title">{t.context.title}</h2>
            <p className="section-subtitle">{t.context.subtitle}</p>
            <div className="case-cards case-cards--three">
              {t.context.blocks.map((c) => (
                <article className="case-block" key={c.title}>
                  <h3 className="case-block-title">{c.title}</h3>
                  <ul className="case-list-plain">
                    {c.list.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <div className="case-areas">
              <h3 className="case-areas-label">{t.context.areasLabel}</h3>
              <ul className="case-areas-list">
                {t.context.areas.map((a) => <li key={a} className="tag">{a}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section id="resumen" className="section case-section case-section--alt">
          <div className="container">
            <h2 className="section-title">{t.summary.title}</h2>
            <p className="section-subtitle">{t.summary.subtitle}</p>
            <div className="case-cards case-cards--three">
              {t.summary.blocks.map((s) => (
                <article className="case-block" key={s.title}>
                  <h3 className="case-block-title">{s.title}</h3>
                  {s.text && <p>{s.text}</p>}
                  {s.list && (
                    <ul className="case-list-plain">
                      {s.list.map((li) => <li key={li}>{li}</li>)}
                    </ul>
                  )}
                </article>
              ))}
            </div>
            <h3 className="case-subhead">{t.summary.resultsTitle}</h3>
            <dl className="case-stats">
              {t.summary.stats.map(([value, label]) => (
                <div key={value}>
                  <dt>{value}</dt>
                  <dd>{label}</dd>
                </div>
              ))}
            </dl>
            <p className="case-note">
              <strong>{t.summary.noteLead}</strong>{t.summary.note}
            </p>
          </div>
        </section>

        <section id="inicios" className="section case-section">
          <div className="container">
            <h2 className="section-title">{t.versions.title}</h2>
            <p className="section-subtitle">{t.versions.subtitle}</p>
            <div className="case-versions">
              {t.versions.items.map((v) => (
                <article className={`case-version${v.final ? ' case-version--final' : ''}`} key={v.name}>
                  <div className="case-version-head">
                    <h3 className="case-block-title">{v.name}</h3>
                    <span className={`tag ${v.final ? 'tag--final' : ''}`}>{v.final ? t.versions.final : t.versions.discarded}</span>
                  </div>
                  <p>{v.text}</p>
                  {v.final ? (
                    <p className="case-why"><strong>{t.versions.whyWorked}</strong> {v.why}</p>
                  ) : (
                    <details className="case-details">
                      <summary>{t.versions.whyDiscarded}</summary>
                      <p>{v.why}</p>
                    </details>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="aprendizajes" className="section case-section case-section--alt">
          <div className="container">
            <h2 className="section-title">{t.learnings.title}</h2>
            <div className="case-learnings">
              {t.learnings.items.map((l, i) => (
                <article className="case-block" key={l.title}>
                  <span className="case-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="case-block-title">{l.title}</h3>
                  <p>{l.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section case-section case-end">
          <div className="container">
            <h2 className="section-title">{t.end.title}</h2>
            <p className="section-subtitle">{t.end.text}</p>
            <div className="case-actions">
              <a className="btn btn-primary" href={PDF} download>{t.end.download}</a>
              <a className="cr-link" href={`${BASE}#portfolio`}>{t.end.back}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
