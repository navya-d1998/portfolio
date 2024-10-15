import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ' Navya Dommalapati'.split('')
  const jobArray = ' Full Stack Developer'.split('')
  const greetings=()=>
    {
    
      var today = new Date();
        var curHr = today.getHours();
    
        curHr < 12 ? 
     // <div class="container">
        <img src='/image.png' alt="Nature" style="width:100%;">
        <div class="text-block">
          <h4>Good Morning</h4>
          <p>What a beautiful sunrise</p>
      </div></img>:curHr >= 12 && curHr < 16 ?  <img src="https://gt-linckia.s3.amazonaws.com/static-ess-v6.3.0-prod-370/mountain-morning.svg" alt="Nature" style="width:100%;">
        <div class="text-block">
          <h4>Good Afternoon</h4>
          <p>What a beautiful sunrise</p>
      </div></img>: <img src="https://gt-linckia.s3.amazonaws.com/static-ess-v6.3.0-prod-370/mountain-morning.svg" alt="Nature" style="width:100%;">
        <div class="text-block">
          <h4>Good Evening'</h4>
          <p>What a beautiful sunrise</p>
      </div></img>
    }
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>        < div style={{marginLeft:"18px",marginTop:"8px"}}>{greetings()}jjj</div>

      <div className="container home-page">
        <div className="text-zone">

          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img src={LogoTitle} alt="Navya Dommalapati" /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          <span className="wave-emoji">
            <img
              alt="👋"
              draggable="false"
              src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
              style={{
                height: '1em',
                width: '1em',
                margin: '0px 0.05em 0px 0.1em',
                verticalAlign: '-0.1em'
              }}
            />
          </span>       
            {/* <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={22}
            /> */}
            <br></br>
          </h1>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
