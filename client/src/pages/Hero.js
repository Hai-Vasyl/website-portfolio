import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineCode, AiOutlineSolution } from "react-icons/ai"
import mainImage from "../images/undraw_on_the_office_fbfs 1.svg"

function Hero() {
  return (
    <div className='wrapper'>
      <div className='background-shape'></div>
      <div className='background-hero'></div>

      <div className='hero'>
        <div className='hero__content'>
          <h1 className='hero__title'>
            <span className='hero__accent'>Hi, I`m</span>
            <br />
            Vasyl Hai
          </h1>
          <p className='hero__paragraph'>
            I am interested in web development. Always motivated to learn
            something new, grow and succeed in programming.
          </p>
          <div className='hero__btns'>
            <Link to='/projects' className='btn btn-primary'>
              <AiOutlineCode className='btn__icon' />
              <span className='btn__name'>Projects</span>
            </Link>
            <Link to='/about' className='hero__btn btn'>
              <AiOutlineSolution to='/about' className='btn__icon' />
              <span className='btn__name'>About</span>
            </Link>
          </div>
        </div>
        <div className='hero__img-side'>
          <div className='hero__container-img'>
            <img className='hero__image' src={mainImage} alt='mainImage' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
