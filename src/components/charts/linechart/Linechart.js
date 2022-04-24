import React from 'react'
import { LineChart, Line } from 'recharts';
const data = [
     {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
     {name: 'Page B', uv: 300, pv: 2100, amt: 2500},
     {name: 'Page C', uv: 400, pv: 2600, amt: 2000}
];

export default function Linechart() {
  return (
     <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
     </LineChart>
  )
}
