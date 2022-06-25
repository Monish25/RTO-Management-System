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
  function Licenseapproval() {
    function approve (val){

      var no1=Math.floor(100000 + Math.random() * 900000);
      var no2=Math.floor(1 + Math.random() * 99);
      var no3=Math.floor(1 + Math.random() * 5);
      var dlno = str + no2 + no1;
      var rtono = stri + no3;
      var vclass = "MCWG MCWOG LMV";
        Axios.post("http://localhost:3001/insert_drivers_license",{
            Holder_name: val.Applicant_name,
            Vehicle_Class: vclass,
            DL_number: dlno,
            Date_of_issue: today,
            RTO_ID: rtono,
            Validity: exp ,
    }
          ).then(() => {
              
               console.log("suceeded");
          });
    }
    function deny (val){
       
        Axios.post("http://localhost:3001/delete_drivers_application",{
            Applicant_name : val.Applicant_name,
          }
          ).then(() => {
              
               console.log("suceeded");
          });
    }
    var str="TN";
    var stri="R0";
    var no1=Math.floor(1000 + Math.random() * 9000);
    var no2=Math.floor(1 + Math.random() * 99);
    var no3=Math.floor(1 + Math.random() *5);
    const[dapplist,setDapplist] = useState([]);
    var dlno;
    var rtono;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var yyy = today.getFullYear() + 20;
    today = mm + '/' + dd + '/' + yyyy;
    var exp = mm + '/' + dd + '/' + yyy;
    useEffect(() => {
        Axios.get("http://localhost:3001/get_drivers_application").then((response) =>{
            setDapplist(response.data);
         })
        });
        
  return (
   <div> 
     <h1>Driving License Approval </h1>
           <table style={{border: "1px solid black"}}>
  <thead>
  <tr>
    <th style={box}>DOB</th>
    <th style={box}>Applicant_name</th>
    <th style={box}>Contact</th>
    <th style={box}>Preffered_RTO</th>
    <th style={box}>Address</th>
    <th style={box}>Application_no</th>
    <th style={box}>Approve/Deny</th>
  </tr>
  </thead>
  <tbody>
  {dapplist.map((val) =>{
     
   return(
    <>
  <tr>
    <td  style={box1}>{val.DOB}</td>
    <td style={box1}>{val.Applicant_name}</td>
    <td style={box1}>{val.Contact}</td>
    <td style={box1}>{val.Preffered_RTO}</td>
    <td style={box1}>{val.Address}</td>
    <td style={box1}>{val.Application_no}</td>
    <td><button onClick={()=>{approve(val)}}>Approve</button></td>
    <td><button onClick={()=>{deny(val)}}>Deny</button></td>
  </tr>

  </>
   )
  })}
  </tbody>
   </table>
    </div>
  )
}
export default Licenseapproval;
