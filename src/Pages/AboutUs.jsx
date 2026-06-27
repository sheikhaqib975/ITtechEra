import { useEffect, useRef, useState } from "react";
import officeImg from "../assets/Images/office.png";
import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";

/* ── scroll reveal hook ── */
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

/* ── counter animation hook ── */
function useCounter(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

/* ── data ── */
const stats = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "", label: "Industries Served" },
];

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: "Excellence",
    desc: "We hold ourselves to the highest standard in every line of code, every design decision, every client interaction.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Collaboration",
    desc: "Your goals become our goals. We work as a true extension of your team, not just a vendor.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    title: "Innovation",
    desc: "We stay ahead of the curve so you don't have to — bringing modern, scalable solutions to every challenge.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Integrity",
    desc: "Transparent communication, honest timelines, and no surprises. Trust is the foundation of every project we take on.",
  },
];

const services = [
  { label: "Web Development", pct: 95 },
  { label: "Mobile App Development", pct: 88 },
  { label: "Digital Marketing", pct: 82 },
  { label: "CRM Solutions", pct: 78 },
  { label: "Power BI & Dashboards", pct: 85 },
  { label: "IT Consulting", pct: 90 },
];

const team = [
  { name: "Ali Raza", role: "Founder & CEO", initial: "A" },
  { name: "Sarah Khan", role: "Lead Developer", initial: "S" },
  { name: "James Miller", role: "UX/UI Designer", initial: "J" },
  { name: "Priya Sharma", role: "Digital Strategist", initial: "P" },
];

const timeline = [
  {
    year: "2022",
    title: "Foundation",
    desc: "Ittechera PVT LTD was established with a clear mission — create meaningful digital impact.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    metric: "Day 1",
    metricLabel: "of the journey",
  },
  {
    year: "2023",
    title: "First 20 Projects",
    desc: "Delivered web and mobile solutions across retail, healthcare, and finance sectors.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    metric: "20+",
    metricLabel: "projects shipped",
  },
  {
    year: "2024",
    title: "Team Expansion",
    desc: "Grew our team and launched our Power BI & Digital Marketing service lines.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    metric: "2x",
    metricLabel: "team growth",
  },
  {
    year: "2025",
    title: "UK Presence",
    desc: "Established our London office, bringing us closer to our growing UK client base.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    metric: "🇬🇧",
    metricLabel: "London office",
  },
  {
    year: "2026",
    title: "Scaling Forward",
    desc: "Now serving 30+ clients globally, continuously building smarter & scalable solutions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    metric: "30+",
    metricLabel: "global clients",
  },
];

/* ── stat card with counter ── */
function StatCard({ stat, delay }) {
  const [ref, vis] = useInView(0.2);
  const count = useCounter(stat.value, 1600, vis);
  return (
    <div
      ref={ref}
      className="stat-card"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
      }}
    >
      <div className="stat-number">{count}{stat.suffix}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

