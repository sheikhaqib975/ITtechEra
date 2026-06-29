import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import serviceHeroImg from "../assets/Images/office2.png";

/* ── scroll reveal hook ── */
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
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Digital Marketing",
    desc: "We drive business growth through result-driven digital marketing strategies that increase visibility, traffic, and conversions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l18-8-8 18-2-8-8-2z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "E-Commerce Solutions",
    desc: "We build high-performing eCommerce solutions that enhance user experience, boost sales, and scale your online business.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "AI-Powered Solutions",
    desc: "We leverage advanced AI technologies to automate processes, enhance decision-making, and drive smarter, scalable business growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M9 9h.01M15 9h.01M9 15c1 1 2 1.5 3 1.5s2-.5 3-1.5" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Complete RCM",
    desc: "We deliver end-to-end RCM solutions that optimize your revenue cycle, reduce denials, and maximize collections.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
        <polyline points="21 3 21 8 16 8" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Cloud & DevOps",
    desc: "We design scalable cloud architectures and streamlined DevOps pipelines that boost reliability, speed, and deployment efficiency.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8 6 6 0 0 0-11.6 2.3A4 4 0 0 0 6 19h11.5z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();
  const [heroRef, heroVis] = useInView(0.1);

  return (
    <section className="svc-wrap">
      <style>{`
        :root{
          --svc-ink:#162238;
          --svc-muted:#5b6577;
          --svc-lime:#b8d400;
          --svc-lime-dark:#9bb500;
        }
        .svc-wrap{ background:#fff; color:var(--svc-ink); overflow:hidden; }

        /* ══════════════ HERO ══════════════ */
        .svc-hero{
          display:flex;
          align-items:center;
          gap:60px;
          padding:120px 6vw 80px;
          max-width:1400px;
          margin:0 auto;
        }

        .svc-hero-left{
          flex:1;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:flex-start;
          opacity:0;
          transform:translateX(-40px);
          transition:opacity .8s ease, transform .8s ease;
        }
        .svc-hero-left.vis{ opacity:1; transform:translateX(0); }

        .svc-eyebrow{
          display:inline-flex;
          align-items:center;
          gap:12px;
          font-size:13px;
          font-weight:700;
          letter-spacing:.14em;
          text-transform:uppercase;
          color:var(--svc-lime-dark);
          margin:0 0 16px;
          line-height:1;
        }
        .svc-eyebrow::before,
        .svc-eyebrow::after{
          content:''; display:block;
          height:2px; width:28px;
          background:var(--svc-lime); border-radius:1px;
        }

        .svc-h1{
          font-size:clamp(2.2rem, 5vw, 4.4rem);
          font-weight:900;
          color:var(--svc-ink);
          line-height:1.1;
          letter-spacing:-0.03em;
          margin:0 0 24px;
        }
        .svc-h1 span{ color:var(--svc-lime); }

        .svc-hero-body{
          font-size:17px;
          color:var(--svc-muted);
          line-height:1.8;
          max-width:560px;
          margin:0 0 32px;
        }

        .svc-hero-btns{ display:flex; gap:16px; flex-wrap:wrap; }
        .svc-btn-primary{
          display:inline-flex; align-items:center; gap:10px;
          background:var(--svc-lime); color:var(--svc-ink);
          font-weight:700; font-size:15px;
          padding:14px 28px; border-radius:50px;
          text-decoration:none; border:none; cursor:pointer;
          transition:.3s;
        }
        .svc-btn-primary:hover{ background:var(--svc-lime-dark); transform:translateY(-3px); }

        .svc-hero-right{
          flex:0 0 500px;
          position:relative;
          opacity:0;
          transform:translateX(40px);
          transition:opacity .8s ease .2s, transform .8s ease .2s;
        }
        .svc-hero-right.vis{ opacity:1; transform:translateX(0); }

        .svc-img-frame{
          position:relative; border-radius:40px; overflow:hidden;
          aspect-ratio:4/3; box-shadow:0 30px 70px rgba(22,34,56,.2);
        }
        .svc-img-frame img{ width:100%; height:100%; object-fit:cover; display:block; }

        .svc-img-badge{
          position:absolute; bottom:20px; right:-15px;
          background:var(--svc-ink); color:#fff;
          border-radius:20px; padding:15px 20px;
          box-shadow:0 10px 40px rgba(0,0,0,.3);
          min-width:150px;
          animation:svcBadgeFloat 4s ease-in-out infinite;
        }
        @keyframes svcBadgeFloat{
          0%,100%{ transform:translateY(0); }
          50%{ transform:translateY(-10px); }
        }
        .svc-badge-num{ font-size:32px; font-weight:900; color:var(--svc-lime); line-height:1; }
        .svc-badge-txt{ font-size:13px; color:#ccc; margin-top:5px; }

        /* ══════════════ GRID ══════════════ */
        .svc-grid-section{ padding:100px 6vw; background:#fff; }
        .svc-head-minimal{ text-align:center; margin-bottom:60px; }
        .svc-head-minimal h2{ font-size:clamp(1.8rem,3.5vw,2.5rem); font-weight:900; color:var(--svc-ink); margin:0; }
        .svc-grid{
          display:grid; grid-template-columns:repeat(3,1fr); gap:24px;
          max-width:1200px; margin:0 auto;
        }
        .svc-card{
          background:#f8faf5; border:1px solid rgba(0,0,0,.05);
          border-radius:24px; padding:40px 30px;
          position:relative; transition:.4s cubic-bezier(.22,1,.36,1);
          cursor:pointer;
        }
        .svc-card:hover{
          transform:translateY(-12px); background:#fff;
          box-shadow:0 20px 50px rgba(0,0,0,.08);
          border-color:var(--svc-lime);
        }
        .svc-icon-box{
          width:60px; height:60px; background:rgba(184,212,0,.15);
          border-radius:15px; display:flex; align-items:center; justify-content:center;
          margin-bottom:25px; color:var(--svc-ink); transition:.3s;
        }
        .svc-card:hover .svc-icon-box{ background:var(--svc-lime); }
        .svc-icon-box svg{ width:30px; height:30px; stroke:currentColor; }

        .svc-card-title{ font-size:1.25rem; font-weight:800; color:var(--svc-ink); margin:0 0 12px; }
        .svc-card-desc{ font-size:15px; color:var(--svc-muted); line-height:1.7; margin:0; }
        .svc-card-num{
          position:absolute; top:30px; right:30px;
          font-size:14px; font-weight:900; color:rgba(184,212,0,.6);
        }

        /* CTA */
        .svc-cta-lite{
          margin-top:80px; background:var(--svc-ink);
          border-radius:24px; padding:50px;
          display:flex; align-items:center; justify-content:space-between; gap:30px;
          max-width:1200px; margin-left:auto; margin-right:auto;
        }
        .svc-cta-content h3{ color:#fff; font-size:1.8rem; margin:0 0 10px; }
        .svc-cta-content p{ color:#aaa; max-width:600px; margin:0; }

        /* ══════════════ RESPONSIVE ══════════════ */
        @media (max-width:1024px){
          .svc-grid{ grid-template-columns:repeat(2,1fr); }
          .svc-hero-right{ flex:0 0 400px; }
        }

        @media (max-width:860px){
          .svc-hero{
            flex-direction:column;
            text-align:center;
            padding:100px 5vw 60px;
            gap:40px;
          }
          .svc-hero-left{
            order:1;
            align-items:center;
            transform:translateY(20px);
          }
          .svc-hero-left.vis{ transform:translateY(0); }
          .svc-hero-right{
            order:2;
            flex:none;
            width:100%;
            max-width:480px;
            margin:0 auto;
            transform:translateY(20px);
          }
          .svc-hero-right.vis{ transform:translateY(0); }
          .svc-hero-body{ margin:0 auto 28px; }
          .svc-hero-btns{ justify-content:center; }
          .svc-cta-lite{ flex-direction:column; text-align:center; padding:40px 24px; }
        }

        @media (max-width:600px){
          .svc-grid{ grid-template-columns:1fr; }
          .svc-h1{ font-size:2rem; }
          .svc-hero-body{ font-size:15px; }
          .svc-img-badge{ right:10px; padding:12px 16px; min-width:130px; }
          .svc-badge-num{ font-size:26px; }
          .svc-grid-section{ padding:70px 5vw; }
        }
      `}</style>

      {/* ══════════════ HERO ══════════════ */}
      <div className="svc-hero" ref={heroRef}>
        <div className={`svc-hero-left ${heroVis ? "vis" : ""}`}>
          <span className="svc-eyebrow">Our Expertise</span>
          <h1 className="svc-h1">
            Innovative IT Services <span>For Your Digital Future</span>
          </h1>
          <p className="svc-hero-body">
            From custom software development to AI-driven strategies, we provide
            cutting-edge technical solutions that help your business scale
            efficiently in today’s fast-paced digital world.
          </p>
          <div className="svc-hero-btns">
            <button onClick={() => navigate("/contact")} className="svc-btn-primary">
              Get Started Now →
            </button>
          </div>
        </div>

        <div className={`svc-hero-right ${heroVis ? "vis" : ""}`}>
          <div className="svc-img-frame">
            <img src={serviceHeroImg} alt="Our services" />
          </div>
          <div className="svc-img-badge">
            <div className="svc-badge-num">100%</div>
            <div className="svc-badge-txt">Quality Delivery<br/>& Client Support</div>
          </div>
        </div>
      </div>

      {/* ══════════════ SERVICES GRID ══════════════ */}
      <div className="svc-grid-section">
        <div className="svc-head-minimal">
          <h2>Professional IT Solutions</h2>
        </div>

        <div className="svc-grid">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="svc-card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="svc-card-num">{s.num}</div>
              <div className="svc-icon-box">{s.icon}</div>
              <h3 className="svc-card-title">{s.title}</h3>
              <p className="svc-card-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="svc-cta-lite">
          <div className="svc-cta-content">
            <h3>Ready to scale your business?</h3>
            <p>Let's discuss how our custom IT solutions can streamline your operations and maximize your revenue growth.</p>
          </div>
          <button onClick={() => navigate("/contact")} className="svc-btn-primary">
            Let's Work Together ↗
          </button>
        </div>
      </div>
    </section>
  );
}
