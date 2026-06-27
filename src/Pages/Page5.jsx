import React from "react";

const beliefs = [
  {
    title: "Integrity",
    text: "We build trust through transparency, accountability and ethical decision making.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l7 3v6c0 5-3.5 8.5-7 11-3.5-2.5-7-6-7-11V5l7-3z"/>
      </svg>
    )
  },
  {
    title: "Innovation",
    text: "We constantly explore modern technologies to create impactful solutions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2L12 2z"/>
      </svg>
    )
  },
  {
    title: "Passion",
    text: "We love building products that solve real business challenges.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21s-7-4.5-9-9a5.5 5.5 0 018.5-6L12 7l.5-1A5.5 5.5 0 0121 12c-2 4.5-9 9-9 9z"/>
      </svg>
    )
  },
  {
    title: "Growth",
    text: "We grow together with our clients through continuous improvement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14"/><path d="M13 5l7 7-7 7"/>
      </svg>
    )
  }
];

export default function WhatWeBelievePremium() {
  return (
    <section className="belief-section">
      <style>{`
        .belief-section, .belief-section *::before, .belief-section *::after {
          box-sizing: border-box; margin: 0; padding: 0;
        }
        .belief-section {
          position: relative;
          overflow: hidden;
          padding: 60px 20px 80px;
          background:
            radial-gradient(circle at 0% 0%, rgba(200,240,0,.15), transparent 25%),
            radial-gradient(circle at 100% 100%, rgba(200,240,0,.12), transparent 30%),
            linear-gradient(180deg, #f8fafc, #eef3f2);
          font-family: Inter, Segoe UI, sans-serif;
        }
        .belief-wrap { max-width: 1280px; margin: auto; width: 100%; }

        /* Left col has heading + para + btn stacked, right col has image */
        .belief-top {
          display: grid;
          grid-template-columns: 1fr minmax(0, 420px);
          gap: 56px;
          align-items: flex-start;
          margin-bottom: 52px;
        }

        .belief-left {
          display: flex;
          flex-direction: column;
        }

        .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          color: #86aa00; font-weight: 700; font-size: 12px;
          letter-spacing: 2px; text-transform: uppercase;
          margin-bottom: 14px;
        }
        .eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #c8f000; flex-shrink: 0;
        }
        .belief-h2 {
          font-size: clamp(2.8rem, 5vw, 4.8rem);
          line-height: 1; color: #162238;
          margin-bottom: 24px;
        }
        .lead {
          color: #617084; line-height: 1.9;
          margin-bottom: 28px;
        }
        .btn {
          display: inline-block; padding: 14px 24px;
          border-radius: 14px; text-decoration: none;
          background: #162238; color: #fff; font-weight: 700;
          transition: .3s; width: fit-content;
        }
        .btn:hover { transform: translateY(-4px); }

        .image-card {
          width: 100%;
          padding: 14px; border-radius: 28px;
          background: rgba(255,255,255,.55);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,.75);
          box-shadow: 0 18px 40px rgba(0,0,0,.08);
        }
        .image-card img {
          display: block; width: 100%;
          aspect-ratio: 4/5; object-fit: cover; border-radius: 18px;
        }

        /* 4 cards */
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
        }
        .card {
          background: rgba(255,255,255,.6);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,.8);
          border-radius: 22px; padding: 24px; transition: .3s;
        }
        .card:hover { transform: translateY(-8px); box-shadow: 0 18px 35px rgba(0,0,0,.1); }
        .icon {
          width: 60px; height: 60px; border-radius: 18px;
          background: rgba(200,240,0,.15);
          display: flex; align-items: center; justify-content: center;
          color: #7da400; transition: .3s; margin-bottom: 18px;
        }
        .icon svg { width: 28px; height: 28px; }
        .card:hover .icon { background: #c8f000; color: #fff; transform: rotate(-8deg); }
        .card h3 { margin: 0 0 10px; color: #162238; }
        .card p { margin: 0; color: #667487; line-height: 1.8; }

        @media(max-width:992px) {
          .belief-section { padding: 50px 18px 70px; }
          .belief-top { grid-template-columns: 1fr; gap: 32px; }
          .image-card { max-width: 480px; }
        }
        @media(max-width:640px) {
          .belief-section { padding: 40px 14px 60px; }
          .belief-h2 { font-size: 2.5rem; }
          .btn { width: 100%; text-align: center; }
          .cards { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="belief-wrap">

        <div className="belief-top">

          {/* LEFT — eyebrow, heading, paragraph, button — sab ek saath */}
          <div className="belief-left">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              Our Core Beliefs
            </div>
            <h2 className="belief-h2">What We Believe</h2>
            <p className="lead">
              We combine creativity, technology, and strategy to bring every idea to life. From the first concept to launch and beyond, ITTECHERA's approach is human-centered, goal-driven, and future-focused.
              <br/><br/>
              From the initial concept and planning stages to development, launch, and ongoing support, our approach remains collaborative, transparent, and focused on long-term success. We work closely with our clients to ensure every project aligns with their vision while remaining adaptable to changing business needs.
              <br/>
                 <br/>
              We believe that technology should simplify, not complicate — and every solution we create reflects that philosophy.
            </p>
            <a href="/about" className="btn">Learn More →</a>
          </div>

          {/* RIGHT — image */}
          <div className="image-card">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
              alt="Team"
            />
          </div>

        </div>

        {/* 4 cards */}
        <div className="cards">
          {beliefs.map((b) => (
            <div className="card" key={b.title}>
              <div className="icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}