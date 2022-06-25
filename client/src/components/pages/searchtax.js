import React from 'react';
import Axios  from 'axios';
import { useState } from "react";

function SearchTax () {
   const [regno, setRegno] = useState("");
   const [detail,setDetails] = useState([]);
    const searchinsurance=()=>{
        Axios.post('http://localhost:3001/get_tax',{
            Reg_number:regno
        }).then((response)=>{
            setDetails(response.data);
            console.log(response.data);
        });
    }

   
   
  return <div>
      <>
       <form>
        <div class="mb-3 row">
        <label for="staticid" class="col-sm-2 col-form-label">Enter Registration Number:</label>
        <div class="col-sm-10">
        <input type="text"  id="staticid" onChange={(event)=>{
            setRegno(event.target.value);
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
              <th scope="col">Invoice Id</th>
              <th scope="col">Amount</th>
              <th scope="col">Type of vehicle</th>
              <th scope="col">Payment via </th>
            </tr>
          </thead>
          <tbody>
            {detail.map((val,key)=>{
                return( 
                    <>
                    <tr>
                            <td>{val.Reg_number}</td>
                            <td>{val.Invoice_ID}</td>
                            <td>{val.Amount}</td>
                            <td>{val.Type_of_vehicle}</td>
                            <td>{val.Payment_methods}</td>
                    </tr>
                    </>
                )
            })}
          </tbody>
        </table>


      </>
     
        

  </div>
}

export default SearchTax;
