import Image from "next/image";
import { type FC } from "react";

const PRODUCTS = [
  {
    id: "theo",
    name: "Theo",
    type: "Android · Personal assistant",
    description:
      "A context-aware Android companion built around useful conversations, screen awareness and everyday actions.",
    status: "IN DEVELOPMENT",
    href: "https://github.com/Kentaakakashi/Theo-AI",
    visual: "theo",
    number: "01",
  },
  {
    id: "ryu",
    name: "Ryu",
    type: "Fitness · Progression system",
    description:
      "A strength-training companion that turns consistency, progression and personal goals into a game-like journey.",
    status: "IN DEVELOPMENT",
    href: "https://github.com/Kentaakakashi/Ryu-Workout",
    visual: "ryu",
    number: "02",
  },
  {
    id: "forgotten",
    name: "The God Who Forgot",
    type: "Game · Narrative RPG",
    description:
      "A quiet 2D pixel-art role-playing experience about memory, identity and a world shaped by what was forgotten.",
    status: "IN DEVELOPMENT",
    href: "https://github.com/Kentaakakashi/The-God-Who-Forgot",
    visual: "forgotten",
    number: "03",
  },
] as const;

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
const CONTACT_HREF = CONTACT_EMAIL
  ? `mailto:${CONTACT_EMAIL}`
  : "https://github.com/Kentaakakashi";
