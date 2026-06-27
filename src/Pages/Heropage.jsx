import { useEffect, useRef, useState } from "react";
// import Navbar from "../Components/Navbar";
import heroImg from "../assets/Images/heroimg.png";

/* ── Animated counter ─────────────────────────────────────────────── */
function useCounter(target, duration = 2000, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return val;
}

/* ── Floating particle canvas ─────────────────────────────────────── */
function Particles() {
  const handleExploreClick = (e) => {
  e.preventDefault();
  const el = document.getElementById("page6");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    let id;
    const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * c.width, y: Math.random() * c.height,
      r: Math.random() * 1.5 + 0.4,
      dx: (Math.random() - 0.5) * 0.3, dy: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.5 + 0.15, p: Math.random() * Math.PI * 2,
    }));
    const loop = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      pts.forEach(pt => {
        pt.x += pt.dx; pt.y += pt.dy; pt.p += 0.018;
        if (pt.x < 0 || pt.x > c.width) pt.dx *= -1;
        if (pt.y < 0 || pt.y > c.height) pt.dy *= -1;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(198,241,53,${pt.a * (0.5 + 0.5 * Math.sin(pt.p))})`;
        ctx.shadowBlur = 6; ctx.shadowColor = "#C6F135";
        ctx.fill();
      });
      id = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none", zIndex:3 }} />;
}

/* ── Main component ───────────────────────────────────────────────── */
export default function HeroSection() {
  const [go, setGo] = useState(false);
  const [statsGo, setStatsGo] = useState(false);
  const statsRef = useRef(null);

  const p1 = useCounter(150, 1800, statsGo);
  const p2 = useCounter(50,  1600, statsGo);
  const p3 = useCounter(4,   1200, statsGo);

  useEffect(() => { const t = setTimeout(() => setGo(true), 60); return () => clearTimeout(t); }, []);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsGo(true); }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Inter:wght@400;500;600;700&display=swap');

        /* ── Keyframes — all prefixed itcH so they never leak ── */
        @keyframes itcHFadeUp   { from { opacity:0; transform:translateY(36px); } to { opacity:1; transform:translateY(0); } }
        @keyframes itcHFadeLeft { from { opacity:0; transform:translateX(-44px); } to { opacity:1; transform:translateX(0); } }
        @keyframes itcHPop      { from { opacity:0; transform:scale(0.75); } to { opacity:1; transform:scale(1); } }
        @keyframes itcHGlow     { 0%,100% { box-shadow:0 0 18px #C6F13566,0 0 40px #C6F13522; } 50% { box-shadow:0 0 32px #C6F135bb,0 0 80px #C6F13544; } }
        @keyframes itcHScroll   { 0%,100% { transform:translateY(0); opacity:1; } 50% { transform:translateY(7px); opacity:0.3; } }
        @keyframes itcHScan     { 0% { top:0; } 100% { top:100%; } }
        @keyframes itcHShimmer  { from { left:-100%; } to { left:120%; } }
        @keyframes itcHDotPulse { 0%,100% { opacity:1; box-shadow:0 0 6px #C6F135; } 50% { opacity:0.5; box-shadow:0 0 14px #C6F135; } }

        /* ── Root wrapper — ALL styles scoped here ── */
        .itcH {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          color: #fff;
          display: flex;
          flex-direction: column;
        }

        /* Scoped reset — never touches outside elements */
        .itcH *, .itcH *::before, .itcH *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Full-bleed background image ── */
        .itcH__bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          z-index: 0;
        }

        /* Dark overlay so text is legible */
        .itcH__overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to right, rgba(3,8,18,0.92) 0%, rgba(3,8,18,0.70) 50%, rgba(3,8,18,0.15) 100%),
            linear-gradient(to top,   rgba(3,8,18,0.95) 0%, transparent 40%);
          z-index: 1;
        }

        /* Subtle grid lines */
        .itcH__grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(198,241,53,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(198,241,53,0.035) 1px, transparent 1px);
          background-size: 64px 64px;
          z-index: 2;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%);
        }

        /* Scan line */
        .itcH__scan {
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(198,241,53,0.18) 50%, transparent 100%);
          animation: itcHScan 7s linear infinite;
          z-index: 4;
          pointer-events: none;
        }

        /* ── Content layer ── */
        .itcH__wrap {
          position: relative;
          z-index: 10;
          flex: 1;
          display: flex;
          flex-direction: column;
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          padding: 0 48px;
        }

        /* ── Hero body (fills space between navbar and stats) ── */
        .itcH__body {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 40px 0 32px;
        }

        /* ── Left text column ── */
        .itcH__left {
          max-width: 580px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        /* Badge pill */
        .itcH__badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(198,241,53,0.1);
          border: 1px solid rgba(198,241,53,0.35);
          border-radius: 100px;
          padding: 7px 18px;
          width: fit-content;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2.5px;
          color: #C6F135;
          text-transform: uppercase;
          opacity: 0;
        }

        .itcH__badge-dot {
          display: inline-block;
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #C6F135;
          flex-shrink: 0;
          animation: itcHDotPulse 1.8s ease-in-out infinite;
        }

        /* Main headline */
        .itcH__h1 {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(60px, 7.5vw, 112px);
          line-height: 0.92;
          letter-spacing: -1px;
          text-transform: uppercase;
          opacity: 0;
        }

        .itcH__h1 span { display: block; }
        .itcH__h1--white { color: #fff; }
        .itcH__h1--green {
          color: #C6F135;
          text-shadow: 0 0 50px rgba(198,241,53,0.45), 0 0 100px rgba(198,241,53,0.15);
        }

        /* Divider dashes */
        .itcH__divider {
          display: flex;
          gap: 6px;
          opacity: 0;
        }

        .itcH__dash {
          width: 28px; height: 3px;
          border-radius: 2px;
          background: #C6F135;
        }

        .itcH__dash:last-child { width: 14px; background: rgba(198,241,53,0.4); }

        /* Description */
        .itcH__desc {
          font-size: 16px;
          line-height: 1.75;
          color: rgba(255,255,255,0.62);
          max-width: 460px;
          opacity: 0;
        }

        /* CTA row */
        .itcH__ctas {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          opacity: 0;
        }

        .itcH__btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #C6F135;
          color: #050A14;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.3px;
          padding: 15px 30px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          line-height: 1;
          position: relative;
          overflow: hidden;
          transition: transform 0.22s, box-shadow 0.22s;
          animation: itcHGlow 2.5s ease-in-out infinite;
        }

        .itcH__btn-primary::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
        }

        .itcH__btn-primary:hover::after { animation: itcHShimmer 0.5s ease forwards; }
        .itcH__btn-primary:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 10px 36px rgba(198,241,53,0.5); }

        .itcH__btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.05);
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 14px;
          padding: 14px 26px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.18);
          cursor: pointer;
          text-decoration: none;
          line-height: 1;
          backdrop-filter: blur(8px);
          transition: border-color 0.22s, background 0.22s, transform 0.22s;
        }

        .itcH__btn-secondary:hover {
          border-color: rgba(198,241,53,0.5);
          background: rgba(198,241,53,0.07);
          transform: translateY(-2px);
        }

        .itcH__play {
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.35);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        /* ── Stats bar ── */
        .itcH__stats {
          position: relative;
          z-index: 10;
          background: rgba(10,16,30,0.82);
          border: 1px solid rgba(198,241,53,0.12);
          border-radius: 16px;
          margin: 0 0 0 0;
          padding: 26px 40px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          opacity: 0;
        }

        .itcH__stat {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 0 24px;
          border-right: 1px solid rgba(255,255,255,0.07);
        }

        .itcH__stat:first-child { padding-left: 0; }
        .itcH__stat:last-child  { border-right: none; }

        .itcH__stat-icon {
          width: 50px; height: 50px;
          border-radius: 50%;
          border: 1px solid rgba(198,241,53,0.25);
          background: rgba(198,241,53,0.07);
          display: flex; align-items: center; justify-content: center;
          color: #C6F135;
          flex-shrink: 0;
        }

        .itcH__stat-body { display: flex; flex-direction: column; gap: 2px; }

        .itcH__stat-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #C6F135;
          line-height: 1;
        }

        .itcH__stat-label {
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          line-height: 1.3;
        }

        .itcH__stat-sub {
          font-size: 11px;
          color: rgba(255,255,255,0.38);
          line-height: 1.3;
        }

        /* ── Bottom bar (scroll + email) ── */
        .itcH__bar {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 48px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .itcH__scroll {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          letter-spacing: 2.5px;
          color: rgba(255,255,255,0.32);
          text-transform: uppercase;
        }

        .itcH__mouse {
          width: 20px; height: 33px;
          border: 1.5px solid rgba(255,255,255,0.2);
          border-radius: 10px;
          display: flex; justify-content: center;
          padding-top: 5px;
        }

        .itcH__wheel {
          width: 3px; height: 7px;
          border-radius: 2px;
          background: #C6F135;
          animation: itcHScroll 1.6s ease-in-out infinite;
        }

        .itcH__email {
          display: flex; align-items: center; gap: 8px;
          font-size: 12px;
          color: rgba(255,255,255,0.38);
          text-decoration: none;
          transition: color 0.2s;
        }

        .itcH__email:hover { color: #C6F135; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .itcH__wrap { padding: 0 32px; }
          .itcH__bar  { padding: 12px 32px; }
          .itcH__stats { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .itcH__stat  { padding: 12px; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
          .itcH__stat:nth-child(odd)  { border-right: 1px solid rgba(255,255,255,0.07); }
          .itcH__stat:nth-last-child(-n+2) { border-bottom: none; }
        }

        @media (max-width: 640px) {
          .itcH__wrap  { padding: 0 20px; }
          .itcH__bar   { padding: 10px 20px; }
          .itcH__stats { padding: 20px; }
          .itcH__ctas  { flex-direction: column; align-items: stretch; }
          .itcH__btn-primary,
          .itcH__btn-secondary { justify-content: center; }
          .itcH__overlay {
            background:
              linear-gradient(to right, rgba(3,8,18,0.96) 0%, rgba(3,8,18,0.85) 100%),
              linear-gradient(to top, rgba(3,8,18,0.97) 0%, transparent 50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .itcH *, .itcH *::before, .itcH *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="itcH">
        {/* ── Full-bleed background ── */}
        <img src={heroImg} alt="" aria-hidden="true" className="itcH__bg-img" />
        <div className="itcH__overlay" />
        <div className="itcH__grid" />
        <div className="itcH__scan" />
        <Particles />

        {/* ── Your Navbar (sits on top, z handled by its own styles) ── */}
        {/* <Navbar /> */}

        {/* ── Content wrapper ── */}
        <div className="itcH__wrap">

          {/* Hero body */}
          <div className="itcH__body">
            <div className="itcH__left">

              {/* Badge */}
              <div className="itcH__badge"
                style={{ animation: go ? "itcHPop 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.1s forwards" : "none" }}>
                <span className="itcH__badge-dot" />
                Innovate&nbsp;•&nbsp;Build&nbsp;•&nbsp;Elevate
              </div>

              {/* Headline */}
              <h1 className="itcH__h1"
                style={{ animation: go ? "itcHFadeLeft 0.8s cubic-bezier(0.22,1,0.36,1) 0.22s forwards" : "none" }}>
                <span className="itcH__h1--white">Building</span>
                <span className="itcH__h1--white">The Future</span>
                <span className="itcH__h1--green">Together</span>
              </h1>

              {/* Divider */}
              <div className="itcH__divider"
                style={{ animation: go ? "itcHFadeUp 0.6s ease 0.38s forwards" : "none" }}>
                <div className="itcH__dash" />
                <div className="itcH__dash" />
              </div>

              {/* Description */}
              <p className="itcH__desc"
                style={{ animation: go ? "itcHFadeUp 0.8s ease 0.44s forwards" : "none" }}>
                We design and develop smart digital solutions that empower
                businesses, inspire growth, and create lasting impact in a
                connected world.
              </p>

              {/* CTAs */}
              {/* <div className="itcH__ctas"
                style={{ animation: go ? "itcHFadeUp 0.8s ease 0.56s forwards" : "none" }}>
                <a href="#page6" className="itcH__btn-primary">
                  Explore Our Services
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div> */}

            </div>
          </div>

          {/* Stats bar */}
          {/* <div className="itcH__stats" ref={statsRef}
            style={{ animation: go ? "itcHFadeUp 0.8s ease 0.68s forwards" : "none" }}> */}

            {/* 150+ Projects */}
            {/* <div className="itcH__stat">
              <div className="itcH__stat-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div className="itcH__stat-body">
                <span className="itcH__stat-num">{p1}+</span>
                <span className="itcH__stat-label">Projects Delivered</span>
                <span className="itcH__stat-sub">Across the globe</span>
              </div>
            </div> */}

            {/* 50+ Clients */}
            {/* <div className="itcH__stat">
              <div className="itcH__stat-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div> 
               <div className="itcH__stat-body">
                <span className="itcH__stat-num">{p2}+</span>
                <span className="itcH__stat-label">Happy Clients</span>
                <span className="itcH__stat-sub">Growing every day</span>
              </div>
            </div> */}

            {/* 4+ Years */}
            {/* <div className="itcH__stat"> */}
              {/* <div className="itcH__stat-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div> */}
              {/* <div className="itcH__stat-body">
                <span className="itcH__stat-num">{p3}+</span>
                <span className="itcH__stat-label">Years of Excellence</span>
                <span className="itcH__stat-sub">Building trust</span>
              </div> */}
            {/* </div> */}

            {/* 100% Commitment */}
            {/* <div className="itcH__stat"> */}
              {/* <div className="itcH__stat-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div> */}
              {/* <div className="itcH__stat-body">
                <span className="itcH__stat-num">100%</span>
                <span className="itcH__stat-label">Commitment</span>
                <span className="itcH__stat-sub">To your success</span>
              </div>
            </div> */}

          {/* </div> */}
        </div>

        {/* ── Bottom bar ── */}
        <div className="itcH__bar">
          <div className="itcH__scroll">
            <div className="itcH__mouse">
              <div className="itcH__wheel" />
            </div>
            Scroll Down
          </div>
          <a href="mailto:contact@ittechera.co.uk" className="itcH__email">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            contact@ittechera.co.uk
          </a>
        </div>

      </div>
    </>
  );
}
