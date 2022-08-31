import React from 'react'
import PropTypes from 'prop-types';

import "./card.css"

/**
 * Component who display informations about nutrients burns
 * @param {{
 *   value : number,
 *   title : string,
 *   prefixe : string,
 *   icon : string,
 *   background : string
 * }} props 
 * @returns {React.Component}
 */
export default function Card(props) {
  return (
    <div className='card'>
         <div className="card-icon" style={{backgroundColor:props.background}}>
              <img src={props.icon} alt="icone"/>
         </div>
          <div className="card-info">
               <b>{props.value}{props.prefixe}</b>
               <p>{props.title}</p>
          </div>
    </div>
  )
}

Card.propTypes = {
     value : PropTypes.number.isRequired,
     title : PropTypes.string.isRequired,
     prefixe : PropTypes.string.isRequired,
     icon : PropTypes.string.isRequired,
     background : PropTypes.string.isRequired
};