const CONTACT_LABEL = CONTACT_EMAIL ? "Send an email" : "Find us on GitHub";

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 12.5 12 4m0 0H5m7 0v7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const HomePage: FC = () => (
  <main className="ryzent-shell" id="top">
    <div className="ambient-field" aria-hidden="true">
      <div className="ambient-field__glow" />
      <div className="ambient-field__grid" />
    </div>

    <header className="site-header">
      <a className="brand-lockup" href="#top" aria-label="Ryzent home">
        <span className="brand-lockup__mark">
          <Image src="/brand/ryzent-emblem.svg" alt="" width={361} height={282} priority />
        </span>
        <span className="brand-lockup__wordmark">
          <Image src="/brand/ryzent-wordmark.svg" alt="Ryzent" width={815} height={88} priority />
        </span>
        <span className="brand-lockup__tag">/ STUDIO</span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        <a href="#systems">Systems</a>
        <a href="#experiments">Experiments</a>
        <a href="#studio">Studio</a>
      </nav>

      <a className="header-contact" href="#contact">
        <span className="header-contact__dot" />
        <span>Open a channel</span>
        <ArrowUpRight />
      </a>
    </header>

    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow__line" /> INDEPENDENT SOFTWARE STUDIO <span className="eyebrow__code">RZ / 001</span></div>
        <h1 id="hero-title">Engineer<br />the <em>unexpected.</em></h1>
        <p className="hero-description">
          We build digital products, curious experiments and carefully engineered
          experiences at the intersection of software and imagination.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#systems">Explore our systems <ArrowUpRight /></a>
          <a className="button-text" href="#studio">Get to know Ryzent <span>↘</span></a>
        </div>
        <div className="hero-footnote">
          <span>INDEPENDENT BY DESIGN</span>
          <span className="hero-footnote__divider" />
          <span>BUILT WITH INTENT</span>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="visual-coordinate visual-coordinate--top">FIELD STUDY <span>07.31 / A</span></div>
        <div className="anomaly-stage">
          <div className="anomaly-ring anomaly-ring--outer" />
          <div className="anomaly-ring anomaly-ring--middle" />
          <div className="anomaly-ring anomaly-ring--inner" />
          <div className="anomaly-node anomaly-node--one" />
          <div className="anomaly-node anomaly-node--two" />
          <div className="anomaly-node anomaly-node--three" />
          <div className="anomaly-core">
            <svg className="anomaly-core__shape" viewBox="0 0 360 360" fill="none">
              <defs>
                <linearGradient id="coreFace" x1="74" y1="54" x2="292" y2="303" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E9F1FF" stopOpacity=".95" />
                  <stop offset=".32" stopColor="#9ABBE7" stopOpacity=".82" />
                  <stop offset=".7" stopColor="#314968" stopOpacity=".95" />
                  <stop offset="1" stopColor="#0D1422" />
                </linearGradient>
                <linearGradient id="coreEdge" x1="83" y1="43" x2="285" y2="326" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E9F1FF" />
                  <stop offset=".5" stopColor="#7DE3D0" />
                  <stop offset="1" stopColor="#28364D" />
                </linearGradient>
                <filter id="coreGlow" x="20" y="10" width="320" height="340" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="12" />
                </filter>
              </defs>
              <path d="M181 39 287 100v124L181 321 73 258V101L181 39Z" fill="#7DE3D0" opacity=".13" filter="url(#coreGlow)" />
              <path d="M180 39 287 101v123l-107 62-107-62V101L180 39Z" fill="url(#coreFace)" fillOpacity=".18" stroke="url(#coreEdge)" strokeWidth="1.6" />
              <path d="m180 39 1 123 106-61M181 162l-108-61m108 61v124" stroke="#D9E8FF" strokeOpacity=".68" strokeWidth="1.2" />
              <path d="m73 101 108 61 106-61-107-62L73 101Z" fill="url(#coreFace)" fillOpacity=".5" stroke="#E9F1FF" strokeOpacity=".5" />
              <path d="m73 101 108 61v124L73 224V101Z" fill="#28364D" fillOpacity=".62" stroke="#A9C5E8" strokeOpacity=".5" />
              <path d="m181 162 106-61v123l-106 62V162Z" fill="#0D1422" fillOpacity=".86" stroke="#7DE3D0" strokeOpacity=".72" />
              <path d="m181 162 54-31v124l-54 31V162Z" fill="#7DE3D0" fillOpacity=".1" />
              <path d="m126 132 54 31 54-31m-54 31v62m-54-93v62l54 31 55-31" stroke="#E9F1FF" strokeOpacity=".32" strokeWidth="1" />
              <circle cx="181" cy="162" r="4" fill="#7DE3D0" />
            </svg>
          </div>
          <div className="anomaly-crosshair anomaly-crosshair--top" />
          <div className="anomaly-crosshair anomaly-crosshair--bottom" />
          <div className="anomaly-caption anomaly-caption--left">UNSTABLE<br />GEOMETRY</div>
          <div className="anomaly-caption anomaly-caption--right">CONTROLLED<br />ANOMALY</div>
        </div>
        <div className="visual-coordinate visual-coordinate--bottom"><span>ENGINEER THE UNEXPECTED</span> <span>30° / RY</span></div>
      </div>
    </section>

    <div className="signal-strip" aria-label="Ryzent design principles">
      <span>SOFTWARE</span><i />
      <span>PRODUCTS</span><i />
      <span>EXPERIMENTS</span><i />
      <span>ENGINEERING</span><i />
      <span>SOFTWARE</span><i />
      <span>PRODUCTS</span>
    </div>

    <section className="content-section systems-section" id="systems" aria-labelledby="systems-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker"><span>01</span> / THE UNIVERSE</p>
          <h2 id="systems-title">Systems in <em>motion.</em></h2>
        </div>
        <p className="section-intro">A growing collection of products and ideas shaped by curiosity, utility and a refusal to settle for ordinary.</p>
      </div>

      <div className="systems-grid">
        {PRODUCTS.map((product) => (
          <article className="system-card" key={product.id}>
            <a className="system-card__link" href={product.href} target="_blank" rel="noreferrer">
              <div className={`system-art system-art--${product.visual}`} aria-hidden="true">
                <span className="system-art__index">{product.number} / RYZENT</span>
                {product.visual === "theo" && (
                  <div className="theo-orb"><span /><i /><b /></div>
                )}
                {product.visual === "ryu" && (
                  <div className="ryu-emblem"><span /><i /><b /></div>
                )}
                {product.visual === "forgotten" && (
                  <div className="forgotten-gate"><span /><i /><b /></div>
                )}
                <span className="system-art__status">{product.status}</span>
              </div>
              <div className="system-card__body">
                <div className="system-card__meta"><span>{product.type}</span><ArrowUpRight /></div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span className="system-card__link-label">EXPLORE REPOSITORY <span>↗</span></span>
              </div>
            </a>
          </article>
        ))}
      </div>
      <p className="section-note"><span className="section-note__mark">↳</span> These systems are actively being developed. Follow their repositories for progress and releases.</p>
    </section>

    <section className="experiment-section" id="experiments" aria-labelledby="experiments-title">
      <div className="experiment-panel">
        <div className="experiment-panel__visual" aria-hidden="true">
          <div className="experiment-grid-lines" />
          <div className="experiment-prism">
            <span /><i /><b />
          </div>
          <div className="experiment-readout experiment-readout--a">VECTOR / 003</div>
          <div className="experiment-readout experiment-readout--b">FORM IN FLUX</div>
        </div>
        <div className="experiment-panel__copy">
          <p className="section-kicker"><span>02</span> / THE LABORATORY</p>
          <h2 id="experiments-title">Curiosity is<br />a <em>technical skill.</em></h2>
          <p>Not every idea needs to become a product. Some deserve to be explored, pulled apart and pushed somewhere unfamiliar.</p>
          <div className="experiment-tags">
            <span>Spatial interfaces</span>
            <span>Procedural visuals</span>
            <span>Interaction studies</span>
            <span>Mobile systems</span>
          </div>
        </div>
      </div>
    </section>

    <section className="content-section studio-section" id="studio" aria-labelledby="studio-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker"><span>03</span> / THE STUDIO</p>
          <h2 id="studio-title">Small by design.<br /><em>Unbounded by default.</em></h2>
        </div>
        <p className="section-intro">Ryzent is an independent software studio built around a simple belief: technology should make room for ideas that haven't found their shape yet.</p>
      </div>
      <div className="principles-grid">
        <article className="principle-card">
          <span>01</span><h3>Intent over noise.</h3>
          <p>Every interaction, line of code and visual decision should have a reason to exist.</p>
        </article>
        <article className="principle-card">
          <span>02</span><h3>Experiment without fear.</h3>
          <p>We explore unfamiliar tools and unusual approaches to find better ways forward.</p>
        </article>
        <article className="principle-card">
          <span>03</span><h3>Build for people.</h3>
          <p>Ambitious engineering means little unless the result is useful, accessible and considered.</p>
        </article>
      </div>
    </section>

    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-orbit" aria-hidden="true" />
      <div className="contact-copy">
        <p className="section-kicker"><span>04</span> / ESTABLISH CONTACT</p>
        <h2 id="contact-title">Have an idea<br />that feels <em>impossible?</em></h2>
        <p>Good. That's usually where the interesting work begins.</p>
        <a className="button-primary" href={CONTACT_HREF} target={CONTACT_EMAIL ? undefined : "_blank"} rel={CONTACT_EMAIL ? undefined : "noreferrer"}>
          {CONTACT_LABEL} <ArrowUpRight />
        </a>
      </div>
      <div className="contact-code" aria-hidden="true">
        <span>RYZENT / OPEN CHANNEL</span>
        <span className="contact-code__line" />
        <span>TRANSMISSION READY</span>
        <span>END OF SIGNAL_</span>
      </div>
    </section>

    <footer className="site-footer">
      <a className="brand-lockup brand-lockup--footer" href="#top">
        <span className="brand-lockup__mark">
          <Image src="/brand/ryzent-emblem.svg" alt="" width={361} height={282} />
        </span>
        <span className="brand-lockup__wordmark">
          <Image src="/brand/ryzent-wordmark.svg" alt="Ryzent" width={815} height={88} />
        </span>
        <span className="brand-lockup__tag">/ STUDIO</span>
      </a>
      <p>Engineer the unexpected.</p>
      <div className="footer-meta"><span>© {new Date().getFullYear()} RYZENT</span><span>INDEPENDENT SOFTWARE STUDIO</span><a href="https://github.com/Kentaakakashi" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight /></a></div>
    </footer>
  </main>
);
