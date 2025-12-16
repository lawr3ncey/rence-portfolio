import React from 'react';
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Aboutme from "./components/aboutme"
import Resume from "./components/resume"
import Projects from "./components/projects"
import Contact from "./components/contact"

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <Aboutme />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}

export default App
