import { useState } from "react";
import Axios from "axios";
import {Route,Routes, NavLink} from 'react-router-dom';

function Login() {
    let obj;
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [custList,setCustList]=useState([]);
    const [message, setMessage]=useState("");
    const logincheck = () => {
        Axios.post('http://localhost:3001/custlogin', {
      email: email,
      password: password,
    }).then((response) => {
    setCustList(response.data);
    obj=Object.values(response.data);
    console.log(obj);
    if(obj.length==1)
    {
        localStorage.setItem("Loggedin",true)

        window.location.href = "http://localhost:3000/adminpage";
    }
    else{
        setMessage("Login Failed");
        alert("login failed")
    }   
    });
    }
  return (
    <>
        
    <div>
       <center>
        <div class="container">
        <div class="row justify-content-center">
        <div class="col-md-8">
                <div class="card">
                <div class="card-header" id="cardTitle">Login</div>
                <div class="card-body">

        <div class="form-group row">
        <label class="col-md-4 col-form-label text-md-right" id="elem">Email : </label>
        <div class="col-md-6">
        <input type="text" class="form-control" required autofocus
        onChange={(event)=>{setEmail(event.target.value)}}></input>
        </div>
        </div>

        <br/>

        <div class="form-group row">
        <label class="col-md-4 col-form-label text-md-right" id="elem">Password : </label>
        <div class="col-md-6">
        <input type="password" class="form-control" required
        onChange={(event)=>{setPassword(event.target.value)}}></input>
        </div>
        </div>

        <br></br>
        <br/>
        
        <div class="form-group row">
        <div class="col-md-12">
    
        <div class="form-group row">
        
        <center>

        <button id="btn" onClick={logincheck} class="btn btn-primary" >Login</button>

        </center>
        </div>
        </div>
        </div>
        <br/>

        <div class="form-group row">
        <button class="btn btn-link" id="elem"><NavLink to="/signup"> Signup</NavLink></button>
        </div>
        {/* <Routes>
          <Route to="/signup" element={<Signup />}></Route>
        </Routes> */}
        {message}
        </div>
        </div>
        </div>
        </div>
        </div>
         </center>
      </div>
     
    </>
  );
}

export default Login;