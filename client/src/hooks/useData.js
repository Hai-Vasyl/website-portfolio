import React, { useState } from "react"
import project11 from "../project-imgs/project1.1.png"
import project12 from "../project-imgs/project1.2.png"
import project13 from "../project-imgs/project1.3.png"
import project14 from "../project-imgs/project1.4.png"
import project21 from "../project-imgs/project2.1.png"
import project22 from "../project-imgs/project2.2.png"
import project23 from "../project-imgs/project2.3.png"
import project31 from "../project-imgs/project3.1.png"
import project32 from "../project-imgs/project3.2.png"
import project33 from "../project-imgs/project3.3.png"
import { IoIosRocket } from "react-icons/io"
import { FaBuysellads } from "react-icons/fa"

function useData() {
  const [skills, setSkills] = useState({
    frontend: [
      "HTML/HTML5",
      "CSS/CSS3 (Flexbox, Grid)",
      "SASS/SCSS",
      "BEM methodology",
      "Adaptive/Responsive, cross-browser layout",
      "JavaScript (es6, es7, es8)",
      "React (Hooks, Context API)",
      "Redux (Thunk)",
      "Apollo Client",
    ],
    backend: [
      "REST API",
      "GraphQL",
      "Apollo Server",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Webpack, Babel",
    ],
    other: [
      "Yarn, npm",
      "GIT, GitHub",
      "AWS, Heroku",
      "English (Intermediate+)",
    ],
  })

  const [projects, setProjects] = useState([
    {
      images: [
        { img: project11, status: true },
        { img: project12, status: false },
        { img: project13, status: false },
        { img: project14, status: false },
      ],
      github: "https://github.com/Hai-Vasyl/school-website",
      demo: "https://school-app-cms.herokuapp.com/",
      title: (
        <>
          <span className='btn__name'>School Website</span>
        </>
      ),
      technologies: [
        {
          name: "HTML/HTML5",
          link:
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML",
        },
        {
          name: "CSS/CSS3",
          link:
            "https://developer.mozilla.org/uk/docs/Learn/Getting_started_with_the_web/CSS_basics",
        },
        { name: "SASS/SCSS", link: "https://sass-scss.ru" },
        { name: "BEM methodology", link: "https://en.bem.info/methodology/" },

        {
          name: "JavaScript",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        { name: "React (Hooks)", link: "https://reactjs.org" },
        {
          name: "React router",
          link: "https://reactrouter.com/web/guides/quick-start",
        },
        { name: "Axios", link: "https://github.com/axios/axios" },
        { name: "Redux (Thunk)", link: "https://redux.js.org" },
        { name: "REST API", link: "https://restfulapi.net" },
        { name: "Express.js", link: "https://expressjs.com" },
        { name: "Node.js", link: "https://nodejs.org/en" },
        { name: "Mongoose", link: "https://mongoosejs.com" },
        { name: "MongoDB", link: "https://www.mongodb.com" },
        { name: "Multer", link: "https://www.npmjs.com/package/multer" },
        { name: "JSON Web Token", link: "https://jwt.io" },
        { name: "Bcrypt", link: "https://www.npmjs.com/package/bcrypt" },
        {
          name: "Express-validator",
          link: "https://express-validator.github.io/docs",
        },
        { name: "Dotenv", link: "https://www.npmjs.com/package/dotenv" },

        { name: "Nodemon", link: "https://nodemon.io" },
        {
          name: "Concurrently",
          link: "https://www.npmjs.com/package/concurrently",
        },
        {
          name: "Body-parser",
          link: "https://www.npmjs.com/package/body-parser",
        },
      ],
      status: false,
    },
    {
      images: [
        { img: project21, status: true },
        { img: project22, status: false },
        { img: project23, status: false },
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
          name: "HTML/HTML5",
          link:
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML",
        },
        {
          name: "CSS/CSS3",
          link:
            "https://developer.mozilla.org/uk/docs/Learn/Getting_started_with_the_web/CSS_basics",
        },
        { name: "SASS/SCSS", link: "https://sass-scss.ru" },
        { name: "BEM methodology", link: "https://en.bem.info/methodology/" },
        {
          name: "JavaScript",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        { name: "React (Hooks)", link: "https://reactjs.org" },
        {
          name: "React router",
          link: "https://reactrouter.com/web/guides/quick-start",
        },
        { name: "Axios", link: "https://github.com/axios/axios" },
        { name: "Redux (Thunk)", link: "https://redux.js.org" },
        { name: "REST API", link: "https://restfulapi.net" },
        { name: "Express.js", link: "https://expressjs.com" },
        { name: "Node.js", link: "https://nodejs.org/en" },
        { name: "Mongoose", link: "https://mongoosejs.com" },
        { name: "MongoDB", link: "https://www.mongodb.com" },
        { name: "Multer", link: "https://www.npmjs.com/package/multer" },
        { name: "JSON Web Token", link: "https://jwt.io" },
        { name: "Bcrypt", link: "https://www.npmjs.com/package/bcrypt" },
        {
          name: "Express-validator",
          link: "https://express-validator.github.io/docs",
        },
        { name: "Dotenv", link: "https://www.npmjs.com/package/dotenv" },

        { name: "Nodemon", link: "https://nodemon.io" },
        {
          name: "Concurrently",
          link: "https://www.npmjs.com/package/concurrently",
        },
        {
          name: "Body-parser",
          link: "https://www.npmjs.com/package/body-parser",
        },
      ],
      status: false,
    },
    {
      images: [
        { img: project31, status: true },
        { img: project32, status: false },
        { img: project33, status: false },
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
          name: "HTML/HTML5",
          link:
            "https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML",
        },
        {
          name: "CSS/CSS3",
          link:
            "https://developer.mozilla.org/uk/docs/Learn/Getting_started_with_the_web/CSS_basics",
        },
        {
          name: "Responsive layout",
          link:
            "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
        },
        {
          name: "JavaScript",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        { name: "React (Hooks, Context API)", link: "https://reactjs.org" },
        {
          name: "React router",
          link: "https://reactrouter.com/web/guides/quick-start",
        },
        { name: "Axios", link: "https://github.com/axios/axios" },
        { name: "REST API", link: "https://restfulapi.net" },
        { name: "Express.js", link: "https://expressjs.com" },
        { name: "Node.js", link: "https://nodejs.org/en" },
        { name: "Mongoose", link: "https://mongoosejs.com" },
        { name: "MongoDB", link: "https://www.mongodb.com" },
        { name: "JSON Web Token", link: "https://jwt.io" },
        { name: "Bcrypt", link: "https://www.npmjs.com/package/bcrypt" },
        {
          name: "Express-validator",
          link: "https://express-validator.github.io/docs",
        },
        { name: "Config", link: "https://www.npmjs.com/package/config" },

        { name: "Nodemon", link: "https://nodemon.io" },
        {
          name: "Concurrently",
          link: "https://www.npmjs.com/package/concurrently",
        },
      ],
      status: false,
    },
  ])
  return { projects, setProjects, skills, setSkills }
}

export default useData
