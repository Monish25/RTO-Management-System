import React from 'react';
import Axios from 'axios';
import { useState, useEffect} from 'react';
const box = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "16px",
  }
  const box1 = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "40px",
  }
  function Vehicleapproval() {
    function approve (val){
      var alpha1 = alphabet[Math.floor(Math.random() * alphabet.length)];
      var aplha2 = alphabet[Math.floor(Math.random() * alphabet.length)];
      var no1=Math.floor(1000 + Math.random() * 9000);
      var no2=Math.floor(1 + Math.random() * 99);
      var no3=Math.floor(1 + Math.random() * 5);
      var regno = str + no2 + alpha1 + aplha2 + no1;
      var rtono = stri + no3;
        Axios.post("http://localhost:3001/insert_registered_vehicle",{
            Regd_Owner : val.Owner_name,
            Vehicle_Class : val.Vehicle_Class,
            RTO_ID: rtono,
            Regd_Number : regno,
            Fuel_used : val.Fuel_Used,
            Maker_class : val.Type_of_body,
             Month_Year_MFG : val.Month_Year_Mfg,
             Type_of_body : val.Type_of_body,
          }
          ).then(() => {
              
               console.log("suceeded");
          });
    }
    function deny (val){
       
        Axios.post("http://localhost:3001/delete_vehicle_app",{
            Owner_name : val.Owner_name,
          }
          ).then(() => {
              
               console.log("suceeded");
          });
    }
    var str="TN";
    var stri="R0";
    const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alpha1 = alphabet[Math.floor(Math.random() * alphabet.length)];
    var aplha2 = alphabet[Math.floor(Math.random() * alphabet.length)];
    var no1=Math.floor(1000 + Math.random() * 9000);
    var no2=Math.floor(1 + Math.random() * 99);
    var no3=Math.floor(1 + Math.random() * 5);
    const[vapplist,setVapplist] = useState([]);
    var regno;
    var rtono;
    useEffect(() => {
        Axios.get("http://localhost:3001/get_vehicle_app").then((response) =>{
            setVapplist(response.data);
         })
        });
        
  return (
   <div>
     <h1>Vehicle Application Approval</h1>
           <table style={{border: "1px solid black"}}>
             <thead>
  <tr>
    <th style={box}>Vehicle_Class</th>
    <th style={box}>Month_Year_Mfg</th>
    <th style={box}>Owner_contact</th>
    <th style={box}>Type_of_body</th>
    <th style={box}>Fuel_Used</th>
    <th style={box}>Preffered_RTO</th>
    <th style={box}>Maker_name</th>
    <th style={box}>Owner_name</th>
    <th style={box}>Application_no</th>
  </tr>
  </thead>
  <tbody>
  {vapplist.map((val) =>{
     
   return(
  <tr>
    <td  style={box1}>{val.Vehicle_Class}</td>
    <td style={box1}>{val.Month_Year_Mfg}</td>
    <td style={box1}>{val.Owner_contact}</td>
    <td style={box1}>{val.Type_of_body}</td>
    <td style={box1}>{val.Fuel_Used}</td>
    <td style={box1}>{val.Preffered_RTO}</td>
    <td style={box1}>{val.Maker_name}</td>
    <td style={box1}>{val.Owner_name}</td>
    <td style={box1}>{val.Application_no}</td>
    <td><button onClick={()=>{approve(val)}}>Approve</button></td>
    <td><button onClick={()=>{deny(val)}}>Deny</button></td>
  </tr>
   )
  })}
  </tbody>
  </table>
    </div>
  )
}
export default Vehicleapproval;
