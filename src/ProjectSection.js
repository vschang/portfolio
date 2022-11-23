import React from 'react';
import './project.css';
import Project from './Project'

const projects = [
  { id: 1,
    title: "Snacky",
    description:'Snacky was created as a pet project of mine as I\'m a big snacker and love to try new snacks, especially from foreign countries. Starting from my own design creation drawn on Figma, I chose Ruby on Rails to build this app essentially as a forum for sharing snacks and snack reviews. Certain aspects of the app are AJAX-ified such as the comments form and the tags form for instant updates without refreshing the page. This app is responsive for mobile and desktop.',
    short_desc: 'A forum for sharing snacks and snack reviews',
    img: ['https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668555944/production/portfolio/snacky-hero_fxhp5d.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668555949/production/portfolio/snacky-profile_xt9e8t.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668555947/production/portfolio/snacky-post_aiycet.png'],
    img_mobile: ['https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669043057/production/portfolio/snacky-mobile-profile_rynrwb.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669043054/production/portfolio/snacky-mobile-feed_ulsldj.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669141986/production/portfolio/www.snacky.fun_posts_iPhone_12_Pro_atwytt.png'],
    alt:'home page of Snacky',
    live:'http://www.snacky.fun',
    code:'https://github.com/vschang/rails-snacky',
    tech: ['Ruby on Rails', 'Stimulus JS','SQLite'],
    icons: ['mdi:language-ruby-on-rails', 'simple-icons:stimulus', 'file-icons:sqlite'],
    tools: []}
    ,
  { id: 2,
    title: "Session",
    description:'Session was born out of the frustration that I was unable to share music with friends on a unified app. Session fulfills the social media aspect that music streaming services seem to lack. Through a Spotify API, users are able to create posts based on a song, artist or album they like. Users can see their updated Spotify statistics on their profiles including top artists, tracks and playlists. Session was created in two weeks as the final project of the Le Wagon - Madrid Bootcamp, batch #785. Since then I\'ve made a desktop version of the app as well as implemented an instant chat for two users using Action Cable and Web Socket.',
    short_desc: 'A social media platform that integrates Spotify for sharing music with friends',
    img: ["https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669135673/production/portfolio/Screen_Shot_2022-11-22_at_5.47.27_PM_n18yod.png", "https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669135673/production/portfolio/Screen_Shot_2022-11-22_at_5.46.34_PM_iczux4.png","https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669135673/production/portfolio/Screen_Shot_2022-11-22_at_5.45.47_PM_xuefy7.png","https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669135674/production/portfolio/Screen_Shot_2022-11-22_at_5.45.25_PM_s7xujr.png"],
    img_mobile: ['https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669043067/production/portfolio/session-mobile-feed_pcfhwc.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669043063/production/portfolio/session-mobile-new_nyr10e.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669131647/production/portfolio/www.sessionapp.xyz_chatrooms_4_iPhone_12_Pro_vswohm.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669047349/production/portfolio/session-mobile-profile_ecpqd3.png'],
    alt:'home page of Session',
    live:'http://www.sessionapp.xyz',
    code:'https://github.com/vschang/rails-session',
    tech: ['Ruby on Rails', 'Stimulus JS', 'Bootstrap CSS','SQLite'],
    icons: ['mdi:language-ruby-on-rails', 'simple-icons:stimulus', 'simple-icons:bootstrap', 'file-icons:sqlite']},

  { id: 3,
    title: "MetCog",
    description:'MetCog is a meditation app that allows the user to choose or randomize a selection of 2-3 minute breathing exercises. Throughout the process I worked closely with a UX/UI designer to build and ship the app from conception to design to final product. I chose to build it in ReactJS in order to teach myself how to use this popular JS library. This app was made for mobile and desktop.',
    short_desc: 'A meditation app that allows the user to choose or randomize breathing exercises.',
    img: ['https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668555954/production/portfolio/metcog-hero_h1z2wk.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668555951/production/portfolio/metcog-index_t9q1gw.png'],
    img_mobile: ['https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668784382/production/portfolio/metcog-mobile-hero_nzzibg.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668784375/production/portfolio/metcog-mobile-menu_ez6aii.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669043064/production/portfolio/metcog-exercise_blwubn.png'],
    alt:'home page of MetCog',
    live:'http://www.metcog.xyz',
    code:'https://github.com/vschang/metcog/tree/master',
    tech: ['ReactJS', 'Sass'],
    icons: ['ion:logo-react', 'ion:logo-sass']},
  { id: 4,
    title: "Trashi",
    description:'Trashi is a clone of the Airbnb model in which users can book or create listings for trash receptacles (instead of flats). The app integrates the Mapbox API to display the location of the trash receptacle and utilizes the \'pundit\' gem for authorization as well as the \'devise\' gem for authentication. It was created in one week as a project for the Le Wagon - Madrid Bootcamp, batch #785. ',
    short_desc: 'A clone of the Airbnb model for renting and listing trash receptacles',
    img: ['https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668606475/production/portfolio/trashi-hero_jovsy3.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668606479/production/portfolio/trashi-index_bmzu0f.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669056185/production/portfolio/Screen_Shot_2022-11-21_at_7.42.42_PM_veodzz.png'],
    img_mobile: [],
    alt:'home page of Trashi',
    live:'https://airbnb-pablobarcena99.herokuapp.com/',
    code:'https://github.com/pablobarcena99/trashbnb',
    tech: ['Ruby on Rails', 'Stimulus JS', 'Bootstrap CSS','SQLite'],
    icons: ['mdi:language-ruby-on-rails', 'simple-icons:stimulus', 'simple-icons:bootstrap', 'file-icons:sqlite']}
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

  showCursorBack(){
    const cursorBack = document.getElementById('Back-cursor')
    cursorBack.style.opacity = '1'
    console.log('showing back cursor')
  }

  showCursorNext(){
    const cursorNext = document.getElementById('Next-cursor')
    cursorNext.style.opacity = '1'
  }

  hideCursorBack(){
    const cursor = document.getElementById('Back-cursor')
    cursor.style.opacity = '0'
    console.log('hiding back cursor')
  }

  hideCursorNext(){
    const cursor = document.getElementById('Next-cursor')
    cursor.style.opacity = '0'
  }

  followCursorBack(){
    const button = document.querySelector('#Project-btn-back')
    button.addEventListener('mousemove', function(e){
      const cursor = document.getElementById('Back-cursor')
      cursor.style.left = `${e.clientX - 100}px`
      cursor.style.top = `${e.clientY - 10}px`
    })
  }

  followCursorNext(){
    const button = document.querySelector('#Project-btn-fwd')
    button.addEventListener('mousemove', function(e){
      const cursor = document.getElementById('Next-cursor')
      cursor.style.left = `${e.clientX -50}px`
      cursor.style.top = `${e.clientY -10}px`
    })
  }

  render() {
    const projects = this.state.projects
    const current = projects[this.state.projectNumber]

    return (
      <div className="Project-section">
        <button id="Project-btn-back" onClick={() => this.goBack()} onMouseEnter={() => {this.showCursorBack(); this.followCursorBack()}} onMouseLeave={() => this.hideCursorBack()} >
        </button>
          {projects.map((project, i) => {
            return <Project
              key={project.id}
              number={project.id}
              title={project.title}
              description={project.description}
              short_desc={project.short_desc}
              img={project.img}
              img_mobile={project.img_mobile}
              alt={project.alt}
              live={project.live}
              code={project.code}
              tech={project.tech}
              icons={project.icons}
              className={projects[i] === current ? "Active-project" : "Project"}
            />;
          })}
        <button id="Project-btn-fwd" onClick={() => this.goForward()} onMouseEnter={() => {this.showCursorNext(); this.followCursorNext()}} onMouseLeave={() => this.hideCursorNext()}>
        </button>

        <div id="Back-cursor"></div>
        <div id="Next-cursor"></div>
      </div>
    )
  }
}

export default ProjectSection;
