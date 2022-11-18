import './project.css';
import Modal from './Modal'
import React from 'react'
import { Icon } from '@iconify/react';

// Project is child of Project Section
// and a parent of Gallery
class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  showModal = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render(){
    return (
      <div className={this.props.className}>
        <div className="Project-title">
          <h1>{this.props.title}</h1>
          
          <button className='Button' onClick={() => {this.showModal()}}>See more! 👀</button>
        </div>
        <Modal
          title={this.props.title}
          img={this.props.img}
          description={this.props.description}
          tech={this.props.tech}
          icons={this.props.icons}
          live={this.props.live}
          code={this.props.code}
          isOpen={this.state.isOpen}
          onClose={this.showModal}
        />
        <div className="Pic-tech-div">
          <img src={this.props.img[0]} alt="" className="Display-img"></img>
          <div className="Tech-stack">
            {this.props.tech.map((tech, i) => {
              const icon = this.props.icons[i]
              return <li key={i}><Icon icon={icon} className="Icon"/> {tech}</li>
            }) }
          </div>
        </div>
        <p>{this.props.short_desc}</p>

      </div>
    );
  }
}

export default Project
