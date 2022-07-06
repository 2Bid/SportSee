import React from 'react'
import { Link } from 'react-router-dom'

import "./p404.css"

/**
 * Composant générant la page 404
 * @returns {React.Component}
 */
export default function P404() {
  return (
    <div className='P404-container'>
          <div>Oups.. <br/> Erreur 404 : l'url n'existe pas</div>
          <Link to="/">Retourner a la page d'accueil</Link>
    </div>
  )
}
