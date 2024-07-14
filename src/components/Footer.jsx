import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import footerBg1 from "../assets/images/footer-blog-1.jpg"
import footerBg2 from "../assets/images/footer-blog-2.jpg"
import "../styles/footer.css"
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdAccessTimeFilled, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="footer  footer-img"
    >
      <div className="containe">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              Barbearia
              <span className="span">Lucas Diello</span>
            </a>

            <form action="" className="input-wrapper">
              <input
                type="email"
                name="email_address"
                placeholder="Digite seu Email"
                required
                className="email-field"
              />

              <button type="submit" className="btn">
                <span className="span">Inscreva-se Agora</span>
                <BiArrowFromLeft name="arrow-forward" aria-hidden="true"/>
              </button>
            </form>
          </div>

          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Links Rápidos</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Nossos Serviços
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Conheça Nossa Equipe
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Nosso Portfólio
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Precisa de uma Carreira?
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Notícias & Blog
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Serviços</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Corte de Cabelo
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Barbearia & Design
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Cores de Cabelo
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Beleza & Spa
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Massagens Corporais
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Notícias Recentes</p>
              </li>

              <li>
                <div className="blog-card">
                  <figure
                    className="card-banner img-holder"
                  >
                    <img
                      src={footerBg1}
                      width="70"
                      height="75"
                      loading="lazy"
                      alt="Guia para iniciantes sobre Sobrancelhas de Henna em Brisbane"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <h3>
                      <a href="#" className="card-title">
                        Guia para iniciantes sobre Sobrancelhas de Henna em Brisbane
                      </a>
                    </h3>

                    <div className="card-date">
                      <FaCalendarAlt
                        name="calendar-outline"
                        aria-hidden="true"
                      />

                      <time datetime="2024-08-25">25 de Agosto de 2024</time>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="blog-card">
                  <figure
                    className="card-banner img-holder"
                  >
                    <img
                      src={footerBg2}
                      width="70"
                      height="75"
                      loading="lazy"
                      alt="Como me livrar dos pelos indesejados no rosto?"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <h3>
                      <a href="#" className="card-title">
                        Como me livrar dos pelos indesejados no rosto?
                      </a>
                    </h3>

                    <div className="card-date">
                    <FaCalendarAlt 
                        name="calendar-outline"
                        aria-hidden="true"
                      />

                      <time datetime="2024-08-25">25 de Agosto de 2024</time>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Entre em Contato</p>
              </li>

              <li className="footer-list-item">
              <FaLocationDot
              name="location-outline" aria-hidden="true" />

                <address className="contact-link">
                  7528 Avenida Roberts. Palm Bay, FL 32907
                </address>
              </li>

              <li className="footer-list-item">
                <IoIosCall name="call-outline" aria-hidden="true" />

                <a href="tel:+0123456789" className="contact-link">
                 (51) 9999-9999
                </a>
              </li>

              <li className="footer-list-item">
              <MdAccessTimeFilled name="time-outline" aria-hidden="true" />

                <span className="contact-link">Dom - Sex, 08h às 21h</span>
              </li>

              <li className="footer-list-item">
              <MdEmail name="mail-outline" aria-hidden="true"/>
                <a href="mailto:support@gmail.com" className="contact-link">
                  support@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
