import React from "react"
import { ImDownload2 } from "react-icons/im"

function AboutSection() {
  const skills = [
    "HTML/HTML5",
    "CSS/CSS3",
    "SASS",
    "BEM methodology",
    "JavaScript",
    "React (Hooks, Context API)",
    "Redux (Thunk)",
    "REST API",
    "Node.js",
    "Express.js",
    "MongoDB",
    "GIT, GitHub",
    "Adaptive, cross-browser layout",
  ]

  const skillsJSX = skills.map((item, index) => {
    index = index + 1
    return (
      <div key={item} className='skill'>
        <div className='skill__container-counter'>
          <span className='skill__dashe'></span>
          <span className='skill__counter'>
            {index.toString().length > 1 ? index : `0${index}`}
          </span>
        </div>
        {item}
      </div>
    )
  })

  return (
    <div className='wrapper'>
      <h2 className='title'>About me, my skills</h2>

      <div className='about'>
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
      </div>
    </div>
  )
}

export default AboutSection
