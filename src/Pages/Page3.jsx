import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/Images/page3img.avif";
export default function ModernCompanyHero() {
  const [loaded, setLoaded] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
const navigate = useNavigate();
  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (0.5 - y) * 12,
      y: (x - 0.5) * 12,
    });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  // "Contact Us" → #contact section par scroll kare
  const handleContactUs = () => {
  const contactSection =
    document.getElementById("contact") ||
    document.getElementById("contact-us") ||
    document.querySelector("section[data-section='contact']");

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  } else {
    navigate("/contact");
  }
};

  return (
    <section className="hero-section">
      <style>{`
        .hero-section *{box-sizing:border-box}

        .hero-section{
          min-height:100vh;
          overflow:hidden;
          position:relative;
          background:#f8fafc;
          display:flex;
          align-items:center;
          justify-content:center;
          padding:40px 24px;
        }

        .hero-blob,.hero-blob2{
          position:absolute;
          border-radius:50%;
          filter:blur(90px);
          z-index:0;
        }

        .hero-blob{
          width:320px;height:320px;
          background:#d6ff00;
          top:-100px;left:-100px;
          opacity:.25;
        }

        .hero-blob2{
          width:420px;height:420px;
          background:#c8f000;
          bottom:-160px;right:-120px;
          opacity:.18;
        }

        .hero-container{
          width:100%;
          max-width:1400px;
          display:grid;
          grid-template-columns:1.05fr .95fr;
          gap:60px;
          align-items:center;
          position:relative;
          z-index:2;
        }

        .hero-left{
          animation:heroSlideLeft 1s ease;
        }

        .hero-badge{
          display:inline-flex;
          padding:12px 20px;
          border-radius:999px;
          background:rgba(214,255,0,.18);
          border:1px solid rgba(214,255,0,.6);
          font-weight:700;
          margin-bottom:20px;
        }

        .hero-title{
          margin:0;
          line-height:.95;
          font-weight:900;
           color: #1c2238;
          font-size:clamp(3rem,8vw,6.5rem);
        }

        .hero-accent{
          color:#c8f000;
          display:block;
        }

        .hero-desc{
          max-width:620px;
          color:#556070;
          line-height:1.9;
          margin-top:24px;
          font-size:clamp(.95rem,1.5vw,1.1rem);
        }

        .hero-buttons{
          display:flex;
          gap:16px;
          flex-wrap:wrap;
          margin-top:28px;
        }

        .hero-btn{
          padding:14px 24px;
          border:none;
          border-radius:14px;
          cursor:pointer;
          transition:.3s;
          font-weight:700;
        }

        .hero-btn-primary{
          background:#c8f000;
        }

        .hero-btn-primary:hover{
          transform:translateY(-4px);
        }

        .hero-btn-secondary{
          background:white;
          box-shadow:0 10px 30px rgba(0,0,0,.08);
          color:#17203b;
        }

        .hero-btn-secondary:hover{
          transform:translateY(-4px);
          background:#c8f000;
          box-shadow:0 10px 30px rgba(200,240,0,.35);
        }

        .hero-stats{
          margin-top:40px;
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:16px;
        }

        .hero-card{
          backdrop-filter:blur(18px);
          background:rgba(255,255,255,.55);
          border:1px solid rgba(255,255,255,.7);
          border-radius:24px;
          padding:22px;
          box-shadow:0 15px 40px rgba(0,0,0,.08);
          transition:.35s;
        }

        .hero-card:hover{
          transform:translateY(-8px);
        }

        .hero-card h3{
          margin:0;
          color:#17203b;
          font-size:2rem;
        }

        .hero-card p{
          margin:8px 0 0;
          color:#667085;
        }

        .hero-right{
          position:relative;
          animation:heroSlideRight 1s ease;
        }

        .hero-imageWrap{
          position:relative;
          transform-style:preserve-3d;
          transition:.15s linear;
        }

        .hero-image{
          width:100%;
          border-radius:36px;
          display:block;
          box-shadow:0 30px 70px rgba(0,0,0,.18);
        }

        .hero-floating{
          position:absolute;
          backdrop-filter:blur(18px);
          background:rgba(255,255,255,.65);
          border-radius:22px;
          padding:16px;
          box-shadow:0 20px 40px rgba(0,0,0,.12);
          animation:heroFloat 5s ease-in-out infinite;
        }

        .hero-f1{top:8%;left:-40px;}
        .hero-f2{bottom:8%;right:-30px;animation-delay:1s;}
        .hero-f3{bottom:-20px;left:10%;animation-delay:2s;}

        .hero-floating strong{
          display:block;
          color:#17203b;
        }

        @keyframes heroFloat{
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-14px)}
        }

        @keyframes heroSlideLeft{
          from{opacity:0;transform:translateX(-60px)}
          to{opacity:1;transform:none}
        }

        @keyframes heroSlideRight{
          from{opacity:0;transform:translateX(60px)}
          to{opacity:1;transform:none}
        }

        @media(max-width:992px){
          .hero-container{
            grid-template-columns:1fr;
            text-align:center;
          }
          .hero-desc{margin-left:auto;margin-right:auto}
          .hero-buttons{justify-content:center}
          .hero-stats{grid-template-columns:repeat(3,1fr)}
          .hero-f1,.hero-f2,.hero-f3{position:absolute}
        }

        @media(max-width:600px){
          .hero-floating{
            padding:12px;
            font-size:.8rem;
          }
          .hero-f1{left:0}
          .hero-f2{right:0}
          .hero-stats{grid-template-columns:1fr}
        }
      `}</style>

      <div className="hero-blob"></div>
      <div className="hero-blob2"></div>

      <div className="hero-container">
        <div className="hero-left">
          {/* <div className="hero-badge">🚀 Trusted Software Solutions</div> */}

          <h1 className="hero-title">
            Crafting Digital
            <span className="hero-accent">Excellence</span>
          </h1>

          <p className="hero-desc">
            At ITTECHERA Pvt Ltd, we create modern software solutions,
            scalable digital products, and innovative platforms that help
            businesses grow, automate processes, and succeed in a rapidly
            evolving digital world.
          </p>

          <div className="hero-buttons">
            <button
              className="hero-btn hero-btn-secondary"
              onClick={handleContactUs}
            >
              Contact Us
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-card">
              <h3>50+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="hero-card">
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="hero-card">
              <h3>4+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div
            className="hero-imageWrap"
            onMouseMove={handleMove}
            onMouseLeave={resetTilt}
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            <img
              className="hero-image"
              src={img}
              alt="company"
            />

            <div className="hero-floating hero-f1">
              <strong>UI/UX Design</strong>
              Creative Experiences
            </div>

            <div className="hero-floating hero-f2">
              <strong>Web Development</strong>
              Modern Solutions
            </div>

            <div className="hero-floating hero-f3">
              <strong>Mobile Apps</strong>
              Android & iOS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
