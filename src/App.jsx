import React from 'react'
import './App.css'

// Layout Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Section Components
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
