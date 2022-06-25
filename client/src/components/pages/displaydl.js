import React from 'react';
import Axios  from 'axios';
import { useState } from "react";

function SearchDL () {
   const [Oid, setOffice] = useState("");
   const [detail,setDetails] = useState([]);
    const searchrtostaff=()=>{
        Axios.post('http://localhost:3001/get_dl',{
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
        <label for="staticid" class="col-sm-2 col-form-label">Enter Driving License Number:</label>
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
              <th scope="col">Holder Name</th>
              <th scope="col">Vehicle Class</th>
              <th scope="col">Date of Issue </th>
              <th scope="col">Validity</th>
              <th scope="col">RTO_ID</th>
            </tr>
          </thead>
          <tbody>
            {detail.map((val,key)=>{
                return( 
                    <>
                    <tr>
                            <td>{val.Holder_name}</td>
                            <td>{val.Vehicle_Class}</td>
                            <td>{val.Date_of_issue}</td>
                            <td>{val.Validity}</td>
                            <td>{val.RTO_ID}</td>
                    </tr>
                    </>
                )
            })}
          </tbody>
        </table>


      </>
     
        

  </div>
}

export default SearchDL;
