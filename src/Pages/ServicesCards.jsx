import React from "react";
import Weblogo from "../assets/Images/weblogo.png";
import Ailogo from "../assets/Images/ailogo.png";
import Mobilelogo from "../assets/Images/mobilelogo.png"
import Crmlogo from "../assets/Images/crmlogo.png"
import Ioslogo from "../assets/Images/ioslogo.png"
import Devopslogo from "../assets/Images/devopslogo.png"
import Androidapplogo from "../assets/Images/androidlogo.png"
const servicesList = [
  {
  
   title: "Web Development",
    image:Weblogo ,
     desc: "We design and build fast, responsive websites and web apps tailored to your business — from clean architecture and pixel-perfect UI to solid, maintainable code. Our team works closely with you at every stage, so what ships matches the vision and scales smoothly as your traffic and features grow.",
  },
  {
    
   title: "Artificial Intelligence",
    image:Ailogo,
    desc: "We build AI-powered products that actually get used — custom chatbots, autonomous AI agents, and workflow automations that plug into your existing tools. From natural language interfaces to predictive models, we help you put AI to work exactly where it saves the most time and effort.",
  },
  {
    
    title: "Mobile Apps",
    image:Mobilelogo,
    desc: "We design and develop cross-platform mobile apps that feel native, load fast, and keep users coming back. From wireframes to app-store launch, we handle the full journey — UI/UX, backend integration, push notifications, and ongoing support after release.",
  },
  {
    title: "CRM Solutions",
    image: Crmlogo,
    desc: "We build and customize CRM systems that give your sales and support teams one clear view of every customer. From lead tracking and pipeline automation to reporting dashboards, we tailor the CRM to match how your team actually works, not the other way around.",
  }, 
  {
    title: "iOS Apps",
    image: Ioslogo,
    desc: "We build native iOS apps in Swift that are fast, polished, and built to Apple's standards. From App Store guidelines to performance tuning, we handle every detail so your app looks and feels exactly at home on iPhone and iPad.",
  },
  {
    
    title: "DevOps",
    image: Devopslogo,
    desc: "We architect scalable cloud infrastructure and automated CI/CD pipelines built for speed, security, and uptime. From containerization to monitoring and disaster recovery, we help your systems scale smoothly as demand grows, without engineering headaches along the way.",
  },
  {
    title: "Android Apps",
    image: Androidapplogo,
    desc: "We build native Android apps in Kotlin that run smoothly across the full range of devices. From Play Store compliance to performance optimization, we make sure your app is fast, stable, and ready to scale to millions of users.",
     
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
          gap:28px;
          max-width:1200px;
          margin:0 auto;
        }

        /* center the 7th (last, odd-one-out) card on the 3-column layout */
        .svcx-card:last-child{
          grid-column:2 / 3;
        }

        .svcx-card{
          background:#f8faf5;
          border:1px solid rgba(0,0,0,.05);
          border-radius:24px;
          overflow:hidden;
          position:relative;
          display:flex;
          flex-direction:column;
          transition:transform .4s cubic-bezier(.22,1,.36,1),
                     box-shadow .4s cubic-bezier(.22,1,.36,1),
                     border-color .4s cubic-bezier(.22,1,.36,1);
        }
        .svcx-card:hover{
          transform:translateY(-12px) scale(1.02);
          background:#fff;
          box-shadow:0 20px 50px rgba(0,0,0,.08);
          border-color:var(--svcx-lime);
        }

        /* image sits at the top of the card so it's instantly clear
           what each service is about */
        .svcx-img-box{
          position:relative;
          width:100%;
          aspect-ratio:16/10;
          overflow:hidden;
        }
        .svcx-img-box img{
          width:100%; height:100%;
          object-fit:cover; display:block;
        }

        .svcx-img-box::after{
          content:'';
          position:absolute; inset:0;
          background:linear-gradient(180deg, rgba(22,34,56,0) 40%, rgba(22,34,56,.55) 100%);
          pointer-events:none;
        }

        .svcx-card-num{
          position:absolute; top:16px; right:18px; z-index:2;
          font-size:14px; font-weight:900; color:#fff;
          background:rgba(22,34,56,.55);
          backdrop-filter:blur(4px);
          padding:4px 12px; border-radius:20px;
        }

        .svcx-card-body{ padding:28px 30px 32px; }

        .svcx-card-title{
          font-size:1.25rem;
          font-weight:800;
          color:var(--svcx-ink);
          margin:0 0 12px;
        }
        .svcx-card-desc{
          font-size:15px;
          color:var(--svcx-muted);
          line-height:1.75;
          margin:0;
        }

        @media (max-width:1024px){
          .svcx-grid{ grid-template-columns:repeat(2,1fr); }
          .svcx-card:last-child{ grid-column:auto; }
        }

        @media (max-width:600px){
          .svcx-grid{ grid-template-columns:1fr; }
          .svcx-card:last-child{ grid-column:auto; }
          .svcx-section{ padding:70px 5vw; }
          .svcx-card-body{ padding:24px 22px 28px; }
        }
      `}</style>

      <div className="svcx-section">
        <div className="svcx-head">
          <h2>Our <span>Services</span></h2>
        </div>

        <div className="svcx-grid">
          {servicesList.map((s, i) => (
            <div className="svcx-card" key={i}>
              <div className="svcx-img-box">
                <img src={s.image} alt={s.title} loading="lazy" />
                <div className="svcx-card-num">{s.num}</div>
              </div>
              <div className="svcx-card-body">
                <h3 className="svcx-card-title">{s.title}</h3>
                <p className="svcx-card-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
