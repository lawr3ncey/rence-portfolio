import React from 'react';
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Resume from "./components/resume"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
