import React, { useState } from 'react';
import Axios from 'axios';
function Insert_tax() {
        
    const [invoiceid, setInvoiceid] = useState("");
    const [tov, setTov] = useState("");
    const [payment, setPayment] = useState("");
    const [regno, setRegno] = useState("");
    const [amount, setAmount] = useState("");
    const tax = () => {    
        Axios.post("http://localhost:3001/insert_tax",{
            Invoice_ID: invoiceid,
            Amount: amount,
            Type_of_vehicle: tov,
             Payment_methods: payment,
             Reg_number: regno,
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
               <div class="card-header" id="cardTitle">Insert Tax Details</div>
               <div class="card-body">

       <div class="form-group row">
       <label class="col-md-4 col-form-label text-md-right" id="elem">Invoice Id : </label>
       <div class="col-md-6">
       <input type="text" class="form-control" required autofocus
       onChange={(event)=>{setInvoiceid(event.target.value)}}></input>
       </div>
       </div>

       <br/>

       <div class="form-group row">
       <label class="col-md-4 col-form-label text-md-right" id="elem">Amount : </label>
       <div class="col-md-6">
       <input type="date" class="form-control" required autofocus
       onChange={(event)=>{setAmount(event.target.value)}}></input>
       </div>
       </div>

       <br/>

       <div class="form-group row">
       <label class="col-md-4 col-form-label text-md-right" id="elem">Type of Vehicle : </label>
       <div class="col-md-6">
       <input type="text" class="form-control" required autofocus
       onChange={(event)=>{setTov(event.target.value)}}></input>
       </div>
       </div>

       <br/>

       <div class="form-group row">
       <label class="col-md-4 col-form-label text-md-right" id="elem">Payment methods : </label>
       <div class="col-md-6">
       <input type="text" class="form-control" required autofocus
       onChange={(event)=>{setPayment(event.target.value)}}></input>
       </div>
       </div>

       <br/>
       <div class="form-group row">
       <label class="col-md-4 col-form-label text-md-right" id="elem">Registration Number : </label>
       <div class="col-md-6">
       <input type="text" class="form-control" required autofocus
       onChange={(event)=>{setRegno(event.target.value)}}></input>
       </div>
       </div>

       <br/>


       

      
       
       <div class="form-group row">
       <div class="col-md-12">
   
       <div class="form-group row">
       
       <center>

       <button id="btn" class="btn btn-primary" onClick={tax}>Insert</button>

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

export default Insert_tax;