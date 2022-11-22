import './App.css';
import Navbar from './Navbar';
import ProjectSection from './ProjectSection';
import { Icon } from '@iconify/react';

function App() {
  // window.getBoundingClientRect()
  return (
    <div className="App">
      <Navbar />
      <div className="Section-container">
        <section className="App-header">
          <h1 className="Name">Valerie Chang</h1>
          <h3>Fullstack Web Developer</h3>
          <h3>New York City, NY</h3>
          <img src='https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668606112/production/portfolio/profpic_nebv6u.png' alt="profile" className="Profile-pic"></img>
          <div className="About-links">
            <a href="https://github.com/vschang" target="_blank" rel="noreferrer" className="Social-icon"><Icon icon="mdi:github" /></a>
            <a href="https://www.linkedin.com/in/valeriechang97/" target="_blank" rel="noreferrer" className="Social-icon"><Icon icon="mdi:linkedin" /></a>
            <a href = "mailto: valeriechang0@gmail.com" className="Social-icon"><Icon icon="material-symbols:mail-rounded" /></a>
          </div>
        </section>
        <section id="About">
          <h1 className="Section-title">About</h1>
          <div className="About-section">
            <p className="About-text">
              Hi, I'm a junior full stack web developer career-changer pivoting from K-12 education.
              I have experience with Ruby on Rails and lately I've been dabbling in ReactJS.
              I love to see my ideas come to life. Having designed my own web apps I also like to think I have an eye for design 👀
            </p>
          </div>
          <h3 className="Subtitle">Education</h3>
          <p className="width-90"><strong className="underline">Le Wagon</strong> 10 week intensive full stack web development bootcamp
          <em>Madrid, Spain</em>
          <em>January - March 2022</em></p>
          <p className="width-90"><strong className="underline">Bowdoin College</strong> Bachelor of Arts in Biochemistry with a minor in Sociology
          <em>Brunswick, Maine</em>
          <em>August 2015 - May 2019</em></p>
        </section>
        <section id="Projects">
          <h1 className="Section-title">Projects</h1>
          <ProjectSection />
        </section>
        <section id="Contact">
          <h1 className="Section-title">Contact</h1>
          <div className="Social-link">
            <Icon icon="mdi:github" />
            <h3 className="P-l-r-10">Github</h3>
            <a href="https://github.com/vschang" target="_blank" rel="noreferrer" className="underline">@vschang</a>
          </div>
          <div className="Social-link">
            <Icon icon="mdi:linkedin" />
            <h3 className="P-l-r-10">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/valeriechang97/" target="_blank" rel="noreferrer" className="underline">/valeriechang97</a>
          </div>
          <div className="Social-link">
            <Icon icon="material-symbols:mail-rounded" />
            <h3 className="P-l-r-10">Email</h3>
            <a href = "mailto: valeriechang0@gmail.com" className="underline">valeriechang0@gmail.com</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
