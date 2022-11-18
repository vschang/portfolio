import React from 'react'
import './gallery.css'
import './project.css';
import { Icon } from '@iconify/react';

// gallery is a child of project
class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      picNumber: 0,
    }
  }

  goForward(){
    const images = this.props.img
    if (this.state.picNumber > images.length - 2) {
      this.setState({picNumber: 0})
    } else {
      this.setState({picNumber: this.state.picNumber + 1})
    }
  }

  goBack(){
    const images = this.props.img
    if (this.state.picNumber < 1) {
      this.setState({picNumber: images.length - 1})
    } else {
      this.setState({picNumber: this.state.picNumber - 1})
    }
  }

  jumpTo = (e) => {
    const children = Array.from(e.target.parentNode.childNodes);
    const target = e.target

    const isTarget = (element) => element === target
    const index = children.findIndex(isTarget)
    this.setState({picNumber: index})
  }

  render(){
    const images = this.props.img
    const current = images[this.state.picNumber] //current image

    return(
      <div className="Gallery">
        <div className="Buttons-div">
          <button className="Button" onClick={() => this.goBack()}>
            <Icon icon="material-symbols:arrow-back-rounded" />
          </button>
          <button className="Button" onClick={() => this.goForward()}>
            <Icon icon="material-symbols:arrow-forward-rounded" />
          </button>
        </div>
        {this.props.img.map((img, i) => {
          return (
            <img key={i} src={img} alt="alt" className={images[i] === current ? "Active-img" : "Project-img"}></img>
          )
        })}
        <div className="Dots">
          {this.props.img.map((img, i) => {
            return (
              <button key={i} className={images[i] === current ? "Dot Active-dot" : "Dot"} onClick={((e) => this.jumpTo(e))}></button>
            )
          })}
        </div>
      </div>
    )
  }
}



export default Gallery
