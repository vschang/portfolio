import Modal from './Modal'
import React, {useState} from 'react'
import { Icon } from '@iconify/react';

// Project is child of Project Section
// and a parent of Gallery
const Project = (props) => {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => setShowModal(!showModal)

  const [showCursor, setShowCursor] = useState(false)

  function followCursor(){
    let buttons = document.querySelectorAll('.Pic-tech-div')
    for (let i = 0; i < buttons.length; i++){
      buttons[i].addEventListener('mousemove', function(e){
        const cursor = document.getElementById('See-more')
        if (cursor){
          cursor.style.left = `${e.clientX}px`
          cursor.style.top = `${e.clientY}px`
        }
      })
    }
  }
    return (
      <div className={props.className}>
        <h1 className="Project-number Darker">({props.number}/5)</h1>
        <div className="Project-title Darker">
          <h1 className="underline" onMouseEnter={() => {setShowCursor(true); followCursor()}}
          onMouseLeave={() => setShowCursor(false)}
          onClick={() => handleClick()}>{props.title}</h1>
          <p className="see-more-text">click to see more 👀</p>
        </div>
        <Modal
          title={props.title}
          img={props.img}
          description={props.description}
          tech={props.tech}
          icons={props.icons}
          live={props.live}
          code={props.code}
          showModal={showModal}
          onClose={handleClick}
          img_mobile={props.img_mobile}
        />
        <div className="Pic-tech-div Darker"
          onMouseEnter={() => {setShowCursor(true); followCursor()}}
          onMouseLeave={() => setShowCursor(false)}
          onClick={() => handleClick()}>
          <img src={props.img[0]} alt="" className="Display-img"></img>
          <div className="Tech-stack-show">
            {props.tech.map((tech, i) => {
              const icon = props.icons[i]
              return <li key={i}><Icon icon={icon} className="Icon"/> {tech}</li>
            }) }
          </div>
        </div>
        <p className="center Darker">{props.short_desc}</p>
        { showCursor &&(
        <div id="See-more">
          <h3>Click to See More 👀</h3>
        </div>
        )}
      </div>
    );
}

export default Project
