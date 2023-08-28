/* eslint-disable jsx-a11y/anchor-has-content */
import './Navbar.css';
import './Navdots.css'

function Navdots() {
  return (
    <div className="Navdots">
      {/* eslint-disable-next-line no-use-before-define, jsx-a11y/anchor-has-content */}
      <a id="Intro-dot" className='Nav-dot' href="#Intro"></a>
      {/* eslint-disable-next-line no-use-before-define */}
      <a id="About-dot" className='Nav-dot' href="#About"></a>
      {/* eslint-disable-next-line no-use-before-define */}
      <a id="Project-dot" className='Nav-dot' href="#Projects"></a>
      {/* eslint-disable-next-line no-use-before-define */}
      <a id="Contact-dot" className='Nav-dot' href="#Contact"></a>
    </div>
  );
}

export default Navdots;
