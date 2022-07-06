import React  from 'react'
import PropTypes from 'prop-types';

import { useLoadMainData } from '../../../hooks/loadMainData'
import { useParams } from 'react-router-dom'
import { PieChart, Pie, Label, Cell, ResponsiveContainer } from "recharts";


/**
 * Composant utilisé pour générer le text custom du composant circle
 * @param {*} param0 
 * @returns {React.Component}
 */
const CustomLabel = ({ viewBox, currentScore = 0 }) => {
  const { cx, cy } = viewBox;
  return (
      <>
      <text x={cx - 20} y={cy - 5}>
        <tspan
          style={{
            fontWeight: 700,
            fontSize: "1.5em"
          }}
        >
          {currentScore}%
        </tspan>
      </text>
      <text x={cx - 45} y={cy + 15}>
        <tspan
          style={{
            fontSize: "0.8em",
            fill: "grey"
          }}
        >
          de votre objectif
        </tspan>
      </text>
      </>
  );
};

/**
 * Composant graphique utilisé pour réprésenté le pourcentage du score journalier sous forme de cercle
 * @returns {React.Component}
 */
function Circlechart() {
     let {id} = useParams()
     const perfData = useLoadMainData(id)
     const score = perfData.data.score || perfData.data.todayScore
     const percentScoreData = score* 100

     const data = [
          { name: "score", value: percentScoreData,color:"#ff0000" },
          { name: "score-ideal", value: 100 - percentScoreData, color: "transparent" }
     ];

  return (
     <>
     {
          !perfData.loading &&
          !perfData.error 
          ?
          <div className="circlechart chart-box">
          <h3 className='circlechart-title'>Score</h3>
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={730} height={250}>
        <Pie
          data={[{name:"grey",value:100}]}
          dataKey="value"
          outerRadius={70}
          fill="#fff"
          />
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
		  endAngle={450}
            stroke="#0000ff"
            fill="#0000ff"
            className="pie-chart"
          >
          {
               data.map((entry, index) => (
               <Cell key={`cell-${index}`} fill={entry.color} stroke={0} cornerRadius="50%" />
               ))
          }
            <Label
              content={<CustomLabel currentScore={percentScoreData} />}
              position="center"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </div>
      :
      <></>
     }
     </>
  );
}

CustomLabel.propTypes = {
     viewBox : PropTypes.object,
     currentScore : PropTypes.number
}

export default Circlechart;