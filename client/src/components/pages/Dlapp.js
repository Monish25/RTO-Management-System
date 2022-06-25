import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
function Dlapp({setNo}) {
    let navigate = useNavigate();
    const [appname, setAppName] = useState("");
    const [dob, setDob] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [preferedrto, setPreferedRto] = useState("");
    var applicationno=Math.floor(1000 + Math.random() * 9000);
    const dapp = () => {    
        applicationno=Math.floor(1000 + Math.random() * 9000);
        setNo(applicationno);
            navigate("/Dlappd");
        Axios.post("http://localhost:3001/insert_driver_app",{
            DOB: dob,
            Applicant_name: appname,
            Contact: contact,
            Preffered_RTO: preferedrto,
            Address: address,
            Application_no: applicationno,
          }
          ).then(() => {
              
               console.log("suceeded");
          });
      };
  return (
    <form class="row g-3">
    <div>
       
       <div class="container">
       <div class="row justify-content-center">
       <div class="col-md-8">
               <div class="card">
               <div class="card-header" id="cardTitle">DRIVERS APPLICATION</div>
               <div class="card-body">

       <div class="form-group row">
       <label class="col-md-4 col-form-label text-md-right" id="elem">Applicant Name : </label>
       <div class="col-md-6">
       <input type="text" class="form-control" required autofocus
       onChange={(event)=>{setAppName(event.target.value)}}></input>
       </div>
       </div>

       <br/>

       <div class="form-group row">
       <label class="col-md-4 col-form-label text-md-right" id="elem">Date of Birth : </label>
       <div class="col-md-6">
       <input type="date" class="form-control" required autofocus
       onChange={(event)=>{setDob(event.target.value)}}></input>
       </div>
       </div>

       <br/>

       <div class="form-group row">
       <label class="col-md-4 col-form-label text-md-right" id="elem">Contact : </label>
       <div class="col-md-6">
       <input type="text" class="form-control" required autofocus
       onChange={(event)=>{setContact(event.target.value)}}></input>
       </div>
       </div>

       <br/>

       <div class="form-group row">
       <label class="col-md-4 col-form-label text-md-right" id="elem">Preffered RTO : </label>
       <div class="col-md-6">
       <input type="text" class="form-control" required autofocus
       onChange={(event)=>{setPreferedRto(event.target.value)}}></input>
       </div>
       </div>

       <br/>
       <div class="form-group row">
       <label class="col-md-4 col-form-label text-md-right" id="elem">Address : </label>
       <div class="col-md-6">
       <input type="text" class="form-control" required autofocus
       onChange={(event)=>{setAddress(event.target.value)}}></input>
       </div>
       </div>

       <br/>


      
       
       <div class="form-group row">
       <div class="col-md-12">
   
       <div class="form-group row">
       
       <center>

       <button id="btn" class="btn btn-primary" onClick={dapp}>Apply</button>

       </center>
       </div>
       </div>
       </div>
       <br/>

      
       
       </div>
       </div>
       </div>
       </div>
       </div>
     </div>
</form>





  )
}

export default Dlapp;
