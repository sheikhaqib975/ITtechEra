import { useEffect, useRef } from "react";

const trustItems = [
  {
    title: "Reliable Delivery",
    desc: "We meet deadlines and ensure every project is delivered with quality and consistency",
    icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>,
  },
  {
    title: "Skilled Development Team",
    desc: "Our experts specialize in web development, mobile apps, and CRM dashboards using modern technologies",
    icon: <><circle cx="9" cy="7" r="3"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><circle cx="19" cy="7" r="2"/><path d="M21 21v-1a3 3 0 00-2-2.83"/></>,
  },
  {
    title: "Client-Centric Approach",
    desc: "We focus on understanding business needs and provide tailored solutions instead of one-size-fits-all services",
    icon: <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
  },
  {
    title: "Transparent Communication",
    desc: "Regular updates, clear reporting, and honest timelines keep our clients fully informed",
    icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>,
  },
  {
    title: "Cost-Effective Solutions",
    desc: "We provide high-quality services at competitive pricing, helping businesses maximize ROI",
    icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></>,
  },
  {
    title: "Long-Term Partnerships",
    desc: "We don't just deliver projects — we build lasting relationships and provide ongoing support",
    icon: <path d="M16 16v1a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2h2m5.66 0H14a2 2 0 012 2v3m0 0l3-3m-3 3l3 3"/>,
  },
];

