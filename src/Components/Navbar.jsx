
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "/favicon.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Home", type: "route", to: "/" },
    { name: "About", type: "route", to: "/about" },
    { name: "Services", type: "route", to: "/services" },
    // { name: "Products", type: "route", to: "/products" },
    { name: "Contact", type: "route", to: "/contact" },
  ];

  const handleAnchor = (id) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
      *{box-sizing:border-box;}

      .itcNav-navbar{
        position:fixed;
        top:18px;
        left:50%;
        transform:translateX(-50%);
        width:min(95%,1350px);
        height:78px;
        padding:0 28px;
        z-index:9999;
        display:flex;
        justify-content:space-between;
        align-items:center;
        background:rgba(14,25,40,.70);
        backdrop-filter:blur(20px);
        border:1px solid rgba(184,212,0,.18);
        border-radius:20px;
        box-shadow:0 10px 35px rgba(0,0,0,.35);
        font-family:Inter,sans-serif;
      }

      .itcNav-logo{
        display:flex;
        align-items:center;
        gap:14px;
        text-decoration:none;
        min-width:220px;
      }

      .itcNav-logoImg{
        width:70px;
        height:70px;
        object-fit:contain;
        flex-shrink:0;
      }

      .itcNav-logoBar{
        width:4px;
        height:42px;
        border-radius:30px;
        background:#b8d400;
        box-shadow:0 0 12px #b8d400;
      }

      .itcNav-logoText{
        display:flex;
        flex-direction:column;
      }

      .itcNav-logoTop{
        color:#fff;
        font-size:1.75rem;
        font-weight:700;
        line-height:1;
      }

      .itcNav-logoBottom{
        color:#b8d400;
        font-size:.82rem;
        letter-spacing:4px;
        margin-top:4px;
      }

      .itcNav-links{
        display:flex;
        align-items:center;
        gap:36px;
      }

      .itcNav-link{
        color:#fff;
        text-decoration:none;
        background:none;
        border:none;
        cursor:pointer;
        position:relative;
        font:inherit;
      }

      .itcNav-link:hover{color:#b8d400;}

      .itcNav-link::after{
        content:"";
        position:absolute;
        left:0;
        bottom:-8px;
        width:0;
        height:2px;
        background:#b8d400;
        transition:.3s;
      }

      .itcNav-link:hover::after{width:100%;}

      .itcNav-menu{
        display:none;
        flex-direction:column;
        gap:5px;
        cursor:pointer;
      }

      .itcNav-menu span{
        width:26px;
        height:2px;
        background:#fff;
        transition:.3s;
      }

      .itcNav-mobileBrand{
        display:none;
      }

      @media(max-width:900px){

        .itcNav-navbar{
          height:70px;
          padding:0 18px;
        }

        .itcNav-logo{
          min-width:auto;
        }

        .itcNav-logoImg{
          width:55px;
          height:55px;
        }

        .itcNav-logoText,
        .itcNav-logoBar{
          display:none;
        }

        .itcNav-menu{
          display:flex;
        }

        .itcNav-links{
          position:absolute;
          top:82px;
          left:15px;
          right:15px;
          display:flex;
          flex-direction:column;
          gap:22px;
          padding:28px;
          background:rgba(15,25,40,.96);
          border-radius:18px;
          opacity:0;
          visibility:hidden;
          transform:translateY(-20px);
          transition:.35s;
        }

        .itcNav-open{
          opacity:1;
          visibility:visible;
          transform:translateY(0);
        }

        .itcNav-mobileBrand{
          display:block;
          width:100%;
          margin-top:12px;
          padding-top:18px;
          border-top:1px solid rgba(255,255,255,.1);
        }

        .itcNav-mobileBrand h3{
          margin:0;
          color:#fff;
          font-size:1.2rem;
        }

        .itcNav-mobileBrand p{
          margin:4px 0 0;
          color:#b8d400;
          letter-spacing:3px;
          font-size:.8rem;
        }
      }
      `}</style>

      <nav className="itcNav-navbar">

        <Link to="/" className="itcNav-logo" onClick={handleHome}>
          <img src={logo} alt="logo" className="itcNav-logoImg"/>

          <div className="itcNav-logoBar"></div>

          <div className="itcNav-logoText">
            <span className="itcNav-logoTop">ITTECHERA</span>
            <span className="itcNav-logoBottom">Pvt Ltd</span>
          </div>
        </Link>

        <div className={`itcNav-links ${menuOpen ? "itcNav-open" : ""}`}>
          {links.map((item) =>
            item.type === "anchor" ? (
              <button
                key={item.name}
                className="itcNav-link"
                onClick={() => handleAnchor(item.to)}
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                className="itcNav-link"
                to={item.to}
                onClick={item.name === "Home" ? handleHome : () => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}

          <div className="itcNav-mobileBrand">
            <h3>ITTECHERA</h3>
            <p>Pvt Ltd</p>
          </div>
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
