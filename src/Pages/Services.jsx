import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
// Aap yahan apni services ki koi bhi image replace kar sakte hain
import serviceHeroImg from "../assets/Images/office.png"; 

/* ── scroll reveal hook (Same as your About Us) ── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const services = [
  {
    num: "01",
    title: "Product Development",
    desc: "We build fast, responsive apps and websites that deliver seamless performance and a powerful user experience across all devices.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Digital Marketing",
    desc: "We drive business growth through result-driven digital marketing strategies that increase visibility, traffic, and conversions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "E-Commerce Solutions",
    desc: "We build high-performing eCommerce solutions that enhance user experience, boost sales, and scale your online business.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "AI-Powered Solutions",
    desc: "We leverage advanced AI technologies to automate processes, enhance decision-making, and drive smarter, scalable business growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    num: "05",
    title: "Complete RCM",
    desc: "We deliver end-to-end RCM solutions that optimize your revenue cycle, reduce denials, and maximize collections.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    num: "06",
    title: "Cloud & DevOps",
    desc: "We design scalable cloud architectures and streamlined DevOps pipelines that boost reliability, speed, and deployment efficiency.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();
  const [heroRef, heroVis] = useInView(0.1);

  return (
    <section className="svc-master-root">
      <style>{`
        .svc-master-root {
          font-family: 'Inter', sans-serif;
          background: #f5f7f0;
          overflow-x: hidden;
        }

        :root {
          --svc-lime: #b8d400;
          --svc-lime-dark: #8fa300;
          --svc-ink: #162238;
          --svc-muted: #6b7280;
          --svc-border: #e5e7eb;
        }

        /* ════════════════════════════
           NEW HERO SECTION (Inspired by About Us)
        ════════════════════════════ */
        .svc-hero {
          background: #f5f7f0;
          padding: 120px 6vw 72px;
          display: flex;
          align-items: center;
          gap: 6vw;
          position: relative;
          overflow: hidden;
          min-height: 90vh;
        }
        .svc-hero-blob {
          position: absolute;
          top: -120px; right: -120px;
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(184,212,0,0.15) 0%, transparent 70%);
          border-radius: 50%;
          animation: svcBlobPulse 6s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes svcBlobPulse {
          0%,100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.15); opacity: 1; }
        }

        .svc-hero-left {
          flex: 1; position: relative; z-index: 1;
          opacity: 0; transform: translateX(-40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .svc-hero-left.vis { opacity: 1; transform: translateX(0); }

        .svc-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.12em; color: var(--svc-lime-dark);
          text-transform: uppercase; margin-bottom: 20px;
        }
        .svc-eyebrow::before, .svc-eyebrow::after {
          content: ''; display: block;
          height: 2px; width: 28px;
          background: var(--svc-lime); border-radius: 1px;
        }

        .svc-h1 {
          font-size: clamp(2.5rem, 5vw, 4.2rem);
          font-weight: 900; color: var(--svc-ink);
          line-height: 1.1; letter-spacing: -0.02em;
          margin-bottom: 24px;
        }
        .svc-h1 span { color: var(--svc-lime); }

        .svc-hero-body {
          font-size: 17px; color: var(--svc-muted);
          line-height: 1.8; max-width: 540px;
          margin-bottom: 40px;
        }

        .svc-hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }
        .svc-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--svc-lime); color: var(--svc-ink);
          font-weight: 700; font-size: 15px;
          padding: 14px 28px; border-radius: 50px;
          text-decoration: none; transition: 0.3s;
        }
        .svc-btn-primary:hover { background: var(--svc-lime-dark); transform: translateY(-3px); }

        .svc-hero-right {
          flex: 0 0 460px; position: relative; z-index: 1;
          opacity: 0; transform: translateX(40px);
          transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
        }
        .svc-hero-right.vis { opacity: 1; transform: translateX(0); }

        .svc-img-frame {
          position: relative; border-radius: 30px; overflow: hidden;
          aspect-ratio: 4/3; box-shadow: 0 30px 70px rgba(22,34,56,0.2);
        }
        .svc-img-frame img { width: 100%; height: 100%; object-fit: cover; }

        .svc-img-badge {
          position: absolute; bottom: -25px; right: -20px;
          background: var(--svc-ink); color: #fff;
          border-radius: 20px; padding: 20px 24px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
          animation: svcBadgeFloat 4s ease-in-out infinite;
        }
        @keyframes svcBadgeFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .svc-badge-num { font-size: 32px; font-weight: 900; color: var(--svc-lime); line-height: 1; }
        .svc-badge-txt { font-size: 13px; color: #ccc; margin-top: 5px; }

        /* ════════════════════════════
           EXISTING SERVICES GRID
        ════════════════════════════ */
        .svc-grid-section { padding: 100px 6vw; background: #fff; }
        .svc-head-minimal { text-align: center; margin-bottom: 60px; }
        .svc-head-minimal h2 { font-size: 2.5rem; font-weight: 900; color: var(--svc-ink); }
        .svc-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
          max-width: 1200px; margin: 0 auto;
        }
        .svc-card {
          background: #f8faf5; border: 1px solid rgba(0,0,0,.05);
          border-radius: 24px; padding: 40px 30px;
          position: relative; transition: 0.4s cubic-bezier(.22,1,.36,1);
          cursor: pointer;
        }
        .svc-card:hover {
          transform: translateY(-12px); background: #fff;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          border-color: var(--svc-lime);
        }
        .svc-icon-box {
          width: 60px; height: 60px; background: rgba(184,212,0,0.15);
          border-radius: 15px; display: flex; align-items: center; justify-content: center;
          margin-bottom: 25px; color: var(--svc-ink); transition: 0.3s;
        }
        .svc-card:hover .svc-icon-box { background: var(--svc-lime); }
        .svc-icon-box svg { width: 30px; height: 30px; stroke: currentColor; }
        
        .svc-card-title { font-size: 1.25rem; font-weight: 800; color: var(--svc-ink); margin-bottom: 12px; }
        .svc-card-desc { font-size: 15px; color: var(--svc-muted); line-height: 1.7; }
        .svc-card-num { 
          position: absolute; top: 30px; right: 30px; 
          font-size: 14px; font-weight: 900; color: rgba(184,212,0,0.4); 
        }

        /* CTA */
        .svc-cta-lite {
          margin-top: 80px; background: var(--svc-ink);
          border-radius: 24px; padding: 50px;
          display: flex; align-items: center; justify-content: space-between; gap: 30px;
        }
        .svc-cta-content h3 { color: #fff; font-size: 1.8rem; margin-bottom: 10px; }
        .svc-cta-content p { color: #aaa; max-width: 600px; }

        /* Responsive */
        @media (max-width: 1024px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
          .svc-hero-right { flex: 0 0 380px; }
        }
        @media (max-width: 860px) {
          .svc-hero { flex-direction: column; text-align: center; padding-top: 100px; }
          .svc-hero-left { order: 2; }
          .svc-hero-right { order: 1; flex: none; width: 100%; max-width: 450px; margin-bottom: 40px; }
          .svc-hero-body { margin: 0 auto 30px; }
          .svc-hero-btns { justify-content: center; }
          .svc-cta-lite { flex-direction: column; text-align: center; }
        }
        @media (max-width: 600px) {
          .svc-grid { grid-template-columns: 1fr; }
          .svc-h1 { font-size: 2.2rem; }
        }
      `}</style>

      {/* ══════════════ HERO SECTION (NEW) ══════════════ */}
      <section className="svc-hero" ref={heroRef}>
        <div className="svc-hero-blob" />
        
        <div className={`svc-hero-left${heroVis ? " vis" : ""}`}>
          <div className="svc-eyebrow">Our Expertise</div>
          <h1 className="svc-h1">
            Innovative IT Services <br />
            For Your <span>Digital Future</span>
          </h1>
          <p className="svc-hero-body">
            From custom software development to AI-driven strategies, we provide 
            cutting-edge technical solutions that help your business scale 
            efficiently in today’s fast-paced digital world.
          </p>
          <div className="svc-hero-btns">
            <button onClick={() => navigate("/contact")} className="svc-btn-primary">
              Get Started Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={`svc-hero-right${heroVis ? " vis" : ""}`}>
          <div className="svc-img-frame">
            <img src={serviceHeroImg} alt="Our Services" />
          </div>
          <div className="svc-img-badge">
            <div className="svc-badge-num">100%</div>
            <div className="svc-badge-txt">Quality Delivery <br />& Client Support</div>
          </div>
        </div>
      </section>

      {/* ══════════════ SERVICES GRID ══════════════ */}
      <section className="svc-grid-section">
        <div className="svc-head-minimal">
          <h2>Professional IT Solutions</h2>
          <div style={{width: 50, height: 4, background: 'var(--svc-lime)', margin: '15px auto'}}></div>
        </div>

        <div className="svc-grid">
          {services.map((s, i) => (
            <div
              className="svc-card"
              key={s.num}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="svc-card-num">{s.num}</div>
              <div className="svc-icon-box">{s.icon}</div>
              <div className="svc-card-title">{s.title}</div>
              <p className="svc-card-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* ══════════════ CTA SECTION ══════════════ */}
        <div className="svc-cta-lite">
          <div className="svc-cta-content">
            <h3>Ready to scale your business?</h3>
            <p>Let's discuss how our custom IT solutions can streamline your operations and maximize your revenue growth.</p>
          </div>
          <button onClick={() => navigate("/contact")} className="svc-btn-primary" style={{color: '#162238'}}>
            Let's Work Together <span>↗</span>
          </button>
        </div>
      </section>
    </section>
  );
}