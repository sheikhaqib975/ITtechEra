import { useState } from "react";

/* ---- Inline SVG icons (no external icon library, avoids React version conflicts) ---- */

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const ClipboardCheckIcon = () => (
  <svg {...iconProps}>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M9 14l2 2 4-4" />
  </svg>
);

const SettingsIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const UserIcon = () => (
  <svg {...iconProps}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BanIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="10" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
  </svg>
);

const CopyrightIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="10" />
    <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
  </svg>
);

const CreditCardIcon = () => (
  <svg {...iconProps}>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const AlertTriangleIcon = () => (
  <svg {...iconProps}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const ScaleIcon = () => (
  <svg {...iconProps}>
    <path d="M12 2v20" />
    <path d="M5 6h14" />
    <path d="M5 6l-2.5 6a3.5 3.5 0 0 0 7 0z" />
    <path d="M19 6l-2.5 6a3.5 3.5 0 0 0 7 0z" />
    <path d="M7 22h10" />
  </svg>
);

/* ---- Section data ---- */

const sections = [
  {
    id: "acceptance",
    icon: ClipboardCheckIcon,
    title: "Acceptance of Terms",
    content: (
      <>
        <p>
          By accessing or using the services provided by <strong>Acme Corp</strong> ("Company",
          "we", "us", or "our"), you agree to be bound by these Terms and Conditions. If you do
          not agree with any part of these terms, you may not use our services.
        </p>
        <p>
          These terms apply to all visitors, users, and others who access or use the service. By
          using this website, you represent that you are at least 18 years of age.
        </p>
      </>
    ),
  },
  {
    id: "services",
    icon: SettingsIcon,
    title: "Use of Services",
    content: (
      <>
        <p>
          You may use our services only for lawful purposes and in accordance with these Terms.
          You agree not to use the services:
        </p>
        <ul>
          <li>In any way that violates any applicable national or international law or regulation.</li>
          <li>To transmit or send any unsolicited or unauthorized advertising or promotional material.</li>
          <li>To impersonate or attempt to impersonate the Company or any other person or entity.</li>
          <li>In any way that could disable, overburden, damage, or impair the site or servers.</li>
        </ul>
        <div className="highlight-box">
          We reserve the right to modify or discontinue the service at any time without notice. We
          shall not be liable to you or any third party for any modification, suspension, or
          discontinuation of the service.
        </div>
      </>
    ),
  },
  {
    id: "accounts",
    icon: UserIcon,
    title: "User Accounts",
    content: (
      <>
        <p>
          When you create an account with us, you must provide accurate, complete, and current
          information. You are responsible for safeguarding the password that you use to access
          the service and for any activities or actions under your password.
        </p>
        <p>
          You agree not to disclose your password to any third party. You must notify us
          immediately upon becoming aware of any breach of security or unauthorized use of your
          account.
        </p>
      </>
    ),
  },
  {
    id: "prohibited",
    icon: BanIcon,
    title: "Prohibited Activities",
    content: (
      <>
        <p>The following activities are strictly prohibited on our platform:</p>
        <ul>
          <li>Hacking, phishing, or any other malicious activity targeting our systems or users.</li>
          <li>Uploading or sharing illegal content including copyrighted material without permission.</li>
          <li>Harassment, abuse, or threatening behavior toward other users or our staff.</li>
          <li>Creating multiple accounts to bypass restrictions or bans.</li>
          <li>Selling or transferring your account to another person.</li>
        </ul>
      </>
    ),
  },
  {
    id: "ip",
    icon: CopyrightIcon,
    title: "Intellectual Property",
    content: (
      <p>
        The service and its original content, features, and functionality are and will remain the
        exclusive property of Acme Corp and its licensors. Our trademarks and trade dress may not
        be used in connection with any product or service without the prior written consent of
        Acme Corp.
      </p>
    ),
  },
  {
    id: "payments",
    icon: CreditCardIcon,
    title: "Payments & Refunds",
    content: (
      <>
        <p>
          All purchases are final and non-refundable unless otherwise stated in our Refund Policy.
          We reserve the right to refuse or cancel your order if fraud or unauthorized transactions
          are suspected.
        </p>
        <p>
          Prices for our products are subject to change without notice. We shall not be liable to
          you or any third party for any price modifications.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    icon: AlertTriangleIcon,
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          In no event shall Acme Corp, its directors, employees, partners, agents, suppliers, or
          affiliates, be liable for any indirect, incidental, special, consequential, or punitive
          damages resulting from your access to or use of the service.
        </p>
        <div className="highlight-box">
          Our total liability to you for any claims arising from these Terms shall not exceed the
          amount you paid to us in the 12 months preceding the claim.
        </div>
      </>
    ),
  },
  {
    id: "governing",
    icon: ScaleIcon,
    title: "Governing Law",
    content: (
      <p>
        These Terms shall be governed and construed in accordance with the laws of the State of
        California, United States, without regard to its conflict of law provisions. Any disputes
        arising under these Terms shall be subject to the exclusive jurisdiction of the courts
        located in San Francisco, California.
      </p>
    ),
  },
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div style={styles.page}>
      <style>{css}</style>

      {/* Header */}
      <div style={styles.hero}>
        <div style={styles.heroInner}>
          <span style={styles.badge}>Legal</span>
          <h1 style={styles.heroTitle}>Terms &amp; Conditions</h1>
          <p style={styles.heroMeta}>
            Effective: January 1, 2025 &nbsp;·&nbsp; Last updated: June 15, 2025
          </p>
          <p style={styles.heroDesc}>
            Please read these terms carefully before using our services. By using Acme Corp, you
            agree to be bound by these terms.
          </p>
        </div>
      </div>

      <div style={styles.container}>
        {/* TOC */}
        <div style={styles.toc}>
          <p style={styles.tocLabel}>Quick navigation</p>
          <div style={styles.tocLinks}>
            {sections.map((s) => (
              <button
                key={s.id}
                style={styles.tocBtn}
                onClick={() => {
                  const el = document.getElementById(s.id);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setActiveSection(s.id);
                }}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Sections */}
        <div style={styles.sections}>
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.id} id={s.id} style={styles.item}>
                <button
                  style={{
                    ...styles.question,
                    ...(activeSection === s.id ? styles.questionActive : {}),
                  }}
                  onClick={() => toggleSection(s.id)}
                >
                  <div style={styles.questionLeft}>
                    <span style={styles.sectionIconWrap}>
                      <Icon />
                    </span>
                    <span style={styles.sectionTitle}>{s.title}</span>
                  </div>
                  <span
                    style={{
                      ...styles.chevron,
                      transform: activeSection === s.id ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ▾
                  </span>
                </button>
                {activeSection === s.id && (
                  <div style={styles.answer} className="legal-answer">
                    {s.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact */}
        {/* <div style={styles.contact}>
          <p style={styles.contactTitle}>Questions about these terms?</p>
          <p style={styles.contactText}>
            If you have any questions or concerns, our legal team is happy to help.
          </p>
          <a href="mailto:contact@ittechera.co.uk" style={styles.contactBtn}>
            Contact legal team →
          </a>
        </div> */}
      </div>
    </div>
  );
}

const ACCENT = "#b8d400";
const ACCENT_DARK = "#7a9000";
const ACCENT_LIGHT = "#f5f7f0";

const styles = {
  page: {
    fontFamily: "'Inter', sans-serif",
    background: "#f5f7f0",
    minHeight: "100vh",
    color: "#1c2238",
  },
  hero: {
    background: "#1c2238",
    padding: "100px 6vw 60px",
  },
  heroInner: {
    maxWidth: 760,
    margin: "0 auto",
  },
  badge: {
    display: "inline-block",
    background: ACCENT,
    color: "#1c2238",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "4px 12px",
    borderRadius: 20,
    marginBottom: 18,
  },
  heroTitle: {
    fontSize: 40,
    fontWeight: 700,
    color: "#fff",
    margin: "0 0 10px",
    lineHeight: 1.2,
  },
  heroMeta: {
    fontSize: 13,
    color: "rgba(255,255,255,0.45)",
    marginBottom: 16,
  },
  heroDesc: {
    fontSize: 15,
    color: "rgba(255,255,255,0.65)",
    lineHeight: 1.7,
    maxWidth: 560,
    margin: 0,
  },
  container: {
    maxWidth: 760,
    margin: "0 auto",
    padding: "48px 6vw 80px",
  },
  toc: {
    background: "#fff",
    borderRadius: 12,
    padding: "20px 24px",
    marginBottom: 32,
    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
  },
  tocLabel: {
    fontSize: 11,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#888",
    marginBottom: 12,
  },
  tocLinks: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },
  tocBtn: {
    fontSize: 12,
    color: "#1c2238",
    background: ACCENT_LIGHT,
    border: `1px solid ${ACCENT}33`,
    borderRadius: 20,
    padding: "5px 14px",
    cursor: "pointer",
    fontFamily: "'Inter', sans-serif",
    transition: "background 0.2s",
  },
  sections: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginBottom: 40,
  },
  item: {
    background: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
  },
  question: {
    width: "100%",
    border: "none",
    background: "#fff",
    padding: "20px 22px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    fontFamily: "'Inter', sans-serif",
    textAlign: "left",
    transition: "background 0.2s",
  },
  questionActive: {
    background: ACCENT_LIGHT,
    borderBottom: `2px solid ${ACCENT}`,
  },
  questionLeft: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  sectionIconWrap: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    borderRadius: 8,
    background: ACCENT_LIGHT,
    color: ACCENT_DARK,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 500,
    color: "#1c2238",
  },
  chevron: {
    fontSize: 16,
    color: ACCENT,
    transition: "transform 0.3s",
    display: "inline-block",
  },
  answer: {
    padding: "0 22px 22px",
    borderTop: "1px solid #eef1e6",
  },
  contact: {
    background: "#1c2238",
    borderRadius: 16,
    padding: "36px 40px",
    textAlign: "center",
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: "#fff",
    marginBottom: 8,
  },
  contactText: {
    fontSize: 14,
    color: "rgba(255,255,255,0.55)",
    marginBottom: 20,
  },
  contactBtn: {
    display: "inline-block",
    background: ACCENT,
    color: "#1c2238",
    fontSize: 13,
    fontWeight: 600,
    padding: "12px 28px",
    borderRadius: 8,
    textDecoration: "none",
  },
};

const css = `
  .legal-answer p {
    font-size: 14px;
    color: #4a5568;
    line-height: 1.8;
    margin: 16px 0 0;
  }
  .legal-answer ul {
    padding-left: 20px;
    margin: 12px 0 0;
  }
  .legal-answer ul li {
    font-size: 14px;
    color: #4a5568;
    line-height: 1.8;
    margin-bottom: 6px;
  }
  .legal-answer .highlight-box {
    background: #f5f7f0;
    border-left: 3px solid #b8d400;
    border-radius: 0 8px 8px 0;
    padding: 14px 18px;
    margin: 16px 0 0;
    font-size: 13px;
    color: #4a5568;
    line-height: 1.7;
  }
`;
