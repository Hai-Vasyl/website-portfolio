import React, { useContext, useEffect, useState } from "react"
import "./App.scss"
import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contacts from "./pages/Contacts"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Context } from "./context/context"
import { RESET_MENU } from "./context/menu/menuTypes"
import Preloader from "./components/Preloader"

function App() {
  const {
    menu: { drop, popup },
    dispatchMenu,
  } = useContext(Context)
  const [load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 1000)
  }, [])

  return (
    <Router>
      <div>
        <Navbar />
        <div
          className={`background ${(drop || popup) && "background--active"}`}
          onClick={() => dispatchMenu({ type: RESET_MENU })}
        ></div>

        <div className={`preloader ${!load && "preloader--disabled"}`}>
          <Preloader />
        </div>

        {!load && (
          <>
            <Route exact path='/' component={Hero} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contacts' component={Contacts} />
          </>
        )}
      </div>
    </Router>
  )
}

export default App
