import React from "react"
import "./App.scss"
import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contacts from "./pages/Contacts"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Route exact path='/' component={Hero} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contacts' component={Contacts} />
      </div>
    </Router>
  )
}

export default App
