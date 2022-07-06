import React from 'react'
import { Link } from 'react-router-dom'

import logo from "../../images/logo.svg"
import './log.css'

/**
 * Composant générant la page Login
 * @returns {React.Component}
 */
export default function Log() {
  return (
    <div className='log-container'>
         <div className='logo-container'>
              <img src={logo} alt='logo sportsee'/>
         </div>
         <div className='btn-container'>
              <h4 className='log-title'>Choisissez un profil</h4>
               <Link className='log-btn' to="/profil/12">Karl</Link>
               <Link className='log-btn' to="/profil/18">Cecilia</Link>
         </div>
    </div>
  )
}
