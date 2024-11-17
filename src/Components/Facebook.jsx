import React from "react";
import './Facebook.css';


function Fsign(){
    return(
        <>
            <div className="fcontainer">
                <h1><i class="fa-brands fa-facebook fa-lg"></i>acebook</h1>
                <br /><br /><br /><br />
                <div className="fip">
                    <input type="email" placeholder="Enter your mail id" required/>
                    <br />
                    <input type="password" placeholder="Password"  required/>
                </div>
                <br />
                <button>Sign in</button>
            </div>
        </>

    )
}
export default Fsign;