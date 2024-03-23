import { Routes, Route } from "react-router-dom";

import React from "react";
import Dashboard from "../../Pages/Dashboard";
import Research from "../../Pages/Research";
import Planning from "../../Pages/Planning";
import Designing from"../../Pages/Designing";
import Manufacturing from "../../Pages/Manufacturing";
import Sales from "../../Pages/Sales";
import Internal from "../../Pages/Internal";
import Hardware from "../../Pages/Hardware";
import Software from "../../Pages/Software";
import Material from "../../Pages/Material";
import Production from "../../Pages/Production";
import External from "../../Pages/External"
import Dealership from "../../Pages/Dealership";
import Online from "../../Pages/Online";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Research" element={<Research />} />
      <Route path="/Planning" element={<Planning />} />
      <Route path="/Designing" element={<Designing/>} />
      <Route path="/Manufacturing" element={<Manufacturing/>} />
      <Route path="/Sales" element={<Sales/>} />
      <Route path="/Internal" element={<Internal/>}/>
      <Route path="/External" element={<External/>}/>
      <Route path = "/Hardware" element = {<Hardware/>}/>
      <Route path = "/Softdware" element = {<Software/>}/>
      <Route path = "/Material" element = {<Material/>}/>
      <Route path = "/Production" element = {<Production/>}/>
      <Route path = "/Dealership" element = {<Dealership/>}/>


      <Route path = "/Online" element = {<Online/>}/>
    </Routes>
  );
}
export default AppRoutes;
