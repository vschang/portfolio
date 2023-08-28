import './About.css'

function About(){
  return(
    <section id="About" className="no-scroll-snap">
      <div className="About-border">
        <div className="About-me">
          <h1 className='border-bottom About-title'>About Me</h1>
          <div className="About-text">
            I'm a fullstack web developer
            experienced in Ruby on Rails and lately I've been dabbling in ReactJS.
            Nothing excites me more than coding my ideas to life. Having designed my own web apps and as I'm currently
            working towards the Google UX Design Profesional Certificate,
            my interests also happen to lie in user experience and design.
          </div>
        </div>

        <div className="Education-section">
          <h2 className="Subtitle">Education</h2>
          <ul className="border-top border-bottom">
            <li>Le Wagon</li>
          </ul>
          <p className="white-text info border-bottom">Madrid, Spain</p>
          <p className="white-text info border-bottom">January - March 2022</p>
          <p className="white-text long">10 week intensive full stack web development bootcamp</p>
          <ul className="border-top border-bottom">
            <li>Bowdoin College</li>
          </ul>
          <p className="white-text info border-bottom">Brunswick, Maine</p>
          <p className="white-text info border-bottom"> August 2015 - May 2019</p>
          <p className="white-text long">Bachelor of Arts in Biochemistry with a minor in Sociology</p>
        </div>

        <div className="Work-section">
          <ul className="border-bottom">
            <li>Frontend Developer</li>
          </ul>
          <div className="flex-between border-bottom">
            <a href="https://www.audemic.app" className="Glow white-text info border-right" target="_blank" rel="noreferrer" >Audemic</a>
            <p className="white-text info">Durham, UK (remote)</p>
          </div>
          <p className="white-text info border-bottom">December 2022 - Present</p>
          <p className="white-text border-bottom long">
            As a frontend developer I specialize in responsive web design and keyboard accessibility for this web based productivity tool for researchers that generates audio from  journal articles
          </p>
          <ul className="border-bottom">
            <li>IT Specialist</li>
          </ul>
          <div className="flex-between border-bottom">
            <a href="https://ophrescue.org/" className="Glow white-text info border-right" target="_blank" rel="noreferrer">Operation Paws for Homes</a>
            <p className="white-text info">N. Chesterfield, VA (remote)</p>
          </div>
          <p className="white-text info border-bottom">September - November 2022</p>
          <p className="white-text long">
            I oversaw the site's migration from version 2 to 4 of Bootstrap CSS for the animal shelter's website, ensuring compatability.
          </p>
          <h2 className="Subtitle border-top">Experience</h2>
        </div>
      </div>
    </section>
  )
}

export default About
