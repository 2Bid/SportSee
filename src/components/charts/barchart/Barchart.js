import React ,{ useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom'

import { BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Bar} from 'recharts'
import { useLoadActivityData } from '../../../hooks/loadActivityData'

import "./../charts.css"

function CustomTooltip({ payload, active }) {
	if (active && payload && payload.length) {
		return (
			<div className="mainchart--tooltip">
				<p>{`${payload[0].value}`}kg</p>
				<p>{`${payload[1].value}`}Kcal</p>
			</div>
		);
	} else {
		return null;
	}
}

export default function Barchart() {
    const {id} = useParams()
    const activityData = useLoadActivityData(id)

    const sessionsData = activityData.data.sessions

    const [sessionDateTransform, setSessionDateTransform] = useState([])

     useEffect(()=>{
          if(sessionsData){
               const sessionMap =sessionsData.map((item)=>{
                   item.day = item.day.substr(-1)
                   return item
               })
               setSessionDateTransform(sessionMap)
          }

     },[sessionsData])
        
    return (
      <div className="mainchart">
          <div className='mainchart-legend'>
               <h2>Activité quotidienne</h2>
               <div className='legend-info'>
                    <span className='legend-poids'>Poids (kg)</span>
                    <span className='legend-cal'>Calories brûlées ( kCal )</span>
               </div>
          </div>
          <ResponsiveContainer width="100%" height="90%" >
               <BarChart 
                    data={sessionDateTransform} 
                    margin={{top:10,bottom:10}}
                    barGap={10}>
                    {/* <CartesianGrid strokeDasharray="2" vertical={false} /> */}
                    <XAxis dataKey="day"  dy={13} tickLine={false}/>
                    <YAxis 
                         orientation='right' 
                         dataKey="kilogram" 
                         yAxisId="kg" 
                         domain={["dataMin - 1", "dataMax + 2"]}
                         dx={30} 
                         interval={1}
                         tickLine={false}
                         axisLine={false}/>
                    <YAxis dataKey="calories" domain={[0, "dataMax + 50"]} hide={true} yAxisId="cal" />
                    <Tooltip content={<CustomTooltip/>} />
                    <Bar dataKey="kilogram" yAxisId="kg" fill="#282D30" barSize={10} radius={[50,50,0,0]}/>
                    <Bar dataKey="calories" yAxisId="cal" fill="#E60000" barSize={10} radius={[50,50,0,0]}/>
               </BarChart>
          </ResponsiveContainer>
      </div>
     )
}

CustomTooltip.propTypes = {
     payload : PropTypes.array,
     active : PropTypes.bool
}