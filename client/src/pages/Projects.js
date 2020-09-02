import React, { useContext } from "react"
import { FaGithub } from "react-icons/fa"
import { BsLayoutTextSidebarReverse } from "react-icons/bs"
import Popup from "../components/Popup"
import { Context } from "../context/context"
import { TOGGLE_POPUP_MENU } from "../context/menu/menuTypes"
import useData from "../hooks/useData"

function Projects() {
  const {
    menu: { popup },
    dispatchMenu,
  } = useContext(Context)

  const { projects, setProjects } = useData()

  const mapStatusReducer = (array, index) => {
    return array.map((item, itemIndex) => {
      if (itemIndex === index) {
        item.status = true
      } else {
        item.status = false
      }
      return item
    })
  }

  const handleSetStatus = (index) => {
    setProjects(mapStatusReducer(projects, index))
    dispatchMenu({ type: TOGGLE_POPUP_MENU })
  }

  const handleMove = (isLeft, images) => {
    for (let i = 0; i < images.length; i++) {
      if (images[i].status) {
        images[i].status = false

        const index = isLeft ? i - 1 : i + 1

        if (index === -1) {
          images[images.length - 1].status = true
        } else if (index === images.length) {
          images[0].status = true
        } else {
          images[index].status = true
        }
        break
      }
    }

    setProjects(
      projects.map((item) => {
        if (item.status) {
          item.images = images
        }
        return item
      })
    )
  }

  const handleMoveCard = (isLeft) => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].status) {
        const index = isLeft ? i - 1 : i + 1

        if (index === -1 || index === projects.length) {
          break
        } else {
          projects[i].status = false
          projects[index].status = true
          break
        }
      }
    }

    setProjects([...projects])
  }

  const handleTab = (index, images) => {
    setProjects(
      projects.map((item) => {
        if (item.status) {
          item.images = mapStatusReducer(images, index)
        }
        return item
      })
    )
  }

  const getActiveCard = () => {
    let dataProject = {
      images: [],
      github: "",
      demo: "",
      title: "",
      technologies: [],
      status: false,
      disabledMove: { left: false, right: false },
    }

    projects.forEach((item, index) => {
      if (item.status) {
        if (index === 0) {
          dataProject = { ...item, disabledMove: { left: true, right: false } }
        } else if (index === projects.length - 1) {
          dataProject = { ...item, disabledMove: { left: false, right: true } }
        } else {
          dataProject = { ...dataProject, ...item }
        }
      }
    })

    return dataProject
  }

  const handleResetCards = () => {
    setProjects(
      projects.map((item) => {
        item.status = false
        return item
      })
    )
    dispatchMenu({ type: TOGGLE_POPUP_MENU })
  }

  const cards = projects.map((item, index) => {
    return (
      <button
        key={item.github}
        className='project'
        onClick={() => handleSetStatus(index)}
      >
        <div className='project__links'>
          <a
            className='project__link'
            href={item.github}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className='project__link-icon' />
          </a>
          <a
            className='project__btn-link btn'
            href={item.demo}
            target='_blank'
            rel='noopener noreferrer'
          >
            {item.title}
          </a>
        </div>
        <div className='project__bg-hover'>
          <BsLayoutTextSidebarReverse className='project__more-icon' />
          <span className='project__more-text'>More</span>
        </div>
      </button>
    )
  })

  const activeCard = getActiveCard()

  return (
    <div className='wrapper'>
      <h2 className='title'>My latest projects</h2>

      <Popup
        data={activeCard}
        popup={popup}
        handleMove={handleMove}
        handleTab={handleTab}
        handleMoveCard={handleMoveCard}
        handleResetCards={handleResetCards}
      />

      <div className='projects'>{cards}</div>
    </div>
  )
}

export default Projects
