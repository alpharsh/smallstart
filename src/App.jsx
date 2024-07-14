import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Services from './components/Services'
import BuildDigital from './components/BuildDigital'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <BuildDigital />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
