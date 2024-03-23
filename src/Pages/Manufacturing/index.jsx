// import React from 'react'
import {Typography, Menu} from "antd";
import { useNavigate } from 'react-router-dom';
import {DeploymentUnitOutlined, BankOutlined} from '@ant-design/icons';



function Manufacturing() {
  const navigate = useNavigate()
  return (
    <div>
     <Typography.Title level={4}>Manufacturing</Typography.Title>
     
    
    <Menu 
    onClick={(item)=>{
     navigate(item.key);
   }}
   
       items ={[
         
         {
           label: "Material",
           key: '/Material',
           icon:<DeploymentUnitOutlined />
          },
          {
           label: "Production",
           key: '/Production',
           icon: <BankOutlined />
          },
       ]}
       >
    </Menu>
    </div>
  )

}

export default Manufacturing