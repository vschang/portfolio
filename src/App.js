import React, {useEffect} from 'react'
import './App.css';
import Navbar from './Navbar';
import ProjectSection from './ProjectSection';
import { Icon } from '@iconify/react';
import { Element } from 'react-scroll';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 50) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="Section-container">
        <section className="App-header no-scroll-snap">
          <div>
            <h1 className="Name">Valerie</h1><h1 className="Last-name">Chang</h1>
            <h3 className="text-right">Full-stack Web Developer</h3>
            <h3 className="Font-20 text-right">Remote, USA</h3>
          </div>
          <img src='https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668606112/production/portfolio/profpic_nebv6u.png' alt="profile" className="Profile-pic"></img>
          <div className="About-links">
            <a href="https://github.com/vschang" target="_blank" rel="noreferrer" className="Social-icon"><Icon icon="mdi:github" /></a>
            <a href="https://www.linkedin.com/in/valeriechang97/" target="_blank" rel="noreferrer" className="Social-icon"><Icon icon="mdi:linkedin" /></a>
            <a href = "mailto: valeriechang0@gmail.com" className="Social-icon"><Icon icon="material-symbols:mail-rounded" /></a>
          </div>
        </section>
        <section id="About" className="no-scroll-snap">
          <h1 className="Section-title About-title">About</h1>
          <Element className="animate-on-scroll">
          <div className="About-section">
            <p className="About-text">
              Hi, I'm a full-stack web developer career-changer pivoting from K-12 education.
              I have experience with Ruby on Rails and lately I've been dabbling in ReactJS.
              I love to see my ideas come to life. Having designed my own web apps I also like to think I have an eye for design.
            </p>
          </div>
          </Element>
          <div className="Education-work-flex">
          <Element className="animate-on-scroll Education-section">
              <p className="Flex-center">💾 💾 💾</p>
              <div>
                <h3 className="Subtitle flex-end pt-20">Education</h3>
                <p className="flex-end"><strong className="underline">Le Wagon</strong> 10 week intensive full stack web development bootcamp
                <em>Madrid, Spain</em>
                <em>January - March 2022</em></p>
                <p className="flex-end"><strong className="underline">Bowdoin College</strong> Bachelor of Arts in Biochemistry with a minor in Sociology
                <em>Brunswick, Maine</em>
                <em>August 2015 - May 2019</em></p>
              </div>
          </Element>
          <Element className="animate-on-scroll Work-section">
            <div>
              <h3 className="Subtitle">Experience</h3>
              <p className="flex-start"><strong className="underline">Frontend Developer</strong>
              <a href="https://www.audemic.app" className="Glow" target="_blank" rel="noreferrer" ><em>Audemic</em></a>
              <em>December 2022 - Present</em>
              As a frontend developer I specialize in responsive web design and keyboard accessibility for this web based productivity tool for researchers that generates audio from  journal articles
              </p>
              <p className="flex-start"><strong className="underline">IT Specialist</strong>
              <a href="https://ophrescue.org/" className="Glow" target="_blank" rel="noreferrer"><em>Operation Paws for Homes</em></a>
              <em>September - November 2022</em>
              As a volunteer, I oversaw the site's migration from version 2 to 4 of Bootstrap CSS for the animal shelter's website, ensuring compatability.
              </p>
            </div>
            <p className="Flex-center">💫 💫 💫</p>
          </Element>
          </div>
        </section>
        <Element className="animate-on-scroll">
          <section id="Projects">
            <h1 className="Section-title Darker-title Project-title-60">Projects</h1>
            <ProjectSection />
          </section>
        </Element>
        <Element className="animate-on-scroll">
          <section id="Contact" className="no-scroll-snap">
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
        </Element>
      </div>
    </div>
  );
}

export default App;
