import React from "react";
import './Log.css';
import { Link } from "react-router-dom";
import Alter from "./Alter";

function NewUser(){
    return(
        <>
        <Alter />
        <div className="lcontainer">
        <ul className ="lsign">
            <li><button><Link to="/google"><i class="fa-brands fa-google fa-lg"></i>&nbsp;&nbsp;&nbsp;Sign Up with Google</Link></button></li>
            <br /> 
            <li><button><Link to="/facebook">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-brands fa-facebook fa-lg"></i> &nbsp;&nbsp;Sign Up With Facebook</Link></button></li> 
            <br />      
            <li><button><Link to="/email"><i class="fa-solid fa-envelope fa-lg"></i>&nbsp;&nbsp;&nbsp;&nbsp;Sign Up with Email</Link></button></li>
        </ul>
       <div className="anchor">       
        <a href="">already have an account ?</a><br />
        <a href="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>Sign in</u></a>
        </div>
        </div>
        </>
    )

}

export default NewUser;