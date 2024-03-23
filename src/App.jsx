// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Space } from "antd";
import AppHeader from "./component/AppHeader";
import SideMenu from "./component/SideMenu";
import PageContent from "./component/PageContent";
import AppFooter from "./component/AppFooter";
// import Center from "./component/Center"




function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Space className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        {/* <Center/> */}
        <PageContent/>
      </Space>
      
      <AppFooter/>
    </div>
  );
}

export default App;
