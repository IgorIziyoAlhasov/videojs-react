import React from 'react'
import { NavLink } from 'react-router-dom'

const ApplicationNav = () => {
  return (
    <header className='app-header'>
      <nav className='app-navigation'>
        <NavLink to="/" className={({ isActive }) => isActive ? 'menu-item-active' : ''}>Home</NavLink>
        <NavLink to="/basic" className={({ isActive }) => isActive ? 'menu-item-active' : ''}>Basic</NavLink>
        <NavLink to="/custom" className={({ isActive }) => isActive ? 'menu-item-active' : ''}>Custom</NavLink>
        <NavLink to="/playlist" className={({ isActive }) => isActive ? 'menu-item-active' : ''}>Playlist</NavLink>
        <NavLink to="/redesign" className={({ isActive }) => isActive ? 'menu-item-active' : ''}>Redesigned</NavLink>
      </nav>
    </header>
  )
}

export default ApplicationNav