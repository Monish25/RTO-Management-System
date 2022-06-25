import React, { useState } from 'react';
import Axios from 'axios';
function Insert_insurance() {
        
    const [regno, setRegno] = useState("");
    const [doinsurance, setDoinsurance] = useState("");
    const [eoinsurance, setEoinsurance] = useState("");
    const [insuranceno, setInsuranceno] = useState("");
    const [amount, setAmount] = useState("");
    const insurance = () => {    
        Axios.post("http://localhost:3001/insert_insurance",{
            Regd_number: regno,
            Date_of_insurance: doinsurance,
            Ending_of_insurance: eoinsurance,
            Insurance_number: insuranceno,
            Amount: amount,
          }
          ).then(() => {
              
               console.log("suceeded");
          });
      };
  return (
    <form class="row g-3">
    <div><h3><centre>INSURANCE DETAILS</centre></h3></div>
    <div class="mb-3 row">
<label for="staticid" class="col-sm-2 col-form-label">Regd_Number:</label>
<div class="col-sm-10">
<input type="text" readonly class="form-control" id="staticid" onChange={(event) => {
            setRegno(event.target.value);
          }}
   />
</div>
</div>

<div class="mb-3 row">
<label for="statiaid" class="col-sm-2 col-form-label">Date Of Insurance:</label>
<div class="col-sm-10">
<input type="date" readonly class="form-control" id="statiaid" placeholder='yyyy-mm-dd' onChange={(event) => {
            setDoinsurance(event.target.value);
          }}
   />
</div>
</div>

<div class="mb-3 row">
<label for="statiaid" class="col-sm-2 col-form-label">Ending Of Insurance:</label>
<div class="col-sm-10">
<input type="date" readonly class="form-control" id="statiaid" placeholder='yyyy-mm-dd' onChange={(event) => {
            setEoinsurance(event.target.value);
          }}
   />
</div>
</div>
<div class="mb-3 row">
<label for="statieid" class="col-sm-2 col-form-label">Insurance_number:</label>
<div class="col-sm-10">
<input type="text" readonly class="form-control" id="statieid" onChange={(event) => {
            setInsuranceno(event.target.value);
          }}
   />
</div>
</div>
<div class="mb-3 row">
<label for="statidid" class="col-sm-2 col-form-label">Amount:</label>
<div class="col-sm-10">
<input type="text" readonly class="form-control" id="statidid" onChange={(event) => {
            setAmount(event.target.value);
          }}
   />
</div>
</div>

<div class="col-12">
<button type="submit" class="btn btn-primary" onClick={insurance}>Assign</button>
</div>
</form>
  )
}

export default Insert_insurance;
