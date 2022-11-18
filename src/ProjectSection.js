import React from 'react';
import './project.css';
import Project from './Project'
import { Icon } from '@iconify/react';

const projects = [
  { id: 1,
    title: "Snacky",
    description:'Snacky was created as a pet project of mine as I\'m a big snacker and love to try new snacks, especially from new countries. Starting from my own design creation, I chose Ruby on Rails to build this app essentially as a forum for sharing snacks and snack reviews. The app is responsive for mobile and desktop',
    short_desc: 'A forum for sharing snacks and snack reviews',
    img: ['https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668555944/production/portfolio/snacky-hero_fxhp5d.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668555949/production/portfolio/snacky-profile_xt9e8t.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668555947/production/portfolio/snacky-post_aiycet.png'],
    alt:'home page of Snacky',
    live:'http://www.snacky.fun',
    code:'https://github.com/vschang/rails-snacky',
    tech: ['Ruby on Rails', 'Stimulus JS'],
    icons: ['mdi:language-ruby-on-rails', 'simple-icons:stimulus']}
    ,
  { id: 2,
    title: "Session",
    description:'Session was born out of the frustration that I was unable to share music with friends on a unified app, but instead over separate messaging platforms as a link. A mobile-first app, Session fulfills the social media aspect that a majority of music streaming services lack. Through a Spotify API, users are able to create posts based on a song, artist or album they\'d like to share with their followers. Session was created in two weeks as the final project of my bootcamp and since then I\'ve made the app responsive for desktop as well as implemented a chat feature using Action Cable and Web Socket.',
    short_desc: 'A social media platform that integrates Spotify for sharing music with friends',
    img: ['https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668606108/production/portfolio/session-feed-desktop_qlsvrq.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668606102/production/portfolio/session-profile_eamgcy.png'],
    alt:'home page of Session',
    live:'http://www.sessionapp.xyz',
    code:'https://github.com/vschang/rails-session',
    tech: ['Ruby on Rails', 'Stimulus JS', 'Bootstrap CSS'],
    icons: ['mdi:language-ruby-on-rails', 'simple-icons:stimulus', 'simple-icons:bootstrap']},

  { id: 3,
    title: "MetCog",
    description:'MetCog is a meditation app that allows the user to choose or randomize a selection of 2-3 minute breathing exercises. Throughout the process I worked closely with a UX/UI designer to build and ship the app from conception to design to final product. I chose to build it in React in order to teach myself how to use this popular JS library. This app was made for mobile, tablet and desktop',
    short_desc: 'A meditation app that allows the user to choose or randomize breathing exercises.',
    img: ['https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668555954/production/portfolio/metcog-hero_h1z2wk.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668555951/production/portfolio/metcog-index_t9q1gw.png'],
    alt:'home page of MetCog',
    live:'http://www.metcog.xyz',
    code:'https://github.com/vschang/metcog/tree/master',
    tech: ['React JS', 'Sass'],
    icons: ['ion:logo-react', 'ion:logo-sass']},
  { id: 4,
    title: "Trashi",
    description:'Trashi is a clone of the Airbnb model in which users can book or create listings for trash receptacles (instead of flats). It was created in one week as a project for my 9 week bootcamp at LeWagon.',
    short_desc: 'A clone of the Airbnb model for renting and listing trash receptacles',
    img: ['https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668606475/production/portfolio/trashi-hero_jovsy3.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668606479/production/portfolio/trashi-index_bmzu0f.png'],
    alt:'home page of Trashi',
    live:'https://airbnb-pablobarcena99.herokuapp.com/',
    code:'https://github.com/pablobarcena99/trashbnb',
    tech: ['Ruby on Rails', 'Stimulus JS', 'Bootstrap CSS'],
    icons: ['mdi:language-ruby-on-rails', 'simple-icons:stimulus', 'simple-icons:bootstrap']}
]

// project section is parent
class ProjectSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: projects,
      projectNumber: 0,
    }
  }

  goForward(){
    const projects = this.state.projects
    if (this.state.projectNumber > projects.length - 2) {
      this.setState({projectNumber: 0})
    } else {
      this.setState({projectNumber: this.state.projectNumber + 1})
    }
  }

  goBack(){
    const projects = this.state.projects
    if (this.state.projectNumber < 1) {
      this.setState({projectNumber: projects.length - 1})
    } else {
      this.setState({projectNumber: this.state.projectNumber - 1})
    }
  }

  render() {
    const projects = this.state.projects
    const current = projects[this.state.projectNumber]

    return (
      <div className="Project-section">
        <button className="Button" onClick={() => this.goBack()}>
          <Icon icon="material-symbols:arrow-back-rounded" />
        </button>
        {projects.map((project, i) => {
          return <Project
            key={project.id}
            number={project.id}
            title={project.title}
            description={project.description}
            short_desc={project.short_desc}
            img={project.img}
            alt={project.alt}
            live={project.live}
            code={project.code}
            tech={project.tech}
            icons={project.icons}
            className={projects[i] === current ? "Active-project" : "Project"}
          />;
        })}
        <button className="Button" onClick={() => this.goForward()}>
          <Icon icon="material-symbols:arrow-forward-rounded" />
        </button>
      </div>
    )
  }
}

export default ProjectSection;
