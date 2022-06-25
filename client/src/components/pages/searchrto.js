import React from 'react';
import Axios  from 'axios';
import { useState } from "react";

function SearchRTO () {
   const [pincode, setPinCode] = useState(0);
   const [detail,setDetails] = useState([]);
    const searchrtopin=()=>{
        Axios.post('http://localhost:3001/get_rto_office',{
            Pincode:pincode
        }).then((response)=>{
            setDetails(response.data);
            console.log(response.data);
        });
    }

   
   
  return (<div>
      <>
      
       <form>
         
        <div class="mb-3 row">
        <label for="staticid" class="col-sm-2 col-form-label">Enter PIN CODE:</label>
        <div class="col-sm-10">
        <input type="text"  id="staticid" onChange={(event)=>{
            setPinCode(event.target.value);
        }}/>
        </div>
        </div>

        <div class="col-12">
        <button type="button" class="btn btn-primary" onClick={searchrtopin}>Search</button>
        </div>
        </form>
        
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">State</th>
              <th scope="col">District</th>
              <th scope="col">Address</th>
              <th scope="col">Pincode</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            {detail.map((val,key)=>{
                return( 
                    <>
                    <tr>
                            <td>{val.State}</td>
                            <td>{val.District}</td>
                            <td>{val.Address}</td>
                            <td>{val.Pincode}</td>
                            <td>{val.Contact}</td>
                    </tr>
                    </>
                )
            })}
          </tbody>
        </table>
      </>
     
        

  </div>
  );
}

export default SearchRTO;
