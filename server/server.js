const express=require("express");
const app=express();
const mysql=require('mysql');
const cors=require('cors');
const { create } = require("express-handlebars");
const { param } = require("express/lib/application");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection(
    {
        user:"root",
        host: "localhost",
        password: "hello",
        database: "rto",
        port: 3310,
    });
app.get('/insurance',(res,req)=>{
    db.query("SELECT * FROM insurance",(err,result)=>{
    if(err)
    console.log(err); 
    else
    req.send(result);
     })
}); 

app.get('/drivers_application',(res,req)=>{
    db.query("SELECT * FROM drivers_application",(err,rows,fields)=>{
    if(!err)
    console.log(rows);
    else
    console.log(err);  
     })
}); 

app.get('/drivers_license',(res,req)=>{
    db.query("SELECT * FROM drivers_license",(err,rows,fields)=>{
    if(!err)
    console.log(rows);
    else
    console.log(err);  
     })
}); 


app.get('/login_details',(res,req)=>{
    db.query("SELECT * FROM login_details",(err,rows,fields)=>{
    if(!err)
    console.log(rows);
    else
    console.log(err);  
     })
}); 

app.get('/registered_vehicle',(res,req)=>{
    db.query("SELECT * FROM registered_vehicle",(err,rows,fields)=>{
    if(!err)
    console.log(rows);
    else
    console.log(err);  
     })
}); 

app.get('/rto_office',(res,req)=>{
    db.query("SELECT * FROM rto_office",(err,rows,fields)=>{
    if(!err)
    console.log(rows);
    else
    console.log(err);  
     })
}); 

app.get('/tax',(res,req)=>{
    db.query("SELECT * FROM tax",(err,rows,fields)=>{
    if(!err)
    console.log(rows);
    else
    console.log(err);  
     })
}); 

app.get('/staff',(res,req)=>{
    db.query("SELECT * FROM staff",(err,rows,fields)=>{
    if(!err)
    console.log(rows);
    else
    console.log(err);  
     })
}); 

app.get('/vehicle_app',(res,req)=>{
    db.query("SELECT * FROM vehicle_app",(err,rows,fields)=>{
    if(!err)
   console.log(rows);
    else
    console.log(err);  
     })
}); 
app.get('/rto_office/:id',(req,res)=>{
    db.query('SELECT * FROM rto_office WHERE PINCODE = ?',[req.params.id],(err,rows,fields)=>{
    if(!err)
    res.send(rows);
    else
    console.log(err);  
     })
}); 

app.post('/insert_driver_app',(req,res)=>{
    const DOB=req.body.DOB;
    const Photo=req.body.Photo;
    const Proof=req.body.Proof;
    const Applicant_name=req.body.Applicant_name;
    const Contact=req.body.Contact;
    const Preffered_RTO=req.body.Preffered_RTO;
    const Address=req.body.Address;
    const Application_no=req.body.Application_no;

    db.query("INSERT INTO drivers_application VALUES(?,?,?,?,?,?,?,?)",[DOB,Photo,Proof,Applicant_name,Contact,Preffered_RTO,Address,Application_no],(err,rows,fields)=>{
    if(!err)
    console.log('Values inserted');
    else
    console.log(err);
    })
});




app.get('/delete_rto_office/:id',(req,res)=>{
    db.query('DELETE FROM rto_office WHERE Office_ID = ?',[req.params.id],(err,rows,fields)=>{
    if(!err){
    res.send(rows);
    }
    else
    console.log(err);  
        })
});


app.get('/get_vehicle_app',(req,res)=>{
    db.query("SELECT * FROM vehicle_app",(err,rows)=>{
    if(!err)
   res.send(rows);
    else
    console.log(err);  
     })
});

app.post('/insert_vehicle',(req,res)=>{
   
    const Vehicle_Class=req.body.Vehicle_Class;
    const Month_Year_Mfg=req.body.Month_Year_Mfg;
    const Owner_contact=req.body.Owner_contact;
    const Type_of_body=req.body.Type_of_body;
    const Fuel_Used=req.body.Fuel_Used;
    const Preffered_RTO=req.body.Preffered_RTO;
    const Maker_name=req.body.Maker_name;
    const Owner_name=req.body.Owner_name;
    const Application_no=req.body.Application_no;
    
    db.query("INSERT INTO vehicle_app (Vehicle_Class,Month_Year_Mfg,Owner_contact,Type_of_body,Fuel_Used,Preffered_RTO,Maker_name,Owner_name,Application_no) VALUES(?,?,?,?,?,?,?,?,?)",[Vehicle_Class,Month_Year_Mfg,Owner_contact,Type_of_body,Fuel_Used,Preffered_RTO,Maker_name,Owner_name,Application_no],(err,rows,fields)=>{
    if(!err)
    console.log('Values inserted');
    else
    console.log(err);
    })
    });

