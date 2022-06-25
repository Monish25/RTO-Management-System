import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./admin.css";
function Adminpage(){
    return(
        <div className="container">
            
                    <text id="adminstyle">ADMIN PAGE</text>
                    <p id="para"> Welcome to the Administrator Page of Regional Transport Office Website</p>
               
              <Link to ="/Licenseapproval"> <Button variant="outline-primary">Approve Driving License   </Button></Link>  {'       '}
                    <Link to ="/vehicleapproval"><Button variant="outline-primary">Approve Vehicle License </Button></Link>  {'       '}

                    <Link to ="/Insert_tax"><Button variant="outline-primary">Insert Tax Data</Button></Link>  {'       '}
                    <Link to= "/Insertrto"><Button variant="outline-primary">Insert RTO Data</Button></Link>  {'       '}
                    <Link to ="/insertstaff"><Button variant="outline-primary">Insert RTO Staff Data</Button></Link>  {'       '}
                    <Link to ="/insert_insurance"><Button variant="outline-primary">Insert Insurance Data</Button></Link>  {'       '}

        </div>
    );

}

export default Adminpage;
