import React from 'react';
import Axios  from 'axios';
import { useState } from "react";

function SearchInsurance () {
   const [Inumber, setInumber] = useState("");
   const [detail,setDetails] = useState([]);
    const searchinsurance=()=>{
        Axios.post('http://localhost:3001/get_insurance',{
            Insurance_number:Inumber
        }).then((response)=>{
            setDetails(response.data);
            console.log(response.data);
        });
    }

   
   
  return <div>
      <>
       <form>
        <div class="mb-3 row">
        <label for="staticid" class="col-sm-2 col-form-label">Enter Insurance Number:</label>
        <div class="col-sm-10">
        <input type="text"  id="staticid" onChange={(event)=>{
            setInumber(event.target.value);
        }}/>
        </div>
        </div>

        <div class="col-12">
        <button type="button" class="btn btn-primary" onClick={searchinsurance}>Search</button>
        </div>
        </form>
        
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">Registration Number</th>
              <th scope="col">Date of Insurance</th>
              <th scope="col">Ending of Insurance</th>
              <th scope="col">Insurance Number</th>
              <th scope="col">Amount    </th>
            </tr>
          </thead>
          <tbody>
            {detail.map((val,key)=>{
                return( 
                    <>
                    <tr>
                            <td>{val.Regd_number}</td>
                            <td>{val.Date_of_insurance}</td>
                            <td>{val.Ending_of_insurance}</td>
                            <td>{val.Insurance_number}</td>
                            <td>{val.Amount}</td>
                    </tr>
                    </>
                )
            })}
          </tbody>
        </table>


      </>
     
        

  </div>
}

export default SearchInsurance;
