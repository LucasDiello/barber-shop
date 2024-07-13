import React from "react";
import "../styles/appointment.css"
import appoinBanner1 from "../assets/images/appoin-banner-1.jpg"
import appoinBanner2 from "../assets/images/appoin-banner-2.jpg"
import { BiArrowFromLeft } from "react-icons/bi";

const Appointment = () => {
  return (
    <section className="section appoin" id="appointment" aria-label="appointment">
      <div className="containe">
        <div className="appoin-card">
          <figure
            className="card-banner img-holder"
          >
            <img
              src={appoinBanner1}
              width="250"
              height="774"
              loading="lazy"
              className="img-cover"
            />
          </figure>

          <div className="card-content">
            <h2 className="h2 section-title">Agende seu Atendimento</h2>

            <p className="section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <form action="" className="appoin-form">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu Nome Completo"
                  required
                  className="input-field"
                />

                <input
                  type="email"
                  name="email_address"
                  placeholder="Endereço de Email"
                  required
                  className="input-field"
                />
              </div>

              <div className="input-wrapper">
                <input
                  type="text"
                  name="phone"
                  placeholder="Número de Telefone"
                  required
                  className="input-field"
                />

                <select name="category" className="input-field">
                  <option value="Selecione a categoria">Selecione a categoria</option>
                  <option value="Beleza e spa">Beleza e spa</option>
                  <option value="Massagem corporal">Massagem corporal</option>
                  <option value="Barbearia e Facial">Barbearia e Facial</option>
                  <option value="Coloração de cabelo">Coloração de cabelo</option>
                </select>
              </div>

              <input
                type="date"
                name="date"
                required
                className="input-field date"
              />

              <textarea
                name="message"
                placeholder="Escreva sua mensagem"
                required
                className="input-field"
              ></textarea>

              <button type="submit" className="form-btn">
                <span className="span">Agendar Agora</span>
                <BiArrowFromLeft name="arrow-forward" aria-hidden="true"/>
              </button>
            </form>
          </div>

          <figure
            className="card-banner img-holder"
          >
            <img
              src={appoinBanner2}
              width="250"
              height="774"
              loading="lazy"
              className="img-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
