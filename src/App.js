import React, {useEffect} from 'react'
import './App.css';
import Navbar from './Navbar';
import Navdots from './Navdots'
import ProjectSection from './ProjectSection';
import { Element } from 'react-scroll';
import Intro from './pages/Intro'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      const dots = document.querySelectorAll('.Nav-dot')

      elements.forEach((element, i) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        // when element comes into view

        if (elementPosition < windowHeight - 250) {
          if (element === elements[1] || element === elements[2]){
            dots.forEach((dot)=> {
              dot.classList.add('white-dot')
            })
          } else {
            dots.forEach((dot)=> {
              dot.classList.remove('white-dot')
            })
          }
        }
        // When element goes above window
        if (elementPosition > windowHeight - 50) {
        }
        if (elementPosition < windowHeight - 50) {
          element.classList.add('animate');
          dots[i].classList.add('active')

        }
        // When element goes above window
        if (elementPosition > windowHeight - 50) {
          element.classList.remove('animate');
          dots[i].classList.remove('active')
        }
      });

    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <div className="App">
        <Navdots />
        <Navbar />
        <div className="Section-container">
          <Element className="animate-on-scroll">
            <Intro />
          </Element>
          <Element className="animate-on-scroll">
            <About />
          </Element>
          <Element className="animate-on-scroll" >
            <section id="Projects">
              <h1 className="Section-title Project-section-title">Projects</h1>
              <ProjectSection />
            </section>
          </Element>
          <Element className="animate-on-scroll" >
            <Contact />
          </Element>
        </div>
      </div>
  );
}

export default App;