export default function TrustSection() {
  const bigRef = useRef(null);
  const smallRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      bigRef.current?.classList.add("tw-float-big");
      smallRef.current?.classList.add("tw-float-small");
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="tw-section">
      <style>{`
        .tw-section *, .tw-section *::before, .tw-section *::after {
          box-sizing: border-box; margin: 0; padding: 0;
        }
        .tw-section {
          font-family: 'Inter', 'Segoe UI', sans-serif;
          background: #f5faed;
          padding: 60px 20px;
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .tw-inner {
          display: flex;
          gap: 48px;
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
          align-items: center;
        }
        .tw-left { flex: 1.1; min-width: 0; }
        .tw-brand { display: flex; align-items: center; gap: 8px; margin-bottom: 24px; }
        .tw-bar { width: 4px; height: 36px; background: #c8f000; border-radius: 2px; flex-shrink: 0; }
        .tw-name {
          font-size: 12px; font-weight: 700; color: #0d1b2a;
          text-transform: uppercase; letter-spacing: .06em; line-height: 1.4;
        }
        .tw-title {
         font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          line-height: 1.15;
          color: #0d1b2a;
          margin-bottom: 10px;
        }
        .tw-title span { color: #a8ca00; }
        .tw-underline { width: 48px; height: 4px; background: #c8f000; border-radius: 2px; margin-bottom: 28px; }
        .tw-list { display: flex; flex-direction: column; gap: 10px; }
        .tw-card {
          display: flex; align-items: flex-start; gap: 14px;
          background: #fff; border: 1px solid #e8ede0;
          border-radius: 14px; padding: 14px 18px;
          transition: box-shadow .25s, transform .25s;
        }
        .tw-card:hover { box-shadow: 0 6px 24px rgba(150,185,0,.2); transform: translateX(5px); }
        .tw-icon {
          flex-shrink: 0; width: 42px; height: 42px;
          background: #c8f000; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }
        .tw-icon svg {
          width: 19px; height: 19px; fill: none;
          stroke: #1c2238; stroke-width: 1.8;
          stroke-linecap: round; stroke-linejoin: round;
        }
        .tw-card h3 { font-size: 18px; font-weight: 700; color: #0d1b2a; margin-bottom: 3px; line-height: 1.3; }
        .tw-card p { font-size: 15px; color: #617080; line-height: 1.65; }
        .tw-badge {
          display: inline-flex; align-items: center; gap: 10px; margin-top: 24px;
          background: #fff; border: 1px solid #e4e4e4; border-radius: 40px;
          padding: 8px 18px; font-size: 13px; font-weight: 600; color: #0d1b2a;
          box-shadow: 0 2px 10px rgba(0,0,0,.06);
        }
        .tw-mail-icon {
          width: 30px; height: 30px; background: #c8f000;
          border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .tw-mail-icon svg {
          width: 14px; height: 14px; fill: none;
          stroke: #1c2238; stroke-width: 1.8;
          stroke-linecap: round; stroke-linejoin: round;
        }
        .tw-right {
          flex: 0.9; position: relative; min-height: 440px;
          display: flex; align-items: center; justify-content: center;
        }
        .tw-blob1 {
          position: absolute; width: 320px; height: 320px;
          background: #e3f4b0; border-radius: 50%;
          bottom: -20px; right: -30px; z-index: 0; opacity: .65;
        }
        .tw-blob2 {
          position: absolute; width: 150px; height: 150px;
          background: #e3f4b0; border-radius: 50%;
          top: 10px; left: 10px; z-index: 0; opacity: .45;
        }
        .tw-dots {
          position: absolute; bottom: 24px; right: 6px;
          display: grid; grid-template-columns: repeat(5, 8px);
          gap: 6px; z-index: 1;
        }
        .tw-dots span { width: 8px; height: 8px; background: #c8f000; border-radius: 50%; opacity: .5; display: block; }
        .tw-dot-accent { position: absolute; width: 11px; height: 11px; background: #c8f000; border-radius: 50%; z-index: 1; }
        .tw-dot-accent.a { top: 55px; right: 45px; }
        .tw-dot-accent.b { top: 50%; left: -8px; }
        .tw-photo {
          position: absolute; border-radius: 50%; overflow: hidden;
          border: 5px solid #fff; box-shadow: 0 8px 32px rgba(0,0,0,.16); z-index: 2;
        }
        .tw-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .tw-big {
          width: 250px; height: 250px; bottom: 0; left: 0;
          animation: twSlideLeft .9s cubic-bezier(.22,.68,0,1.2) .2s both;
        }
        .tw-small {
          width: 175px; height: 175px; top: 0; right: 0;
          animation: twSlideRight .9s cubic-bezier(.22,.68,0,1.2) .4s both;
        }
        .tw-float-big {
          animation: twSlideLeft .9s cubic-bezier(.22,.68,0,1.2) .2s both,
                     twFloatBig 4s ease-in-out 1.1s infinite !important;
        }
        .tw-float-small {
          animation: twSlideRight .9s cubic-bezier(.22,.68,0,1.2) .4s both,
                     twFloatSmall 4s ease-in-out 1.3s infinite !important;
        }
        @keyframes twSlideLeft { from { transform: translateX(-110px); opacity:0; } to { transform: translateX(0); opacity:1; } }
        @keyframes twSlideRight { from { transform: translateX(110px); opacity:0; } to { transform: translateX(0); opacity:1; } }
        @keyframes twFloatBig { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes twFloatSmall { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @media(max-width:800px){
          .tw-inner { flex-direction: column; align-items: stretch; }
          .tw-right { min-height: 300px; width: 100%; }
          .tw-big { width: 190px; height: 190px; }
          .tw-small { width: 140px; height: 140px; }
        }
      `}</style>

      <div className="tw-inner">
        {/* LEFT */}
        <div className="tw-left">
          {/* <div className="tw-brand">
            <div className="tw-bar"></div>
            <div className="tw-name">Ittechera<br/>Pvt Ltd</div>
          </div> */}
          <h1 className="tw-title">WHY CLIENTS<br/><span>TRUST US</span></h1>
          <div className="tw-underline"></div>
          <div className="tw-list">
            {trustItems.map((item, i) => (
              <div className="tw-card" key={i}>
                <div className="tw-icon">
                  <svg viewBox="0 0 24 24">{item.icon}</svg>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="tw-badge">
            <div className="tw-mail-icon">
              <svg viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            contact@ittechera.co.uk
          </div> */}
        </div>

        {/* RIGHT */}
        <div className="tw-right">
          <div className="tw-blob1"></div>
          <div className="tw-blob2"></div>
          <div className="tw-dot-accent a"></div>
          <div className="tw-dot-accent b"></div>
          <div className="tw-dots">
            {Array(20).fill(0).map((_, i) => <span key={i}></span>)}
          </div>
          <div className="tw-photo tw-big" ref={bigRef}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=560&q=80" alt="Team celebration"/>
          </div>
          <div className="tw-photo tw-small" ref={smallRef}>
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80" alt="Team working"/>
          </div>
        </div>
      </div>
    </section>
  );
}