app.post('/insert_login_details',(req,res)=>{
   
    const userid=req.body.userid;
    const email=req.body.email;
    const password=req.body.password;
    const code=req.body.code;
    const type=req.body.type;
    
    db.query("INSERT INTO login_details (UID,Email,user_type,Security_code,Pasword) VALUES(?,?,?,?,?)",[userid,email,type,code,password],(err,rows,fields)=>{
    if(!err)
    console.log('Values inserted');
    else
    console.log(err);
    })
    });

    app.post('/get_rto_office',(req,res)=>{
        const pin=req.body.Pincode;
        db.query('SELECT * FROM rto_office WHERE PINCODE = ?',[pin],(err,result)=>{
        if(err)
        console.log(err);
        else
        res.send(result);  
         })
    }); 



    app.post('/get_insurance',(req,res)=>{
    
        const Insurance_number=req.body.Insurance_number;
        
        db.query('SELECT * FROM insurance WHERE Insurance_number = ?',[Insurance_number],(err,result)=>{
        if(err)
        console.log(err);
        else
        res.send(result);  
         })
    }); 


    app.post('/get_tax',(req,res)=>{
    
        const RegNo=req.body.Reg_number;
        
        db.query('SELECT * FROM tax WHERE Reg_number = ?',[RegNo],(err,result)=>{
        if(err)
        console.log(err);
        else
        res.send(result);  
         })
    }); 

    app.post('/get_staff',(req,res)=>{
        const RTOId=req.body.OfficeID
        console.log(RTOId);
        db.query('SELECT * FROM staff WHERE Office_ID = ?',[RTOId],(err,result)=>{
        if(err)
        console.log(err);
        else
        res.send(result);  
         })
    }); 



    app.post('/insert_staff',(req,res)=>{
        const Staffname=req.body.Staffname;
        const StaffID=req.body.Staffid;
        const StaffContact=req.body.StaffContact;
        const StaffSalary=req.body.StaffSalary;
        const StaffPos=req.body.StaffPosition;
        const StaffOID=req.body.StaffOID;
        
        db.query("INSERT INTO staff (Staff_ID,Staff_name,Contact,Salary,Position,Office_ID) VALUES(?,?,?,?,?,?)",[StaffID,Staffname,StaffContact,StaffSalary,StaffPos,StaffOID],(err,rows,fields)=>{
        if(!err)
        console.log('Values inserted');
        else
        console.log(err);
        })
    });


    app.post('/insert_rto',(req,res)=>{
        const RTOstate=req.body.State;
        const RTOdistrict=req.body.District;
        const RTOaddress=req.body.Address;
        const RTOpin=req.body.Pincode;
        const RTOcontact=req.body.Contact;
        const RTOid=req.body.OfficeID;
        
        db.query("INSERT INTO rto_office (State,District,Address,Pincode,Contact,Office_ID) VALUES(?,?,?,?,?,?)",[RTOstate,RTOdistrict,RTOaddress,RTOpin,RTOcontact,RTOid],(err,rows,fields)=>{
        if(!err)
        console.log('Values inserted');
        else
        console.log(err);
        })
    });

    app.post('/custlogin', (req,res)=>{
        const email=req.body.email;
        const password=req.body.password;
        db.query("SELECT * FROM LOGIN_DETAILS WHERE EMAIL=? AND PASWORD=?",
        [email,password],
        (err,result)=>{
            if(err)
            {
                console.log(err);
            }
            else{
                res.send(result);
            }
        });
    })




    app.post('/insert_insurance',(req,res)=>{
   
        const Regd_number=req.body.Regd_number;
        const Date_of_insurance=req.body.Date_of_insurance;
        const Ending_of_insurance=req.body.Ending_of_insurance;
        const Insurance_number=req.body.Insurance_number;
        const Amount=req.body.Amount;
        
        db.query("INSERT INTO insurance (Regd_number,Date_of_insurance,Ending_of_insurance,Insurance_number,Amount) VALUES(?,?,?,?,?)",[Regd_number,Date_of_insurance,Ending_of_insurance,Insurance_number,Amount],(err,rows,fields)=>{
        if(!err)
        console.log('Values inserted');
        else
        console.log(err);
        })
        });

        app.post('/insert_tax',(req,res)=>{

            const Invoice_ID=req.body.Invoice_ID;
            const Amount=req.body.Amount;
            const Type_of_vehicle=req.body.Type_of_vehicle;
            const Payment_methods=req.body.Payment_methods;
            const Reg_number=req.body.Reg_number;
            
            db.query("INSERT INTO tax (Invoice_ID,Amount,Type_of_vehicle,Payment_methods,Reg_number) VALUES(?,?,?,?,?)",[Invoice_ID,Amount,Type_of_vehicle,Payment_methods,Reg_number],(err,rows,fields)=>{
            if(!err)
            console.log('Values inserted');
            else
            console.log(err);
            })
            });
        
            app.post('/insert_registered_vehicle',(req,res)=>{
   
                const Regd_Owner=req.body.Regd_Owner;
                const Vehicle_Class=req.body.Vehicle_Class;
                const Regd_Number=req.body.Regd_Number;
                const Fuel_used=req.body.Fuel_used;
                const Maker_class=req.body.Maker_class;
                const Month_Year_MFG=req.body.Month_Year_MFG;
                const RTO_ID=req.body.RTO_ID;
                const Type_of_body=req.body.Type_of_body;
                
                db.query("INSERT INTO registered_vehicle (Regd_Owner,Vehicle_Class,Regd_Number,Fuel_used,Maker_class,Month_Year_MFG,RTO_ID,Type_of_body) VALUES(?,?,?,?,?,?,?,?)",[Regd_Owner,Vehicle_Class,Regd_Number,Fuel_used,Maker_class,Month_Year_MFG,RTO_ID,Type_of_body],(err,rows,fields)=>{
                if(!err)
                console.log('Values inserted');
                else
                console.log(err);
                })
                }); 

                app.post('/delete_vehicle_app',(req,res)=>{
                    const Owner_name=req.body.Owner_name;
                    
                    db.query("DELETE FROM vehicle_app WHERE Owner_name = ?",[Owner_name],(err,rows,fields)=>{
                    if(!err)
                    console.log('Values DELETED');
                    else
                    console.log(err);
                    })
                    });


                    app.post('/insert_registered_vehicle',(req,res)=>{
   
                        const Regd_Owner=req.body.Regd_Owner;
                        const Vehicle_Class=req.body.Vehicle_Class;
                        const Regd_Number=req.body.Regd_Number;
                        const Fuel_used=req.body.Fuel_used;
                        const Maker_class=req.body.Maker_class;
                        const Month_Year_MFG=req.body.Month_Year_MFG;
                        const RTO_ID=req.body.RTO_ID;
                        const Type_of_body=req.body.Type_of_body;
                        
                        db.query("INSERT INTO registered_vehicle (Regd_Owner,Vehicle_Class,Regd_Number,Fuel_used,Maker_class,Month_Year_MFG,RTO_ID,Type_of_body) VALUES(?,?,?,?,?,?,?,?)",[Regd_Owner,Vehicle_Class,Regd_Number,Fuel_used,Maker_class,Month_Year_MFG,RTO_ID,Type_of_body],(err,rows,fields)=>{
                        if(!err)
                        console.log('Values inserted');
                        else
                        console.log(err);
                        })
                        });
            
                        app.post('/insert_drivers_license',(req,res)=>{
               
                            const Holder_name=req.body.Holder_name;
                            const Vehicle_Class=req.body.Vehicle_Class;
                            const DL_number=req.body.DL_number;
                            const Date_of_issue=req.body.Date_of_issue;
                            const Validity=req.body.Validity;
                            const RTO_ID=req.body.RTO_ID;
                            
                            db.query("INSERT INTO drivers_license (Holder_name,Vehicle_Class,DL_number,Date_of_issue,Validity,RTO_ID) VALUES(?,?,?,?,?,?)",[Holder_name,Vehicle_Class,DL_number,Date_of_issue,Validity,RTO_ID],(err,rows,fields)=>{
                            if(!err)
                            console.log('Values inserted');
                            else
                            console.log(err);
                            })
                            });
                            app.post('/delete_drivers_application',(req,res)=>{
                                const Applicant_name=req.body.Applicant_name;
                                
                                db.query("DELETE FROM drivers_application WHERE Applicant_name = ?",[Applicant_name],(err,rows,fields)=>{
                                if(!err)
                                console.log('Values DELETED');
                                else
                                console.log(err);
                                })
                                });

                                app.get('/get_drivers_application',(req,res)=>{
                                    db.query('SELECT * FROM drivers_application',(err,rows,fields)=>{
                                    if(!err)
                                    res.send(rows);
                                    else
                                    console.log(err);  
                                     })
                                });
    app.post('/get_dl',(req,res)=>{
        const dlno=req.body.OfficeID;
        db.query('SELECT * FROM drivers_license WHERE DL_NUMBER = ?',[dlno],(err,result)=>{
        if(err)
        console.log(err);
        else
        res.send(result);  
         })
    })
    app.post('/get_vl',(req,res)=>{
        const vlno=req.body.OfficeID;
        db.query('SELECT * FROM registered_vehicle WHERE Regd_Number = ?',[vlno],(err,result)=>{
        if(err)
        console.log(err);
        else
        res.send(result);  
         })
    })

app.listen(3001,()=>{
    console.log("Server is running");
})  