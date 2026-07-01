import React from "react";
import marchants from "../assets/Images/marchantslogo.png";
import medtechera from "../assets/Images/medtecheralogo.png";
import pmspro from "../assets/Images/pmsprologo.png";
import operalogo from "../assets/Images/operalogo.png";
import medstock from "../assets/Images/medstocklogo.png";
const COLORS = {
  white: "#ffffff",
  navy: "#1c2238",
  lime: "#b8d400",
};


const slidesData = [
  {
    img:marchants,
    title: "Marchants",
   description: "Acoustic ceiling and wall panel specialists serving offices, retail, schools and hospitality across the UK — offering installation, cleaning, maintenance and reupholstery for over 13 years.",
    link: "https://marchantsltd.co.uk/",
  },
  {
    img: medtechera,
    title: "Techera Med Systems",
    description: "Full-service medical billing and revenue cycle management company, handling claims, coding, credentialing and denial management for healthcare practices across the US with a 99% clean claim rate.",
    link: "https://techeramedsystems.com/",
  },
  {
    img: pmspro,
    title: "PMSPRO",
    description:"Next-gen construction management platform that replaces paperwork with real-time visibility — GPS attendance, daily reports, material workflows and project costing in one cloud-based system.",
    link: "https://pmspro.co.uk/",
  },
  {
    img: operalogo,
    title: "OperaHQ",
    description: "A full-fledged HR web and mobile platform that lets managers track their entire team's records in one place — from leave requests and approvals to tracking which employees are added to or removed from a team.",
    link: "",
  },
   {
    img: medstock,
    title: "MedStock",
    description: "An inventory management platform built for medical stores — track new medicine stock as it arrives, monitor expiry dates, and get alerts for medicines that are expiring soon.",
    link: "",
  },
  
];

export default function ImageSlider() {
  // duplicate the list so the strip can loop seamlessly (0% -> -50%)
  const slides = [...slidesData, ...slidesData];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: COLORS.navy,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 0",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      <style>{`
  @keyframes scrollLoop {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .slider-track {
    display: flex;
    width: max-content;
    animation: scrollLoop 30s linear infinite;
  }
  .slider-viewport:hover .slider-track {
    animation-play-state: paused;
  }
  .slide-card {
    flex: 0 0 auto;
    width: 300px;
    margin: 0 14px;
    border-radius: 14px;
    overflow: hidden;
    background: #ffffff;
    border: 3px solid #b8d400;
    box-shadow: 0 8px 20px rgba(0,0,0,0.25);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  .slide-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 28px rgba(0,0,0,0.35);
  }
  .slide-img-btn {
    display: block;
    width: 100%;
    height: 190px;
    padding: 18px;
    box-sizing: border-box;
    background: #ffffff;
    border: none;
    cursor: pointer;
  }
  .slide-img-btn img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
  .slide-body {
    padding: 14px 18px 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .slide-title {
    color: #1c2238;
    font-size: 1.05rem;
    font-weight: 700;
    margin: 0 0 6px;
  }
  .slide-desc {
    color: #55596e;
    font-size: 0.85rem;
    line-height: 1.4;
    margin: 0 0 14px;
    flex: 1;
  }
  .learn-more-btn {
    align-self: flex-start;
    background: #1c2238;
    color: #ffffff;
    border: none;
    padding: 8px 18px;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.25s ease, color 0.25s ease;
  }
  .learn-more-btn:hover {
    background: #b8d400;
    color: #1c2238;
  }

  /* ---------- Responsive ---------- */
  @media (max-width: 768px) {
    .slide-card {
      width: 240px;
      margin: 0 10px;
    }
    .slide-img-btn {
      height: 150px;
      padding: 14px;
    }
    .slide-title {
      font-size: 0.95rem;
    }
    .slide-desc {
      font-size: 0.8rem;
    }
    .learn-more-btn {
      padding: 7px 14px;
      font-size: 0.8rem;
    }
    .slider-track {
      animation-duration: 22s;
    }
  }

  @media (max-width: 480px) {
    .slide-card {
      width: 200px;
      margin: 0 8px;
    }
    .slide-img-btn {
      height: 130px;
      padding: 10px;
    }
    .slide-title {
      font-size: 0.9rem;
    }
    .slide-desc {
      font-size: 0.75rem;
      line-height: 1.3;
    }
  }
`}</style>

      <h1
        style={{
          color: COLORS.white,
           fontSize: "clamp(1.4rem, 5vw, 2.2rem)",
          fontWeight: 800,
          marginBottom: "6px",
          letterSpacing: "0.5px",
        }}
      >
        INDUSTRIES SERVED
      </h1>
      <div
        style={{
          width: "70px",
          height: "5px",
          background: COLORS.lime,
          borderRadius: "3px",
          marginBottom: "40px",
        }}
      />

      <div
        className="slider-viewport"
        style={{
          width: "100%",
          overflow: "hidden",
          position: "relative",
          padding: "12px 0", 
        }}
      >
        <div className="slider-track">
          {slides.map((slide, i) => (
            <div className="slide-card" key={i}>
              <button
                className="slide-img-btn"
                onClick={() => { 
                  if (slide.link) {
                       window.open(slide.link, "_blank", "noopener,noreferrer");
                  } else {
                    alert("Coming Soon");
                  }
                }}
                aria-label={`Visit ${slide.title} website`}
              >
                <img src={slide.img} alt={slide.title} />
              </button>
              <div className="slide-body">
                <p className="slide-title">{slide.title}</p>
                <p className="slide-desc">{slide.description}</p>
                {/* <button
                  className="learn-more-btn"
                  onClick={() => {
                    // Functionality to be wired up later
                    console.log("Learn more clicked:", slide.title);
                  }}
                >
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <p style={{ color: COLORS.lime, marginTop: "30px", fontSize: "0.95rem" }}>
        Hover over any card to pause the slider
      </p> */}
    </div>
  );
}
