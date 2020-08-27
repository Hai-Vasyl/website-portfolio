import React, { useState } from "react"
import project11 from "../project-imgs/project1.1.png"
import project12 from "../project-imgs/project1.2.png"
import project13 from "../project-imgs/project1.3.png"
import project21 from "../project-imgs/project2.1.png"
import project22 from "../project-imgs/project2.2.png"
import project23 from "../project-imgs/project2.3.png"
import { FiGithub } from "react-icons/fi"
import { IoIosRocket } from "react-icons/io"
import { FaBuysellads } from "react-icons/fa"
import Popup from "../components/Popup"

function ProjectsSection() {
  const [projects, setProjects] = useState([
    {
      images: [
        { img: project11, status: true },
        { img: project12, status: false },
        { img: project13, status: false },
      ],
      github: "https://github.com/Hai-Vasyl/ad-stack",
      demo: "https://ad-stack.herokuapp.com",
      title: (
        <span className='logo'>
          <FaBuysellads className='logo__icon' />
          <span className='logo__name'>AD-Stack</span>
        </span>
      ),
      technologies: [
        {
          name: "HTML",
          link:
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML",
        },
        {
          name: "CSS",
          link:
            "https://developer.mozilla.org/uk/docs/Learn/Getting_started_with_the_web/CSS_basics",
        },
        { name: "Sass", link: "https://sass-scss.ru" },
        { name: "BEM", link: "https://en.bem.info/methodology/" },
        {
          name: "JavaScript",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        { name: "React", link: "https://reactjs.org" },
        { name: "Redux", link: "https://redux.js.org" },
        { name: "Node.js (Express.js)", link: "https://expressjs.com" },
        { name: "MongoDB", link: "https://www.mongodb.com" },
      ],
      status: false,
    },
    {
      images: [
        { img: project21, status: true },
        { img: project22, status: false },
        { img: project23, status: false },
      ],
      github: "https://github.com/Hai-Vasyl/rocket-delivery",
      demo: "https://rocket-delivary.herokuapp.com",
      title: (
        <span className='logo'>
          <IoIosRocket className='logo__icon' />
          <span className='logo__name'>Rocket-Delivery</span>
        </span>
      ),
      technologies: [
        {
          name: "HTML",
          link:
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML",
        },
        {
          name: "CSS",
          link:
            "https://developer.mozilla.org/uk/docs/Learn/Getting_started_with_the_web/CSS_basics",
        },
        { name: "Sass", link: "https://sass-scss.ru" },
        { name: "BEM", link: "https://en.bem.info/methodology/" },
        {
          name: "JavaScript",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        { name: "React", link: "https://reactjs.org" },
        { name: "Redux", link: "https://redux.js.org" },
        { name: "Node.js (Express.js)", link: "https://expressjs.com" },
        { name: "MongoDB", link: "https://www.mongodb.com" },
      ],
      status: false,
    },
    {
      images: [
        { img: project11, status: true },
        { img: project12, status: false },
        { img: project13, status: false },
      ],
      github: "https://github.com/Hai-Vasyl/some-ither",
      demo: "https://ad-stack.herokuapp.com",
      title: (
        <span className='logo'>
          <FaBuysellads className='logo__icon' />
          <span className='logo__name'>AD-Stack</span>
        </span>
      ),
      technologies: [
        {
          name: "HTML",
          link:
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML",
        },
        {
          name: "CSS",
          link:
            "https://developer.mozilla.org/uk/docs/Learn/Getting_started_with_the_web/CSS_basics",
        },
        { name: "Sass", link: "https://sass-scss.ru" },
        { name: "BEM", link: "https://en.bem.info/methodology/" },
        {
          name: "JavaScript",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        { name: "React", link: "https://reactjs.org" },
        { name: "Redux", link: "https://redux.js.org" },
        { name: "Node.js (Express.js)", link: "https://expressjs.com" },
        { name: "MongoDB", link: "https://www.mongodb.com" },
      ],
      status: false,
    },
  ])

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
  }

  const cards = projects.map((item, index) => {
    return (
      <div
        key={item.github}
        className={`project ${item.status && "project--active"}`}
      >
        <button className='project__btn' onClick={() => handleSetStatus(index)}>
          <img
            className='project__img'
            src={item.images[0].img}
            alt='projectImg'
          />
          <span className='project__name'>{item.title}</span>
        </button>
        <div className='project__links'>
          <a
            className='project__github'
            href={item.github}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiGithub />
          </a>
          <a
            className='project__demo'
            href={item.demo}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='project__body-arrow'></span>
            <span className='project__tip-arrow'></span>
            <span className='project__link'>{item.demo}</span>
          </a>
        </div>
      </div>
    )
  })

  const activeCard = getActiveCard()

  return (
    <div className='wrapper'>
      <h2 className='title'>My latest projects</h2>

      <Popup
        data={activeCard}
        handleMove={handleMove}
        handleTab={handleTab}
        handleMoveCard={handleMoveCard}
      />
      <div
        className={`background ${
          activeCard.images.length && "background--active"
        }`}
        onClick={handleResetCards}
      ></div>

      <div className='projects'>{cards}</div>
    </div>
  )
}

export default ProjectsSection
