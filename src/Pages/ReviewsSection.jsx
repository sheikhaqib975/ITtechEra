import React from "react";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "CTO, Meridian Health",
    rating: 5,
    text: "Their RCM team cut our A/R days almost in half within the first quarter. Communication was clear at every step and the results spoke for themselves.",
    initials: "SM",
  },
  {
    name: "David Chen",
    role: "Founder, Chen & Co.",
    rating: 5,
    text: "We handed off a messy backlog of claims and they turned it around faster than we expected. Clean claim rate has stayed above 98% ever since.",
    initials: "DC",
  },
  {
    name: "Amina Raza",
    role: "Ops Manager, Prime Care",
    rating: 4,
    text: "Solid technical execution and a genuinely responsive team. A couple of onboarding hiccups early on, but support resolved everything quickly.",
    initials: "AR",
  },
  {
    name: "James Whitfield",
    role: "Director, Whitfield Clinics",
    rating: 5,
    text: "What stood out was how proactively they flagged denial patterns before they became a real problem. Denial rate dropped noticeably within weeks.",
    initials: "JW",
  },
  {
    name: "Laila Hassan",
    role: "Practice Owner",
    rating: 5,
    text: "Straightforward reporting, no surprises on billing, and a team that actually picks up the phone. Exactly what we needed after switching vendors.",
    initials: "LH",
  },
  {
    name: "Michael Osei",
    role: "VP Finance, Nova Med",
    rating: 4,
    text: "Reliable partner for our revenue cycle. Dashboards are easy to read and their consultants explain the numbers in plain language.",
    initials: "MO",
  },
];

function Star({ filled }) {
  return (
    <svg
      className="rvw-star"
      viewBox="0 0 20 20"
      width="16"
      height="16"
      fill={filled ? "#b8d400" : "none"}
      stroke={filled ? "#b8d400" : "#5a6478"}
      strokeWidth="1.2"
    >
      <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.78L10 14.77l-5.18 2.68.99-5.78L1.62 7.6l5.79-.84L10 1.5z" />
    </svg>
  );
}

export default function ReviewsSection() {
  return (
    <section className="rvw-section">
      <style>{`
        .rvw-section, .rvw-section *{
          box-sizing: border-box;
        }

        .rvw-section{
          background: #ffffff;
          padding: 90px 6vw;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .rvw-glow{
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(184, 212, 0, 0.06);
          top: -180px;
          right: -120px;
          pointer-events: none;
        }

        .rvw-header{
          max-width: 700px;
          margin: 0 auto 60px;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .rvw-badge{
          display: inline-flex;
          align-items: center;
          gap: 6px;
           background: #1c2238;
          border: 1px solid rgba(184, 212, 0, 0.25);
          color: #b8d400;
         
          font-size: 13px;
          font-weight: 700;
          padding: 6px 16px;
          border-radius: 30px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
        }

        .rvw-title{
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 900;
          color: #1c2238;
          line-height: 1.15;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .rvw-title span{
          color: #b8d400;
        }

        .rvw-subtitle{
          font-size: 16px;
          line-height: 1.6;
          color: #a7afc4;
          margin: 0;
        }

        .rvw-grid{
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          position: relative;
          z-index: 2;
        }

        .rvw-card{
          background: #232a45;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          transition: 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .rvw-card:hover{
          transform: translateY(-6px);
          border-color: rgba(184, 212, 0, 0.35);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        }

        .rvw-quote-icon{
          font-size: 32px;
          line-height: 1;
          color: rgba(184, 212, 0, 0.35);
          font-weight: 900;
          font-family: Georgia, serif;
        }

        .rvw-stars{
          display: flex;
          gap: 4px;
        }

        .rvw-text{
          font-size: 14.5px;
          line-height: 1.7;
          color: #cbd3e6;
          margin: 0;
          flex-grow: 1;
        }

        .rvw-person{
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .rvw-avatar{
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(184, 212, 0, 0.14);
          color: #b8d400;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 14px;
          flex-shrink: 0;
        }

        .rvw-person-info{
          display: flex;
          flex-direction: column;
        }

        .rvw-person-name{
          color: #ffffff;
          font-weight: 700;
          font-size: 14.5px;
        }

        .rvw-person-role{
          color: #8892b0;
          font-size: 12.5px;
        }

        /* ══════════════ RESPONSIVE ══════════════ */
        @media (max-width: 991px){
          .rvw-grid{
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px){
          .rvw-section{
            padding: 60px 6vw;
          }
          .rvw-grid{
            grid-template-columns: 1fr;
          }
          .rvw-header{
            margin-bottom: 40px;
          }
        }
      `}</style>

      <div className="rvw-glow"></div>

      <div className="rvw-header">
        <div className="rvw-badge">Client Reviews</div>
        <h2 className="rvw-title">
          What Our <span>Clients Say</span>
        </h2>
        <p className="rvw-subtitle">
          Real feedback from the practices and businesses we've helped streamline their revenue cycle.
        </p>
      </div>

      <div className="rvw-grid">
        {reviews.map((r, i) => (
          <div className="rvw-card" key={i}>
            <span className="rvw-quote-icon">"</span>
            <div className="rvw-stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} filled={s < r.rating} />
              ))}
            </div>
            <p className="rvw-text">{r.text}</p>
            <div className="rvw-person">
              <div className="rvw-avatar">{r.initials}</div>
              <div className="rvw-person-info">
                <span className="rvw-person-name">{r.name}</span>
                <span className="rvw-person-role">{r.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
