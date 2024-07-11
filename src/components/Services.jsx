import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import "../styles/services.css";
import { TfiCut } from "react-icons/tfi";
import { FaPaintBrush, FaSpa } from "react-icons/fa";
import { GiBodySwapping, GiRazor, GiShower } from "react-icons/gi";
import { IoMdColorFill } from "react-icons/io";

const Services = () => {
  return (
    <section className="section service" id="services" aria-label="services">
      <div className="container">
        <h2 className="h2 section-title text-center">
          Serviço que nós provemos!
        </h2>

        <p className="section-text text-center">
          Texto fictício para preencher o espaço e dar uma ideia de como ficará
          o conteúdo final. continua a ser um texto fictício para preencher o
          espaço
        </p>

        <ul className="grid-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <i className="flaticon-salon"></i>
                <TfiCut name="hair-cut" />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Corte de Cabelo
                </a>
              </h3>

              <p className="card-text">
                Texto fictício para preencher o espaço e dar uma ideia de como
                ficará o conteúdo final. continua a ser um texto fictício para
                preencher o espaço
              </p>

              <a href="#" className="card-btn" aria-label="more">
                <BiArrowFromLeft name="arrow-forward" aria-hidden="true" />
              </a>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
              <GiShower name="shower" aria-hidden="true" />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                 Lavagem de Cabelo
                </a>
              </h3>

              <p className="card-text">
                Texto fictício para preencher o espaço e dar uma ideia de como
                ficará o conteúdo final. continua a ser um texto fictício para
                preencher o espaço
              </p>

              <a href="#" className="card-btn" aria-label="more">
                <BiArrowFromLeft name="arrow-forward" aria-hidden="true" />
              </a>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
              <GiBodySwapping name="
                body-icon
              " aria-hidden="true" />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Tratamentos Corporais
                </a>
              </h3>

              <p className="card-text">
                Texto fictício para preencher o espaço e dar uma ideia de como
                ficará o conteúdo final. continua a ser um texto fictício para
                preencher o espaço
              </p>

              <a href="#" className="card-btn" aria-label="more">
                <BiArrowFromLeft name="arrow-forward" aria-hidden="true" />
              </a>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
              <FaSpa name="spa-icon"/>

              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Beleza & Spa
                </a>
              </h3>

              <p className="card-text">
                Texto fictício para preencher o espaço e dar uma ideia de como
                ficará o conteúdo final. continua a ser um texto fictício para
                preencher o espaço
              </p>

              <a href="#" className="card-btn" aria-label="more">
                <BiArrowFromLeft name="arrow-forward" aria-hidden="true" />
              </a>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
              <GiRazor name="razor-icon" />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Barba estilizada
                </a>
              </h3>

              <p className="card-text">
                Texto fictício para preencher o espaço e dar uma ideia de como
                ficará o conteúdo final. continua a ser um texto fictício para
                preencher o espaço
              </p>

              <a href="#" className="card-btn" aria-label="more">
                <BiArrowFromLeft name="arrow-forward" aria-hidden="true" />
              </a>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
              <IoMdColorFill name="color-icon" aria-hidden="true" />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Multi Cores de Cabelos
                </a>
              </h3>

              <p className="card-text">
                Texto fictício para preencher o espaço e dar uma ideia de como
                ficará o conteúdo final. continua a ser um texto fictício para
                preencher o espaço
              </p>

              <a href="#" className="card-btn" aria-label="more">
                <BiArrowFromLeft name="arrow-forward" aria-hidden="true" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
