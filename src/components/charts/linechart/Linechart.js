import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { LineChart, Line, ResponsiveContainer, XAxis,YAxis, Tooltip } from 'recharts';
import { useLoadSessionData } from '../../../hooks/loadSessionData';

import './../charts.css'

/**
 * Composant utilisé pour générer le text custom du composant linechart
 * @param {*} param0 
 * @returns {React.Component}
 */
function CustomTooltip({ payload, active }) {
	if (active && payload && payload.length) {
		return (
			<div className="linechart--tooltip">
				<p>{`${payload[0].value}`} min</p>
			</div>
		);
	} else {
		return null;
	}
}

/**
 * Graphic component used to display average length of sessions of the day
 * @returns {React.Component}
 */
export default function Linechart() {
     const {id} = useParams()
     const sessionData = useLoadSessionData(id)
     const listSessionData = sessionData.data.sessions

     const [dayTransform, setDayTransform] = useState([])

     const arrayDay = ["L", "M", "M", "J", "V", "S", "D"];

     useEffect(()=>{
          if(listSessionData){
               const sessionMap =listSessionData.map((item)=>{
                   item.day = arrayDay[item.day-1]
                   return item
               })
               setDayTransform(sessionMap)
          }

     },[listSessionData])
     
  return (
     <>
     {
          !sessionData.loading &&
          !sessionData.error
          ?
          <div className='linechart chart-box'>
               <h3 className='linechart-title'>Durée moyenne des sessions</h3>
               <ResponsiveContainer 
                    width="100%" 
                    height="100%">
                    <LineChart 
                         data={dayTransform}
                         outerRadius="75%"
					margin={{bottom: 15}}>
                         <XAxis  dataKey="day"  tickLine={false} dy={13} axisLine={false} padding={{left:6}}
                         //padding={{left:10,right:10}}
                         />
                         <YAxis dataKey="sessionLength" domain={[0, "dataMax + 60"]} hide={true} axisLine={false} tickLine={false}  />
                         <Line 
                              activeDot={{
                                   stroke: "rgba(255,255,255, 0.6)",
                                   strokeWidth: 2,
                                   r: 5,
                              }}
                              type="natural" 
                              dataKey="sessionLength" 
                              stroke="rgba(255, 255, 255, 0.6)"
                              strokeWidth={1.5}
                              dot={false}
                         />
                         <Tooltip content={<CustomTooltip/>} cursor={false}/>
                    </LineChart>
               </ResponsiveContainer>
          </div>
          :
          <></>
     }
     </>
  )
}

CustomTooltip.propTypes = {
     payload : PropTypes.array,
     active : PropTypes.bool
}