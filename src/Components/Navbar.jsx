import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Home",     type: "route",  to: "/" },
    { name: "About",    type: "route",  to: "/about" },
    { name: "Services", type: "anchor", to: "page6" },
    { name: "Contact",  type: "route",  to: "/contact" },
  ];

  const handleAnchor = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      // pehle home pe jao, phir scroll karo
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHome = () => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      // already home pe hain — upar scroll karo
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // agar doosre page pe hain to Link ka `to="/"` khud handle karega
  };

  return (
    <>
      <style>{`
        .itcNav-navbar, .itcNav-navbar *, .itcNav-navbar *::before, .itcNav-navbar *::after { box-sizing: border-box; }
        .itcNav-navbar {
          font-family: 'Inter', sans-serif;
          position: fixed; top: 18px; left: 50%; transform: translateX(-50%);
          width: min(95%, 1350px); z-index: 9999;
          display: flex; justify-content: space-between; align-items: center;
          padding: 12px 24px;
          background: rgba(14,25,40,.68); backdrop-filter: blur(22px);
          border: 1px solid rgba(200,240,0,.15); border-radius: 20px;
          box-shadow: 0 12px 40px rgba(0,0,0,.25);
        }
        .itcNav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .itcNav-logoBar { width: 5px; height: 40px; background: #c8f000; border-radius: 30px; box-shadow: 0 0 18px #c8f000; }
        .itcNav-logoText { display: flex; flex-direction: column; }
        .itcNav-logoTop { color: #fff; font-weight: 700; }
        .itcNav-logoBottom { color: #c8f000; font-size: .78rem; letter-spacing: 3px; }
        .itcNav-links { display: flex; gap: 36px; align-items: center; }
        .itcNav-link {
          color: #fff; text-decoration: none; position: relative;
          background: none; border: none; cursor: pointer;
          font-family: 'Inter', sans-serif; font-size: 1rem; padding: 0;
        }
        .itcNav-link:hover { color: #c8f000; }
        .itcNav-link::after {
          content: ""; position: absolute; left: 0; bottom: -8px;
          width: 0; height: 2px; background: #c8f000; transition: .3s;
        }
        .itcNav-link:hover::after { width: 100%; }
        .itcNav-menu { display: none; flex-direction: column; gap: 5px; cursor: pointer; }
        .itcNav-menu span { width: 26px; height: 2px; background: #fff; transition: .3s; display: block; }
        @media(max-width:900px) {
          .itcNav-menu { display: flex; }
          .itcNav-links {
            position: absolute; top: 85px; left: 15px; right: 15px;
            flex-direction: column; gap: 24px; padding: 28px;
            background: rgba(15,25,40,.95); border-radius: 18px;
            opacity: 0; visibility: hidden; transform: translateY(-20px); transition: .35s;
          }
          .itcNav-links.itcNav-open { opacity: 1; visibility: visible; transform: translateY(0); }
        }
      `}</style>

      <nav className="itcNav-navbar">
        <Link to="/" className="itcNav-logo" onClick={handleHome}>
          <div className="itcNav-logoBar"></div>
          <div className="itcNav-logoText">
            <span className="itcNav-logoTop">ittechera</span>
            <span className="itcNav-logoBottom">PVT LTD</span>
          </div>
        </Link>

        <div className={`itcNav-links ${menuOpen ? "itcNav-open" : ""}`}>
          {links.map((item) => {
            if (item.type === "anchor") {
              return (
                <button
                  key={item.name}
                  className="itcNav-link"
                  onClick={() => handleAnchor(item.to)}
                >
                  {item.name}
                </button>
              );
            }
            if (item.name === "Home") {
              return (
                <Link
                  key={item.name}
                  className="itcNav-link"
                  to={item.to}
                  onClick={handleHome}
                >
                  {item.name}
                </Link>
              );
            }
            return (
              <Link
                key={item.name}
                className="itcNav-link"
                to={item.to}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="itcNav-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span style={{ transform: menuOpen ? "rotate(45deg) translateY(10px)" : "" }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? "rotate(-45deg) translateY(-10px)" : "" }} />
        </div>
      </nav>
    </>
  );
}