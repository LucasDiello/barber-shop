import React from 'react'
import "../styles/hero.css"
import { BiArrowFromLeft } from 'react-icons/bi'
const Hero = () => {
  return (
    <section className="section hero has-before has-bg-image hero-img h-[95vh]" id="home" aria-label="home">
    <div className="containe p-block">
      <h1 className="h1 hero-title">
        Barba & Corte de Cabelo
      </h1>

      <p className="hero-text">
        Sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        suspendisse
        ultrices gravida
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