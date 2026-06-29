import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import officeImg from "../assets/Images/office.png";

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

const Icon = {
  Pin: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Mail: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/>
    </svg>
  ),
  Phone: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.5 2 2 0 0 1 3.59 2.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
    </svg>
  ),
  Clock: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  Send: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  ),
  Arrow: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  Facebook: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  Twitter: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
    </svg>
  ),
  Instagram: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  YouTube: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#111"/>
    </svg>
  ),
  Headset: () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
    </svg>
  ),
  User: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  MailSm: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/>
    </svg>
  ),
  PhoneSm: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1 19.79 19.79 0 0 1 1.61 4.5 2 2 0 0 1 3.59 2.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/>
    </svg>
  ),
  SubjectSm: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
    </svg>
  ),
};

const infoCards = [
  {
    icon: <Icon.Pin />,
    title: "Our Location",
    lines: ["IT Tech Era,", "Murree Road,", "Opposite to Farooq Corporation,", "Rawalpindi, Pakistan."],
  },
  {
    icon: <Icon.Mail />,
    title: "Email Us",
    lines: ["contact@ittechera.co.uk"],
  },
  {
    icon: <Icon.Phone />,
    title: "Call Us",
    lines: ["+92 3419 168831"],
  },
  {
    icon: <Icon.Clock />,
    title: "Working Hours",
    lines: ["Monday – Friday", "05:00 PM – 02:00 AM"],
  },
];

