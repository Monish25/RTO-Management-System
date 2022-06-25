import React from "react";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Navbar from "./components/inc/navbar";
import Login from "./components/pages/login";
import Signup from "./components/pages/register";
import SearchRTO from "./components/pages/searchrto";
import Vehicleapp from "./components/pages/Vehicleapp";
import SearchInsurance from "./components/pages/searchinsurance";
import SearchTax from "./components/pages/searchtax";
import SearchStaff from "./components/pages/searchstaff";
import InsertStaff from "./components/pages/insertstaff";
import InsertRTO from "./components/pages/insertrto";
import Adminpage from "./components/pages/admin";
import { BrowserRouter as Router,Route,Routes,  } from "react-router-dom";
import { useState } from "react";
import Dlapp from "./components/pages/Dlapp";
import Dlappd from "./components/pages/Dlappd";
import Vehicleappd from "./components/pages/Vehicleappd";
import Vehicleapproval from "./components/pages/Vehicleapproval";
import Licenseapproval from "./components/pages/Licenseapproval"
import Insert_insurance from "./components/pages/Insert_insurance";
import Insert_tax from "./components/pages/Insert_tax";
import SearchDL from "./components/pages/displaydl";
import SearchVL from "./components/pages/displayvl"
function App() {

  const[data,setData]=useState("");
  const[no,setNo]=useState("");
  return (
      <Router>
      <div>
      <Navbar/>
        
     
        
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Login" element={<Login/>} />  
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/SearchRTO" element={<SearchRTO/>} />
        <Route path="/Vehicleapp" element={<Vehicleapp/>} />
        <Route path="/SearchInsurance" element={<SearchInsurance/>} />
        <Route path="/SearchTax" element={<SearchTax/>} />
        <Route path="/SearchStaff" element={<SearchStaff/>} />
        <Route path="/InsertStaff" element={<InsertStaff/>} />
        <Route path="/InsertRTO" element={<InsertRTO/>} />
        <Route path="/Adminpage" element={<Adminpage/>} />
        <Route path="/SearchDL" element={<SearchDL/>} />
        <Route path="/SearchVL" element={<SearchVL/>} />

        <Route exact path="/Vehicleapp" element={<Vehicleapp setData={setData} />}></Route>
        <Route exact path="/Dlapp" element={<Dlapp setNo={setNo} />}></Route>
        <Route exact path="/Vehicleappd" element={<Vehicleappd data={data} />}></Route>
        <Route exact path="/Dlappd" element={<Dlappd no={no} />}></Route>
        <Route exact path="/Vehicleapproval" element={<Vehicleapproval />}></Route>
        <Route exact path="/Licenseapproval" element={<Licenseapproval />}></Route>
        <Route exact path="/Insert_insurance" element={<Insert_insurance />}></Route>
        <Route exact path="/Insert_tax" element={<Insert_tax />}></Route>
        

        </Routes>
      
      </div>
      </Router>
  );
}
export default App;
