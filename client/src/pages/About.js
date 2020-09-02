import React from "react"
import { ImDownload2 } from "react-icons/im"
import aboutImage from "../images/undraw_annotation_7das.svg"
import {
  AiOutlineThunderbolt,
  AiOutlineAudit,
  AiOutlineRead,
} from "react-icons/ai"
import file from "../Vasyl Hai hai.vasyl20@gmail.com.pdf"
import useData from "../hooks/useData"

function About() {
  const { skills } = useData()

  const mapReducer = (array) => {
    return array.map((item) => {
      return (
        <li className='about__skill' key={item}>
          {item}
        </li>
      )
    })
  }

  return (
    <div className='wrapper'>
      <h2 className='title'>About me, my skills</h2>

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
              Over 1 year of non-commercial experience. I would be happy to work
              with you on interesting projects. Do you have any suggestions? =)
            </p>
            <h3 className='about__title'>
              <AiOutlineRead className='about__title-icon' />
              <span className='about__title-name'>Education</span>
            </h3>
            <span className='about__accent-title'>(2017-present)</span>
            <p className='about__paragraph'>
              <span className='about__accent'>
                Bachelor's Degree: Computer Science
              </span>
              Institute of Business and Innovative Technologies of Lviv
              Polytechnic National University
            </p>
            <a
              className='about__btn-resume btn btn-primary'
              href={file}
              target='_blank'
              rel='noopener noreferrer'
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
