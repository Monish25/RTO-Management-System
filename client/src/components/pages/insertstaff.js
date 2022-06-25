import React from "react";
import { useState } from "react";
import Axios from 'axios';
function InsertStaff(){
    const [StaffName,setSName]=useState("");
    const [StaffID,setStaffid]=useState("");
    const [Scontact,setStaffcontact]=useState(0);
    const [StaffSal,setStaffSalary]=useState(0);
    const [StaffPos,setStaffPos]=useState("");
    const [StaffOfficeID,setStaffOid]=useState("");
    
    const insertstaffdb =() =>{
       
        Axios.post('http://localhost:3001/insert_staff',{
            Staffname:StaffName,
            Staffid:StaffID,
            StaffContact:Scontact,
            StaffSalary:StaffSal,
            StaffPosition:StaffPos,
            StaffOID:StaffOfficeID,
        }).then(()=>{
            console.log("Inserted");
        });

    };



    return (
      
                <form>
                <div>
       
       <div class="container">
       <div class="row justify-content-center">
       <div class="col-md-8">
               <div class="card">
               <div class="card-header" id="cardTitle">Insert Staff Details</div>
               <div class="card-body">

       <div class="form-group row">
       <label class="col-md-4 col-form-label text-md-right" id="elem">Staff Name : </label>
       <div class="col-md-6">
       <input type="text" class="form-control" required autofocus
       onChange={(event)=>{setSName(event.target.value)}}></input>
       </div>
       </div>

       <br/>

       <div class="form-group row">
       <label class="col-md-4 col-form-label text-md-right" id="elem">Staff ID : </label>
       <div class="col-md-6">
       <input type="date" class="form-control" required autofocus
       onChange={(event)=>{setStaffid(event.target.value)}}></input>
       </div>
       </div>

       <br/>

       <div class="form-group row">
       <label class="col-md-4 col-form-label text-md-right" id="elem">Contact : </label>
       <div class="col-md-6">
       <input type="text" class="form-control" required autofocus
       onChange={(event)=>{setStaffcontact(event.target.value)}}></input>
       </div>
       </div>

       <br/>

       <div class="form-group row">
       <label class="col-md-4 col-form-label text-md-right" id="elem">Salary : </label>
       <div class="col-md-6">
       <input type="text" class="form-control" required autofocus
       onChange={(event)=>{setStaffSalary(event.target.value)}}></input>
       </div>
       </div>

       <br/>
       <div class="form-group row">
       <label class="col-md-4 col-form-label text-md-right" id="elem">Position : </label>
       <div class="col-md-6">
       <input type="text" class="form-control" required autofocus
       onChange={(event)=>{setStaffPos(event.target.value)}}></input>
       </div>
       </div>

       <br/>


       <div class="form-group row">
       <label class="col-md-4 col-form-label text-md-right" id="elem">Office ID : </label>
       <div class="col-md-6">
       <input type="text" class="form-control" required autofocus
       onChange={(event)=>{setStaffOid(event.target.value)}}></input>
       </div>
       </div>

       <br/>

      
       
       <div class="form-group row">
       <div class="col-md-12">
   
       <div class="form-group row">
       
       <center>

       <button id="btn" class="btn btn-primary" onClick={insertstaffdb}>Insert</button>

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
      
    );
}
export default InsertStaff;
