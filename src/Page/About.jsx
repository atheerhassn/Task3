
import React from 'react'
import  '../Style/footer.css'
import '../Style/header.css'
import '../Style/nav.css'
import '../Style/about.css'
import './Slider'
import Slider from './Slider'
const About = () => {
  return (
    <div className="about-page mx-auto px-4">
      <div > 
        <img className='img-about'  src='public\assets\Container (1).svg'/>
      </div>
      <div className='Subcontainer'>
      
        <button className='btn-about' style={{marginBottom:"10px"} , {gap:"10px"} , {borderRadius:"10px"} , {radius:"10px"} , {alignItems:"center"}}>Mission & Visions</button>

        <h1 style={{}}>Our Mission & Visions</h1>
        <p className='p.our' style={{font:'Outfit', color:'black',fontSize:' 16px' ,textAlign:'center' , marginBottom:'20px'} }>We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.</p>
        <img className='img-our' src='assets\Sub Container.svg'/>
      </div>

<div className="awards-content">
  <h1 style={{fontSize:"60px"} , {color:"#1A1A1A"} } >Our Awards and Recognitions</h1>
  <p className="awards-text" style={{
    fontFamily: 'Outfit, sans-serif',
    color: 'black',
    fontSize: '20px',
    textAlign: 'center',
    maxWidth: '60vw',
    margin: '0 auto',
    lineHeight: '1.6',
    marginBottom:'20px'
  }}>
    Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We
    are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect
    our team's relentless efforts in creating an exceptional learning environment for our students.
  </p>

</div>
<Slider/>
<h1 style={{}}>Our History</h1>
        <p className='p.our' style={{font:'Outfit', color:'black',fontSize:' 16px' ,textAlign:'center' , marginBottom:'20px'} }>Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering
           young learners to reach their potential through innovative teaching methods and a supportive learning environment.</p>

<img className='img-about' src='public\assets\Sub Container (1).svg'/>

<h1 style={{}}>Our Special Features</h1>
        <p className='p.our' style={{font:'Outfit', color:'black',fontSize:' 16px' ,textAlign:'center' , marginBottom:'20px'} }>Our kinder garden school provides a nurturing and stimulating environment,
           fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>

    </div>
  )
}

export default About
