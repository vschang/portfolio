import { Icon } from '@iconify/react';
import './Contact.css'

function Contact(){
  return(
    <section id="Contact" className="no-scroll-snap">
      <h1 className="Section-title Blue-title">Contact</h1>
      <a className="Social-link blue Github-box" href="https://github.com/vschang" target="_blank" rel="noreferrer">
        <Icon className="h-w-30" icon="mdi:github" />
        <p className="underline">@vschang</p>
      </a>
      <a className="Social-link blue Linkedin-box" href="https://www.linkedin.com/in/valeriechang97/" target="_blank" rel="noreferrer">
        <Icon className="h-w-30" icon="mdi:linkedin" />
        <p className="underline">/valeriechang97</p>
      </a>
      <a className="Social-link blue Email-box" href="mailto: valeriechang0@gmail.com" >
        <Icon className="h-w-30" icon="material-symbols:mail-rounded" />
        <p className="underline">valeriechang0@gmail.com</p>
      </a>
    </section>
  )
}

export default Contact
