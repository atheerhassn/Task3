import  '../Style/testimonials.css'
import React, { useState, useEffect } from 'react';



const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(3);
  
    
    // Redundantly declaring data
    const testimonials = [
      {
        name: "Jennifer P.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        stars: 5,
        text: "I cannot express how pleased I am with Little Learners Academy! My son has grown immensely since enrolling. The teachers are incredibly dedicated and the curriculum is outstanding."
      },
      {
        name: "David K.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        stars: 5,
        text: "Enrolling my daughter here was the best decision we ever made. She loves going to school every day and is constantly learning new things. The staff is amazing!"
      },
      {
        name: "Emily L.",
        avatar: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        stars: 5,
        text: "The personalized attention our twins have been receiving here is great! They have made remarkable progress in both academics and social skills. Highly recommend to any parents."
      }
    ];
    
    useEffect(() => {
      setTotalSlides(testimonials.length);
    }, []);
    
    function prevSlide() {
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else {
        setCurrentSlide(totalSlides - 1);
      }
    }
    
    function nextSlide() {
      if (currentSlide < totalSlides - 1) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }
    
    const isMobile = window.innerWidth < 768;
    var slidesToShow = 1;
    if (!isMobile) {
      slidesToShow = 3;
    }
    
    return (
      <section className="testimonials">
        <div className="container">
          <h2 className="benefits-title">Our Testimonials</h2>
          <p className="testimonials-desc">
            Our testimonials are from real Little Learners Academy parents,
            who are enjoying educational journeys with us, where children flourish both academically and personally.
          </p>
          
          <div className="slider-wrapper">
            <div 
              className="testimonial-slider" 
              style={{ 
                transform: isMobile ? 
                  `translateX(-${currentSlide * 100}%)` : 
                  `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
                width: isMobile ? 
                  `${testimonials.length * 100}%` : 
                  `${(testimonials.length / slidesToShow) * 100}%`,
              }}
            >
              {testimonials.map((item, index) => (
                <div className="testimonial-card" key={index} style={{ width: isMobile ? '100%' : `${100 / slidesToShow}%` }}>
                  <img src={item.avatar} alt={item.name} className="avatar" />
                  <div className="person-name">{item.name}</div>
                  <div className="stars">
                    {'★★★★★'.substring(0, item.stars)}
                  </div>
                  <p className="review-text">{item.text}</p>
                </div>
              ))}
            </div>
            
            <button className="slider-btn prev" onClick={prevSlide}>
              &lt;
            </button>
            <button className="slider-btn next" onClick={nextSlide}>
              &gt;
            </button>
          </div>
        </div>
      </section>
    );
  };
export default TestimonialsSection ;