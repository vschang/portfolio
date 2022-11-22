import Modal from './Modal'
import React, {useState} from 'react'
import { Icon } from '@iconify/react';

// Project is child of Project Section
// and a parent of Gallery
const Project = (props) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => setShowModal(!showModal)

    return (
      <div className={props.className}>
        <h1 className="Project-number">({props.number}/4)</h1>
        <div className="Project-title">
          <h1>{props.title}</h1>
          <button className="Button See-more" onClick={() => {handleClick()}}>
            See more! 👀
          </button>
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
        <div className="Pic-tech-div">
          <img src={props.img[0]} alt="" className="Display-img"></img>
          <div className="Tech-stack-show">
            {props.tech.map((tech, i) => {
              const icon = props.icons[i]
              return <li key={i}><Icon icon={icon} className="Icon"/> {tech}</li>
            }) }
          </div>
        </div>
        <p className="center">{props.short_desc}</p>

      </div>
    );
}

export default Project
