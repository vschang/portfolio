import './App.css';
import Navbar from './Navbar';
import ProjectSection from './ProjectSection';
import { Icon } from '@iconify/react';

function App() {
  const sections = Array.from(document.querySelectorAll('section'));
  sections.map((section) => {
    section.scrollIntoView({
      behavior: "smooth",
      block: 'center',
      inline: "center"
    });
  })

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1 className="Name">Valerie Chang</h1>
        <h3>Fullstack Web Developer</h3>
        <h3>New York, NY</h3>
        <img src='https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668606112/production/portfolio/profpic_nebv6u.png' alt="profile" className="Profile-pic"></img>
      </header>
      <section id="About">
        <h1 className="Section-title">About</h1>
        <p className="width-90">Hi, I'm a junior web developer career-changer pivoting from K-12 education.
          I have experience with Ruby on Rails and lately I've been dabbling in React JS.
          I love to see my ideas come to life and also have an eye for design 👀</p>
        <h3 className="Subtitle">Education</h3>
        <p className="width-90"><strong>Le Wagon</strong> 10 week intensive full stack development bootcamp
        <em>Madrid, Spain</em>
        <em>January - March 2022</em></p>
        <p className="width-90"><strong>Bowdoin College</strong> Bachelor of Arts in Biochemistry with a minor in Sociology
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
          <h3>Github</h3>
          <Icon icon="mdi:github" />
        </div>
        <a href="https://github.com/vschang" target="_blank" rel="noreferrer">@vschang</a>
        <div className="Social-link">
          <h3>LinkedIn</h3>
          <Icon icon="mdi:linkedin" />
        </div>
        <a href="https://www.linkedin.com/in/valeriechang97/" target="_blank" rel="noreferrer">/valeriechang97</a>
        <div className="Social-link">
          <h3>Email</h3>
          <Icon icon="ic:outline-email" />
        </div>
        <a href = "mailto: valeriechang0@gmail.com">valeriechang0@gmail.com</a>
      </section>
    </div>
  );
}

export default App;
