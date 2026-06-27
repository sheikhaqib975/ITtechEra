import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    year: "2022",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2l11-11a2.12 2.12 0 0 0-3-3z" />
        <path d="m15 5 3 3" />
        <path d="M9 19l1-1" />
        <path d="M19 9l1-1" />
        <path d="M3 15l1 1" />
      </svg>
    ),
    title: "Foundation & Vision",
    desc: "Laid the foundation with a vision to create impact through technology.",
  },
  {
    year: "22-26",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <polyline points="3 7 9 1 15 7 21 1" />
      </svg>
    ),
    title: "Successful Projects Journey",
    desc: "Completed multiple successful projects across diverse industries.",
  },
  {
    year: "2026",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="36" height="36">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        <line x1="12" y1="9" x2="12" y2="7" />
        <line x1="12" y1="17" x2="12" y2="15" />
        <line x1="9" y1="12" x2="11" y2="12" />
        <line x1="13" y1="12" x2="15" y2="12" />
      </svg>
    ),
    title: "Growth & Ongoing Innovation",
    desc: "Continuously innovating to deliver smarter & scalable digital solutions.",
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function MilestoneCard({ m, index }) {
  const [ref, visible] = useInView(0.15);
  return (
    <div
      ref={ref}
      className="milestone-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(60px)",
        transition: `opacity 0.6s ease ${index * 0.18}s, transform 0.6s ease ${index * 0.18}s`,
      }}
    >
      <div className="year-bubble">
        <span className="year-text">{m.year}</span>
        <div className="connector-dot" />
      </div>
      <div className="card-body">
        <div className="icon-circle">{m.icon}</div>
        <div className="card-content">
          <h3 className="card-title">{m.title}</h3>
          <p className="card-desc">{m.desc}</p>
        </div>
        <div className="arrow-btn">›</div>
      </div>
    </div>
  );
}

