import '../Style/benefitssecrtion.css'
import Icon from './Icon';
const BenefitsSection = () => {
    
    var benefits = [
      {
        icon: "holistic",
        title: "Holistic Learning Approach",
        description: "Our school fosters holistic education, nurturing intellectual, emotional, and social development, ensuring a well-rounded education."
      },
      {
        icon: "teachers",
        title: "Experienced Educators",
        description: "Our passionate and qualified teachers provide exceptional guidance with their years of experience in early childhood education."
      },
      {
        icon: "environment",
        title: "Nurturing Environment",
        description: "We provide a safe and nurturing environment where children can explore, learn, and grow with confidence."
      },
      {
        icon: "play",
        title: "Play-Based Learning",
        description: "We believe in the power of play to foster creativity, critical thinking, problem-solving, and social skills."
      },
      {
        icon: "individual",
        title: "Individualized Attention",
        description: "Our small class sizes enable personalized learning approaches that cater to each child's unique strengths and needs."
      },
      {
        icon: "parents",
        title: "Parent Involvement",
        description: "We foster a strong parent-school relationship through regular communication, events, and collaborative educational opportunities."
      }
    ];
    
    function renderBenefits() {
      return benefits.map(function(benefit, idx) {
        return (
          <div className="benefit-box" key={idx}>
            <div className="icon-wrap">
              <Icon name={benefit.icon} />
            </div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        );
      });
    }
    return (
      <section className="benefits">
        <div className="container">
          <h2 className="benefits-title">Our Benefits</h2>
          <p className="benefits-text">
            With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, 
            we're here to provide excellence for your child's future.
          </p>
          
          <div className="benefits-grid">
            {renderBenefits()}
          </div>
        </div>
      </section>
    );
  };
  export default BenefitsSection;