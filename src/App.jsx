import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Contacts from './Components/Contacts'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Analytics/>
      <Home />
      <Experience />
      <Projects />
      <Contacts />
      <Footer/>

    </div>
  )
}

export default App
