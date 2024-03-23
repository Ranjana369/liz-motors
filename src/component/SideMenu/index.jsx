import { Menu } from "antd"
import {AppstoreOutlined, FileSearchOutlined,CodepenOutlined, FormatPainterOutlined, ToolOutlined, GlobalOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom";


function SideMenu(){
  const navigate = useNavigate()
  return (
  <div className="SideMenu">
     <Menu 
     onClick={(item)=>{
      navigate(item.key);
     }}
     items={[
      {
      label: "Dashboard",
      icon: <AppstoreOutlined />,
      key: '/'
     },
      {
      label: "Research",
      key: '/Research',
      icon: <FileSearchOutlined />
     },
      {
      label: "Planning",
      key: '/Planning',
      icon: <CodepenOutlined />
     },
      {
      label: "Designing",
      key: '/Designing',
      icon: <FormatPainterOutlined />
     },
      {
      label: "Manufacturing",
      key: '/Manufacturing',
      icon: <ToolOutlined />
     },
      {
      label: "Sales/Marketing",
      key: '/Sales',
      icon:<GlobalOutlined />
     },
      
     ]}
     >

     </Menu>
     
  </div>
  )
}
export default SideMenu