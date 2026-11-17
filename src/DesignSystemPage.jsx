import { useState } from 'react'
import { Footer, Nav, SkipLink, ThemeSwitch } from './components/Layout.jsx'
import { usePageMeta, useLang } from './i18n.jsx'
import { dsPage, dsShared } from './content/dsPage.js'
import { ui } from './content/ui.js'

const BASE = import.meta.env.BASE_URL
const DOCS = 'https://riverocynthia.github.io/design-system/'
const REPO = 'https://github.com/riverocynthia/design-system'

const SECTION_IDS = ['organizacion', 'color', 'tipografia', 'espacio', 'componentes']

function Swatch({ token, step }) {
  return (
    <div className="dsp-swatch">
      <span className="dsp-swatch-chip" style={{ background: `var(--${token}-${step})` }} aria-hidden="true" />
      <span className="dsp-swatch-step">{step}</span>
    </div>
  )
}

function Scale({ palette, steps }) {
  return (
    <div className="dsp-scale">
      <p className="dsp-scale-title">
        <strong>{palette.name}</strong>
        <span>{palette.use}</span>
      </p>
      <div className="dsp-strip">
        {steps.map((s) => (
          <Swatch key={s} token={palette.token} step={s} />
        ))}
      </div>
    </div>
  )
}

function Choices({ id, t }) {
  const [on, setOn] = useState(true)
  return (
    <div className="dsp-choices">
      <label className="cr-choice">
        <ThemeSwitch checked={on} onChange={() => setOn(!on)} label={`${t.notifications} ${id}`} />
        <span>{t.notifications}</span>
      </label>
      <label className="cr-choice">
        <input type="checkbox" className="cr-checkbox" defaultChecked />
        <span>{t.accessibility}</span>
      </label>
      <label className="cr-choice">
        <input type="radio" name={`modo-${id}`} className="cr-radio" defaultChecked />
        <span>{t.lightMode}</span>
      </label>
      <label className="cr-choice">
        <input type="radio" name={`modo-${id}`} className="cr-radio" />
        <span>{t.darkMode}</span>
      </label>
    </div>
  )
}

function Surface({ dark, id, t, tags }) {
  return (
    <div className={`dsp-surface${dark ? ' cr-on-dark' : ''}`}>
      <p className="dsp-surface-label">{dark ? t.dark : t.light}</p>
      <div className="dsp-row">
        <button type="button" className="cr-btn cr-btn--primary">{t.primary}</button>
        <button type="button" className="cr-btn cr-btn--secondary">{t.secondary}</button>
        <button type="button" className="cr-btn cr-btn--ghost">{t.ghost}</button>
      </div>
      <div className="dsp-row">
        <span className="cr-tag">{tags[0]}</span>
        <span className="cr-tag cr-tag--success">{tags[1]}</span>
        <span className="cr-tag cr-tag--warning">{tags[2]}</span>
        <span className="cr-tag cr-tag--danger">{tags[3]}</span>
      </div>
      <Choices id={id} t={t} />
      <a className="cr-link" href="#componentes">{t.more}</a>
    </div>
  )
}

