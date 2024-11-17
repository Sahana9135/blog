import React from "react";
import './Email.css';

function Esign(){
    return(
        <>
            <div className="econtainer">
            
            <h1><i class="fa-solid fa-envelope fa-xl"></i>&nbsp; &nbsp;Sign up with Email</h1>
            <br /><br /><br />
            <div className="eip">
                <input type="email" placeholder="Enter your Email"/><br />
                <input type="password" placeholder="Password" />
            </div>
            <br /><br />
            <button>Sign in</button>
            </div>
            <br /><br /><br /><br />
        </>

    )
}

export default Esign;