export default function App() {
  const [heroRef, heroVisible] = useInView(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Inter', sans-serif;
          background: #fff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .page {
          min-height: 100vh;
          background: #fff;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 60px 5vw 140px;
        }

        /* Background decorations */
        .bg-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 55%;
          height: 220px;
          z-index: 0;
        }
        .bg-arc {
          position: absolute;
          top: 0;
          right: 0;
          width: 260px;
          height: 260px;
          z-index: 0;
          opacity: 0.35;
        }
        .dot-grid {
          position: absolute;
          right: 4%;
          bottom: 60px;
          display: grid;
          grid-template-columns: repeat(6, 8px);
          gap: 8px;
          z-index: 0;
        }
        .dot-grid span {
          width: 4px; height: 4px;
          background: #b8d400;
          border-radius: 50%;
          display: block;
          opacity: 0.5;
        }
        .float-circle {
          position: absolute;
          border-radius: 50%;
          border: 2px solid #b8d400;
          opacity: 0.25;
          z-index: 0;
          animation: floatCircle 5s ease-in-out infinite;
        }
        @keyframes floatCircle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .content-wrapper {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 6vw;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* Left column */
        .left-col {
          flex: 0 0 auto;
          width: 380px;
          max-width: 45vw;
        }

        .logo {
          display: flex;
          align-items: stretch;
          gap: 10px;
          margin-bottom: 40px;
        }
        .logo-bar {
          width: 4px;
          background: #1c2238;
          border-radius: 2px;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        .logo-name {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: #1c2238;
          line-height: 1.2;
        }
        .logo-sub {
          font-size: 12px;
          font-weight: 500;
          color: #444;
          letter-spacing: 0.04em;
        }

        .hero-label {
          display: block;
          font-family: 'Georgia', 'Times New Roman', serif;
          font-style: italic;
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          color: #b8d400;
          font-weight: 400;
          line-height: 1;
          margin-bottom: 4px;
        }
        .hero-title {
          font-size: clamp(3rem, 6.5vw, 5.2rem);
          font-weight: 900;
          color: #1c2238;
          line-height: 1;
          letter-spacing: -0.02em;
          margin-bottom: 14px;
        }
        .hero-rule {
          width: 56px;
          height: 4px;
          background: #b8d400;
          border-radius: 2px;
          margin-bottom: 28px;
        }
        .hero-body {
          font-size: 16px;
          color: #1c2238;
          line-height: 1.7;
          max-width: 440px;
        }
        .hero-body .accent-green { color: #b8d400; font-weight: 600; }
        .hero-body .accent-yellow { color: #b8d400; font-weight: 600; }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 44px;
        }
        .contact-icon {
          width: 44px; height: 44px;
          background: #111;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .contact-email {
          font-size: 14px;
          color: #333;
          font-weight: 500;
        }

        /* Right column */
        .right-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
        }

        .timeline-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .milestone-card {
          display: flex;
          align-items: center;
          gap: 0;
          position: relative;
        }

        .year-bubble {
          position: relative;
          width: 100px;
          height: 100px;
          flex-shrink: 0;
          background: radial-gradient(circle at 35% 30%, #d4f000, #8baa00);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 6px rgba(184,212,0,0.18), 0 0 0 12px rgba(184,212,0,0.07);
          z-index: 2;
        }
        .year-bubble::before {
          content: '';
          position: absolute;
          inset: 6px;
          background: radial-gradient(circle at 35% 30%, #c8e800, #6e8a00);
          border-radius: 50%;
          z-index: -1;
        }
        .year-text {
          font-size: 20px;
          font-weight: 900;
          color: #1c2238;
          
          text-align: center;
          line-height: 1.15;
          z-index: 1;
          letter-spacing: -0.01em;
        }
        .connector-dot {
          position: absolute;
          right: -8px;
          width: 14px; height: 14px;
          background: #fff;
          border: 3px solid #b8d400;
          border-radius: 50%;
          z-index: 3;
        }

        .card-body {
          flex: 1;
          background: #1c2238;
          border-radius: 0 50px 50px 0;
          margin-left: -12px;
          padding: 18px 20px 18px 36px;
          display: flex;
          align-items: center;
          gap: 16px;
          min-height: 80px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .card-body:hover {
          transform: translateX(6px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.25);
        }

        .icon-circle {
          width: 60px; height: 60px;
          background: rgba(255,255,255,0.07);
          border: 1.5px solid rgba(184,212,0,0.3);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #b8d400;
          flex-shrink: 0;
        }

        .card-content { flex: 1; }
        .card-title {
          font-size: 17px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
          letter-spacing: 0.01em;
        }
        .card-desc {
          font-size: 13px;
          color: #aaa;
          line-height: 1.5;
        }

        .arrow-btn {
          width: 36px; height: 36px;
          background: rgba(184,212,0,0.15);
          border: 1.5px solid rgba(184,212,0,0.4);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #b8d400;
          font-size: 20px;
          flex-shrink: 0;
          cursor: pointer;
          transition: background 0.2s ease;
          line-height: 1;
        }
        .arrow-btn:hover { background: rgba(184,212,0,0.3); }

        /* Dashed vertical connector between cards */
        .timeline-connector {
          position: absolute;
          left: 49px;
          top: 100px;
          width: 2px;
          z-index: 1;
          pointer-events: none;
        }
        .timeline-connector line {
          stroke: #555;
          stroke-width: 2;
          stroke-dasharray: 7 6;
        }

        /* Hero entrance animation */
        .left-col { 
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
        }
        .left-col.visible {
          opacity: 1;
          transform: translateX(0);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .page { flex-direction: column; padding: 40px 5vw 120px; align-items: flex-start; }
          .content-wrapper { flex-direction: column; gap: 48px; }
          .left-col { width: 100%; max-width: 100%; }
          .bg-wave { width: 100%; }
          .year-bubble { width: 80px; height: 80px; }
          .year-text { font-size: 16px; }
          .card-body { padding: 14px 16px 14px 28px; }
          .card-title { font-size: 15px; }
        }

        @media (max-width: 540px) {
          .page { padding: 32px 4vw 100px; }
          .year-bubble { width: 68px; height: 68px; }
          .year-text { font-size: 14px; }
          .icon-circle { width: 44px; height: 44px; }
          .icon-circle svg { width: 24px; height: 24px; }
          .card-title { font-size: 13px; }
          .card-desc { font-size: 11px; }
          .arrow-btn { width: 28px; height: 28px; font-size: 16px; }
          .timeline-connector { left: 33px; top: 68px; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="page">
        {/* Background SVG wave */}
        <svg className="bg-wave" viewBox="0 0 700 220" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 220 Q180 80 350 140 Q520 200 700 60 L700 220 Z" fill="#b8d400" opacity="0.22" />
          <path d="M0 220 Q150 110 320 160 Q490 210 700 100 L700 220 Z" fill="#b8d400" opacity="0.35" />
        </svg>

        {/* Top-right arc */}
        <svg className="bg-arc" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="260" cy="0" r="180" stroke="#b8d400" strokeWidth="2" fill="none"/>
          <circle cx="260" cy="0" r="130" stroke="#b8d400" strokeWidth="1.5" fill="none"/>
        </svg>

        {/* Dot grid */}
        <div className="dot-grid">
          {Array.from({length: 30}).map((_,i) => <span key={i}/>)}
        </div>

        {/* Floating circles */}
        <div className="float-circle" style={{width:22,height:22,top:'38%',left:'46%',animationDelay:'0s'}}/>
        <div className="float-circle" style={{width:14,height:14,top:'22%',left:'54%',animationDelay:'1.2s'}}/>
        <div className="float-circle" style={{width:32,height:32,bottom:'180px',left:'42%',animationDelay:'2.4s'}}/>

        <div className="content-wrapper">
          {/* LEFT */}
          <div ref={heroRef} className={`left-col${heroVisible ? ' visible' : ''}`}>
            {/* <div className="logo">
              <div className="logo-bar"/>
              <div className="logo-text">
                <span className="logo-name">ITTECHERA</span>
                <span className="logo-sub">PVT LTD</span>
              </div>
            </div> */}

            <span className="hero-label">Our</span>
            <h1 className="hero-title">Milestones</h1>
            <div className="hero-rule"/>

            <p className="hero-body">
              Since we started, we've focused on delivering high-quality services and web development solutions.
              Each milestone reflects our commitment to{" "}
              <span className="accent-green">innovation</span>,{" "}client{" "}
              <span className="accent-yellow">satisfaction</span>,{" "}and continuous{" "}
              <span className="accent-green">growth</span>{" "}in the digital industry.
            </p>

            <div className="contact-row">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b8d400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <polyline points="2,4 12,13 22,4"/>
                </svg>
              </div>
              <span className="contact-email">contact@ittechera.co.uk</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="right-col">
            <div className="timeline-wrapper">
              {/* Dashed connector SVG between cards */}
              <svg className="timeline-connector" style={{height: '100%', position:'absolute'}} viewBox="0 0 2 220" preserveAspectRatio="none" height="220">
                <line x1="1" y1="0" x2="1" y2="220"/>
              </svg>
              {milestones.map((m, i) => (
                <MilestoneCard key={i} m={m} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
