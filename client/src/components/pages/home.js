import React from "react";
import rtologo from "../images/rtologo.png"
import './home.css';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function Home(){
    return(
        <div>
        <div className="container ">
                    <br/>
                    <br/>
                   <center><img src={rtologo} id="f" alt="logo"   />
                    <br/>
                    <br/>
                    <br/>
                    <p id="welcome"> Welcome to the Regional Transport Office Website</p>
                    
                    <Link to ="/searchrto"> <Button variant="outline-primary">Search RTO</Button></Link>  {'       '}
                    <Link to ="/vehicleapp"><Button variant="outline-primary">Apply for Vehicle Registration</Button></Link>  {'       '}

                    <Link to ="/DLapp"><Button variant="outline-primary">Apply Driver License</Button></Link>  {'       '}
                    <Link to= "/searchinsurance"><Button variant="outline-primary">Search Insurance</Button></Link>  {'       '}
                    <Link to ="/searchtax"><Button variant="outline-primary">Search Tax</Button></Link>  {'       '}
                    <Link to ="/searchdl"><Button variant="outline-primary">Search Driving License</Button></Link>  {'       '}
                    <Link to ="/searchvl"><Button variant="outline-primary">Search Vehicle License</Button></Link>  {'       '}

                    </center>
              
        </div>
        </div>
        );

}

export default Home;