/* ── skill bar ── */
function SkillBar({ item, delay, active }) {
  return (
    <div className="skill-item" style={{ opacity: active ? 1 : 0, transform: active ? "translateX(0)" : "translateX(-24px)", transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s` }}>
      <div className="skill-top">
        <span className="skill-name">{item.label}</span>
        <span className="skill-pct">{active ? item.pct : 0}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ width: active ? `${item.pct}%` : "0%", transition: `width 1.1s cubic-bezier(.4,0,.2,1) ${delay + 0.1}s` }}
        />
      </div>
    </div>
  );
}

export default function AboutUs() {
  const [heroRef, heroVis] = useInView(0.1);
  const [missionRef, missionVis] = useInView(0.1);
  const [valuesRef, valuesVis] = useInView(0.1);
  const [skillsRef, skillsVis] = useInView(0.1);
  const [teamRef, teamVis] = useInView(0.1);
  const [timelineRef, timelineVis] = useInView(0.05);
  const [ctaRef, ctaVis] = useInView(0.1);

  return (
    <div className="au-root">
      {/* <Navbar /> */}

      <style>{`
        

        /* ── Reset scoped to au-root only so global body styles stay intact ── */
        .au-root *, .au-root *::before, .au-root *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .au-root {
          font-family: 'Inter', sans-serif;
          background: #f5f7f0;
          position: relative;
          overflow-x: hidden;
        }

        :root {
          --lime: #b8d400;
          --lime-dark: #8fa300;
          --ink: #162238;
          --surface: #ffffff;
          --muted: #6b7280;
          --border: #e5e7eb;
          --bg: #f5f7f0;
        }

        /* ════════════════════════════
           HERO
        ════════════════════════════ */
        .au-hero {
          background: var(--bg);
          padding: 120px 6vw 72px;
          display: flex;
          align-items: center;
          gap: 6vw;
          position: relative;
          overflow: hidden;
          min-height: 92vh;
        }
        .au-hero-blob {
          position: absolute;
          top: -120px; right: -120px;
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(184,212,0,0.13) 0%, transparent 70%);
          border-radius: 50%;
          animation: blobPulse 6s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes blobPulse {
          0%,100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.12); opacity: 1; }
        }
        .au-hero-left {
          flex: 1; min-width: 0; position: relative; z-index: 1;
          opacity: 0; transform: translateX(-40px);
          transition: opacity 0.7s ease 0.05s, transform 0.7s ease 0.05s;
        }
        .au-hero-left.vis { opacity: 1; transform: translateX(0); }
        .au-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.12em; color: var(--lime-dark);
          text-transform: uppercase; margin-bottom: 20px;
        }
        .au-eyebrow::before, .au-eyebrow::after {
          content: ''; display: block;
          height: 2px; width: 28px;
          background: var(--lime); border-radius: 1px;
        }
        .au-h1 {
          font-size: clamp(2.6rem, 5.5vw, 4.4rem);
          font-weight: 900; color: var(--ink);
          line-height: 1.06; letter-spacing: -0.025em;
          margin-bottom: 22px;
        }
        .au-h1 .au-lime { color: var(--lime); }
        .au-hero-body {
          font-size: 16px; color: var(--muted);
          line-height: 1.8; max-width: 500px;
          margin-bottom: 40px;
        }
        .au-hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }
        .au-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--lime); color: var(--ink);
          font-weight: 700; font-size: 14px;
          padding: 13px 26px; border-radius: 50px;
          border: none; cursor: pointer; text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .au-btn-primary:hover { background: var(--lime-dark); transform: translateY(-2px); }
        .au-btn-outline {
          display: inline-flex; align-items: center; gap: 10px;
          background: transparent; color: var(--ink);
          font-weight: 600; font-size: 14px;
          padding: 12px 22px; border-radius: 50px;
          border: 2px solid var(--border); cursor: pointer; text-decoration: none;
          transition: border-color 0.2s, transform 0.2s;
        }
        .au-btn-outline:hover { border-color: var(--lime); transform: translateY(-2px); }
        .au-hero-right {
          flex: 0 0 460px; max-width: 460px; position: relative; z-index: 1;
          opacity: 0; transform: translateX(40px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }
        .au-hero-right.vis { opacity: 1; transform: translateX(0); }
        .au-img-frame {
          position: relative; border-radius: 24px; overflow: hidden;
          aspect-ratio: 4/3;
          box-shadow: 0 24px 64px rgba(22,34,56,0.18);
          z-index: 1;
        }
        .au-img-frame img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.6s ease;
        }
        .au-img-frame:hover img { transform: scale(1.04); }
        .au-img-ring {
          position: absolute; inset: -14px;
          border: 3px solid var(--lime); border-radius: 30px;
          opacity: 0.4; pointer-events: none; z-index: 0;
        }
        .au-img-badge {
          position: absolute; bottom: -20px; right: -20px;
          background: var(--ink); color: #fff;
          border-radius: 16px; padding: 16px 22px;
          box-shadow: 0 8px 32px rgba(22,34,56,0.22);
          z-index: 2; min-width: 160px;
          animation: badgeFloat 4s ease-in-out infinite;
        }
        @keyframes badgeFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .au-badge-num { font-size: 28px; font-weight: 900; color: var(--lime); line-height: 1; }
        .au-badge-txt { font-size: 12px; color: #aaa; margin-top: 3px; font-weight: 500; }

        /* ════════════════════════════
           STATS
        ════════════════════════════ */
        .au-stats-section { background: var(--ink); padding: 56px 6vw; }
        .au-stats-grid {
          display: grid; grid-template-columns: repeat(4,1fr);
          gap: 0; max-width: 1200px; margin: 0 auto;
        }
        .stat-card {
          text-align: center; padding: 28px 20px;
          border-right: 1px solid rgba(255,255,255,0.1);
          border-bottom: none;
        }
        .stat-card:last-child { border-right: none; }
        .stat-number {
          font-size: clamp(2.4rem, 4vw, 3.4rem);
          font-weight: 900; color: var(--lime);
          line-height: 1; letter-spacing: -0.02em;
        }
        .stat-label { font-size: 13px; color: #aaa; margin-top: 8px; font-weight: 500; line-height: 1.4; }

        /* ════════════════════════════
           MISSION
        ════════════════════════════ */
        .au-mission-section {
          padding: 88px 6vw;
          background: var(--bg);
          display: flex; gap: 7vw; align-items: center;
        }
        .au-mission-left {
          flex: 1; min-width: 0;
          opacity: 0; transform: translateX(-32px);
          transition: opacity 0.65s ease 0.05s, transform 0.65s ease 0.05s;
        }
        .au-mission-left.vis { opacity: 1; transform: translateX(0); }
        .au-section-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.12em; color: var(--lime-dark);
          text-transform: uppercase; margin-bottom: 16px;
        }
        .au-section-eyebrow::before {
          content: ''; display: block;
          height: 2px; width: 28px;
          background: var(--lime); border-radius: 1px;
        }
        .au-section-h2 {
          font-size: clamp(1.9rem, 3.5vw, 2.8rem);
          font-weight: 900; color: var(--ink);
          line-height: 1.1; letter-spacing: -0.02em;
          margin-bottom: 20px;
        }
        .au-section-h2 .au-lime { color: var(--lime); }
        .au-section-body {
          font-size: 15px; color: var(--muted);
          line-height: 1.8; margin-bottom: 16px; max-width: 520px;
        }
        .au-checklist {
          list-style: none; margin-top: 24px; display: flex; flex-direction: column; gap: 12px;
        }
        .au-checklist li {
          display: flex; align-items: flex-start; gap: 12px;
          font-size: 14px; color: var(--ink); font-weight: 500;
        }
        .au-check-dot {
          width: 22px; height: 22px; flex-shrink: 0;
          background: var(--lime); border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin-top: 1px;
        }
        .au-mission-right {
          flex: 0 0 420px; max-width: 420px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
          opacity: 0; transform: translateX(32px);
          transition: opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s;
        }
        .au-mission-right.vis { opacity: 1; transform: translateX(0); }
        .au-mission-card {
          background: var(--surface); border-radius: 16px;
          padding: 28px 22px;
          box-shadow: 0 2px 16px rgba(22,34,56,0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .au-mission-card:hover { transform: translateY(-5px); box-shadow: 0 8px 32px rgba(22,34,56,0.12); }
        .au-mission-card:first-child { grid-column: span 2; background: var(--ink); }
        .au-mission-card:first-child .au-mc-title { color: #fff; }
        .au-mission-card:first-child .au-mc-body { color: #aaa; }
        .au-mc-icon {
          width: 48px; height: 48px; background: var(--lime);
          border-radius: 12px; display: flex; align-items: center; justify-content: center;
          color: var(--ink); margin-bottom: 16px;
        }
        .au-mc-title { font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 8px; }
        .au-mc-body { font-size: 13px; color: var(--muted); line-height: 1.65; }

        /* ════════════════════════════
           VALUES
        ════════════════════════════ */
        .au-values-section { padding: 88px 6vw; background: var(--surface); }
        .au-values-header { text-align: center; max-width: 560px; margin: 0 auto 56px; }
        .au-values-grid {
          display: grid; grid-template-columns: repeat(4,1fr);
          gap: 24px; max-width: 1200px; margin: 0 auto;
        }
        .au-value-card {
          background: var(--bg); border-radius: 20px;
          padding: 36px 28px; text-align: center;
          border: 1.5px solid transparent;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .au-value-card:hover {
          border-color: var(--lime);
          transform: translateY(-6px);
          box-shadow: 0 12px 36px rgba(184,212,0,0.12);
        }
        .au-value-icon {
          width: 64px; height: 64px;
          background: var(--lime); border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--ink); margin: 0 auto 20px;
        }
        .au-value-title { font-size: 17px; font-weight: 800; color: var(--ink); margin-bottom: 12px; }
        .au-value-desc { font-size: 13px; color: var(--muted); line-height: 1.7; }

        /* ════════════════════════════
           SKILLS
        ════════════════════════════ */
        .au-skills-section {
          padding: 88px 6vw;
          background: var(--bg);
          display: flex; gap: 7vw; align-items: center;
        }
        .au-skills-left {
          flex: 1; min-width: 0;
          opacity: 0; transform: translateX(-32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .au-skills-left.vis { opacity: 1; transform: translateX(0); }
        .skill-item { margin-bottom: 22px; }
        .skill-top { display: flex; justify-content: space-between; margin-bottom: 8px; }
        .skill-name { font-size: 14px; font-weight: 600; color: var(--ink); }
        .skill-pct { font-size: 13px; font-weight: 700; color: var(--lime-dark); }
        .skill-track { height: 8px; background: var(--border); border-radius: 99px; overflow: hidden; }
        .skill-fill {
          height: 100%; background: linear-gradient(90deg, var(--lime-dark), var(--lime));
          border-radius: 99px; width: 0%;
        }
        .au-skills-right {
          flex: 0 0 420px; max-width: 420px;
          opacity: 0; transform: translateX(32px);
          transition: opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s;
        }
        .au-skills-right.vis { opacity: 1; transform: translateX(0); }
        .au-skills-img-wrap {
          position: relative; border-radius: 22px; overflow: hidden;
          aspect-ratio: 4/3;
          box-shadow: 0 20px 56px rgba(22,34,56,0.16);
        }
        .au-skills-img-wrap img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.6s ease;
        }
        .au-skills-img-wrap:hover img { transform: scale(1.04); }
        .au-skills-lime-corner {
          position: absolute; bottom: -20px; right: -20px;
          width: 100px; height: 100px;
          background: var(--lime); border-radius: 50%; opacity: 0.25;
          pointer-events: none;
        }

        /* ════════════════════════════
           TEAM
        ════════════════════════════ */
        .au-team-section { padding: 88px 6vw; background: var(--surface); }
        .au-team-header { text-align: center; max-width: 540px; margin: 0 auto 56px; }
        .au-team-grid {
          display: grid; grid-template-columns: repeat(4,1fr);
          gap: 24px; max-width: 1200px; margin: 0 auto;
        }
        .au-team-card {
          background: var(--bg); border-radius: 20px;
          padding: 36px 24px; text-align: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .au-team-card:hover { transform: translateY(-6px); box-shadow: 0 12px 36px rgba(22,34,56,0.1); }
        .au-team-avatar {
          width: 80px; height: 80px; border-radius: 50%;
          background: var(--lime); color: var(--ink);
          display: flex; align-items: center; justify-content: center;
          font-size: 32px; font-weight: 900;
          margin: 0 auto 18px;
          box-shadow: 0 0 0 4px rgba(184,212,0,0.2);
        }
        .au-team-name { font-size: 16px; font-weight: 700; color: var(--ink); margin-bottom: 6px; }
        .au-team-role { font-size: 13px; color: var(--muted); font-weight: 500; margin-bottom: 16px; }
        .au-team-divider { width: 32px; height: 2px; background: var(--lime); border-radius: 1px; margin: 0 auto; }

        /* ════════════════════════════
           TIMELINE — FULL REDESIGN
        ════════════════════════════ */
        .au-tl-section {
          background: var(--ink);
          padding: 0;
          width: 100%;
          overflow: hidden;
        }

        /* Top header band */
        .au-tl-header-band {
          padding: 88px 6vw 64px;
          text-align: center;
          position: relative;
        }
        .au-tl-header-band::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%; transform: translateX(-50%);
          width: 60px; height: 3px;
          background: var(--lime);
          border-radius: 2px;
        }
        .au-tl-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.12em; color: var(--lime);
          text-transform: uppercase; margin-bottom: 16px;
        }
        .au-tl-eyebrow::before, .au-tl-eyebrow::after {
          content: ''; display: block;
          height: 2px; width: 28px;
          background: var(--lime); border-radius: 1px;
        }
        .au-tl-h2 {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 900; color: #fff;
          line-height: 1.1; letter-spacing: -0.02em;
          margin-bottom: 16px;
        }
        .au-tl-h2 .au-lime { color: var(--lime); }
        .au-tl-sub { font-size: 15px; color: rgba(255,255,255,0.55); line-height: 1.7; }

        /* Cards grid — full width */
        .au-tl-cards-wrap {
          width: 100%;
          padding: 64px 6vw 88px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
          position: relative;
        }

        /* Connector line behind cards */
        .au-tl-cards-wrap::before {
          content: '';
          position: absolute;
          top: 108px;
          left: calc(6vw + 10%);
          right: calc(6vw + 10%);
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--lime) 10%, var(--lime) 90%, transparent);
          opacity: 0.3;
          pointer-events: none;
        }

        .au-tl-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 16px;
          position: relative;
          text-align: center;
        }

        /* Vertical connector from dot downward */
        .au-tl-card::after {
          content: '';
          position: absolute;
          top: 80px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 32px;
          background: var(--lime);
          opacity: 0.4;
        }
        .au-tl-card:nth-child(even)::after { opacity: 0.25; }

        /* Year pill */
        .au-tl-year {
          font-size: 13px; font-weight: 800;
          color: var(--ink);
          background: var(--lime);
          padding: 6px 18px;
          border-radius: 99px;
          letter-spacing: 0.06em;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        /* Icon circle */
        .au-tl-icon-wrap {
          width: 60px; height: 60px;
          border-radius: 50%;
          background: rgba(184,212,0,0.12);
          border: 2px solid rgba(184,212,0,0.35);
          display: flex; align-items: center; justify-content: center;
          color: var(--lime);
          margin-bottom: 0;
          position: relative;
          z-index: 1;
          transition: background 0.3s, border-color 0.3s;
        }
        .au-tl-card:hover .au-tl-icon-wrap {
          background: var(--lime);
          border-color: var(--lime);
          color: var(--ink);
        }

        /* Content below */
        .au-tl-content {
          padding-top: 32px;
          flex: 1;
        }
        .au-tl-title {
          font-size: 15px; font-weight: 800;
          color: #fff;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .au-tl-desc {
          font-size: 13px; color: rgba(255,255,255,0.5);
          line-height: 1.75;
          margin-bottom: 20px;
        }
        .au-tl-metric {
          display: inline-flex; flex-direction: column;
          align-items: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 12px 20px;
          min-width: 100px;
        }
        .au-tl-metric-num {
          font-size: 20px; font-weight: 900;
          color: var(--lime); line-height: 1;
          margin-bottom: 4px;
        }
        .au-tl-metric-lbl {
          font-size: 11px; color: rgba(255,255,255,0.4);
          font-weight: 500; letter-spacing: 0.04em;
        }

        /* Alternating card elevation for visual rhythm */
        .au-tl-card:nth-child(even) .au-tl-content {
          padding-top: 56px;
        }

        /* Bottom decorative band */
        .au-tl-footer-band {
          background: rgba(255,255,255,0.03);
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 32px 6vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .au-tl-footer-txt {
          font-size: 14px; color: rgba(255,255,255,0.45);
        }
        .au-tl-footer-txt strong {
          color: var(--lime); font-weight: 700;
        }
        .au-tl-footer-badge {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(184,212,0,0.1);
          border: 1px solid rgba(184,212,0,0.25);
          border-radius: 99px;
          padding: 8px 20px;
          font-size: 13px; font-weight: 700; color: var(--lime);
        }
        .au-tl-footer-dot {
          width: 8px; height: 8px;
          background: var(--lime); border-radius: 50%;
          animation: blobPulse 2s ease-in-out infinite;
        }

        /* ════════════════════════════
           CTA
        ════════════════════════════ */
        .au-cta-section { padding: 80px 6vw; background: var(--bg); }
        .au-cta-banner {
          max-width: 100%; margin: 0 auto;
          background: var(--ink); border-radius: 20px;
          padding: 48px 56px;
          display: flex; align-items: center; gap: 28px;
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .au-cta-banner.vis { opacity: 1; transform: translateY(0); }
        .au-cta-icon-circle {
          width: 80px; height: 80px; flex-shrink: 0;
          background: var(--lime); border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--ink);
          animation: blobPulse 3s ease-in-out infinite;
        }
        .au-cta-text-block { flex: 1; }
        .au-cta-title { font-size: 22px; font-weight: 800; color: #fff; margin-bottom: 6px; }
        .au-cta-sub { font-size: 14px; color: #aaa; line-height: 1.6; }
        .au-btn-cta {
          display: inline-flex; align-items: center; gap: 12px;
          background: transparent; color: var(--lime);
          font-weight: 700; font-size: 15px;
          padding: 14px 28px; border-radius: 50px;
          border: 2px solid var(--lime); cursor: pointer;
          white-space: nowrap; text-decoration: none; flex-shrink: 0;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .au-btn-cta:hover { background: var(--lime); color: var(--ink); transform: translateY(-2px); }
        .au-btn-cta-arrow {
          width: 32px; height: 32px;
          background: var(--lime); border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--ink); transition: background 0.2s;
        }
        .au-btn-cta:hover .au-btn-cta-arrow { background: var(--ink); color: var(--lime); }

        /* ════════════════════════════
           RESPONSIVE
        ════════════════════════════ */
        @media (max-width: 1100px) {
          .au-values-grid { grid-template-columns: repeat(2,1fr); }
          .au-team-grid { grid-template-columns: repeat(2,1fr); }
          .au-stats-grid { grid-template-columns: repeat(2,1fr); }
          /* 2-col stats: clear all right borders, add bottom separators between rows */
          .stat-card { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
          .stat-card:nth-child(1),
          .stat-card:nth-child(2) { border-right: none; }
          .stat-card:nth-child(1),
          .stat-card:nth-child(2) { border-bottom: 1px solid rgba(255,255,255,0.1); }
          .stat-card:nth-child(3),
          .stat-card:nth-child(4) { border-bottom: none; }
          /* Add vertical divider between col 1 and col 2 */
          .stat-card:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.1); }
          .au-mission-right { flex: 0 0 360px; max-width: 360px; }
          .au-skills-right { flex: 0 0 360px; max-width: 360px; }
          .au-hero-right { flex: 0 0 380px; max-width: 380px; }
          .au-tl-cards-wrap { grid-template-columns: repeat(3, 1fr); gap: 24px; }
          .au-tl-cards-wrap::before { display: none; }
          .au-tl-card::after { display: none; }
          .au-tl-card:nth-child(even) .au-tl-content { padding-top: 32px; }
        }
        @media (max-width: 860px) {
          .au-hero { flex-direction: column; padding: 110px 5vw 56px; text-align: center; min-height: unset; }
          .au-eyebrow { margin: 0 auto 20px; }
          .au-hero-body { margin-left: auto; margin-right: auto; }
          .au-hero-btns { justify-content: center; }
          .au-hero-right, .au-hero-left { flex: none; max-width: 100%; width: 100%; }
          /* Shrink the hero image area on mobile */
          .au-hero-right { max-width: 420px; margin: 0 auto; }
          .au-img-badge { bottom: -16px; right: -8px; padding: 12px 16px; min-width: 130px; }
          .au-badge-num { font-size: 22px; }
          .au-badge-txt { font-size: 11px; }
          .au-mission-section, .au-skills-section { flex-direction: column; }
          .au-mission-right, .au-skills-right { flex: none; max-width: 100%; width: 100%; }
          /* Mission right: 2 col on tablet, but first card spans both */
          .au-mission-right { display: grid; grid-template-columns: 1fr 1fr; }
          .au-mission-card:first-child { grid-column: span 2; }
          /* value cards 2 col */
          .au-values-grid { grid-template-columns: repeat(2,1fr); }
          /* team 2 col */
          .au-team-grid { grid-template-columns: repeat(2,1fr); }
          /* stats still 2 col */
          .au-stats-grid { grid-template-columns: repeat(2,1fr); }
          .au-tl-cards-wrap { grid-template-columns: repeat(2, 1fr); gap: 20px; padding: 48px 5vw 72px; }
          .au-cta-banner { flex-direction: column; text-align: center; padding: 36px 28px; }
        }
        @media (max-width: 600px) {
          .au-hero { padding: 100px 4vw 48px; }
          .au-hero-right { max-width: 100%; }
          .au-img-badge { bottom: -14px; right: 0; padding: 10px 14px; min-width: 120px; }
          .au-badge-num { font-size: 20px; }
          .au-values-grid { grid-template-columns: 1fr; }
          .au-team-grid { grid-template-columns: repeat(2, 1fr); }
          /* Stats: single column on very small screens — clean, no lines */
          .au-stats-section { padding: 40px 4vw; }
          .au-stats-grid { grid-template-columns: 1fr; gap: 0; }
          .stat-card {
            border-right: none !important;
            border-top: none !important;
            border-left: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.1) !important;
            padding: 24px 16px;
          }
          .stat-card:last-child { border-bottom: none !important; }
          /* Mission right single col */
          .au-mission-right { grid-template-columns: 1fr; }
          .au-mission-card:first-child { grid-column: span 1; }
          /* Skills image smaller */
          .au-skills-img-wrap { aspect-ratio: 16/9; }
          .au-tl-cards-wrap { grid-template-columns: 1fr; gap: 16px; padding: 40px 4vw 64px; }
          .au-tl-footer-band { flex-direction: column; text-align: center; }
          .au-cta-banner { padding: 28px 20px; }
          /* Team section padding reduce */
          .au-team-section { padding: 60px 4vw; }
          .au-values-section { padding: 60px 4vw; }
          .au-mission-section { padding: 60px 4vw; }
          .au-skills-section { padding: 60px 4vw; }
        }
        @media (prefers-reduced-motion: reduce) {
          .au-root *, .au-root *::before, .au-root *::after { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* ══════════════ HERO ══════════════ */}
      <section className="au-hero" ref={heroRef}>
        <div className="au-hero-blob" />
        <div className={`au-hero-left${heroVis ? " vis" : ""}`}>
          <div className="au-eyebrow">About Us</div>
          <h1 className="au-h1">
            We Build Digital<br />Solutions That<br />
            <span className="au-lime">Drive Real Growth</span>
          </h1>
          <p className="au-hero-body">
            Ittechera PVT LTD is a digital agency delivering web development,
            mobile apps, CRM solutions, and digital marketing that help businesses grow
            faster in a connected world.
          </p>
          <div className="au-hero-btns">
            <Link to="/contact" className="au-btn-primary">
  Work With Us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
           </Link>
            <a href="#mission" className="au-btn-outline">
              Our Story
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
        <div className={`au-hero-right${heroVis ? " vis" : ""}`}>
          <div style={{ position: "relative" }}>
            <div className="au-img-ring" />
            <div className="au-img-frame">
              <img src={officeImg} alt="Ittechera office" />
            </div>
            <div className="au-img-badge">
              <div className="au-badge-num">4+</div>
              <div className="au-badge-txt">Years Delivering<br />Digital Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <section className="au-stats-section">
        <div className="au-stats-grid">
          {stats.map((s, i) => <StatCard key={i} stat={s} delay={i * 0.1} />)}
        </div>
      </section>

      {/* ══════════════ MISSION ══════════════ */}
      <section className="au-mission-section" id="mission" ref={missionRef}>
        <div className={`au-mission-left${missionVis ? " vis" : ""}`}>
          <div className="au-section-eyebrow">Our Mission</div>
          <h2 className="au-section-h2">
            Built to Help Businesses<br /><span className="au-lime">Thrive Digitally</span>
          </h2>
          <p className="au-section-body">
            Since 2022, Ittechera has been on a single mission: make powerful digital tools
            accessible to every business — from ambitious startups to established enterprises.
          </p>
          <p className="au-section-body">
            We combine technical depth with strategic thinking to deliver solutions that don't
            just look great, but actually move the needle for your business.
          </p>
          <ul className="au-checklist">
            {[
              "End-to-end digital project delivery",
              "Dedicated team assigned to every client",
              "Agile process with full transparency",
              "Post-launch support & continuous improvement",
            ].map((item, i) => (
              <li key={i}>
                <div className="au-check-dot">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#162238" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={`au-mission-right${missionVis ? " vis" : ""}`}>
          {[
            {
              title: "Our Vision",
              body: "To be the most trusted digital partner for growing businesses across the UK and beyond.",
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
            },
            {
              title: "Client-First",
              body: "Every decision starts with one question: what's best for the client?",
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
            },
            {
              title: "Always Growing",
              body: "We invest in our team's skills so our clients always get cutting-edge expertise.",
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
            },
          ].map((c, i) => (
            <div className="au-mission-card" key={i}>
              <div className="au-mc-icon">{c.icon}</div>
              <div className="au-mc-title">{c.title}</div>
              <div className="au-mc-body">{c.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ VALUES ══════════════ */}
      <section className="au-values-section" ref={valuesRef}>
        <div className="au-values-header">
          <div className="au-section-eyebrow" style={{ justifyContent: "center" }}>Our Values</div>
          <h2 className="au-section-h2">What We Stand For</h2>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, marginTop: 12 }}>
            These aren't posters on a wall — they're the principles guiding every project we deliver.
          </p>
        </div>
        <div className="au-values-grid">
          {values.map((v, i) => (
            <div
              key={i}
              className="au-value-card"
              style={{
                opacity: valuesVis ? 1 : 0,
                transform: valuesVis ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.55s ease ${i * 0.12}s, transform 0.55s ease ${i * 0.12}s`,
              }}
            >
              <div className="au-value-icon">{v.icon}</div>
              <div className="au-value-title">{v.title}</div>
              <div className="au-value-desc">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ SKILLS ══════════════ */}
      <section className="au-skills-section" ref={skillsRef}>
        <div className={`au-skills-left${skillsVis ? " vis" : ""}`}>
          <div className="au-section-eyebrow">Our Expertise</div>
          <h2 className="au-section-h2">
            Skills That<br /><span className="au-lime">Deliver Results</span>
          </h2>
          <p className="au-section-body">
            We've sharpened our craft across every major digital discipline.
            Here's what we bring to your project:
          </p>
          <div style={{ marginTop: 32 }}>
            {services.map((s, i) => (
              <SkillBar key={i} item={s} delay={i * 0.1} active={skillsVis} />
            ))}
          </div>
        </div>
        <div className={`au-skills-right${skillsVis ? " vis" : ""}`}>
          <div className="au-skills-img-wrap">
            <img src={officeImg} alt="Ittechera team at work" />
            <div className="au-skills-lime-corner" />
          </div>
        </div>
      </section>

      {/* ══════════════ TEAM ══════════════ */}
      <section className="au-team-section" ref={teamRef}>
        <div className="au-team-header">
          <div className="au-section-eyebrow" style={{ justifyContent: "center" }}>Meet the Team</div>
          <h2 className="au-section-h2">The People Behind the Work</h2>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, marginTop: 12 }}>
            A small, focused team of specialists who care deeply about what they build.
          </p>
        </div>
        <div className="au-team-grid">
          {team.map((m, i) => (
            <div
              key={i}
              className="au-team-card"
              style={{
                opacity: teamVis ? 1 : 0,
                transform: teamVis ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.55s ease ${i * 0.13}s, transform 0.55s ease ${i * 0.13}s`,
              }}
            >
              <div className="au-team-avatar">{m.initial}</div>
              <div className="au-team-name">{m.name}</div>
              <div className="au-team-role">{m.role}</div>
              <div className="au-team-divider" />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ TIMELINE — REDESIGNED ══════════════ */}
      <section className="au-tl-section" ref={timelineRef}>
        {/* Header */}
        <div className="au-tl-header-band">
          <div className="au-tl-eyebrow">Our Journey</div>
          <h2 className="au-tl-h2">
            How We Got <span className="au-lime">Here</span>
          </h2>
          <p className="au-tl-sub">Every milestone shaped who we are and what we deliver today.</p>
        </div>

        {/* Full-width cards grid */}
        <div className="au-tl-cards-wrap">
          {timeline.map((t, i) => (
            <div
              key={i}
              className="au-tl-card"
              style={{
                opacity: timelineVis ? 1 : 0,
                transform: timelineVis ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
              }}
            >
              <div className="au-tl-year">{t.year}</div>
              <div className="au-tl-icon-wrap">{t.icon}</div>
              <div className="au-tl-content">
                <div className="au-tl-title">{t.title}</div>
                <div className="au-tl-desc">{t.desc}</div>
                <div className="au-tl-metric">
                  <div className="au-tl-metric-num">{t.metric}</div>
                  <div className="au-tl-metric-lbl">{t.metricLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer band */}
        <div className="au-tl-footer-band">
          <p className="au-tl-footer-txt">
            From a bold idea in <strong>2022</strong> to serving <strong>30+ clients globally</strong> — and we're just getting started.
          </p>
          <div className="au-tl-footer-badge">
            <div className="au-tl-footer-dot" />
            Actively Growing · Est. 2022
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <section className="au-cta-section">
        <div ref={ctaRef} className={`au-cta-banner${ctaVis ? " vis" : ""}`}>
          <div className="au-cta-icon-circle">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div className="au-cta-text-block">
            <div className="au-cta-title">Ready to Start Your Project?</div>
            <div className="au-cta-sub">Let's talk about your goals and build something great together.</div>
          </div>
          <a href="/contact" className="au-btn-cta">
            Get in Touch
            <div className="au-btn-cta-arrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
