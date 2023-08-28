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
  }

  showDesktop(){
    this.setState({isMobile: false})
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
          <Icon icon="teenyicons:x-solid" />
        </button>
        {this.props.img_mobile.length === 0 ?
          null : (
            <div className="Mobile-desktop-btns">
              <button className={this.state.isMobile ? 'active Modal-btn' : 'Modal-btn'} onClick={() => this.showMobile()}>
                Mobile
              </button>
              <button className={this.state.isMobile ? 'Modal-btn' : 'active Modal-btn'} onClick={() => this.showDesktop()}>
                Desktop
              </button>
            </div>)
          }
        <div className="Gallery-desc-div">
            {this.state.isMobile ? (
              <Gallery
                  img={this.props.img_mobile}
                  id={this.props.id}
                  isMobile={this.state.isMobile}
                />
            ) : (
              <Gallery
                img={this.props.img}
                id={this.props.id}
                isMobile={this.state.isMobile}
              />
            )}
        </div>
      </div>
    )
  }
}

export default Modal;
