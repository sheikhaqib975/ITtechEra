import React from "react";

/* ── 6 services data (same headings as reference, custom icons + new copy) ── */
const servicesList = [
  {
    title: "Product Development",
    desc: "We turn ideas into fast, reliable digital products with clean code and thoughtful design.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="8 6 2 12 8 18" />
        <polyline points="16 6 22 12 16 18" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    desc: "We craft data-backed marketing campaigns that grow reach, traffic, and real conversions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="20" x2="20" y2="4" />
        <polyline points="8 4 20 4 20 16" />
      </svg>
    ),
  },
  {
    title: "E-Commerce Solutions",
    desc: "We build seamless online stores designed to convert browsers into repeat customers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1.5" />
        <circle cx="18" cy="21" r="1.5" />
        <path d="M2 3h2l2.4 12.2a2 2 0 0 0 2 1.8h8.2a2 2 0 0 0 2-1.6L21 8H6" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Solutions",
    desc: "We embed intelligent automation into your workflows to save time and sharpen decisions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8" />
        <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
        <path d="M9 15c1 1 5 1 6 0" />
      </svg>
    ),
  },
  {
    title: "Complete RCM",
    desc: "We streamline your revenue cycle end-to-end to cut denials and speed up collections.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-3-6.7" />
        <polyline points="21 3 21 9 15 9" />
      </svg>
    ),
  },
  {
    title: "Cloud & DevOps",
    desc: "We architect scalable cloud systems and automated pipelines built for speed and uptime.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4 1.5A4 4 0 0 0 6 19h11.5z" />
      </svg>
    ),
  },
];

export default function ServicesCards() {
  return (
    <section className="svcx-wrap">
      <style>{`
        :root{
          --svcx-ink:#162238;
          --svcx-muted:#5b6577;
          --svcx-lime:#b8d400;
          --svcx-lime-dark:#9bb500;
        }
        .svcx-wrap{ background:#fff; color:var(--svcx-ink); }

        .svcx-section{ padding:100px 6vw; background:#fff; }
        .svcx-head{ text-align:center; margin-bottom:60px; }
        .svcx-head h2{
          font-size:clamp(2.4rem,5vw,3.6rem);
          font-weight:900;
          color:var(--svcx-ink);
          margin:0;
        }
        .svcx-head h2 span{ color:var(--svcx-lime); }

        .svcx-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:24px;
          max-width:1200px;
          margin:0 auto;
        }

        .svcx-card{
          background:#f8faf5;
          border:1px solid rgba(0,0,0,.05);
          border-radius:24px;
          padding:40px 30px;
          position:relative;
          transition:.4s cubic-bezier(.22,1,.36,1);
        }
        .svcx-card:hover{
          transform:translateY(-12px);
          background:#fff;
          box-shadow:0 20px 50px rgba(0,0,0,.08);
          border-color:var(--svcx-lime);
        }

        .svcx-icon-box{
          width:60px; height:60px;
          background:rgba(184,212,0,.15);
          border-radius:15px;
          display:flex; align-items:center; justify-content:center;
          margin-bottom:25px;
          color:var(--svcx-ink);
          transition:.3s;
        }
        .svcx-card:hover .svcx-icon-box{ background:var(--svcx-lime); }
        .svcx-icon-box svg{ width:30px; height:30px; stroke:currentColor; }

        .svcx-card-title{
          font-size:1.25rem;
          font-weight:800;
          color:var(--svcx-ink);
          margin:0 0 12px;
        }
        .svcx-card-desc{
          font-size:15px;
          color:var(--svcx-muted);
          line-height:1.7;
          margin:0;
        }

        @media (max-width:1024px){
          .svcx-grid{ grid-template-columns:repeat(2,1fr); }
        }

        @media (max-width:600px){
          .svcx-grid{ grid-template-columns:1fr; }
          .svcx-section{ padding:70px 5vw; }
        }
      `}</style>

      <div className="svcx-section">
        <div className="svcx-head">
          <h2>Our <span>Services</span></h2>
        </div>

        <div className="svcx-grid">
          {servicesList.map((s, i) => (
            <div className="svcx-card" key={i}>
              <div className="svcx-icon-box">{s.icon}</div>
              <h3 className="svcx-card-title">{s.title}</h3>
              <p className="svcx-card-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
