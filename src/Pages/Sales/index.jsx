// import React from 'react'
import {Typography, Menu} from "antd";
import { useNavigate } from "react-router-dom";
import {LaptopOutlined, TeamOutlined } from '@ant-design/icons';

function Sales() {
  const navigate = useNavigate()
  return (
    <div>
     <Typography.Title level={4}>Sales/Marketing</Typography.Title>
     <Typography.Text></Typography.Text>

     <Menu 
    onClick={(item)=>{
     navigate(item.key);
   }}
   
       items ={[
         
         {
           label: "Online",
           key: '/Online',
           icon: <LaptopOutlined />
          },
          {
           label: "Dealership",
           key: '/Dealership',
           icon: <TeamOutlined />
          },
       ]}
       >
    </Menu>
    </div>

  )
}

export default Sales
