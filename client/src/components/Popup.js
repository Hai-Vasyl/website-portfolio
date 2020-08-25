import React from "react"
import { FiGithub } from "react-icons/fi"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"

function Popup({ data, handleMove, handleTab }) {
  const images = data.images.map((item) => {
    return (
      <img
        src={item.img}
        key={item.img}
        className={`popup__img ${item.status && "popup__img--active"}`}
        alt='projectImg'
      />
    )
  })

  const btnTabs = data.images.map((item, index) => {
    return (
      <button
        key={item.img}
        className={`popup__tab ${item.status && "popup__tab--active"}`}
        onClick={() => handleTab(index, data.images)}
      ></button>
    )
  })

  const links = data.technologies.map((item) => {
    return (
      <a
        href={item.link}
        key={item.name}
        className='popup__link'
        target='_blank'
        rel='noopener noreferrer'
      >
        {item.name}
      </a>
    )
  })

  return (
    <div className={`popup ${data.images.length && "popup--active"}`}>
      <div className='popup__imgs'>
        {images}
        <button
          className='popup__move-btn popup__left'
          onClick={() => handleMove(true, data.images)}
        >
          <BsChevronLeft />
        </button>
        <button
          className='popup__move-btn popup__right'
          onClick={() => handleMove(false, data.images)}
        >
          <BsChevronRight />
        </button>
        <div className='popup__tabs'>{btnTabs}</div>
      </div>
      <div className='popup__info'>
        <h4 className='popup__title'>{data.title}</h4>
        <div className='popup__title-simple'>Technologies</div>
        <div className='popup__tech-links'>{links}</div>
        <div className='popup__links project__links'>
          <a
            className='project__github'
            href={data.github}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiGithub />
          </a>
          <a
            className='project__demo'
            href={data.demo}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='project__body-arrow'></span>
            <span className='project__tip-arrow'></span>
            <span className='project__link'>{data.demo}</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Popup
