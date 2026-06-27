import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  return (
    <section className="svc-section">
      <style>{`
      .svc-section *{
    box-sizing:border-box;
}

        .svc-section {
          position: relative;
          overflow: hidden;
          background: #f7f9f2;
          padding: 100px 24px 80px;
          font-family: Inter, Segoe UI, sans-serif;
        }

        /* ── blobs ── */
        .svc-blob1, .svc-blob2 {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
        .svc-blob1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(200,240,0,.35), transparent 70%);
          top: -160px; left: -180px;
          filter: blur(60px);
          animation: svcPulse 7s ease-in-out infinite;
        }
        .svc-blob2 {
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(200,240,0,.22), transparent 70%);
          bottom: -140px; right: -140px;
          filter: blur(50px);
          animation: svcPulse 9s ease-in-out infinite reverse;
        }

        /* ── badge ── */
        .svc-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 999px;
          background: rgba(200,240,0,.18);
          border: 1px solid rgba(200,240,0,.6);
          font-weight: 700;
          font-size: .9rem;
          color: #3a4a00;
          margin-bottom: 28px;
          animation: svcFadeDown .7s ease both;
        }
        .svc-badge svg {
          width: 16px; height: 16px;
          stroke: #8aaf00;
        }

        /* ── heading ── */
        .svc-wrap {
         width:100%;
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .svc-head {
          text-align: center;
          margin-bottom: 64px;
          animation: svcFadeDown .8s ease both;
        }
        .svc-head h2 {
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 900;
          color: #17203b;
          line-height: 1.15;
        }
        .svc-head h2 span { color: #a8d000; }
        .svc-head p {
          margin-top: 16px;
          color: #667085;
          font-size: clamp(.95rem, 1.5vw, 1.1rem);
          line-height: 1.8;
        }
        .svc-divider {
          width: 56px; height: 4px;
          background: #c8f000;
          border-radius: 99px;
          margin: 18px auto 0;
        }

        /* ── grid ── */
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* ── card ── */
        .svc-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,.07);
          border-radius: 24px;
          padding: 32px 28px 28px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform .35s cubic-bezier(.22,1,.36,1),
                      box-shadow .35s ease,
                      border-color .35s ease;
          animation: svcCardIn .6s ease both;
        }
        .svc-card:nth-child(1){animation-delay:.05s}
        .svc-card:nth-child(2){animation-delay:.12s}
        .svc-card:nth-child(3){animation-delay:.19s}
        .svc-card:nth-child(4){animation-delay:.26s}
        .svc-card:nth-child(5){animation-delay:.33s}
        .svc-card:nth-child(6){animation-delay:.40s}

        .svc-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 24px 60px rgba(0,0,0,.10);
          border-color: rgba(200,240,0,.5);
        }

        /* shimmer on hover */
        .svc-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg,
            transparent 30%,
            rgba(200,240,0,.12) 50%,
            transparent 70%);
          transform: translateX(-100%);
          transition: transform .55s ease;
        }
        .svc-card:hover::before {
          transform: translateX(100%);
        }

        /* active card highlight */
        .svc-card.svc-active {
          border-color: #c8f000;
          box-shadow: 0 0 0 3px rgba(200,240,0,.25), 0 24px 60px rgba(0,0,0,.10);
        }

        .svc-icon-wrap {
          width: 64px; height: 64px;
          border-radius: 50%;
          background: rgba(200,240,0,.15);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 22px;
          transition: background .3s, transform .3s;
        }
        .svc-card:hover .svc-icon-wrap {
          background: #c8f000;
          transform: rotate(-8deg) scale(1.1);
        }
        .svc-icon-wrap svg {
          width: 28px; height: 28px;
          stroke: #3a5000;
          transition: stroke .3s;
        }
        .svc-card:hover .svc-icon-wrap svg { stroke: #17203b; }

        .svc-card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #17203b;
          margin-bottom: 10px;
        }
        .svc-card-divider {
          width: 32px; height: 3px;
          background: #c8f000;
          border-radius: 99px;
          margin-bottom: 14px;
          transition: width .3s;
        }
        .svc-card:hover .svc-card-divider { width: 52px; }

        .svc-card-desc {
          font-size: .93rem;
          color: #667085;
          line-height: 1.8;
        }

        .svc-num {
          position: absolute;
          bottom: 18px; right: 22px;
          font-size: 1.1rem;
          font-weight: 800;
          color: rgba(200,240,0,.55);
          letter-spacing: 1px;
          transition: color .3s;
        }
        .svc-card:hover .svc-num { color: #a8d000; }

        /* ── bottom CTA banner ── */
        .svc-cta {
          margin-top: 56px;
          border-radius: 24px;
          background: linear-gradient(135deg, #f0ffe0, #e8f5c0);
          border: 1px solid rgba(200,240,0,.4);
          padding: 32px 36px;
          display: flex;
          align-items: center;
          gap: 28px;
          animation: svcFadeUp .8s .4s ease both;
        }
        .svc-cta-icon {
          flex-shrink: 0;
          width: 72px; height: 72px;
          border-radius: 50%;
          background: #17203b;
          display: flex; align-items: center; justify-content: center;
        }
        .svc-cta-icon svg {
          width: 32px; height: 32px;
          stroke: #c8f000;
        }
        .svc-cta-text { flex: 1; }
        .svc-cta-text p {
          font-size: .97rem;
          color: #445000;
          line-height: 1.8;
        }
        .svc-cta-text p a {
          color: #6a9000;
          font-weight: 700;
          text-decoration: none;
        }
        .svc-cta-btn {
          flex-shrink: 0;
          padding: 14px 26px;
          border-radius: 14px;
          background: #17203b;
          color: #c8f000;
          font-weight: 800;
          font-size: .97rem;
          border: none;
          cursor: pointer;
          display: flex; align-items: center; gap: 8px;
          transition: transform .3s, box-shadow .3s;
          white-space: nowrap;
        }
        .svc-cta-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,.15);
        }

        /* ── keyframes ── */
        @keyframes svcFadeDown {
          from { opacity:0; transform:translateY(-20px) }
          to   { opacity:1; transform:none }
        }
        @keyframes svcFadeUp {
          from { opacity:0; transform:translateY(20px) }
          to   { opacity:1; transform:none }
        }
        @keyframes svcCardIn {
          from { opacity:0; transform:translateY(30px) scale(.97) }
          to   { opacity:1; transform:none }
        }
        @keyframes svcPulse {
          0%,100% { transform:scale(1) }
          50%      { transform:scale(1.12) }
        }

        /* ── responsive ── */
        @media(max-width:1024px){
          .svc-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media(max-width:640px){
          .svc-section { padding:80px 16px 60px; }
          .svc-grid { grid-template-columns: 1fr; }
          .svc-cta {
            flex-direction: column;
            text-align: center;
          }
          .svc-cta-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="svc-blob1"></div>
      <div className="svc-blob2"></div>

      <div className="svc-wrap">

        {/* heading */}
        <div className="svc-head">
          <div className="svc-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2L12 2z"/>
            </svg>
            <span>Our Expertise</span>
          </div>
          <h2>Dealing in all Professional <span>IT Services</span></h2>
          <div className="svc-divider"></div>
          <p>Empowering your business with innovative IT solutions<br/>that drive growth and create value.</p>
        </div>

        {/* cards */}
        <div className="svc-grid">
          {services.map((s, i) => (
            <div
              className={`svc-card${hovered === i ? " svc-active" : ""}`}
              key={s.num}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="svc-icon-wrap">{s.icon}</div>
              <div className="svc-card-title">{s.title}</div>
              <div className="svc-card-divider"></div>
              <p className="svc-card-desc">{s.desc}</p>
              <span className="svc-num">{s.num}</span>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="svc-cta">
          <div className="svc-cta-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
          <div className="svc-cta-text">
            <p>
              <strong>ITTECHERA Pvt Ltd</strong> is a dynamic software house specializing in{" "}
              <a href="#">web development</a>, <a href="#">mobile app development</a>, and{" "}
              <a href="#">custom CRM dashboards & solutions</a>. We help businesses streamline
              operations, improve customer management, and scale through smart digital products.
            </p>
          </div>
          <button
  className="svc-cta-btn"
  onClick={() => navigate("/contact")}
>
  Let's Work Together <span>↗</span>
</button>
        </div>

      </div>
    </section>
  );
}