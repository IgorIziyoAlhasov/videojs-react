import React from 'react'
import { ApplicationNav } from './components'
import './main.scss'

const App = () => {
  return (
    <section className='Video-App'>
      <ApplicationNav />

      <div className='player-container'></div>
    </section>
  )
}

export default App