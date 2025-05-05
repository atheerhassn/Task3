import  '../Style/herosection.css'
const HeroSection = () => {
    return (
      <section className="hero-section">
        <div className="container">
          <div className="hero_img_container">
            <img 
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNoaWxkcmVuJTIwcGxheWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
              alt="Children playing" 
              className="heroImage"
            />
            <div className="hero_circles"></div>
            <div className="badge">
              Since 2005
            </div>
          </div>
          
          <h2>
            Welcome to Little Learners Academy
          </h2>
          <h2>
            Where Young Minds Blossom <br/>and <span>Dreams Take Flight.</span>
          </h2>
          
          <p>
            Our school provides a high-quality curriculum that promotes intellectual, social, and emotional learning. 
            Join our family for learning that feels like play, and let us embark on this exciting educational journey together!
          </p>
          
          <div className="stats">
            <div className="stat">
              <div className="stat-num">+7000</div>
              <div className="stat-text">Students Registered</div>
            </div>
            <div className="stat">
              <div className="stat-num">+37</div>
              <div className="stat-text">Skilled Instructors</div>
            </div>
            <div className="stat">
              <div className="stat-num">+15</div>
              <div className="stat-text">Dedicated Classrooms</div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default HeroSection;