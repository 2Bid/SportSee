import React from 'react'
import PropTypes from 'prop-types';

import "./navbar.css"

/* Import SVG */
import zenSvg from "../../images/zen.svg"
import swimSvg from "../../images/swim.svg"
import bikeSvg from "../../images/bike.svg"
import workoutSvg from "../../images/workout.svg"

/**
 * Navbar component
 * @returns {React.Component}
 */
export default function Navbar() {
  return (
    <aside className='navbar'>
        <div className='aside-item-container'>
          <div className='aside-item'>
            <img src={zenSvg} alt='aside-logo'/>
          </div>
          <div className='aside-item'>
            <img src={swimSvg} alt='aside-logo'/>
          </div>
          <div className='aside-item'>
            <img src={bikeSvg} alt='aside-logo'/>
          </div>
          <div className='aside-item'>
            <img src={workoutSvg} alt='aside-logo'/>
          </div>
        </div>
        <div className='copyright-container'>
          <p className='copyright'>Copiryght, SportSee 2020</p>
        </div>
    </aside>
  )
}

Navbar.prototype = {
  zenSvg : PropTypes.string.isRequired,
  swimSvg : PropTypes.string.isRequired,
  bikeSvg : PropTypes.string.isRequired,
  workoutSvg : PropTypes.string.isRequired
}