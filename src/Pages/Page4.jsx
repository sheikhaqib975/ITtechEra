
import React from "react";
import Founderimg from "../assets/Images/Founderimg.jpeg";
import founder from "../assets/Images/founder.png";

export default function OriginStoryTop() {
  const founders = [
    {
      name: "Adnan Khan",
      role: "Co‑Founder",
      desc: "Visionary leader focused on innovation and digital transformation.",
      img: Founderimg
    },
    {
      name: "Anoba Noor",
      role: "Co‑Founder",
      desc: "Results-oriented leader passionate about innovation and technology.",
      img: founder
    }
  ];

  return (
    <section className="originSection">
      <style>{`
      *{box-sizing:border-box}
      .originSection{
        padding:90px 20px;
        background:
        radial-gradient(circle at 10% 10%,rgba(200,240,0,.18),transparent 25%),
        radial-gradient(circle at 90% 90%,rgba(200,240,0,.10),transparent 25%),
        linear-gradient(180deg,#eef3ee,#f7f9f6);
        font-family:Inter,Segoe UI,sans-serif;
      }
      .wrapper{max-width:1280px;margin:auto;}
      .top{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:35px;
        min-height:60vh;
        align-items:stretch;
      }
      .glass{
        background:rgba(255,255,255,.55);
        backdrop-filter:blur(18px);
        border:1px solid rgba(255,255,255,.7);
        border-radius:28px;
        padding:40px;
        box-shadow:0 18px 40px rgba(0,0,0,.08);
        transition:.35s;
      }
      .glass:hover{transform:translateY(-8px);box-shadow:0 24px 55px rgba(0,0,0,.12)}
      .badge{
        display:inline-block;background:#c8f000;color:#1d2b42;
        padding:8px 18px;border-radius:999px;font-weight:700;margin-bottom:20px;
      }
      h1{font-size:clamp(2.5rem,5vw,4rem);margin:0 0 22px;color:#18213d}
      .story{color:#596577;line-height:1.9}
      .stack{display:flex;flex-direction:column;gap:18px}
      .item{
        display:flex;gap:18px;align-items:flex-start;
        background:rgba(255,255,255,.65);
        border:1px solid rgba(255,255,255,.8);
        border-radius:20px;padding:20px;
      }
      .icon{
    width:62px;
    height:62px;
    border-radius:18px;
    background:rgba(200,240,0,.12);
    display:flex;
    justify-content:center;
    align-items:center;
    transition:.35s;
}

.icon svg{
    width:30px;
    height:30px;
   stroke: #1c2238;
    transition:.35s;
}

.item:hover .icon{
    background:#c8f000;
    transform:rotate(-8deg) scale(1.08);
}

.item:hover .icon svg{
    stroke: #1c2238; 
}
      .item h3{margin:0 0 6px;color:#18213d}
      .item p{margin:0;color:#64748b;line-height:1.7}
      .gap{height:10vh}
      .founders{
        display:flex;
        justify-content:center;
        gap:35px;
        flex-wrap:wrap;
        min-height:30vh;
      }
      .founder{
        width:340px;
        text-align:center;
      }
      .founder img{
        width:140px;height:140px;border-radius:50%;
        object-fit:cover;
        border:5px solid #c8f000;
        margin-bottom:20px;
      }
      .founder h3{margin:0;color:#18213d}
      .role{color:#7aa400;font-weight:700;margin:8px 0 14px}
      .desc{color:#667284;line-height:1.7}
      @media(max-width:900px){
        .top{grid-template-columns:1fr}
        .glass{padding:28px}
      }
      @media(max-width:600px){
        .originSection{padding:60px 15px}
        .founder{width:100%}
        .item{flex-direction:column;text-align:center;align-items:center}
      }
      `}</style>

      <div className="wrapper">

        <div className="top">

          <div className="glass">
            <span className="badge">Our Journey</span>
            <h1>Our Origin Story</h1>
            <div className="story">
              <p>What started as a vision to help businesses embrace technology has evolved into a software company delivering web, mobile, cloud and enterprise solutions.</p>
              <br/>
              <p>Every milestone reflects our commitment to innovation, quality and long‑term partnerships while helping organizations grow through modern digital experiences.</p>
            </div>
          </div>

          <div className="glass stack">
            <div className="item">
              <div className="icon">
<svg
viewBox="0 0 24 24"
fill="none"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round">

<circle cx="12" cy="12" r="9"/>

<circle cx="12" cy="12" r="5"/>

<circle cx="12" cy="12" r="1.5"/>

<path d="M18 6L22 2"/>

<path d="M18 6L15 9"/>

</svg>
</div>
              <div>
                <h3>Mission</h3>
                <p>Empower businesses with innovative, reliable and scalable software solutions.</p>
              </div>
            </div>

            <div className="item">
             <div className="icon">

<svg
viewBox="0 0 24 24"
fill="none"
strokeWidth="2"
strokeLinecap="round"
strokeLinejoin="round">

<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/>

<circle cx="12" cy="12" r="3"/>

</svg>

</div>
              <div>
                <h3>Vision</h3>
                <p>Become a trusted global technology partner driving digital transformation.</p>
              </div>
            </div>

            <div className="item">
              <div className="icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <div>
                <h3>Core Values</h3>
                <p>Innovation, Integrity, Excellence, Collaboration and Customer Success.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="gap"></div>

        <div className="founders">
          {founders.map((f)=>(
            <div className="glass founder" key={f.name}>
              <img src={f.img} alt={f.name}/>
              <h3>{f.name}</h3>
              <div className="role">{f.role}</div>
              <div className="desc">{f.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
