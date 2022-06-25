import React from 'react';
import Axios from 'axios';
import { useState } from "react";

function Signup() {
    const [userid, setUserid] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");
    const type = "public";
    const adduser = () => {
        Axios.post("http://localhost:3001/insert_login_details", {
          userid: userid,
          email: email,
          password: password,
          code: code,
          type: type,
        }).then(() => {
            console.log("Succeeded");
        });
    };
  return (
    
      <form>
        <center>
        <div class="container">
        <div class="row justify-content-center">
        <div class="col-md-8">
                <div class="card">
                <div class="card-header" id="cardTitle">Sign UP</div>
                <div class="card-body">
        <div class="form-group row">
<label class="col-md-4 col-form-label text-md-right" id="elem">User ID : </label>
<div class="col-md-6">
<input type="text" class="form-control" required autofocus
onChange={(event)=>{setUserid(event.target.value)}}></input>
</div>
</div>
<div class="form-group row">
<label class="col-md-4 col-form-label text-md-right" id="elem">Email : </label>
<div class="col-md-6">
<input type="text" class="form-control" required autofocus
onChange={(event)=>{setEmail(event.target.value)}}></input>
</div>
</div>
<div class="form-group row">
<label class="col-md-4 col-form-label text-md-right" id="elem">Security Code : </label>
<div class="col-md-6">
<input type="text" class="form-control" required autofocus
onChange={(event)=>{setCode(event.target.value)}}></input>
</div>
</div>



<div class="form-group row">
<label class="col-md-4 col-form-label text-md-right" id="elem">Password : </label>
<div class="col-md-6">
<input type="password" class="form-control" required
onChange={(event)=>{setPassword(event.target.value)}}></input>
</div>
</div>

    <button id="btn"class="btn btn-primary" onClick={adduser}>Register</button>
 
  </div>
        </div>
        </div>
        </div>
        </div>
        </center>
  </form>
  )
}

export default Signup;
