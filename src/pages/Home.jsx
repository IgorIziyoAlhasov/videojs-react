import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.scss'

const Home = () => {
  return (
    <section className='page-content'>
      <h1 className='section-title'>Video.js with React</h1>
      <p className='section-content'>Video.js is a powerfull opensource tools for media playback on your web-page. I'll try to show several implementations of this great tool on this site.</p>

      <p className='section-content'>Here what seemed to be interesting to implement. Ordered from simple to interesting</p>
      <ul className='implementation-list'>
        <li><Link
          to="/basic"
          rel="noopener noreferrer"
          className=""
        >
          Basic implementation
        </Link></li>

        <li><Link
          to="/redesign"
          rel="noopener noreferrer"
          className=""
        >
          Custom styled player
        </Link></li>

        <li><Link
          to="/custom"
          rel="noopener noreferrer"
          className=""
        >
          Player with playlist
        </Link></li>

        <li><Link
          to="/custom"
          rel="noopener noreferrer"
          className=""
        >
          Custom controls
        </Link></li>
      </ul>
    </section>
  )
}

export default Home