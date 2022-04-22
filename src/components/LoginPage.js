import React from "react";

import '../assets/css/LoginPage.css';


export default function LoginPage(){
    return(
        <form className="LoginPage">
        <h1>Login page</h1>
        <div className="MainContent">

            <label for="name">User name: </label>
            <input type="text" id="name" name="name" placeholder="Username"/> <br/> 

            <label for="password">Password: </label>
            <input type="password" id="password" name="password" placeholder="Password"/> <br/> 

            <button type="submit" className="btn btn-success" >Submit</button>
        </div>
        <p>You don't have account yet? <a href="./SignUp.js" target="blank">Sign up</a> </p>
            
        </form>
    )
}