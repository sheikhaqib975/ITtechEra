import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Services", to: "/services" },
  // { label: "Profile",  to: "/profile" },
  { label: "Contact",  to: "/contact" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" }
];

export default function Footer() {
  return (
    <>
      <style>{`
        .ft-root *, .ft-root *::before, .ft-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .ft-root {
          position: relative; overflow: hidden;
          background: #080f1a; color: #fff;
          padding-top: 80px;
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }
        .ft-glow-top {
          position: absolute; top: -100px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 300px;
          background: radial-gradient(ellipse, rgba(200,240,0,.12) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }
        .ft-glow-l {
          position: absolute; bottom: 80px; left: -80px;
          width: 300px; height: 300px;
          background: radial-gradient(ellipse, rgba(200,240,0,.06) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }
        .ft-inner {
          position: relative; z-index: 2;
          max-width: 1200px; margin: 0 auto;
          padding: 0 40px 56px;
        }
        .ft-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 56px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,.07);
        }
        .ft-logo { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
        .ft-logo-bar { width: 4px; height: 44px; border-radius: 99px; background: #c8f000; box-shadow: 0 0 14px #c8f00066; }
        .ft-logo-text h2 { margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 2px; color: #fff; }
        .ft-logo-text span { font-size: 10px; letter-spacing: 4px; color: #c8f000; font-weight: 600; }
        .ft-tagline { font-size: 13px; color: #8fa3b0; line-height: 1.85; margin-bottom: 22px; max-width: 290px; }
        .ft-col-title { font-size: 10.5px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #c8f000; margin-bottom: 20px; }
        .ft-links { display: flex; flex-direction: column; gap: 13px; }
        .ft-links a {
          font-size: 13.5px; color: #9fb3be; text-decoration: none;
          display: flex; align-items: center; gap: 7px;
          transition: .25s; width: fit-content;
        }
        .ft-links a svg { width: 11px; height: 11px; opacity: 0; transform: translateX(-4px); transition: .25s; fill: none; stroke: currentColor; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
        .ft-links a:hover { color: #fff; }
        .ft-links a:hover svg { opacity: 1; transform: translateX(0); }
        .ft-contact-list { display: flex; flex-direction: column; gap: 16px; }
        .ft-contact-row {
          display: flex; align-items: center; gap: 12px;
          text-decoration: none; transition: .2s;
        }
        .ft-contact-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: rgba(200,240,0,.08); border: 1px solid rgba(200,240,0,.18);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: .25s;
        }
        .ft-contact-icon svg { width: 16px; height: 16px; fill: none; stroke: #c8f000; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
        .ft-contact-row:hover .ft-contact-icon { background: rgba(200,240,0,.18); border-color: rgba(200,240,0,.5); }
        .ft-contact-label { font-size: 11px; color: #5e7888; margin-bottom: 1px; }
        .ft-contact-val { font-size: 13px; color: #cdd9e0; font-weight: 500; transition: .2s; }
        .ft-contact-row:hover .ft-contact-val { color: #c8f000; }
        .ft-bottom { display: flex; align-items: center; padding: 22px 0 0; }
        .ft-copy { font-size: 12px; color: #4a6070; }
        .ft-copy span { color: #c8f000; }
        .ft-divider-accent {
          height: 3px;
          background: linear-gradient(90deg, transparent, #c8f000 30%, #c8f00077 70%, transparent);
        }
        @media(max-width:900px){
          .ft-top { grid-template-columns: 1fr 1fr; gap: 32px; }
          .ft-brand { grid-column: 1 / -1; }
        }
        @media(max-width:560px){
          .ft-inner { padding: 0 18px 44px; }
          .ft-top { grid-template-columns: 1fr; gap: 28px; }
          .ft-brand { grid-column: auto; }
        }
      `}</style>

      <footer className="ft-root">
        <div className="ft-glow-top"></div>
        <div className="ft-glow-l"></div>

        <div className="ft-inner">
          <div className="ft-top">

            {/* Brand */}
            <div className="ft-brand">
              <div className="ft-logo">
                <div className="ft-logo-bar"></div>
                <div className="ft-logo-text">
                  <h2>ITTECHERA</h2>
                  <span>PVT LTD</span>
                </div>
              </div>
              <p className="ft-tagline">
                Building innovative digital products that help businesses transform, grow and stay ahead through modern technology and creative software solutions.
              </p>
            </div>

            {/* Navigate */}
            <div>
              <div className="ft-col-title">Navigate</div>
              <div className="ft-links">
                {navLinks.map(({ label, to }) => (
                  <Link to={to} key={label}>
                    <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="ft-col-title">Get in touch</div>
              <div className="ft-contact-list">

                <a className="ft-contact-row" href="mailto:contact@ittechera.co.uk">
                  <div className="ft-contact-icon">
                    <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="ft-contact-label">Email</div>
                    <div className="ft-contact-val">contact@ittechera.co.uk</div>
                  </div>
                </a>

                <a className="ft-contact-row" href="tel:+923419168831">
                  <div className="ft-contact-icon">
                    <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.9 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.81 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.09 6.09l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="ft-contact-label">Phone</div>
                    <div className="ft-contact-val">+92 3419 168831</div>
                  </div>
                </a>

                <a className="ft-contact-row" href="https://ittechera.co.uk" target="_blank" rel="noreferrer">
                  <div className="ft-contact-icon">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
                  </div>
                  <div>
                    <div className="ft-contact-label">Website</div>
                    <div className="ft-contact-val">www.ittechera.co.uk</div>
                  </div>
                </a>

              </div>
            </div>

          </div>

          <div className="ft-bottom">
            <div className="ft-copy">© {new Date().getFullYear()} <span>ITTECHERA</span> Pvt Ltd — Crafted with Innovation</div>
          </div>
        </div>

        <div className="ft-divider-accent"></div>
      </footer>
    </>
  );
}