import React from "react";
import { Typography } from "antd";
// import {Card} from "antd/es/card";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Card from "antd/es/card/Card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Planning() {
  return (
    <div>
      <Typography.Title level={4}>Planning</Typography.Title>
      <Typography.Text></Typography.Text>
      <PlanningChart/>
      
    </div>
  );
}
function PlanningChart (){
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position:  "bottom",
      },
      title: {
        display: true,
        text: 'Planning Chart',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',' September', 'October', 'November','December'];
 const data = {

    labels,
    datasets: [
      {
        label: 'PRD',
        data: labels.map(() => Math.random()*1000 ),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Spcs',
        data: labels.map(() =>Math.random()*1000 ),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return( 
  <Card style = {{width:800, height:800}}>

    <Line options={options} data={data} />
  </Card>
  )
}

export default Planning;
