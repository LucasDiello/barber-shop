import React from 'react'
import "../styles/hero.css"
import { BiArrowFromLeft } from 'react-icons/bi'
const Hero = () => {
  return (
    <section className="section hero has-before has-bg-image hero-img " id="home" aria-label="home">
    <div className="containe p-block">
      <h1 className="h1 hero-title">
        Barba & Corte de Cabelo
      </h1>

      <p className="hero-text">
        Texto fictício para preencher o espaço e dar uma ideia de como ficará o conteúdo final. continua a ser um texto fictício para preencher o espaço
       texto fictício para preencher o espaço e dar uma ideia de como ficará o conteúdo final. 
      </p>

      <a href="#" className="btn has-before">
        <span className="span">Explore nossos serviços</span>
        <BiArrowFromLeft name="arrow-forward" aria-hidden="true" />
        </a>

    </div>
  </section>
  )
}

export default Hero