import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useLoadPerfData } from '../../../hooks/loadPerfData'
import { RadarChart, PolarGrid,PolarAngleAxis,Radar, ResponsiveContainer } from 'recharts';

/**
 * Composant graphique permettant d'affiché les score associé a différents domaine sous forme de radarChart
 * @returns {React.Component}
 */
export default function Hexachart() {
  let {id} = useParams()
  const perfData = useLoadPerfData(id)

  const [perfDataTransform, setPerfDataTransform] = useState([])

  useEffect(()=>{
  if(perfData.data.data){

    const objectKind = {
      "1": "cardio",
      "2": "energy",
      "3": "endurance",
      "4": "strength",
      "5": "speed",
      "6": "intensity"
    };

    const dataTransform = perfData.data.data.map((item)=>{
      return {
        value : item.value,
        kind : objectKind[item.kind]
      }
    })

    setPerfDataTransform(dataTransform)
  }
  },[perfData.data])
  
  return (
    <>
    {
         perfDataTransform.length > 0 ?
          <div className='hexachart chart-box'>
               <ResponsiveContainer width="100%" height="100%">
               <RadarChart 
                    outerRadius={70}
                    width={0} height={0}
                    data={perfDataTransform}>
                    <PolarGrid radialLines={false}/>
                    <PolarAngleAxis dataKey="kind" color='white' tickSize={10} tick={{fontSize: 12}}/>
                    <Radar name="Mike" dataKey="value" fill="red" fillOpacity={0.6} />
               </RadarChart>
               </ResponsiveContainer>
          </div>
          :
          <></>
    }
    </>
  )
}
