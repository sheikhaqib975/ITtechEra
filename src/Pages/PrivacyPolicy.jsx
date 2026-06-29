import { useState } from "react";

const GREEN = "#b8d400";

const svgIcons = {
  collect: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  ),
  use: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  ),
  sharing: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  ),
  cookies: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 2a10 10 0 0 0 2 19.9"/>
      <circle cx="8" cy="9" r="1" fill={GREEN}/>
      <circle cx="15" cy="7" r="1" fill={GREEN}/>
      <circle cx="14" cy="14" r="1" fill={GREEN}/>
      <circle cx="9" cy="15" r="1" fill={GREEN}/>
    </svg>
  ),
  retention: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  rights: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  security: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      <circle cx="12" cy="16" r="1" fill={GREEN}/>
    </svg>
  ),
  children: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  changes: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
};

const sections = [
  {
    id: "collect",
    title: "Information We Collect",
    content: (
      <>
        <p>We collect several different types of information for various purposes to provide and improve our service to you:</p>
        <ul>
          <li><strong>Personal data:</strong> Name, email address, phone number, and billing address when you register or make a purchase.</li>
          <li><strong>Usage data:</strong> IP address, browser type, pages visited, time spent on pages, and referring URLs.</li>
          <li><strong>Device data:</strong> Device type, operating system, and unique device identifiers.</li>
          <li><strong>Communications:</strong> Any messages you send to us via email or support channels.</li>
        </ul>
        <div className="highlight-box">
          We do not sell, trade, or rent your personal identification information to third parties for their marketing purposes.
        </div>
      </>
    ),
  },
  {
    id: "use",
    title: "How We Use Your Data",
    content: (
      <>
        <p>Acme Corp uses the collected data for the following purposes:</p>
        <ul>
          <li>To provide, maintain, and improve our services.</li>
          <li>To process transactions and send related information, including purchase confirmations and invoices.</li>
          <li>To send promotional communications, such as newsletters (you may opt out at any time).</li>
          <li>To monitor usage of the service and detect, prevent, and address technical issues.</li>
          <li>To comply with legal obligations and resolve disputes.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Data Sharing & Disclosure",
    content: (
      <>
        <p>We may share your personal information with third parties only in the following situations:</p>
        <ul>
          <li><strong>Service providers:</strong> Trusted third-party vendors who assist us in operating our website and conducting our business.</li>
          <li><strong>Legal requirements:</strong> When required by law or to respond to legal process or government requests.</li>
          <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of all or a portion of our assets.</li>
          <li><strong>With your consent:</strong> For any other purpose with your explicit consent.</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies Policy",
    content: (
      <>
        <p>We use cookies and similar tracking technologies to track activity on our service and hold certain information.</p>
        <ul>
          <li><strong>Essential cookies:</strong> Required for the website to function properly.</li>
          <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our site.</li>
          <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements.</li>
        </ul>
        <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our service may not function properly.</p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    content: (
      <>
        <p>We retain your personal data for as long as your account is active or as needed to provide you services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
        <p>You may request deletion of your account and associated data at any time by contacting us at privacy@acmecorp.com. We will process your request within 30 days.</p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your Rights",
    content: (
      <>
        <p>Depending on your location, you may have the following rights regarding your personal data:</p>
        <ul>
          <li><strong>Right to access</strong> — request a copy of the data we hold about you.</li>
          <li><strong>Right to rectification</strong> — request correction of inaccurate data.</li>
          <li><strong>Right to erasure</strong> — request deletion of your personal data.</li>
          <li><strong>Right to restrict processing</strong> — request that we limit how we use your data.</li>
          <li><strong>Right to data portability</strong> — receive your data in a machine-readable format.</li>
          <li><strong>Right to object</strong> — object to our processing of your personal data.</li>
        </ul>
        <div className="highlight-box">
          To exercise any of these rights, contact us at privacy@acmecorp.com. We will respond to your request within 30 days.
        </div>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <>
        <p>We take the security of your data seriously and use industry-standard encryption (SSL/TLS) for data in transit and AES-256 encryption for data at rest. We conduct regular security audits and vulnerability assessments.</p>
        <p>However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security. In the event of a data breach, we will notify affected users within 72 hours as required by applicable law.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: (
      <p>Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us immediately so we can take necessary action.</p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.</p>
        <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
      </>
    ),
  },
];

const ACCENT = "#b8d400";
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
    padding: "80px 6vw 60px",
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
  trustBar: {
    background: "#fff",
    borderBottom: "1px solid #eef1e6",
    padding: "14px 6vw",
    display: "flex",
    gap: 32,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  trustItem: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  trustLabel: {
    fontSize: 13,
    color: "#4a5568",
    fontWeight: 500,
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
  .legal-answer strong {
    color: #1c2238; 
    font-weight: 600;
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

const trustItems = [
  {
    label: "SSL encrypted",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    label: "Never sold to third parties",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
      </svg>
    ),
  },
  {
    label: "Delete anytime",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6"/>
        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
        <path d="M10 11v6"/><path d="M14 11v6"/>
        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
      </svg>
    ),
  },
  {
    label: "GDPR compliant",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
];

export default function PrivacyPolicy() {
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
          <h1 style={styles.heroTitle}>Privacy Policy</h1>
          <p style={styles.heroMeta}>
            Effective: January 1, 2025 &nbsp;·&nbsp; Last updated: June 15, 2025
          </p>
          <p style={styles.heroDesc}>
            Your privacy is important to us. This policy explains how we collect, use, and protect
            your personal information when you use Acme Corp services.
          </p>
        </div>
      </div>

      {/* Trust badges */}
      <div style={styles.trustBar}>
        {trustItems.map((b) => (
          <div key={b.label} style={styles.trustItem}>
            {b.icon}
            <span style={styles.trustLabel}>{b.label}</span>
          </div>
        ))}
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
          {sections.map((s) => (
            <div key={s.id} id={s.id} style={styles.item}>
              <button
                style={{
                  ...styles.question,
                  ...(activeSection === s.id ? styles.questionActive : {}),
                }}
                onClick={() => toggleSection(s.id)}
              >
                <div style={styles.questionLeft}>
                  {svgIcons[s.id]}
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
          ))}
        </div>

        {/* Contact */}
        {/* <div style={styles.contact}>
          <p style={styles.contactTitle}>Questions about your privacy?</p>
          <p style={styles.contactText}>
            Our privacy team responds within 48 hours on business days.
          </p>
          <a href="mailto:contact@ittechera.co.uk" style={styles.contactBtn}>
            Contact privacy team →
          </a>
        </div> */}
      </div>
    </div>
  );
}