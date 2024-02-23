import React, { useEffect } from "react";
import engFlag from "../../assets/imgs/eng.png";
import germanFlag from "../../assets/imgs/germany.png";
import franceFlag from "../../assets/imgs/fr.png";
import spainFlag from "../../assets/imgs/Spain_flag.png";
import Logo from "../../assets/imgs/logo.png";
import { Link } from "react-router-dom";

function Header({ home, contact, branches }) {
  let element;
  let contactElement;
  let homeElement;
  useEffect(() => {
    element = document.getElementById("branches");
    contactElement = document.getElementById("contact");
    homeElement = document.getElementById("home");
  }, []);
  return (
    <header>
      <nav className="navbar p-0 fixed-top navbar-expand-lg nav-color">
        <div className="container">
          <Link className="navbar-brand">
            <img src={Logo} className="logo" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="nav-link fw-bold fs-6"
                  aria-current="page"
                  onClick={() =>
                    homeElement?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {home}
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link fw-bold fs-6"
                  onClick={() =>
                    contactElement?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {contact}
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link fw-bold fs-6"
                  onClick={() =>
                    element?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {branches}
                </button>
              </li>
            </ul>
            <Link to="/">
              <img
                src={engFlag}
                className="me-3 lang-flag"
                alt="english language"
              />
            </Link>
            <Link to="/germany">
              <img
                src={germanFlag}
                className="me-3 lang-flag"
                alt="german language"
              />
            </Link>
            <Link to="/french">
              <img
                src={franceFlag}
                className="me-3 lang-flag"
                alt="france language"
              />
            </Link>
            <Link to="/spanish">
              <img
                src={spainFlag}
                className="me-3 lang-flag"
                alt="spanish language"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
