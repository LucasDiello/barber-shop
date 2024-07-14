import React from "react";
import { BiArrowFromLeft } from "react-icons/bi";
import "../styles/galery.css"

const Galery = () => {
  return (
    <section
      className="section gallery"
    >
      <div className="containe">
        <div className="title-wrapper">
          <div>
            <h2 className="h2 section-title">Galeria de Fotos</h2>

            <p className="section-text">
              Sit amet consectetur adipiscing elit sed do eiusmod tempor
              incididunt labore dolore magna aliqua suspendisse
            </p>
          </div>

          <a href="#" className="btn has-before">
            <span className="span">Explorar Mais Galeria</span>

            <BiArrowFromLeft name="arrow-forward" aria-hidden="true" />
          </a>
        </div>

        <ul className="grid-list">
          <li>
            <div className="gallery-card">
            <figure className="card-banner img-holder">

                <div
                  className="img-gallery galery1"
                />
                </figure>
              <div className="card-content">
                <h3 className="h3 card-title">Corte de Cabelo</h3>

                <p className="card-text">Barbeiros e Serviços de Salão</p>

                <a href="#" className="card-btn" aria-label="Leia mais">
                  <BiArrowFromLeft name="arrow-forward" aria-hidden="true" />
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className="gallery-card">
                <figure className="card-banner img-holder">
                <div
                  className="img-gallery galery2"
                />
                </figure>

              <div className="card-content">
                <h3 className="h3 card-title">Corte de Cabelo</h3>

                <p className="card-text">Barbeiros e Serviços de Salão</p>

                <a href="#" className="card-btn" aria-label="Leia mais">
                  <BiArrowFromLeft name="arrow-forward" aria-hidden="true" />
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder"
              >
                <div
                  className="img-gallery galery3"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3 card-title">Corte de Cabelo</h3>

                <p className="card-text">Barbeiros e Serviços de Salão</p>

                <a href="#" className="card-btn" aria-label="Leia mais">
                  <BiArrowFromLeft name="arrow-forward" aria-hidden="true" />
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className="gallery-card">
              <figure
                className="card-banner img-holder"
                
              >
                <div
                  className="img-gallery galery4"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3 card-title">Corte de Cabelo</h3>

                <p className="card-text">Barbeiros e Serviços de Salão</p>

                <a href="#" className="card-btn" aria-label="Leia mais">
                  <BiArrowFromLeft name="arrow-forward" aria-hidden="true" />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Galery;
