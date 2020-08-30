import React from "react"
import { FaGithub } from "react-icons/fa"
import {
  BsChevronLeft,
  BsChevronRight,
  BsArrowLeft,
  BsArrowRight,
  BsX,
} from "react-icons/bs"

function Popup({
  data,
  popup,
  handleMove,
  handleTab,
  handleMoveCard,
  handleResetCards,
}) {
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
    <div className={`popup ${popup && "popup--active"}`}>
      <div className='popup__container'>
        <button
          className={`popup__move-card-btn popup__left-card ${
            !data.disabledMove.left && "popup__move-card-btn--active"
          }`}
          onClick={() => handleMoveCard(true)}
        >
          <BsArrowLeft />
        </button>
        <button
          className={`popup__move-card-btn popup__right-card ${
            !data.disabledMove.right && "popup__move-card-btn--active"
          }`}
          onClick={() => handleMoveCard(false)}
        >
          <BsArrowRight />
        </button>
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
          <button className='popup__btn-close'>
            <BsX className='popup__close-icon' onClick={handleResetCards} />
          </button>
          <h4 className='popup__title'>{data.title}</h4>
          <div className='popup__title-simple'>Technologies</div>
          <div className='popup__tech-links'>{links}</div>
          <div className='popup__links project__links'>
            <a
              className='project__link'
              href={data.github}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub className='project__link-icon' />
            </a>
            <a
              className='project__btn-link btn btn-primary'
              href={data.demo}
              target='_blank'
              rel='noopener noreferrer'
            >
              {data.title}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup
