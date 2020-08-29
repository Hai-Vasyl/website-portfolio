import React, { useState } from "react"
import project11 from "../project-imgs/project1.1.png"
import project12 from "../project-imgs/project1.2.png"
import project13 from "../project-imgs/project1.3.png"
import project21 from "../project-imgs/project2.1.png"
import project22 from "../project-imgs/project2.2.png"
import project23 from "../project-imgs/project2.3.png"
import { IoIosRocket } from "react-icons/io"
import { FaBuysellads, FaGithub } from "react-icons/fa"
import { BsLayoutTextSidebarReverse } from "react-icons/bs"
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
        <>
          <FaBuysellads className='btn__icon' />
          <span className='btn__name'>AD-Stack</span>
        </>
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
        <>
          <IoIosRocket className='btn__icon' />
          <span className='btn__name'>Rocket-Delivery</span>
        </>
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
        <>
          <FaBuysellads className='btn__icon' />
          <span className='btn__name'>AD-Stack</span>
        </>
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
        handleMove={handleMove}
        handleTab={handleTab}
        handleMoveCard={handleMoveCard}
        handleResetCards={handleResetCards}
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
