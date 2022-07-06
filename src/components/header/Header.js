import React from 'react'
import { Link } from 'react-router-dom'

import logo from "../../images/logo.svg"
import "./header.css"

export default function Header() {
  return (
    <header className='header'>
      <div className='logo-container'>
        <img src={logo}  alt="SportSee Logo"/>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/">Profil</Link></li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  )
}
