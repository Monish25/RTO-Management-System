import React from "react";
import { useState } from "react";
import Axios from 'axios';
function InsertRTO(){
    const [RTOstate,setState]=useState("");
    const [RTOdistrict,setDistrict]=useState("");
    const [RTOaddress,setAddress]=useState(0);
    const [RTOpincode,setPincode]=useState(0);
    const [RTOcontact,setContact]=useState("");
    const [RTOoid,setOid]=useState("");
    
    const insertrtodb =() =>{
       
        Axios.post('http://localhost:3001/insert_rto',{
            State:RTOstate,
            District:RTOdistrict,
            Address:RTOaddress,
            Pincode:RTOpincode,
            Contact:RTOcontact,
            OfficeID:RTOoid,
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
               <div class="card-header" id="cardTitle">Insert RTO Details</div>
               <div class="card-body">

       <div class="form-group row">
       <label class="col-md-4 col-form-label text-md-right" id="elem">State : </label>
       <div class="col-md-6">
       <input type="text" class="form-control" required autofocus
       onChange={(event)=>{setState(event.target.value)}}></input>
       </div>
       </div>

       <br/>

       <div class="form-group row">
       <label class="col-md-4 col-form-label text-md-right" id="elem">District : </label>
       <div class="col-md-6">
       <input type="date" class="form-control" required autofocus
       onChange={(event)=>{setDistrict(event.target.value)}}></input>
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
       <label class="col-md-4 col-form-label text-md-right" id="elem">Pincode : </label>
       <div class="col-md-6">
       <input type="text" class="form-control" required autofocus
       onChange={(event)=>{setPincode(event.target.value)}}></input>
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
       <label class="col-md-4 col-form-label text-md-right" id="elem">Office ID : </label>
       <div class="col-md-6">
       <input type="text" class="form-control" required autofocus
       onChange={(event)=>{setOid(event.target.value)}}></input>
       </div>
       </div>

       <br/>

      
       
       <div class="form-group row">
       <div class="col-md-12">
   
       <div class="form-group row">
       
       <center>

       <button id="btn" class="btn btn-primary" onClick={insertrtodb}>Insert</button>

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
export default InsertRTO;
