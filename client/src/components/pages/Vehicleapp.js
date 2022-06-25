import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
function Vehicleapp({setData}) {

    let navigate = useNavigate();
    const [ownername, setOwnerName] = useState("");
    const [vehicleclass, setVehicleClass] = useState("");
    const [mym, setMym] = useState("");
    const [ownercontact, setOwnerContact] = useState("");
    const [typeofbody, setTypeOfBody] = useState("");
    const [fuelused, setFuelUsed] = useState("");
    const [preferedrto, setPreferedRto] = useState("");
    const [makername, setMakerName] = useState("");
    var applicationno=Math.floor(1000 + Math.random() * 9000);
    const  veapp = () =>{    
        applicationno=Math.floor(1000 + Math.random() * 9000);
        setData(applicationno);
        navigate("/Vehicleappd");
        Axios.post("http://localhost:3001/insert_vehicle",{
            Vehicle_Class: vehicleclass,
            Month_Year_Mfg: mym,
            Owner_contact: ownercontact,
            Type_of_body: typeofbody,
            Fuel_Used: fuelused,
            Preffered_RTO: preferedrto,
            Maker_name: makername,
            Owner_name: ownername,
            Application_no: applicationno,
          }
          ).then(() => {
              
               console.log("suceeded");
          });
      };
  return (
      <form class="row g-3">
           <div><h3><centre>VEHICLE APPLICATION</centre></h3></div>
           <div class="mb-3 row">
<label for="staticid" class="col-sm-2 col-form-label">Owner Name:</label>
<div class="col-sm-10">
  <input type="text" readonly class="form-control" id="staticid" onChange={(event) => {
            setOwnerName(event.target.value);
          }}
          />
</div>
</div>
      <div class="col-md-4">
    <label for="inputState" class="form-label">Vehicle Class:</label>
    <select id="inputState" class="form-select" onChange={(event) => {
            setVehicleClass(event.target.value);
          }}
          >
      <option selected>Choose..</option>
      <option>MCWOG</option>
      <option>MCWG</option>
      <option>LMV</option>
      <option>HMV</option>
    </select>
  </div>
  <div class="mb-3 row">
<label for="statiaid" class="col-sm-2 col-form-label">Month and Year of MFG:</label>
<div class="col-sm-10">
  <input type="text" readonly class="form-control" id="statiaid" placeholder='MM-YYYY' onChange={(event) => {
            setMym(event.target.value);
          }}
          />
</div>
</div>
<div class="mb-3 row">
<label for="statibid" class="col-sm-2 col-form-label">Owner contact:</label>
<div class="col-sm-10">
  <input type="text" readonly class="form-control" id="statibid" onChange={(event) => {
            setOwnerContact(event.target.value);
          }}
          />
</div>
</div>
<div class="mb-3 row">
<label for="statidid" class="col-sm-2 col-form-label">Type Of Body:</label>
<div class="col-sm-10">
  <input type="text" readonly class="form-control" id="statidid" onChange={(event) => {
            setTypeOfBody(event.target.value);
          }}
          />
</div>
</div>
  <div class="col-md-4">
    <label for="inputState1" class="form-label">Fuel Used:</label>
    <select id="inputState1" class="form-select" onChange={(event) => {
            setFuelUsed(event.target.value);
          }}
          >
      <option selected>Choose..</option>
      <option>Petrol</option>
      <option>Diesel</option>
    </select>
  </div>
  <div class="mb-3 row">
<label for="statieid" class="col-sm-2 col-form-label">Prefered RTO:</label>
<div class="col-sm-10">
  <input type="text" readonly class="form-control" id="statieid" onChange={(event) => {
            setPreferedRto(event.target.value);
          }}
          />
</div>
</div>
<div class="mb-3 row">
<label for="statifid" class="col-sm-2 col-form-label">Maker Name:</label>
<div class="col-sm-10">
  <input type="text" readonly class="form-control" id="statifid" onChange={(event) => {
            setMakerName(event.target.value);
          }}
          />
</div>
</div>
  <div class="mb-3">
  <label for="formFileSm" class="form-label">Proof</label>
  <input class="form-control form-control-sm" id="formFileSm" type="file" />
</div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary" onClick={veapp}>Apply</button>
  </div>
</form>
  )
}

export default Vehicleapp;
