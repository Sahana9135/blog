import React from "react";
import './Account.css';


function NewAccount() {
    return (
        <>
            <div className="acontainer">
                <h1>Explore World</h1>
                <div className="line"></div>
                <br /><br />
                <h3>Almost There</h3>

                <h2>Finish Creating Your Account</h2>
                <h2>for full expeience</h2>
                <br />
                <form action="" className="box">
                    <input className="ip" type="text" placeholder="Your full name" required />
                    <br />
                    <input className="ip" type="email" placeholder="Your email" required />
                    <br />
                    <a href="#" className="bg-btn">Create Account</a>

                    <br />
                    <div class="container" >
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                        <span class="psw"> <a href="#">Forgot password?</a></span>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NewAccount;
