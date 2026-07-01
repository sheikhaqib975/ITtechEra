import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const points = [
  {
    title: "Real Growth, Not Just a Job",
    desc: "We invest in every team member's skills so your career keeps moving forward, not standing still.",
  },
  {
    title: "Work That Actually Matters",
    desc: "Every project you touch has real impact — for real clients, in real industries, not busywork.",
  },
  {
    title: "A Culture Built on Trust",
    desc: "We hire capable people and get out of their way. Ownership and honesty come before micromanagement.",
  },
  {
    title: "Flexibility That Respects Your Life",
    desc: "Hybrid and remote-friendly setups, because good work doesn't require being chained to a desk.",
  },
  {
    title: "A Team That Has Your Back",
    desc: "Collaborative, supportive colleagues who share knowledge freely and celebrate each other's wins.",
  },
];

// Simple star icon to match the icon-in-circle style from the reference card
const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <path
      d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6L3.3 9.2l6.1-.6L12 3z"
      stroke="#1c2238"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

export default function WhyWorkWithUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_Getintouch", 
      "template_getintouch", 
      {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        role: form.role,
        message: form.message,
      },
      "rpEfR9aswOkxmTYt8" 
    );

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      role: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  }
};

  return (
    // Unique root class -> every rule below is scoped under it,
    // so nothing leaks out into the rest of the site's global CSS.
    <div
      className="wwu-root-a91f"
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#ffffff",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        /* Every selector is nested under .wwu-root-a91f so these rules
           can never collide with or override CSS elsewhere on the site. */
        .wwu-root-a91f .wwu-wrapper {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          gap: 60px;
          align-items: flex-start;
        }
        .wwu-root-a91f .wwu-left {
          flex: 1;
          min-width: 280px;
        }
        .wwu-root-a91f .wwu-right {
          flex: 1;
          min-width: 280px;
          padding-top: 32px;
        }
        .wwu-root-a91f .wwu-heading {
          font-size: 3rem;
          font-weight: 800;
          margin: 0 0 16px;
          line-height: 1.15;
        }
        .wwu-root-a91f .wwu-heading .wwu-heading-blue {
          color: #1c2238;
        }
        .wwu-root-a91f .wwu-heading .wwu-heading-green {
          color: #b8d400;
        }
        .wwu-root-a91f .wwu-sub {
          color: #55596e;
          font-size: 0.95rem;
          line-height: 1.55;
          margin: 0 0 18px;
          max-width: 480px;
        }

        /* Card-style points, like the reference screenshot — kept compact
           so the total height of all cards roughly matches the form card. */
        .wwu-root-a91f .wwu-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 12px 14px;
          margin-bottom: 10px;
          box-shadow: 0 3px 12px rgba(28,34,56,0.07);
          border: 1px solid #eef0e6;
        }
        .wwu-root-a91f .wwu-card-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 4px;
        }
        .wwu-root-a91f .wwu-icon-circle {
          flex: 0 0 auto;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #b8d400;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wwu-root-a91f .wwu-icon-circle svg {
          width: 13px;
          height: 13px;
        }
        .wwu-root-a91f .wwu-card-title {
          color: #1c2238;
          font-size: 0.92rem;
          font-weight: 700;
          margin: 0;
        }
        .wwu-root-a91f .wwu-card-desc {
          color: #55596e;
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
          padding-left: 38px;
        }

        .wwu-root-a91f .wwu-form-card {
          background: #1c2238;
          border-radius: 16px;
          padding: 36px 32px;
          box-shadow: 0 12px 30px rgba(28,34,56,0.18);
        }
        .wwu-root-a91f .wwu-form-title {
          color: #ffffff;
          font-size: 1.3rem;
          font-weight: 800;
          margin: 0 0 6px;
        }
        .wwu-root-a91f .wwu-form-sub {
          color: #b8d400;
          font-size: 0.85rem;
          margin: 0 0 24px;
        }
        .wwu-root-a91f .wwu-field {
          margin-bottom: 16px;
        }
        .wwu-root-a91f .wwu-field label {
          display: block;
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .wwu-root-a91f .wwu-field input,
        .wwu-root-a91f .wwu-field textarea {
          width: 100%;
          box-sizing: border-box;
          background: #ffffff;
          border: 2px solid transparent;
          border-radius: 8px;
          padding: 10px 12px;
          font-size: 0.9rem;
          color: #1c2238;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .wwu-root-a91f .wwu-field input:focus,
        .wwu-root-a91f .wwu-field textarea:focus {
          border-color: #b8d400;
        }
        .wwu-root-a91f .wwu-field textarea {
          resize: vertical;
          min-height: 90px;
        }
        .wwu-root-a91f .wwu-submit-btn {
          width: 100%;
          background: #b8d400;
          color: #1c2238;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 800;
          cursor: pointer;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .wwu-root-a91f .wwu-submit-btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
        .wwu-root-a91f .wwu-success {
          color: #b8d400;
          font-weight: 700;
          font-size: 0.95rem;
          text-align: center;
          padding: 20px 0;
        }

        /* Tablet and below: stack the two columns */
        @media (max-width: 860px) {
          .wwu-root-a91f .wwu-wrapper {
            flex-direction: column;
            gap: 32px;
          }
          .wwu-root-a91f .wwu-heading {
            font-size: 2.1rem;
          }
          .wwu-root-a91f .wwu-right {
            padding-top: 8px;
            width: 100%;
          }
        }

        /* Small mobile: tighten spacing and type further */
        @media (max-width: 480px) {
          .wwu-root-a91f .wwu-heading {
            font-size: 1.7rem;
          }
          .wwu-root-a91f .wwu-sub {
            font-size: 0.92rem;
            margin-bottom: 22px;
          }
          .wwu-root-a91f .wwu-card {
            padding: 16px 16px;
            margin-bottom: 12px;
          }
          .wwu-root-a91f .wwu-icon-circle {
            width: 34px;
            height: 34px;
          }
          .wwu-root-a91f .wwu-card-title {
            font-size: 0.98rem;
          }
          .wwu-root-a91f .wwu-card-desc {
            font-size: 0.95rem;
            padding-left: 48px;
          }
          .wwu-root-a91f .wwu-form-card {
            padding: 26px 20px;
            border-radius: 12px;
          }
          .wwu-root-a91f .wwu-form-title {
            font-size: 1.15rem;
          }
        }
      `}</style>

      <div className="wwu-wrapper">
        {/* LEFT SIDE — points */}
        <div className="wwu-left">
          <h1 className="wwu-heading">
            <span className="wwu-heading-blue">Why Work </span>
            <span className="wwu-heading-green">With Us</span>
          </h1>
          <p className="wwu-sub">
            We're a team that believes good work happens when people are trusted, supported,
            and given room to grow. Here's what makes working with us different.
          </p>

          {points.map((point, i) => (
            <div className="wwu-card" key={i}>
              <div className="wwu-card-top">
                <div className="wwu-icon-circle">
                  <StarIcon />
                </div>
                <p className="wwu-card-title">{point.title}</p>
              </div>
              <p className="wwu-card-desc">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE — form, pushed down with top padding on .wwu-right */}
        <div className="wwu-right">
          <div className="wwu-form-card">
            <p className="wwu-form-title">Get in touch</p>
            <p className="wwu-form-sub">Fill this out and our team will reach back to you.</p>

            {submitted ? (
              <p className="wwu-success">Thanks! Your submission has been received.</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="wwu-field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="wwu-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="wwu-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="03xx-xxxxxxx"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="wwu-field">
                  <label htmlFor="role">Role You're Interested In</label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    placeholder="e.g. Frontend Developer"
                    value={form.role}
                    onChange={handleChange}
                  />
                </div>
                <div className="wwu-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us a bit about yourself"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="wwu-submit-btn">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}