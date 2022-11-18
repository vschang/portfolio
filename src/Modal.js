import React from 'react'

import Gallery from './Gallery'
import './Modal.css'
import { Icon } from '@iconify/react';

class Modal extends React.Component {
  onClose() {
    // Switches the value of isOpen
    this.props.onClose()
  }
  openModal(){
    let modal = document.querySelector(".Modal")
    let body = document.querySelector("body")
    body.classList.add('stop-scrolling')
    window.requestAnimationFrame(()=>{
      modal.style.bottom = "10px"
    })
  }

  render(){
    // if(!this.props.isOpen){ // if false, return nothing
    //   return null;
    // }
    let body = document.querySelector("body")

    if (this.props.isOpen){
      this.openModal()
      body.classList.add('stop-scrolling')
    } else {
      body.classList.remove('stop-scrolling')
    }

    return(
      <div className="Modal" style={{display: this.props.isOpen && "block", bottom: !this.props.isOpen && "-500px"}}>
        <button className="X-button" onClick={() => this.onClose()}>
          <Icon icon="ph:x-duotone" />
        </button>
        <h1 className="Title">{this.props.title}</h1>
        <div className="Gallery-desc-div">
          <div>
            <Gallery
                img={this.props.img}
                id={this.props.id}
              />
            <div className="Tech-stack">
              {this.props.tech.map((tech, i) => {
                const icon = this.props.icons[i]
                return <li key={i}><Icon icon={icon} className="Icon"/> {tech}</li>
              }) }
            </div>
          </div>
          <div className="">
            <div className="links">
              <button className="Button">
                <a href={this.props.live} target="_blank" rel="noreferrer">live</a>
              </button>
              <button className="Button">
                <a href={this.props.code} target="_blank" rel="noreferrer" >code</a>
              </button>
            </div>
            <p className="Desc">{this.props.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
