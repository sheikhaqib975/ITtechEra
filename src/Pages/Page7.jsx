import React, { useState } from "react";
import cartImg from "../assets/Images/cart.png";
import smmImg from "../assets/Images/smm.png";
import csImg from "../assets/Images/comingsoon.png";
import dashboardImg from "../assets/Images/dashboard.png";
import projectImg from "../assets/Images/project.png";
import webappImg from "../assets/Images/webapp.png";

const services = [
  {
    num: "01",
    title: "Web/App Development",
    desc: `"We proudly delivered a complete digital solution for Marchants Ltd, including a custom-designed web platform, mobile application, eCommerce store, and a professional corporate website."`,
    image: webappImg,
  },
  {
    num: "02",
    title: "SMM",
    desc: `"Provided professional Social Media Marketing and SEO services for Zag Digital, creating strategic campaigns to strengthen their online presence, improve search engine rankings, increase audience engagement, and drive sustainable brand growth across digital platforms."`,
    image: smmImg,
  },
  {
    num: "03",
    title: "E-Commerce",
    desc: `"We developed a professional eCommerce store for GRSAF Store, combined with effective SEO strategies to enhance online visibility, improve search rankings, and drive more traffic and sales growth."`,
    image: cartImg,
  },
  {
    num: "04",
    title: "Custom Power BI & Dashboards",
    desc: `"We successfully developed a custom Power BI dashboard for GAR, providing advanced data visualization and real-time reporting solutions. With an interactive dashboard system, it helped streamline business insights, enhance operational performance."`,
    image: dashboardImg,
  },
  {
    num: "05",
    title: "ITTECHERA Projects",
    desc: `"We are developing innovative ERP systems, HR & Financial platforms, project management solutions, and custom web & mobile applications tailored to modern business needs."`,
    image: projectImg,
  },
  {
    num: "06",
    title: "Coming Soon",
    desc: `"Your business could be our next success story. Let's build something extraordinary together."`,
    image: csImg,
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="svc-section">
      <style>{`
        .svc-section *, .svc-section *::before, .svc-section *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
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
         .image-wrap{
    width:120px;
    height:120px;
    border-radius:50%;
    overflow:hidden;
    background:#fff;
    border:5px solid #d8ff1a;
    margin:0 auto 22px; 
    display:flex;
    justify-content:center;
    align-items:center;
}

.image-wrap img{
    width:80%;
    height:80%;
    object-fit:contain;
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
          <h2>Our Clients</h2>
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
             <div className="svc-icon-wrap image-wrap">
  <img src={s.image} alt={s.title} />
</div>
              <div className="svc-card-title">{s.title}</div>
              <div className="svc-card-divider"></div>
              <p className="svc-card-desc">{s.desc}</p>
              <span className="svc-num">{s.num}</span>
            </div>
          ))}
        </div>

       

      </div>
    </section>
  );
}