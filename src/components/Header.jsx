import React, { useEffect, useState } from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import {
  BsFillTelephoneFill,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { TbClockHour5 } from "react-icons/tb";
import "../styles/header.css"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerOn, setHeaderOn] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setHeaderOn(true);
      } else {
        setHeaderOn(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <ul className="header-top-list">
            <li className="header-top-item">
              <BsFillTelephoneFill name="time-outline" aria-hidden="true" />

              <p className="item-title">Ligue já :</p>

              <a href="tel:01234567895" className="item-link">
                51 9 9999-9999
              </a>
            </li>

            <li className="header-top-item">
              <TbClockHour5 name="call-outline" aria-hidden="true" />
              <p className="item-title">Horário de funcionamento:</p>
              <p className="item-text">Segunda a Sexta: 8:00 - 18:00</p>
            </li>

            <li>
              <ul className="social-list gap-5 p-4">
                <li>
                  <a href="#" className="social-link">
                    <FaFacebook name="logo-facebook" />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <BsTwitter name="logo-twitter" />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <BsYoutube name="logo-youtube" />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <BsLinkedin name="logo-linkedin" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className={`header-bottom ${headerOn ? "active" : ""}`}  onClick={() =>
        setIsOpen(!isOpen)
}>
        <div className="container">
          <a href="#" className="logo">
            Barbearia
            <span className="span">Lucas Diello</span>
          </a>

          <nav className={`navbar  ${isOpen ? "active" : ""}`}>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#home" className="navbar-link" >
                  Home
                </a>
              </li>

              <li className="navbar-item">
                <a href="#services" className="navbar-link">
                    Serviços
                </a>
              </li>

              <li className="navbar-item">
                <a href="#pricing" className="navbar-link">
                  Preços
                </a>
              </li>

              <li className="navbar-item">
                <a href="#gallery" className="navbar-link">
                  Galeria
                </a>
              </li>

              <li className="navbar-item">
                <a href="#appointment" className="navbar-link">
                  Agendar
                </a>
              </li>

              <li className="navbar-item">
                <a href="#" className="navbar-link">
                  Contate-me
                </a>
              </li>
            </ul>
          </nav>

          <button
            className="nav-toggle-btn"
            aria-label="toggle menu"
          >
            <IoIosMenu name="menu-outline" aria-hidden="true"/>
          </button>

          <a href="#" className="btn has-before">
            <span className="span">Agendar</span>
            <BiArrowFromLeft name="arrow-forward" aria-hidden="true"/>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
