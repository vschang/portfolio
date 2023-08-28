import './Navbar.css';
import resume from './resources/resume.pdf'

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Nav-item">
        <a className="Nav-link" href="#About">about</a>
      </div>
      <div className="Nav-item">
        <a className="Nav-link" href="#Projects">projects</a>
      </div>
      <div className="Nav-item">
        <a className="Nav-link" href="#Contact">contact</a>
      </div>
      <a className="Resume" href={resume} download="valerie-chang-resume">resume</a>
    </div>
  );
}

export default Navbar;