function InfoCard({ card, delay }) {
  const [ref, vis] = useInView();
  return (
    <div
      ref={ref}
      className="info-card"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
      }}
    >
      <div className="info-icon">{card.icon}</div>
      <h3 className="info-title">{card.title}</h3>
      {card.lines.map((l, i) => <p key={i} className="info-line">{l}</p>)}
    </div>
  );
}

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [heroRef, heroVis] = useInView(0.1);
  const [formRef, formVis] = useInView(0.1);
  const [mapRef, mapVis] = useInView(0.1);
  const [ctaRef, ctaVis] = useInView(0.1);

  const navigate = useNavigate();
  const location = useLocation();

  // ── Scroll to #page6 on homepage after navigation ──
  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#page6") {
      const el = document.getElementById("page6");
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);

  const handleServicesClick = (e) => {
    e.preventDefault();
    // Agar hum already homepage par hain
    if (location.pathname === "/") {
      const el = document.getElementById("page6");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Pehle homepage par jao, phir scroll hoga useEffect se
      navigate("/#page6");
    }
  };

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div style={{ position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; background: #f5f7f0; }

        :root {
          --lime: #b8d400;
          --lime-dark: #8fa300;
          --ink: #1c2238;
          --surface: #ffffff;
          --muted: #6b7280;
          --border: #e5e7eb;
          --bg: #f5f7f0;
        }

        .hero {
          background: var(--bg);
          padding: 120px 6vw 60px;
          display: flex;
          align-items: center;
          gap: 6vw;
          position: relative;
          overflow: hidden;
        }
        .hero-left { flex: 1; min-width: 0; }
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--lime-dark);
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .hero-eyebrow::before,
        .hero-eyebrow::after {
          content: '';
          display: block;
          height: 2px;
          width: 28px;
          background: var(--lime);
          border-radius: 1px;
        }
        .hero-h1 {
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 900;
          color: var(--ink);
          line-height: 1.08;
          letter-spacing: -0.025em;
          margin-bottom: 6px;
        }
        .hero-h1 .lime { color: var(--lime); }
        .hero-body {
          font-size: 16px;
          color: var(--muted);
          line-height: 1.75;
          max-width: 480px;
          margin: 20px 0 36px;
        }
        .hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--lime);
          color: var(--ink);
          font-weight: 700;
          font-size: 14px;
          padding: 13px 24px;
          border-radius: 50px;
          border: none; cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .btn-primary:hover { background: var(--lime-dark); transform: translateY(-2px); }
        .btn-outline {
          display: inline-flex; align-items: center; gap: 10px;
          background: transparent;
          color: var(--ink);
          font-weight: 600;
          font-size: 14px;
          padding: 12px 22px;
          border-radius: 50px;
          border: 2px solid var(--border); cursor: pointer;
          transition: border-color 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .btn-outline:hover { border-color: var(--lime); transform: translateY(-2px); }

        .hero-right {
          flex: 0 0 460px;
          max-width: 460px;
          position: relative;
        }
        .hero-img-ring {
          position: absolute;
          inset: -18px;
          border-radius: 28px;
          border: 3px solid var(--lime);
          opacity: 0.45;
          pointer-events: none;
          z-index: 0;
        }
        .hero-img-wrap {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          aspect-ratio: 4/3;
          z-index: 1;
          box-shadow: 0 20px 60px rgba(0,0,0,0.18);
        }
        .hero-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .hero-img-wrap:hover img { transform: scale(1.04); }
        .hero-arc {
          position: absolute;
          bottom: -36px;
          left: -36px;
          width: 150px;
          height: 150px;
          border: 20px solid var(--lime);
          border-radius: 50%;
          opacity: 0.28;
          pointer-events: none;
          z-index: 0;
        }
        .hero-send-circle {
          position: absolute;
          bottom: 28px;
          left: -28px;
          width: 64px; height: 64px;
          background: var(--lime);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--ink);
          box-shadow: 0 4px 20px rgba(184,212,0,0.55);
          animation: pulse 2.5s ease-in-out infinite;
          z-index: 2;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(184,212,0,0.55); }
          50% { box-shadow: 0 4px 40px rgba(184,212,0,0.9); }
        }

        .hero-left {
          opacity: 0; transform: translateX(-36px);
          transition: opacity 0.7s ease 0.05s, transform 0.7s ease 0.05s;
        }
        .hero-left.vis { opacity: 1; transform: translateX(0); }
        .hero-right {
          opacity: 0; transform: translateX(36px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }
        .hero-right.vis { opacity: 1; transform: translateX(0); }

        .info-section {
          padding: 56px 6vw;
          background: var(--bg);
        }
        .info-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .info-card {
          background: var(--surface);
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .info-card:hover { transform: translateY(-6px); box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
        .info-icon {
          width: 56px; height: 56px;
          background: var(--lime);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--ink);
          margin: 0 auto 16px;
        }
        .info-title { font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 10px; }
        .info-line { font-size: 13px; color: var(--muted); line-height: 1.6; }

        .fm-section {
          padding: 0 6vw 72px;
          background: var(--bg);
        }
        .fm-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .fm-panel {
          background: var(--surface);
          border-radius: 20px;
          padding: 40px 36px;
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
        }
        .panel-title {
          font-size: 22px;
          font-weight: 800;
          color: var(--ink);
          margin-bottom: 6px;
        }
        .panel-rule {
          width: 40px; height: 3px;
          background: var(--lime);
          border-radius: 2px;
          margin-bottom: 10px;
        }
        .panel-sub { font-size: 14px; color: var(--muted); margin-bottom: 28px; line-height: 1.6; }

        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        .form-row-full { margin-bottom: 16px; }
        .input-wrap {
          position: relative;
          display: flex; align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 14px;
          pointer-events: none;
          display: flex; align-items: center;
        }
        .input-wrap input, .form-textarea {
          width: 100%;
          padding: 12px 14px 12px 40px;
          border: 1.5px solid var(--border);
          border-radius: 10px;
          font-size: 14px;
          font-family: inherit;
          color: var(--ink);
          background: #fafaf8;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-textarea {
          padding-left: 14px;
          resize: vertical;
          min-height: 120px;
          display: block;
        }
        .input-wrap input:focus, .form-textarea:focus { border-color: var(--lime); background: #fff; }
        .input-wrap input::placeholder, .form-textarea::placeholder { color: #bbb; }

        .btn-send {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--lime);
          color: var(--ink);
          font-weight: 700;
          font-size: 14px;
          padding: 13px 28px;
          border-radius: 50px;
          border: none; cursor: pointer;
          margin-top: 8px;
          transition: background 0.2s, transform 0.2s;
        }
        .btn-send:hover { background: var(--lime-dark); transform: translateY(-2px); }
        .success-msg {
          margin-top: 14px;
          background: #f0fce0;
          border: 1.5px solid var(--lime);
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 14px;
          font-weight: 600;
          color: var(--lime-dark);
        }

        .map-embed {
          border-radius: 12px;
          overflow: hidden;
          margin: 16px 0 24px;
          border: 1.5px solid var(--border);
        }
        .map-embed iframe {
          display: block;
          width: 100%;
          height: 380px;
          border: none;
        }
        .social-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .social-btn {
          width: 44px; height: 44px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: transform 0.2s, opacity 0.2s;
          border: none;
          color: #fff;
        }
        .social-btn:hover { transform: translateY(-3px); opacity: 0.85; }
        .sb-li { background: #0077b5; }
        .sb-fb { background: var(--lime); color: var(--ink); }
        .sb-tw { background: #1da1f2; }
        .sb-ig { background: linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888); }
        .sb-yt { background: #ff0000; }

        .fm-panel {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.6s ease var(--d, 0s), transform 0.6s ease var(--d, 0s);
        }
        .fm-panel.vis { opacity: 1; transform: translateY(0); }

        .cta-section {
          padding: 0 6vw 80px;
          background: var(--bg);
        }
        .cta-banner {
          max-width: 1200px;
          margin: 0 auto;
          background: var(--ink);
          border-radius: 20px;
          padding: 40px 48px;
          display: flex;
          align-items: center;
          gap: 28px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .cta-banner.vis { opacity: 1; transform: translateY(0); }
        .cta-icon-circle {
          width: 80px; height: 80px;
          background: var(--lime);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--ink);
          flex-shrink: 0;
        }
        .cta-text { flex: 1; }
        .cta-title { font-size: 22px; font-weight: 800; color: #fff; margin-bottom: 6px; }
        .cta-sub { font-size: 14px; color: #aaa; line-height: 1.6; }
        .btn-cta {
          display: inline-flex; align-items: center; gap: 12px;
          background: transparent;
          color: var(--lime);
          font-weight: 700;
          font-size: 15px;
          padding: 14px 28px;
          border-radius: 50px;
          border: 2px solid var(--lime); cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s, color 0.2s, transform 0.2s;
          text-decoration: none;
          flex-shrink: 0;
        }
        .btn-cta:hover { background: var(--lime); color: var(--ink); transform: translateY(-2px); }
        .btn-cta-arrow {
          width: 32px; height: 32px;
          background: var(--lime);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--ink);
          transition: background 0.2s;
        }
        .btn-cta:hover .btn-cta-arrow { background: var(--ink); color: var(--lime); }

        @media (max-width: 1024px) {
          .info-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-right { flex: 0 0 360px; max-width: 360px; }
        }
        @media (max-width: 860px) {
          .hero { flex-direction: column; padding: 110px 5vw 48px; text-align: center; }
          .hero-eyebrow { justify-content: center; }
          .hero-body { margin-left: auto; margin-right: auto; }
          .hero-btns { justify-content: center; }
          .hero-right { flex: none; max-width: 100%; width: 100%; }
          .hero-left { max-width: 100%; }
          .fm-grid { grid-template-columns: 1fr; }
          .cta-banner { flex-direction: column; text-align: center; padding: 32px 24px; }
        }
        @media (max-width: 540px) {
          .hero { padding: 100px 4vw 36px; }
          .info-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .fm-panel { padding: 28px 20px; }
          .cta-section { padding-bottom: 48px; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="hero" ref={heroRef}>
        <div className={`hero-left${heroVis ? " vis" : ""}`}>
          <div className="hero-eyebrow">Contact Us</div>
          <h1 className="hero-h1">
            Let's Build<br />Something<br />
            <span className="lime">Great Together</span>
          </h1>
          <p className="hero-body">
            Have a project in mind or need more information about our services?
            We'd love to hear from you. Reach out to us and we'll get back to you as soon as possible.
          </p>
          <div className="hero-btns">
            <a href="#contact-form" className="btn-primary">
              Send Message <Icon.Arrow />
            </a>

            {/* ── UPDATED BUTTON ── */}
            <button onClick={handleServicesClick} className="btn-outline">
              Our Services <Icon.Arrow />
            </button>
          </div>
        </div>

        <div className={`hero-right${heroVis ? " vis" : ""}`}>
          <div className="hero-img-ring" />
          <div className="hero-img-wrap">
            <img src={officeImg} alt="Ittechera PVT LTD office" />
          </div>
          <div className="hero-arc" />
          <div className="hero-send-circle">
            <Icon.Send />
          </div>
        </div>
      </section>

      {/* ── INFO CARDS ── */}
      <section className="info-section">
        <div className="info-grid">
          {infoCards.map((c, i) => (
            <InfoCard key={i} card={c} delay={i * 0.12} />
          ))}
        </div>
      </section>

      {/* ── FORM + MAP ── */}
      <section className="fm-section" id="contact-form" ref={formRef}>
        <div className="fm-grid">
          <div className={`fm-panel${formVis ? " vis" : ""}`} style={{ "--d": "0s" }}>
            <h2 className="panel-title">Send Us a Message</h2>
            <div className="panel-rule" />
            <p className="panel-sub">Fill out the form below and our team will get back to you shortly.</p>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="input-wrap">
                  <span className="input-icon"><Icon.User /></span>
                  <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="input-wrap">
                  <span className="input-icon"><Icon.MailSm /></span>
                  <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="input-wrap">
                  <span className="input-icon"><Icon.PhoneSm /></span>
                  <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
                </div>
                <div className="input-wrap">
                  <span className="input-icon"><Icon.SubjectSm /></span>
                  <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row-full">
                <textarea
                  className="form-textarea"
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn-send">
                Send Message <Icon.Send />
              </button>
              {sent && (
                <div className="success-msg">
                  ✓ Message sent! We'll get back to you shortly.
                </div>
              )}
            </form>
          </div>

          <div
            ref={mapRef}
            className={`fm-panel${mapVis ? " vis" : ""}`}
            style={{ "--d": "0.15s" }}
          >
            <h2 className="panel-title">Find Us Here</h2>
            <div className="panel-rule" />
            <p className="panel-sub">
              Visit our office or get in touch with us through any of the channels.
            </p>
            <div className="map-embed">
              <iframe
                title="Ittechera Office Location"
                src="https://maps.google.com/maps?q=33.6542177,73.0821343&z=17&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-section">
        <div ref={ctaRef} className={`cta-banner${ctaVis ? " vis" : ""}`}>
          <div className="cta-icon-circle"><Icon.Headset /></div>
          <div className="cta-text">
            <div className="cta-title">Have a Project in Mind?</div>
            <div className="cta-sub">
              Let's discuss how we can help your business grow with digital solutions.
            </div>
          </div>
          <a href="tel:+92 3419 168831" className="btn-cta">
            Schedule a Call
            <div className="btn-cta-arrow"><Icon.Arrow /></div>
          </a>
        </div>
      </section>
    </div>
  );
}