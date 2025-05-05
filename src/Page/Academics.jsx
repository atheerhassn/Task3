import React from 'react';
import '../Style/footer.css';
import '../Style/header.css';
import '../Style/nav.css';
import '../Style/Academics.css';
import Card from './Card';

const Academics = () => {
  
  const dataCards = [
    {
      title: "Thematic Learning",
      content: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
      img: "/assets/award1.svg"
    },
    {
      title: "Thematic Learning",
      content: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
      img: "/assets/award1.svg"
    },
    {
      title: "Thematic Learning",
      content: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
      img: "/assets/award1.svg"
    }
  ];

  return (
    <div className="wrapper-center">
      {dataCards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          content={card.content}
          img={card.img}
        />
      ))}
    </div>
  );
}

export default Academics;
