import { Icon } from '@iconify/react';

function Intro(){
  return(
    <section className="App-header no-scroll-snap" id="Intro">
      <div>
        <h1 className="Name">Valerie Chang</h1>
        <h3 className="text-right">Fullstack Web Developer</h3>
        <div className="Flex">
          <div className="About-links">
            <a href="https://github.com/vschang" target="_blank" rel="noreferrer" className="Social-icon"><Icon icon="mdi:github" /></a>
            <a href="https://www.linkedin.com/in/valeriechang97/" target="_blank" rel="noreferrer" className="Social-icon"><Icon icon="mdi:linkedin" /></a>
            <a href = "mailto: valeriechang0@gmail.com" className="Social-icon"><Icon icon="material-symbols:mail-rounded" /></a>
          </div>
          <div className="location">
            <Icon className="blue" icon="typcn:location" />
            <p className="remote">Remote, USA</p>
          </div>
        </div>
      </div>
      <img src='https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668606112/production/portfolio/profpic_nebv6u.png' alt="profile" className="Profile-pic"></img>
    </section>
  )
}
export default Intro
