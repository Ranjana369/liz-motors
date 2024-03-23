import React from 'react'
import {Menu, Typography} from "antd";
import {ProductOutlined, InteractionOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function Research() {
  const navigate = useNavigate()
  return (
    <div>
     <Typography.Title level={4}>Research</Typography.Title>
     <Menu 
     onClick={(item)=>{
      navigate(item.key);
    }}
    
        items ={[
          
          {
            label: "Internal",
            key: '/Internal',
            icon: <InteractionOutlined />
           },
           {
            label: "External",
            key: '/External',
            icon: <ProductOutlined />
           },
        ]}
        >
     </Menu>
     
    </div>
  )
}

export default Research
