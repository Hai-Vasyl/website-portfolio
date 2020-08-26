import React from "react"
import { Link } from "react-router-dom"
import { FaPortrait, FaThList } from "react-icons/fa"
import mainImage from "../images/web_development_.svg"
function HeroSection() {
  return (
    <div className='wrapper'>
      <div className='background-shape'></div>
      <div className='background-hero'></div>

      <div className='hero'>
        <div className='hero__content'>
          <h1 className='hero__title'>
            <span className='hero__accent'>Hi, I`m</span>
            <br />
            Hai Vasyl
          </h1>
          <p className='hero__paragraph'>
            I am a student of Lviv Polytechnic University. I am interested in
            web programming, I like new programming technologies.
          </p>
          <div className='hero__btns'>
            <Link to='/projects' className='btn btn-primary'>
              <FaThList className='btn__icon' />
              <span className='btn__name'>Projects</span>
            </Link>
            <Link to='/about' className='hero__btn btn'>
              <FaPortrait to='/about' className='btn__icon' />
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

export default HeroSection