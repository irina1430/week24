import React from "react";
import "./App.css";
import Card from "./components/card";
import { useState } from "react";

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const cardsData = [
    {
      id: 1,
      rate: 300,
      price: 300,
      speed: 10,
      description: "Объем включенного трафика не ограничен",
      bgColor1: "#4169E1",
      bgColor2: "#6495ED",
    },
    {
      id: 2,
      rate: 450,
      price: 450,
      speed: 50,
      description: "Объем включенного трафика не ограничен",
      bgColor1: "#008B8B",
      bgColor2: "#20B2AA",
    },
    {
      id: 3,
      rate: 550,
      price: 550,
      speed: 100,
      description: "Объем включенного трафика не ограничен",
      bgColor1: "#FF7F50",
      bgColor2: "#FFA07A",
    },
    {
      id: 4,
      rate: 1000,
      price: 1000,
      speed: 200,
      description: "Объем включенного трафика не ограничен",
      bgColor1: "#000000",
      bgColor2: "#696969",
    },
  ];

  return (
    <div className="container">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          rate={card.rate}
          price={card.price}
          speed={card.speed}
          description={card.description}
          bgColor1={card.bgColor1}
          bgColor2={card.bgColor2}
          isActive={card.rate === 550}
          isSelected={selectedId === card.id}
          onClick={() => setSelectedId(card.id)}
        />
      ))}
    </div>
  );
}

export default App;
