import React from 'react';
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Resume from "./components/resume"
import Projects from "./components/projects"
import Certifications from "./components/certifications"
import Contact from "./components/contact"
import Footer from "./components/footer"

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Resume />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
