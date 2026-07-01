import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { services } from "../Data/servicesData";

export default function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);

  // Find current service
  const service = services.find((x) => x.slug === slug);

  // Smooth scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!service) {
    return (
      <div className="svcd-notfound">
        <style>{`
          .svcd-notfound {
            min-height: 80vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 120px 24px;
            background: #0e1928;
            color: #fff;
            font-family: 'Inter', sans-serif;
            text-align: center;
          }
          .svcd-nf-title {
            font-size: 5rem;
            font-weight: 900;
            color: #b8d400;
            margin: 0 0 10px;
          }
          .svcd-nf-sub {
            font-size: 1.5rem;
            margin: 0 0 30px;
            color: #ccc;
          }
          .svcd-btn-back {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: #b8d400;
            color: #0e1928;
            font-weight: 700;
            padding: 14px 28px;
            border-radius: 50px;
            text-decoration: none;
            transition: 0.3s;
          }
          .svcd-btn-back:hover {
            background: #9bb500;
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(184, 212, 0, 0.3);
          }
        `}</style>
        <h1 className="svcd-nf-title">404</h1>
        <p className="svcd-nf-sub">We couldn't find the service you're looking for.</p>
        <Link to="/services" className="svcd-btn-back">
          ← Back to All Services
        </Link>
      </div>
    );
  }

  return (
    <div className="svcd-wrapper">
      <style>{`
        :root {
          --svcd-bg-dark: #0e1928;
          --svcd-bg-card: #162238;
          --svcd-text-light: #ffffff;
          --svcd-text-muted: #8892b0;
          --svcd-lime: #b8d400;
          --svcd-lime-rgb: 184, 212, 0;
          --svcd-ink: #162238;
          --svcd-border: rgba(184, 212, 0, 0.15);
        }

        .svcd-wrapper {
          background: #f8fafc;
          color: var(--svcd-ink);
          font-family: 'Inter', sans-serif;
          overflow: hidden;
          margin-top: 78px; /* Offset for floating navbar */
        }

        /* ══════════════ HERO SECTION ══════════════ */
        .svcd-hero {
          position: relative;
          background: radial-gradient(circle at 80% 20%, #1a2d48 0%, var(--svcd-bg-dark) 80%);
          padding: 80px 6vw;
          color: #fff;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .svcd-hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(14,25,40,0.85) 100%);
          z-index: 1;
        }

        .svcd-hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }

        .svcd-breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: var(--svcd-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 24px;
        }

        .svcd-breadcrumbs a {
          color: var(--svcd-text-muted);
          text-decoration: none;
          transition: 0.2s;
        }

        .svcd-breadcrumbs a:hover {
          color: var(--svcd-lime);
        }

        .svcd-breadcrumbs span.separator::before {
          content: "/";
          padding: 0 4px;
        }

        .svcd-breadcrumbs span.active {
          color: var(--svcd-lime);
        }

        .svcd-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(184, 212, 0, 0.12);
          border: 1px solid var(--svcd-border);
          color: var(--svcd-lime);
          font-size: 13px;
          font-weight: 700;
          padding: 6px 16px;
          border-radius: 30px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
        }

        .svcd-title-h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 1.1;
          margin: 0 0 20px;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #fff 30%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .svcd-hero-desc {
          font-size: clamp(16px, 2vw, 19px);
          line-height: 1.6;
          color: #cbd5e1;
          max-width: 800px;
          margin: 0;
        }

        /* ══════════════ STATS SECTION ══════════════ */
        .svcd-stats-section {
          background: var(--svcd-bg-dark);
          border-bottom: 1px solid rgba(184, 212, 0, 0.1);
          padding: 24px 6vw;
        }

        .svcd-stats-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .svcd-stat-card {
          display: flex;
          align-items: center;
          gap: 20px;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          padding: 10px 0;
        }

        .svcd-stat-card:last-child {
          border-right: none;
        }

        .svcd-stat-val {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 900;
          color: var(--svcd-lime);
          line-height: 1;
        }

        .svcd-stat-lbl {
          font-size: 14px;
          color: var(--svcd-text-muted);
          font-weight: 500;
          line-height: 1.3;
        }

        /* ══════════════ CONTENT LAYOUT ══════════════ */
        .svcd-layout-container {
          max-width: 1200px;
          margin: 60px auto 100px;
          padding: 0 6vw;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 50px;
        }

        /* ── Main content (Left) ── */
        .svcd-main-panel {
          display: flex;
          flex-direction: column;
          gap: 50px;
        }

        .svcd-sec-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--svcd-ink);
          margin: 0 0 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .svcd-sec-title::before {
          content: "";
          display: block;
          width: 4px;
          height: 24px;
          background: var(--svcd-lime);
          border-radius: 4px;
        }

        .svcd-overview p {
          font-size: 17px;
          line-height: 1.8;
          color: #4a5568;
          margin: 0;
        }

        /* Features Cards Grid */
        .svcd-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .svcd-feature-card {
          background: #ffffff;
          padding: 30px;
          border-radius: 20px;
          border: 1px solid rgba(0, 0, 0, 0.04);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          transition: 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .svcd-feature-card:hover {
          transform: translateY(-5px);
          border-color: rgba(184, 212, 0, 0.4);
          box-shadow: 0 15px 30px rgba(22, 34, 56, 0.06);
        }

        .svcd-feature-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: rgba(184, 212, 0, 0.12);
          color: var(--svcd-lime);
          border-radius: 10px;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .svcd-feature-h3 {
          font-size: 17px;
          font-weight: 800;
          color: var(--svcd-ink);
          margin: 0 0 10px;
        }

        .svcd-feature-p {
          font-size: 14px;
          line-height: 1.6;
          color: #718096;
          margin: 0;
        }

        /* Timeline Process */
        .svcd-timeline {
          position: relative;
          padding-left: 36px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .svcd-timeline::before {
          content: "";
          position: absolute;
          left: 11px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: #e2e8f0;
        }

        .svcd-timeline-item {
          position: relative;
        }

        .svcd-tl-node {
          position: absolute;
          left: -36px;
          top: 4px;
          width: 24px;
          height: 24px;
          border-radius: 50px;
          background: #fff;
          border: 4px solid var(--svcd-lime);
          box-shadow: 0 0 0 4px rgba(184, 212, 0, 0.15);
          z-index: 2;
        }

        .svcd-tl-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .svcd-tl-step {
          font-size: 12px;
          font-weight: 800;
          color: var(--svcd-lime);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: rgba(184, 212, 0, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .svcd-tl-h3 {
          font-size: 17px;
          font-weight: 800;
          color: var(--svcd-ink);
          margin: 0;
        }

        .svcd-tl-desc {
          font-size: 15px;
          line-height: 1.6;
          color: #556070;
          margin: 0;
        }

        /* Tech Stack */
        .svcd-tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 16px;
        }

        .svcd-tech-tag {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 12px;
          padding: 16px;
          text-align: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.01);
          transition: 0.2s;
        }

        .svcd-tech-tag:hover {
          border-color: var(--svcd-lime);
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(22, 34, 56, 0.04);
        }

        .svcd-tech-name {
          font-size: 14px;
          font-weight: 700;
          color: var(--svcd-ink);
          display: block;
          margin-bottom: 4px;
        }

        .svcd-tech-cat {
          font-size: 11px;
          color: var(--svcd-text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        /* Accordion FAQ */
        .svcd-faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .svcd-faq-item {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.04);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.01);
        }

        .svcd-faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          text-align: left;
          font-size: 16px;
          font-weight: 700;
          color: var(--svcd-ink);
          transition: 0.2s;
        }

        .svcd-faq-question:hover {
          color: var(--svcd-lime);
        }

        .svcd-faq-icon {
          font-size: 18px;
          font-weight: 400;
          transition: transform 0.3s;
          color: var(--svcd-text-muted);
        }

        .svcd-faq-item.active .svcd-faq-icon {
          transform: rotate(45deg);
          color: var(--svcd-lime);
        }

        .svcd-faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.35s ease;
          padding: 0 24px;
          color: #5b6577;
          font-size: 14px;
          line-height: 1.7;
          border-top: 1px solid transparent;
        }

        .svcd-faq-item.active .svcd-faq-answer {
          max-height: 200px;
          padding: 0 24px 20px;
          border-top: 1px solid rgba(0, 0, 0, 0.03);
        }

        /* ── Sidebar Column (Right) ── */
        .svcd-sidebar {
          display: flex;
          flex-direction: column;
          gap: 30px;
          position: sticky;
          top: 110px;
          align-self: start;
        }

        .svcd-sb-widget {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(0, 0, 0, 0.04);
          padding: 30px 24px;
          box-shadow: 0 5px 25px rgba(22, 34, 56, 0.03);
        }

        .svcd-sb-title {
          font-size: 16px;
          font-weight: 800;
          color: var(--svcd-ink);
          margin: 0 0 20px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .svcd-sb-title::after {
          content: "";
          flex: 1;
          height: 1px;
          background: #edf2f7;
        }

        /* Sidebar Navigation Links */
        .svcd-nav-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .svcd-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border-radius: 14px;
          background: #f8fafc;
          text-decoration: none;
          color: #4a5568;
          font-weight: 700;
          font-size: 14px;
          border: 1px solid transparent;
          transition: 0.3s;
        }

        .svcd-nav-item:hover {
          background: #ffffff;
          border-color: rgba(184, 212, 0, 0.3);
          color: var(--svcd-ink);
          transform: translateX(4px);
        }

        .svcd-nav-item.active {
          background: var(--svcd-bg-dark);
          color: #ffffff;
          border-color: var(--svcd-bg-dark);
        }

        .svcd-nav-item.active .svcd-nav-arrow {
          color: var(--svcd-lime);
        }

        .svcd-nav-arrow {
          font-size: 14px;
          color: var(--svcd-text-muted);
          transition: 0.2s;
        }

        /* Sidebar Custom CTA */
        .svcd-cta-widget {
          background: linear-gradient(135deg, #162238 0%, #0e1928 100%);
          border-radius: 24px;
          padding: 40px 30px;
          color: #ffffff;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(14, 25, 40, 0.15);
          border: 1px solid rgba(184, 212, 0, 0.1);
        }

        .svcd-cta-widget::after {
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(184, 212, 0, 0.05);
          top: -50px;
          right: -50px;
        }

        .svcd-cta-h3 {
          font-size: 22px;
          font-weight: 800;
          line-height: 1.3;
          margin: 0 0 12px;
          color: #ffffff;
        }

        .svcd-cta-p {
          font-size: 14px;
          line-height: 1.6;
          color: #a0aec0;
          margin: 0 0 28px;
        }

        .svcd-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          background: var(--svcd-lime);
          color: var(--svcd-bg-dark);
          font-weight: 700;
          font-size: 15px;
          padding: 14px;
          border-radius: 50px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0 4px 15px rgba(184, 212, 0, 0.2);
        }

        .svcd-cta-btn:hover {
          background: #9bb500;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(184, 212, 0, 0.35);
        }

        /* ══════════════ RESPONSIVE ══════════════ */
        @media (max-width: 991px) {
          .svcd-layout-container {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-top: 40px;
          }
          .svcd-sidebar {
            position: static;
            width: 100%;
          }
          .svcd-stats-grid {
            gap: 20px;
          }
        }

        @media (max-width: 767px) {
          .svcd-stats-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          .svcd-stat-card {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding-bottom: 15px;
          }
          .svcd-stat-card:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
          .svcd-features-grid {
            grid-template-columns: 1fr;
          }
          .svcd-hero {
            padding: 60px 5vw;
          }
          .svcd-wrapper {
            margin-top: 70px;
          }
        }
      `}</style>

      {/* ══════════════ HERO SECTION ══════════════ */}
      <section className="svcd-hero">
        <div className="svcd-hero-content">
          <nav className="svcd-breadcrumbs">
            <Link to="/">Home</Link>
            <span className="separator"></span>
            <Link to="/services">Services</Link>
            <span className="separator"></span>
            <span className="active">{service.title}</span>
          </nav>
          <div className="svcd-badge">
            <span>Service {service.num}</span>
          </div>
          <h1 className="svcd-title-h1">{service.title}</h1>
          <p className="svcd-hero-desc">{service.desc}</p>
        </div>
      </section>

      {/* ══════════════ STATS BAR ══════════════ */}
      <section className="svcd-stats-section">
        <div className="svcd-stats-grid">
          {service.stats.map((st, i) => (
            <div className="svcd-stat-card" key={i}>
              <div className="svcd-stat-val">{st.value}</div>
              <div className="svcd-stat-lbl">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ TWO COLUMN LAYOUT ══════════════ */}
      <div className="svcd-layout-container">
        {/* Main Content Area (Left) */}
        <main className="svcd-main-panel">
          {/* Overview */}
          <section className="svcd-overview">
            <h2 className="svcd-sec-title">Service Overview</h2>
            <p>{service.fullDesc}</p>
          </section>

          {/* Features */}
          <section className="svcd-features">
            <h2 className="svcd-sec-title">Key Capabilities</h2>
            <div className="svcd-features-grid">
              {service.features.map((feat, i) => (
                <div className="svcd-feature-card" key={i}>
                  <div className="svcd-feature-num">{(i + 1).toString().padStart(2, "0")}</div>
                  <h3 className="svcd-feature-h3">{feat.title}</h3>
                  <p className="svcd-feature-p">{feat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="svcd-process">
            <h2 className="svcd-sec-title">How We Deliver</h2>
            <div className="svcd-timeline">
              {service.process.map((step, i) => (
                <div className="svcd-timeline-item" key={i}>
                  <div className="svcd-tl-node"></div>
                  <div className="svcd-tl-header">
                    <span className="svcd-tl-step">Phase {step.step}</span>
                    <h3 className="svcd-tl-h3">{step.title}</h3>
                  </div>
                  <p className="svcd-tl-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="svcd-tech">
            <h2 className="svcd-sec-title">Tech Stack & Tooling</h2>
            <div className="svcd-tech-grid">
              {service.techStack.map((tech, i) => (
                <div className="svcd-tech-tag" key={i}>
                  <span className="svcd-tech-name">{tech.name}</span>
                  <span className="svcd-tech-cat">{tech.category}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          {service.faqs && service.faqs.length > 0 && (
            <section className="svcd-faq">
              <h2 className="svcd-sec-title">Frequently Asked Questions</h2>
              <div className="svcd-faq-list">
                {service.faqs.map((faq, i) => (
                  <div className={`svcd-faq-item ${activeFaq === i ? "active" : ""}`} key={i}>
                    <button
                      className="svcd-faq-question"
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    >
                      <span>{faq.question}</span>
                      <span className="svcd-faq-icon">+</span>
                    </button>
                    <div className="svcd-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>

        {/* Sidebar Panel (Right) */}
        <aside className="svcd-sidebar">
          {/* Services Navigator */}
          <div className="svcd-sb-widget">
            <h3 className="svcd-sb-title">Our Services</h3>
            <div className="svcd-nav-links">
              {services.map((s) => (
                <Link
                  to={`/services/${s.slug}`}
                  className={`svcd-nav-item ${s.slug === slug ? "active" : ""}`}
                  key={s.slug}
                >
                  <span>{s.title}</span>
                  <span className="svcd-nav-arrow">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Widget */}
          <div className="svcd-cta-widget">
            <h3 className="svcd-cta-h3">Need custom solutions?</h3>
            <p className="svcd-cta-p">
              Let's build something great together. Discuss your business goals with our technical consultants today.
            </p>
            <button onClick={() => navigate("/contact")} className="svcd-cta-btn">
              Get Free Consultation ↗
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}