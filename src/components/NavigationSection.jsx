import { FaArrowRight } from 'react-icons/fa';
import '../Style/nav.css'
const NavigationSection = () => {
  const navigationItems = [
    {
      title: "About Us",
      description: "Discover our history, values, mission statement, and philosophy. Explore the rich learning experience for your child, take a virtual tour of our campus, and meet our inspiring founders to understand what makes Little Learners Academy special."
    },
    {
      title: "Academics",
      description: "Find the right educational program designed to developmentally guide young, curious minds. Explore the curriculum, assessment methodologies, and technology used in our classrooms to enhance the learning experience for your child."
    },
    {
      title: "Student Life",
      description: "Explore what student life is like here at Little Learners Academy! Discover the variety of extracurricular activities, field trips, arts, sports, and community service opportunities that contribute to your child's holistic development."
    },
    {
      title: "Admissions",
      description: "Learn how to enroll your child today and become a part of Little Learners Academy! Find information about our admissions process, application deadlines, and required documents. Contact our admissions team with any questions you may have."
    }
  ];
  
  const renderNavigationCards = () => {
    return navigationItems.map((item, index) => (
      <div className="nav-card" key={index} style={{textAlign: 'left', height: '100%'}}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <a href="#" className="button">
          Learn More <FaArrowRight />
        </a>
      </div>
    ));
  };
  
  return (
    <section className="nav-section">
      <div className="container">
        <h2 className="benefits-title">Navigate through our Pages</h2>
        <p className="nav-intro">
          Your gateway to discovering more on our website! Explore different sections and find information about our programs, faculty, student life, and more to discover what makes Little Learners Academy special.
        </p>
        
        <div className="nav-grid">
          {renderNavigationCards()}
        </div>
      </div>
    </section>
  );
};

export default NavigationSection;