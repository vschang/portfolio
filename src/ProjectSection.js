import React from 'react';
import './project.css';
import Project from './Project'
import { Icon } from '@iconify/react';

const projects = [
  { id: 1,
    title: "Snacky",
    description:'Snacky was created as a pet project of mine as I\'m a big snacker and love to try foreign snacks. Starting from my own design creation drawn on Figma, I chose Ruby on Rails to build this app as a forum for sharing snack reviews. Certain aspects of the app are AJAX-ified such as the comments form and the tags form for instant updates. This app is responsive for mobile and desktop.',
    short_desc: 'A forum for sharing snack reviews',
    img: ['https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668555944/production/portfolio/snacky-hero_fxhp5d.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668555949/production/portfolio/snacky-profile_xt9e8t.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1668555947/production/portfolio/snacky-post_aiycet.png'],
    img_mobile: ['https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669043057/production/portfolio/snacky-mobile-profile_rynrwb.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669043054/production/portfolio/snacky-mobile-feed_ulsldj.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669141986/production/portfolio/www.snacky.fun_posts_iPhone_12_Pro_atwytt.png'],
    alt:'home page of Snacky',
    live:'http://www.snacky.fun',
    code:'https://github.com/vschang/rails-snacky',
    tech: ['Ruby on Rails', 'Stimulus JS','PostgreSQL'],
    icons: ['mdi:language-ruby-on-rails', 'simple-icons:stimulus', 'akar-icons:postgresql-fill'],
    tools: []}
    ,
  { id: 2,
    title: "Session",
    description:'Session fulfills the social media aspect of music streaming apps. Through a Spotify API, users are able to create posts based on a song, artist or album. Users can see their updated Spotify statistics on their profiles including top artists, tracks and playlists. Session was built in two weeks as the final project of the Le Wagon, Madrid Bootcamp, batch #785. Since then I\'ve made a desktop version of the app and implemented an instant chat using Action Cable and Web Socket.',
    short_desc: 'A social media platform that integrates Spotify for sharing music with friends',
    img: ["https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669135673/production/portfolio/Screen_Shot_2022-11-22_at_5.47.27_PM_n18yod.png", "https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669135673/production/portfolio/Screen_Shot_2022-11-22_at_5.46.34_PM_iczux4.png","https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669135673/production/portfolio/Screen_Shot_2022-11-22_at_5.45.47_PM_xuefy7.png","https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669135674/production/portfolio/Screen_Shot_2022-11-22_at_5.45.25_PM_s7xujr.png"],
    img_mobile: ['https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669043067/production/portfolio/session-mobile-feed_pcfhwc.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669043063/production/portfolio/session-mobile-new_nyr10e.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669131647/production/portfolio/www.sessionapp.xyz_chatrooms_4_iPhone_12_Pro_vswohm.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1669047349/production/portfolio/session-mobile-profile_ecpqd3.png'],
    alt:'home page of Session',
    live: null,
    code:'https://github.com/vschang/rails-session',
    tech: ['Ruby on Rails', 'Stimulus JS', 'Bootstrap CSS','PostgreSQL'],
    icons: ['mdi:language-ruby-on-rails', 'simple-icons:stimulus', 'simple-icons:bootstrap', 'akar-icons:postgresql-fill']},

  { id: 3,
    title: "MetCog",
    description:'MetCog is a meditation app that allows the user to choose or randomize a selection of 2-3 minute breathing exercises. Throughout the process I worked closely with a UX/UI designer to build and ship the app from conception to design to final product. I chose to build it in ReactJS in order to teach myself how to use this popular JS library. This app was made for mobile and desktop.',
    short_desc: 'A meditation app that allows the user to choose or randomize breathing exercises',
    img: ["https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1693241325/production/portfolio/Screen_Shot_2023-08-28_at_6.45.31_PM_sopsxi.png","https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1693241332/production/portfolio/Screen_Shot_2023-08-28_at_6.46.04_PM_u1pe5m.png","https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1693241336/production/portfolio/Screen_Shot_2023-08-28_at_6.46.12_PM_dzxkdl.png","https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1693241338/production/portfolio/Screen_Shot_2023-08-28_at_6.46.21_PM_i2ckza.png"],
    img_mobile: ['https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1693241864/production/portfolio/IMG_6705_xwkp9d.jpg','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1693241864/production/portfolio/IMG_6706_qeaxjx.jpg','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1693241864/production/portfolio/IMG_6708_n4z6jj.jpg','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1693241864/production/portfolio/IMG_6707_hqsofv.jpg'],
    alt:'home page of MetCog',
    live:'https://harmonious-gaufre-ab8eb9.netlify.app/',
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
    live: null,
    code:'https://github.com/pablobarcena99/trashbnb',
    tech: ['Ruby on Rails', 'Stimulus JS', 'Bootstrap CSS','PostgreSQL'],
    icons: ['mdi:language-ruby-on-rails', 'simple-icons:stimulus', 'simple-icons:bootstrap', 'akar-icons:postgresql-fill']},
  { id: 5,
    title: "Zoe Yoga",
    description:'A local yoga buisness website remade and personally redesigned from a SquareSpace template. The site allows users to discover information, book classes and connect with Zoe.',
    short_desc: 'A ReactJS-based yoga website remade from a SquareSpace template',
    img: ['https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1681466738/production/portfolio/zoe-desk-hero_trmhoy.png','https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1681466738/production/portfolio/zoe-desk-contact_knslok.png'],
    img_mobile: ['https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1681466738/production/portfolio/zoe-mobile-hero_ljogrc.png', 'https://res.cloudinary.com/le-wagon-785-vchang/image/upload/v1681466738/production/portfolio/zoe-mobile-menu_pboqd1.png'],
    alt:'home page of Zoe Kline Yoga',
    live: ['https://zoekline.online/'],
    code:'https://github.com/vschang/zoe-kline-website',
    tech: ['ReactJS'],
    icons: ['ion:logo-react']}
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
  }

  showCursorNext(){
    const cursorNext = document.getElementById('Next-cursor')
    cursorNext.style.opacity = '1'
  }

  hideCursorBack(){
    const cursor = document.getElementById('Back-cursor')
    cursor.style.opacity = '0'
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
          <Icon className="left-arrow" icon="carbon:arrow-up" />
        </button>
          {projects.map((project, i) => {
            return <Project
              key={Math.random()}
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
          <Icon className="right-arrow" icon="carbon:arrow-up" />
        </button>

        <div id="Back-cursor">
          <h3>Previous</h3>
        </div>
        <div id="Next-cursor">
          <h3>Next</h3>
        </div>
      </div>
    )
  }
}

export default ProjectSection;
