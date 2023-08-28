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
        <div className="project-desc-box">
          <h1 className="Title">{props.title}</h1>
          <p className="short-desc">{props.short_desc}</p>
          <div className="Tech-stack-show">
            {props.tech.map((tech, i) => {
              const icon = props.icons[i]
              return <div className="tech-icon" key={Math.random()}><Icon icon={icon} /> {tech}</div>
            }) }
          </div>
          <p className="long-desc">{props.description}</p>
          <div className="links">
            {props.live ?
              <a className="live-btn" href={props.live} target="_blank" rel="noreferrer">Live</a>
              : null
            }
              <a className="live-btn" href={props.code} target="_blank" rel="noreferrer">Code</a>
          </div>
        </div>

        <div className="Pic-tech-div"
          onMouseEnter={() => {setShowCursor(true); followCursor()}}
          onMouseLeave={() => setShowCursor(false)}
          onClick={() => handleClick()}>
          <img src={props.img[0]} alt="" className="Display-img"></img>
        </div>

         <Modal
          img={props.img}
          showModal={showModal}
          onClose={handleClick}
          img_mobile={props.img_mobile}
        />

        { showCursor &&(
        <div id="See-more">
          <h3>Click to See More 👀</h3>
        </div>
        )}

        <h1 className="Project-number">({props.number}/5)</h1>
      </div>
    );
}

export default Project
