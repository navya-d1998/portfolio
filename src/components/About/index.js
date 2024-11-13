/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const aboutArray = 'About Me'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>ll
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          {/* I’m Navya Dommalapati, a Full Stack Software Engineer skilled in C#, Python, SQL, and frameworks like .NET Core and React. My experience spans developing scalable applications, optimizing workflows, and working with cloud technologies to deliver high-impact solutions.

I’m passionate about tackling complex problems with innovative, scalable approaches. With expertise in cloud technologies and experience in machine learning for vulnerability detection, I’m driven to create impactful applications and continuously learn new skills. Thanks for stopping by feel free to reach out to connect!
  
 
          <p>
          I’m a Computer Science Master’s student at the University of Utah, with experience in full-stack development. 
          </p> */}
         <p>
         I'm a Master’s student in Computer Science at the University of Utah with hands-on experience in full-stack development. I’ve worked with React, Angular, .NET, and Spring Boot, building out everything from powerful backend systems to user-friendly frontends. I’m always looking to make things run better and smoother, whether that’s in large-scale apps or boosting database performance.
          </p>
          <p>
          For me, coding is about solving real problems in creative ways. I love diving into new tools and approaches to keep things fresh and push my skills further. If you’re interested in tech that makes a difference, let’s connect—I’m always up for a good conversation about building something great.
          </p>
     
          {/* I’ve worked with technologies like React, Angular, .NET, and Spring Boot, contributing to large-scale apps and improving database performance. 

          </p>
          <p>

          I enjoy solving real-world problems through coding and specialize in backend services and dynamic frontend development. Passionate about exploring new tools, I’m always seeking ways to stay ahead in software engineering. 
     
          </p> */}
   
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
