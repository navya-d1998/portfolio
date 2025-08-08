import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faScrewdriverWrench, faBriefcase, faFileCsv
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        {/* <Link className="logo" to="/">
          <img src={LogoS} alt="Logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link> */}
        <nav>
          <NavLink className="home-link" exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
          </NavLink>

          <NavLink exact="true" className="experience-link" activeclassname="active" to="/experience">
            <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
          </NavLink>


          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
          
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/navya-dommalapati-355766185/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/navya-d1998?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1pvhirLRTpRAPl2NXvzZipTbt1dZ2N0FM/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFileCsv} color="#b9b9b9" />
            </a>
          </li>
        </ul>
        </nav>

      </div>
    </>
  )
}

export default Sidebar
