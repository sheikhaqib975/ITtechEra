import React from "react";

const COLORS = {
  white: "#ffffff",
  navy: "#1c2238",
  lime: "#b8d400",
};

// Devicon CDN — transparent-bg SVG logos, so no local asset imports needed.
// Swap any src below with a local import if you'd rather bundle them.
const techData = [
  { name: "iOS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
  { name: "Android", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  { name: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "WordPress", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Supabase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "ASP.NET", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "C#", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "Angular", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
];

// Split the list into two rows that scroll in opposite directions.
const mid = Math.ceil(techData.length / 2);
const rowTopData = techData.slice(0, mid);
const rowBottomData = techData.slice(mid);

export default function TechSlider() {
  const rowTop = [...rowTopData, ...rowTopData];
  const rowBottom = [...rowBottomData, ...rowBottomData];

  return (
    <div
      style={{
        // minHeight: "100vh",
        width: "100%",
        background: COLORS.navy,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 0",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      <style>{`
  @keyframes scrollLeft {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes scrollRight {
    from { transform: translateX(-50%); }
    to   { transform: translateX(0); }
  }
  @keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 0 rgba(184,212,0,0); }
    50%      { box-shadow: 0 0 22px rgba(184,212,0,0.55); }
  }

  .tech-row-viewport {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 14px 0;
  }
  .tech-row-track {
    display: flex;
    width: max-content;
  }
  .tech-row-track.dir-left {
    animation: scrollLeft 26s linear infinite;
  }
  .tech-row-track.dir-right {
    animation: scrollRight 26s linear infinite;
  }
  .tech-row-viewport:hover .tech-row-track {
    animation-play-state: paused;
  }

  .tech-card {
    flex: 0 0 auto;
    width: 150px;
    height: 150px;
    margin: 0 12px;
    border-radius: 18px;
    background: #ffffff;
    border: 3px solid transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 16px;
    box-sizing: border-box;
    perspective: 600px;
    transform-style: preserve-3d;
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                border-color 0.35s ease;
    cursor: default;
  }
  .tech-card:hover {
    transform: rotateY(12deg) rotateX(8deg) translateY(-6px) scale(1.06);
    border-color: #b8d400;
    animation: glowPulse 1.6s ease-in-out infinite;
  }
  .tech-card img {
    width: 56px;
    height: 56px;
    object-fit: contain;
    transition: transform 0.35s ease;
  }
  .tech-card:hover img {
    transform: rotate(-6deg) scale(1.12);
  }
  .tech-name {
    color: #1c2238;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.2px;
    text-align: center;
  }

  /* ---------- Responsive ---------- */
  @media (max-width: 768px) {
    .tech-card {
      width: 120px;
      height: 120px;
      margin: 0 8px;
      border-radius: 14px;
      padding: 12px;
    }
    .tech-card img {
      width: 42px;
      height: 42px;
    }
    .tech-name {
      font-size: 0.7rem;
    }
    .tech-row-track.dir-left,
    .tech-row-track.dir-right {
      animation-duration: 20s;
    }
  }

  @media (max-width: 480px) {
    .tech-card {
      width: 96px;
      height: 96px;
      margin: 0 6px;
      border-radius: 12px;
      padding: 10px;
      gap: 6px;
    }
    .tech-card img {
      width: 34px;
      height: 34px;
    }
    .tech-name {
      font-size: 0.62rem;
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
          textAlign: "center",
          padding: "0 16px",
        }}
      >
        TECHNOLOGIES WE WORK WITH
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

      <div className="tech-row-viewport">
        <div className="tech-row-track dir-left">
          {rowTop.map((tech, i) => (
            <div className="tech-card" key={`top-${i}`}>
              <img src={tech.src} alt={tech.name} />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="tech-row-viewport" style={{ marginTop: "24px" }}>
        <div className="tech-row-track dir-right">
          {rowBottom.map((tech, i) => (
            <div className="tech-card" key={`bottom-${i}`}>
              <img src={tech.src} alt={tech.name} />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