export default function DesignSystemPage() {
  const { lang } = useLang()
  const t = dsPage[lang]
  const newTab = ui[lang].newTab
  const c = t.components
  usePageMeta(t.meta.title, t.meta.description)
  const [sw, setSw] = useState(false)

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

        <section id="organizacion" className="section case-section">
          <div className="container">
            <h2 className="section-title">{t.organization.title}</h2>
            <p className="section-subtitle">{t.organization.subtitle}</p>
            <ol className="dsp-layers">
              {t.organization.layers.map((l, i) => (
                <li className="case-block dsp-layer" key={l.title}>
                  <span className="case-number" aria-hidden="true">{t.organization.layerWord} {i + 1}</span>
                  <h3 className="case-block-title">{l.title}</h3>
                  <p>{l.text}</p>
                  <div className="dsp-chips">
                    {l.items.map((item) => <span className="tag" key={item}>{item}</span>)}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="color" className="section case-section case-section--alt">
          <div className="container">
            <h2 className="section-title">{t.color.title}</h2>
            <p className="section-subtitle">{t.color.subtitle}</p>
            <h3 className="case-subhead dsp-subhead">{t.color.palettesTitle}</h3>
            <div className="dsp-scales">
              {t.color.palettes.map((p) => <Scale key={p.token} palette={p} steps={dsShared.steps} />)}
            </div>
            <h3 className="case-subhead dsp-subhead">{t.color.statusTitle}</h3>
            <div className="dsp-scales dsp-scales--short">
              {t.color.status.map((p) => <Scale key={p.token} palette={p} steps={dsShared.short} />)}
            </div>
            <h3 className="case-subhead dsp-subhead">{t.color.rolesTitle}</h3>
            <p className="dsp-lead">{t.color.rolesLead}</p>
            <div className="dsp-roles">
              {t.color.roles.map((g) => (
                <div className="dsp-role-group" key={g.group}>
                  <h4 className="dsp-group-title">{g.group}</h4>
                  <div className="dsp-role-tiles">
                    {g.items.map(([label, bg, fg]) => (
                      <div className="dsp-role" key={label}>
                        <span
                          className="dsp-role-tile"
                          style={{ background: `var(--${bg})`, color: `var(--${fg})` }}
                          aria-hidden="true"
                        >
                          Aa
                        </span>
                        <span className="dsp-role-label">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tipografia" className="section case-section">
          <div className="container">
            <h2 className="section-title">{t.typography.title}</h2>
            <p className="section-subtitle">{t.typography.subtitle}</p>
            <div className="dsp-families">
              <div className="case-block">
                <p className="dsp-family-name dsp-family-name--heading">Nunito</p>
                <p>{t.typography.families[0]}</p>
              </div>
              <div className="case-block">
                <p className="dsp-family-name dsp-family-name--body">Nunito Sans</p>
                <p>{t.typography.families[1]}</p>
              </div>
            </div>
            <div className="dsp-type">
              {t.typography.scale.map(([label, family, size, weight]) => (
                <div className="dsp-type-row" key={label}>
                  <span className="dsp-type-label">{label}</span>
                  <span
                    className="dsp-type-sample"
                    style={{
                      fontFamily: `var(--font-family-${family})`,
                      fontSize: `var(--font-size-${size})`,
                      fontWeight: `var(--font-weight-${weight})`,
                    }}
                  >
                    {t.typography.sample}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="espacio" className="section case-section case-section--alt">
          <div className="container">
            <h2 className="section-title">{t.space.title}</h2>
            <p className="section-subtitle">{t.space.subtitle}</p>
            <div className="dsp-shapes">
              <div className="dsp-shape-col">
                <h3 className="dsp-group-title">{t.space.spacing}</h3>
                {dsShared.spacing.map((s) => (
                  <div className="dsp-space-row" key={s}>
                    <span className="dsp-space-bar" style={{ width: `var(--space-${s})` }} aria-hidden="true" />
                    <span className="dsp-space-value">{Number(s) * 4} px</span>
                  </div>
                ))}
              </div>
              <div className="dsp-shape-col">
                <h3 className="dsp-group-title">{t.space.radii}</h3>
                {t.space.radiiItems.map(([label, r]) => (
                  <div className="dsp-sample-row" key={r}>
                    <span className="dsp-radius" style={{ borderRadius: `var(--radius-${r})` }} aria-hidden="true" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <div className="dsp-shape-col">
                <h3 className="dsp-group-title">{t.space.shadows}</h3>
                {t.space.shadowItems.map(([label, s]) => (
                  <div className="dsp-sample-row" key={s}>
                    <span className="dsp-shadow" style={{ boxShadow: `var(--shadow-${s})` }} aria-hidden="true" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="componentes" className="section case-section">
          <div className="container">
            <h2 className="section-title">{c.title}</h2>
            <p className="section-subtitle">{c.subtitle}</p>

            <div className="dsp-groups">
              <article className="case-block">
                <h3 className="case-block-title">{c.buttons}</h3>
                <div className="dsp-row">
                  <button type="button" className="cr-btn cr-btn--primary">{c.btnPrimary}</button>
                  <button type="button" className="cr-btn cr-btn--secondary">{c.btnSecondary}</button>
                  <button type="button" className="cr-btn cr-btn--ghost">{c.btnGhost}</button>
                  <button type="button" className="cr-btn cr-btn--primary" disabled>{c.btnDisabled}</button>
                </div>
              </article>

              <article className="case-block">
                <h3 className="case-block-title">{c.tags}</h3>
                <div className="dsp-row">
                  <span className="cr-tag">{c.tagItems[0]}</span>
                  <span className="cr-tag cr-tag--success">{c.tagItems[1]}</span>
                  <span className="cr-tag cr-tag--warning">{c.tagItems[2]}</span>
                  <span className="cr-tag cr-tag--danger">{c.tagItems[3]}</span>
                </div>
              </article>

              <article className="case-block">
                <h3 className="case-block-title">{c.selectors}</h3>
                <div className="dsp-row">
                  <label className="cr-choice">
                    <ThemeSwitch checked={sw} onChange={() => setSw(!sw)} label={c.exampleSwitch} />
                    <span>{sw ? c.checked : c.unchecked}</span>
                  </label>
                  <label className="cr-choice">
                    <ThemeSwitch checked onChange={() => {}} label={c.disabledSwitch} disabled />
                    <span>{c.disabled}</span>
                  </label>
                </div>
                <div className="dsp-row">
                  <label className="cr-choice">
                    <input type="checkbox" className="cr-checkbox" />
                    <span>{c.unchecked}</span>
                  </label>
                  <label className="cr-choice">
                    <input type="checkbox" className="cr-checkbox" defaultChecked />
                    <span>{c.checked}</span>
                  </label>
                  <label className="cr-choice">
                    <input type="checkbox" className="cr-checkbox" disabled />
                    <span>{c.disabled}</span>
                  </label>
                </div>
                <div className="dsp-row">
                  <label className="cr-choice">
                    <input type="radio" name="grupo-ejemplo" className="cr-radio" />
                    <span>{c.optionA}</span>
                  </label>
                  <label className="cr-choice">
                    <input type="radio" name="grupo-ejemplo" className="cr-radio" defaultChecked />
                    <span>{c.optionB}</span>
                  </label>
                  <label className="cr-choice">
                    <input type="radio" name="grupo-ejemplo" className="cr-radio" disabled />
                    <span>{c.optionDisabled}</span>
                  </label>
                </div>
              </article>

              <article className="case-block">
                <h3 className="case-block-title">{c.cards}</h3>
                <div className="dsp-stack">
                  <div className="cr-card">
                    <div className="cr-card__eyebrow">{c.cardEyebrow}</div>
                    <div className="cr-card__title">{c.cardTitle}</div>
                    <div className="cr-card__text">{c.cardText}</div>
                  </div>
                  <div className="cr-stat">
                    <span className="cr-stat__value">60%</span>
                    <span className="cr-stat__label">{c.statLabel}</span>
                  </div>
                  <a className="cr-contact-link" href="#componentes">
                    <span className="cr-contact-link__text">{c.email}</span>
                  </a>
                </div>
              </article>
            </div>

            <h3 className="case-subhead dsp-subhead">{c.surfacesTitle}</h3>
            <p className="dsp-lead">{c.surfacesLead}</p>
            <div className="dsp-surfaces">
              <Surface id="claro" t={c.surface} tags={c.tagItems} />
              <Surface id="oscuro" dark t={c.surface} tags={c.tagItems} />
            </div>
          </div>
        </section>

        <section className="section case-section case-section--alt case-end dsp-end">
          <div className="container">
            <h2 className="section-title">{t.end.title}</h2>
            <p className="section-subtitle">{t.end.text}</p>
            <div className="case-actions">
              <a className="btn btn-primary" href={DOCS} target="_blank" rel="noreferrer">
                {t.end.docs}
                <span className="sr-only">{newTab}</span>
              </a>
              <a className="btn btn-secondary" href={REPO} target="_blank" rel="noreferrer">
                {t.end.code}
                <span className="sr-only">{newTab}</span>
              </a>
              <a className="cr-link" href={`${BASE}#portfolio`}>{t.end.back}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
