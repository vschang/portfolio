import './App.css';
import Navbar from './Navbar';
import ProjectSection from './ProjectSection';
import { Icon } from '@iconify/react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Section-container">
        <section className="App-header">
          <h1 className="Name">Valerie Chang</h1>
          <h3>Full-stack Web Developer</h3>
          <h3 className="Font-20">New York City, NY</h3>
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
              Hi, I'm a full-stack web developer career-changer pivoting from K-12 education.
              I have experience with Ruby on Rails and lately I've been dabbling in ReactJS.
              I love to see my ideas come to life. Having designed my own web apps I also like to think I have an eye for design.
            </p>
          </div>
          <div className="Flex">
            <div className="Education-section">
              <p className="Flex-center">💾 💾 💾</p>
              <div>
                <h3 className="Subtitle flex-end">Education</h3>
                <p className="flex-end"><strong className="underline">Le Wagon</strong> 10 week intensive full stack web development bootcamp
                <em>Madrid, Spain</em>
                <em>January - March 2022</em></p>
                <p className="flex-end"><strong className="underline">Bowdoin College</strong> Bachelor of Arts in Biochemistry with a minor in Sociology
                <em>Brunswick, Maine</em>
                <em>August 2015 - May 2019</em></p>
              </div>
            </div>
            <div className="Work-section">
              <div>
                <h3 className="Subtitle">Experience</h3>
                <p className="flex-start"><strong className="underline">Frontend Developer</strong>
                <em>Audemic</em>
                <em>December 2022 - Present</em>
                As a freelance developer I work closely from UX design to develop pixel perfect features for this web based productivity tool for researchers that generates audio from  journal articles
                </p>
                <p className="flex-start"><strong className="underline">IT Specialist</strong>
                <em>Operation Paws for Homes</em>
                <em>September - November 2022</em>
                As a volunteer, I oversaw the site's migration from version 2 to 4 of Bootstrap CSS for the animal shelter's website, ensuring compatability.
                </p>
              </div>
              <p className="Flex-center">💫 💫 💫</p>
            </div>
          </div>
        </section>
        <section id="Projects">
          <h1 className="Section-title Darker-title">Projects</h1>
          <ProjectSection />
        </section>
        <section id="Contact">
          <h1 className="Section-title Darkest-title">Contact</h1>
          <div className="Social-link Darkest">
            <Icon icon="mdi:github" />
            <h3 className="P-l-r-10">Github</h3>
            <a href="https://github.com/vschang" target="_blank" rel="noreferrer" className="underline Darkest">@vschang</a>
          </div>
          <div className="Social-link Darkest">
            <Icon icon="mdi:linkedin" />
            <h3 className="P-l-r-10">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/valeriechang97/" target="_blank" rel="noreferrer" className="underline Darkest">/valeriechang97</a>
          </div>
          <div className="Social-link Darkest">
            <Icon icon="material-symbols:mail-rounded" />
            <h3 className="P-l-r-10">Email</h3>
            <a href = "mailto: valeriechang0@gmail.com" className="underline Darkest">valeriechang0@gmail.com</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
