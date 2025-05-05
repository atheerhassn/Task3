import React, { useState } from 'react';
import '../Style/slider.css';

const awards = [
  { id: 1, title: 'Outstanding Early Childhood Education Awar', description: 'Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academys commitment to delivering exceptional early childhood education and fostering a nurturing learning environment' ,image: '/assets/award1.svg'  },
  { id: 2, title: 'Innovative STEAM Education Award', description:'Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.', image: '/assets/award2.svg' },
  { id: 3, title: 'Environmental Stewardship Award', description :'Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.  ', image: '/assets/award3.svg' },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === awards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? awards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container" style={{ textAlign: 'center'}}>
    <div className="slider">
      <button onClick={prevSlide}>‹</button>
      <div className="slide" >
      <div style={{ width: '74px', height: '74px', gap :'10px' , padding:'10px' , paddingLeft:'30px' , paddingTop:'-5px' }}> <img
          src={awards[currentIndex].image}
          alt={awards[currentIndex].title}
          
         /></div> 
        <h2>{awards[currentIndex].title}</h2>
        <p>{awards[currentIndex].description}</p>
      </div>
      <button onClick={nextSlide}>›</button>
    </div>

    <div style={{
      fontSize: '15px',
      fontWeight: '700',
      lineHeight: '130%',
      textAlign: 'left',
      paddingLeft: '80px',
      marginBottom: '20px'
    }}>
      <span>8 More Awards</span>
    </div>
  </div>
  
    
  );
  
};

export default Slider;
