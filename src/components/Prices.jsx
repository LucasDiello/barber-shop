import React, { useState } from "react";
import "../styles/prices.css";
import { IoPricetag } from "react-icons/io5";
import { MdSpa } from "react-icons/md";
import { GiBodySwapping, GiMeditation, GiRazor } from "react-icons/gi";
import { FaFaceGrinStars } from "react-icons/fa6";

const priceItems = [
  {
    title: "Corte de Cabelo & Encaixe",
    text: "Limpo e simples, 30-40 minutos",
    price: "$89",
    imgClass: "price1",
    category: "shaving",
  },
  {
    title: "Barbear & Facial",
    text: "Limpo e simples, 30-40 minutos",
    price: "$45",
    imgClass: "price2",
    category: "shaving",
  },
  {
    title: "Cor & Lavagem de Cabelo",
    text: "Limpo e simples, 30-40 minutos",
    price: "$35",
    imgClass: "price3",
    category: "beauty-spa",
  },
  {
    title: "Massagem Corporal",
    text: "Limpo e simples, 30-40 minutos",
    price: "$56",
    imgClass: "price4",
    category: "body-treatments",
  },
  {
    title: "Beleza & Spa",
    text: "Limpo e simples, 30-40 minutos",
    price: "$27",
    imgClass: "price5",
    category: "beauty-spa",
  },
  {
    title: "Facial & Lavagem Facial",
    text: "Limpo e simples, 30-40 minutos",
    price: "$63",
    imgClass: "price6",
    category: "face-washing",
  },
  {
    title: "Massagem na Coluna",
    text: "Limpo e simples, 30-40 minutos",
    price: "$43",
    imgClass: "price7",
    category: "body-treatments",
  },
  {
    title: "Meditação & Massagem",
    text: "Limpo e simples, 30-40 minutos",
    price: "$74",
    imgClass: "price8",
    category: "meditations",
  },
];

const filterButtons = [
  { category: "all", text: "Todos os Preços", icon: <IoPricetag /> },
  { category: "beauty-spa", text: "Beleza & Spa", icon: <MdSpa /> },
  {
    category: "body-treatments",
    text: "Tratamentos Corporais",
    icon: <GiBodySwapping />,
  },
  {
    category: "face-washing",
    text: "Lavagem Facial",
    icon: <FaFaceGrinStars />,
  },
  {
    category: "meditations",
    text: "Meditação e massagem",
    icon: <GiMeditation />,
  },
  { category: "shaving", text: "Barbear", icon: <GiRazor /> },
];

const Prices = () => {
  const [filteredItems, setFilteredItems] = useState(priceItems);
  const [currentBtn, setCurrentBtn] = useState(0)
  const handleFilter = (category, index) => {
    setCurrentBtn(index)
    if (category === "all") {
     return setFilteredItems(priceItems);
    }
    const filtered = priceItems.filter(
      (item) => item.category === category
    );

    return setFilteredItems(filtered);
  };

  return (
    <section
      className="section pricing has-bg-image has-before bg-price"
      id="pricing"
      aria-label="pricing"
    >
      <div className="containe">
        <h2 className="h2 section-title text-center">
          Planos de Preços Incríveis
        </h2>
        <p className="section-text text-center">
          Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
          labore dolore magna aliqua suspendisse
        </p>

        <div className="pricing-tab-container">
          <ul className="tab-filter">
            {filterButtons.map((button, index) => (
              <li key={index}>
                <button
                  className={`filter-btn ${index === currentBtn && "active"}`}
                  onClick={() => handleFilter(button.category, index)}
                >
                  <div className="btn-icon">{button.icon}</div>
                  <p className="btn-text">{button.text}</p>
                </button>
              </li>
            ))}
          </ul>

          <ul className="grid-list">
            {filteredItems.map((item, index) => (
              <li>
                <div className="pricing-card">
                  <div
                    alt={item.title}
                    className={`img-cover ${item.imgClass} img-price`}
                  />
                  <div className="wrapper">
                    <h3 className="h3 card-title">{item.title}</h3>
                    <p className="card-text">{item.text}</p>
                  </div>
                  <data className="card-price" value={item.price}>
                    {item.price}
                  </data>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Prices;
