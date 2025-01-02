import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'


const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Achieve Your English Goals with Confidence!</h2>
        <p>Welcome to a learning experience tailored just for you!
          Our English classes are designed to help you speak, write,
          and understand English with confidence. Whether you’re preparing for exams,
          advancing your career, or simply improving your communication,
          we’ve got you covered.</p>
        <p>With expert teachers and engaging lessons, we focus on real-world language skills
          that make a difference. Each class is interactive, dynamic, and personalized to suit
          your goals and pace. From mastering grammar to perfecting pronunciation,
          we guide you every step of the way.</p>
        <p>Join a supportive community where learning is fun and progress is celebrated. 
          Flexible schedules and modern resources ensure you can learn anytime, anywhere. 
          Let’s make your English dreams a reality</p>
      </div>
    </div>
  )
}

export default About