import React from "react";
import './Google.css';

function Gsign(){
    return(
        <>
            <div className="head">
                <h2><i class="fa-brands fa-google fa-xl"></i> &nbsp;&nbsp;&nbsp;Sign Up With Google</h2>
                <hr />
            </div>
            <br />

            <div className="gcontainer">
                <h1>Choose an account</h1>
                <br />

                <p id="user"><i class="fa-solid fa-circle-user fa-2xl"></i> &nbsp;&nbsp;&nbsp;User name</p>
                <p id="mail">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;abc@gmail.com</p>
                <br />
                <div className="hr"></div>
                <br />
                <p><i class="fa-solid fa-circle-user fa-2xl"></i> &nbsp;&nbsp;&nbsp;Use another account</p>
                <br />
                <div className="hr"></div>
            </div>



        
        </>
    )
}

export default Gsign;