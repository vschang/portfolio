import React from 'react'
import styles from './animation.module.css';
import Gallery from './Gallery'
import './Modal.css'
import classNames from 'classnames';
import { Icon } from '@iconify/react';

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: false,
    }
  }

  showMobile(){
    this.setState({isMobile: true})
    console.log(this.state.isMobile)
  }

  showDesktop(){
    this.setState({isMobile: false})
    console.log(this.state.isMobile)
  }

  onClose() {
  this.props.onClose()
  }

  render(){
    const isOpen = this.props.showModal
    const body = document.querySelector('body')
    if (isOpen){
      body.classList.add('stop-scrolling')
    } else {
      body.classList.remove('stop-scrolling')
    }

    return(
      <div className={classNames(styles.showModal, isOpen && styles.grow)} >
        <button className="X-button" onClick={() => this.onClose()}>
          <Icon icon="ph:x-duotone" />
        </button>
        <h1 className="Project-modal-title">{this.props.title}</h1>
        {this.props.img_mobile.length === 0 ?
          null : (
            <div className="Mobile-desktop-btns">
              <button className="Button" onClick={() => this.showMobile()}>
                <Icon icon="ph:device-mobile-speaker-light" />
                <p className="Modal-btn">Mobile</p>
              </button>
              <button className="Button" onClick={() => this.showDesktop()}>
                <Icon icon="material-symbols:desktop-mac-outline-rounded" />
                <p className="Modal-btn">Desktop</p>
              </button>
            </div>)
          }
        <div className="Gallery-desc-div">
          <div>
          {this.state.isMobile ? (
            <Gallery
                img={this.props.img_mobile}
                id={this.props.id}
              />
          ) : (
            <Gallery
              img={this.props.img}
              id={this.props.id}
            />
          )}
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
                <a href={this.props.live} target="_blank" rel="noreferrer"><Icon icon="fluent:live-24-regular"/><p className="Modal-btn">Live</p></a>
              </button>
              <button className="Button">
                <a href={this.props.code} target="_blank" rel="noreferrer"><Icon icon="mdi:github"/><p className="Modal-btn">Code</p ></a>
              </button>
            </div>
            <div>
              <p className="Desc">{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
