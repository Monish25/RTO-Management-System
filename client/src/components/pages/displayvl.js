import React from 'react';
import Axios  from 'axios';
import { useState } from "react";

function SearchVL () {
   const [Oid, setOffice] = useState("");
   const [detail,setDetails] = useState([]);
    const searchrtostaff=()=>{
        Axios.post('http://localhost:3001/get_vl',{
            OfficeID:Oid
        }).then((response)=>{
            setDetails(response.data);
            console.log(response.data);
        });
    }

   
   
  return <div>
      <>
       <form>
        <div class="mb-3 row">
        <label for="staticid" class="col-sm-2 col-form-label">Enter Vehicle Registration Number:</label>
        <div class="col-sm-10">
        <input type="text"  id="staticid" onChange={(event)=>{
            setOffice(event.target.value);
        }}/>
        </div>
        </div>

        <div class="col-12">
        <button type="button" class="btn btn-primary" onClick={searchrtostaff}>Search</button>
        </div>
        </form>
        
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">OWner Name</th>
              <th scope="col">Vehicle Class</th>
              <th scope="col">Fuel </th>
              <th scope="col">Address</th>
              <th scope="col">RTO_ID</th>
              <th scope="col">Maker class</th>
              <th scope="col">Month/Year of MFG</th>
              <th scope="col">Body Type</th>
            </tr>
          </thead>
          <tbody>
            {detail.map((val,key)=>{
                return( 
                    <>
                    <tr>
                            <td>{val.Regd_Owner}</td>
                            <td>{val.Vehicle_Class}</td>
                            <td>{val.Fuel_used}</td>
                            <td>{val.Address}</td>
                            <td>{val.RTO_ID}</td>
                            <td>{val.Maker_class}</td>
                            <td>{val.Month_Year_MFG}</td>
                            
                            <td>{val.Type_of_body}</td>
                    </tr>
                    </>
                )
            })}
          </tbody>
        </table>


      </>
     
        

  </div>
}

export default SearchVL;
