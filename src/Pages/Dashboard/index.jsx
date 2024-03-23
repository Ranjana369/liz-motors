// import React from "react";
import { Typography, Space, Card, Statistic } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function Dashboard() {
  return (
    <div>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard />
      </Space>
      <DashboardChart/>
    </div>
  );
}
function DashboardCard({title}) {
  return (
    <Card>
      <Space direction="horizontal">
        
        <h1>Customers Review</h1>
     
        
      </Space>
    </Card>
  );
}

function DashboardChart (){
  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right' ,
      },
      title: {
        display: true,
        text: 'Customers Review',
      },
    },
  };
  
  const labels = ['Positive', 'Negative', 'Comments'];
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Data',
        data: [3000,450,3450],
        borderColor: '#6495ed',
        backgroundColor: '#6495ed',
      },
      
    ],
  };
  
  return (
    <Card style={{width:600, height:600} }>

      <Bar options={options} data={data} />
    </Card>
  )

}

export default Dashboard;
