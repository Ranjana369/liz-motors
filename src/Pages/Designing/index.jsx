// import React from 'react'
import {Typography} from "antd";
import Card from "antd/es/card/Card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {Pie} from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

function Designing() {
  return (
    <div>
     <Typography.Title level={4}>Designing</Typography.Title>
     <DesigningChart/>
    
    </div>
  )
}

function DesigningChart() {
  const data = {
    labels: ['Cast Iron Steel','Data Analytics', 'Consumer Applications', 'Connected cars', 'Electrifying Transpotation'],
    datasets: [
      {
        label: 'Hardware And Software',
        data: [55, 25, 25, 25,25],
        backgroundColor: [
          '#ffa500',
          '#dc143c',
          '#ff00ff',
          'darkblue',
          '#6b8e23',
          
        ],
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
        // borderWidth: 1,
      },
    ],
  };
  
  return (
    <Card style = {{width:600, height:600}}> 

      <Pie data={data} />
    </Card>
  )
}
export default Designing
