import React from "react"
import { ImDownload2 } from "react-icons/im"
import aboutImage from "../images/undraw_annotation_7das.svg"
import {
  AiOutlineThunderbolt,
  AiOutlineAudit,
  AiOutlineRead,
} from "react-icons/ai"

function About() {
  const skills = {
    frontend: [
      "HTML/HTML5",
      "CSS/CSS3",
      "SASS",
      "BEM methodology",
      "JavaScript",
      "React (Hooks, Context API)",
      "Redux (Thunk)",
      "Adaptive, cross-browser layout",
    ],
    backend: ["REST API", "Node.js", "Express.js", "MongoDB"],
    other: ["GIT, GitHub", "English (Intermediate)"],
  }

  const mapReducer = (array) => {
    return array.map((item) => {
      return (
        <li className='about__skill' key={item}>
          {item}
        </li>
      )
    })
  }

  // const skillsJSX = skills.map((item, index) => {
  //   index = index + 1
  //   return (
  //     <div key={item} className='skill'>
  //       <div className='skill__container-counter'>
  //         <span className='skill__dashe'></span>
  //         <span className='skill__counter'>
  //           {index.toString().length > 1 ? index : `0${index}`}
  //         </span>
  //       </div>
  //       {item}
  //     </div>
  //   )
  // })

  return (
    <div className='wrapper'>
      <h2 className='title'>About me, my skills</h2>

      {/* <div className='about'>
        <div className='about__experience'>
          <div className='about__info'>
            <h3 className='title-simple'>Work Experience</h3>
            <p className='about__paragraph'>
              At the moment I have no experience, so I will be happy for any
              suggestions)
            </p>
          </div>
          <div className='about__info'>
            <h3 className='title-simple'>Education (2017-present)</h3>
            <p className='about__paragraph'>
              Institute of Business and Innovative Technologies of Lviv
              Polytechnic National University
            </p>
          </div>
          <a
            className='about__btn btn btn-primary'
            href='../Vasyl Hai hai.vasyl2000@gmail.com.pdf'
            target='_blank'
            download
          >
            <ImDownload2 className='btn__icon' />
            <span className='btn__name'>Resume</span>
          </a>
        </div>
        <div className='about__skills'>
          <h3 className='title-simple'>Skills</h3>
          <div className='about__container-skills'>{skillsJSX}</div>
        </div>
      </div> */}

      <div className='about'>
        <div className='about__info'>
          <div className='about__container'>
            <h3 className='about__title'>
              <AiOutlineThunderbolt className='about__title-icon' />
              <span className='about__title-name'>Skills</span>
            </h3>
            <div className='about__skill-block'>
              <h4 className='about__title-simple'>Frontend</h4>
              <ul className='about__skills'>{mapReducer(skills.frontend)}</ul>
            </div>
            <div className='about__skill-block'>
              <h4 className='about__title-simple'>Backend</h4>
              <ul className='about__skills'>{mapReducer(skills.backend)}</ul>
            </div>
            <div className='about__skill-block'>
              <h4 className='about__title-simple'>Other</h4>
              <ul className='about__skills'>{mapReducer(skills.other)}</ul>
            </div>
          </div>
          <div className='about__container'>
            <h3 className='about__title'>
              <AiOutlineAudit className='about__title-icon' />
              <span className='about__title-name'>Experience</span>
            </h3>
            <p className='about__paragraph'>
              At the moment I have no experience, so I will be happy for any
              suggestions)
            </p>
            <h3 className='about__title'>
              <AiOutlineRead className='about__title-icon' />
              <span className='about__title-name'>Education</span>
            </h3>
            <span className='about__accent-title'>(2017-present)</span>
            <p className='about__paragraph'>
              Institute of Business and Innovative Technologies of Lviv
              Polytechnic National University
            </p>
            <a
              className='about__btn-resume btn btn-primary'
              href='../Vasyl Hai hai.vasyl2000@gmail.com.pdf'
              target='_blank'
              download
            >
              <ImDownload2 className='btn__icon' />
              <span className='btn__name'>Resume</span>
            </a>
          </div>
        </div>

        <div className='about__image-side'>
          <img className='about__image' src={aboutImage} alt='aboutImg' />
        </div>
      </div>
    </div>
  )
}

export default About
