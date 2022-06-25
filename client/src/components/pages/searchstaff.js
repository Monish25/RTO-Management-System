import React from 'react';
import Axios  from 'axios';
import { useState } from "react";

function SearchStaff () {
   const [Oid, setOffice] = useState("");
   const [detail,setDetails] = useState([]);
    const searchrtostaff=()=>{
        Axios.post('http://localhost:3001/get_staff',{
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
        <label for="staticid" class="col-sm-2 col-form-label">Enter RTO CODE:</label>
        <div class="col-sm-10">
        <input type="text"  id="staticid" onChange={(event)=>{
            setOffice(event.target.value);
        }}/>
        </div>
        </div>

        <div class="col-12">
        <button type="button" class="btn btn-primary" onClick={searchrtostaff}>Register</button>
        </div>
        </form>
        
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">Staff ID</th>
              <th scope="col">Staff Name</th>
              <th scope="col">Position </th>
              <th scope="col">Salary</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            {detail.map((val,key)=>{
                return( 
                    <>
                    <tr>
                            <td>{val.Staff_ID}</td>
                            <td>{val.Staff_name}</td>
                            <td>{val.Position}</td>
                            <td>{val.Salary}</td>
                            <td>{val.Contact}</td>
                    </tr>
                    </>
                )
            })}
          </tbody>
        </table>


      </>
     
        

  </div>
}

export default SearchStaff;
