import './Navbar.css';
import resume from './resources/resume-example.pdf'


function Navbar() {
  return (
    <div className="Navbar">
      <div className="Nav-item">
        <a className="Nav-link" href="#About">About</a>
      </div>
      <div className="Nav-item">
        <a className="Nav-link" href="#Projects">Projects</a>
      </div>
      <div className="Nav-item">
        <a className="Nav-link" href="#Contact">Contact</a>
      </div>
      <div>
        <button className="Button Resume">
          <a className="Nav-link" href={resume} download="valerie-chang-resume">Resume</a>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
