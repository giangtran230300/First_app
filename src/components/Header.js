import React from "react";
import '../assets/css/Header.css';


export default function Header(){
    return(
        <nav className="flex-container">
            
                <img src="../assets/images/newlogo.png" alt="logo"/>
                <ul className="flex-item-left list">
                    <li><a className="group-link" href="./Homepage.js">Homepage</a></li>
                    <li><a className="group-link" href="#">Dashboard</a></li>
                </ul>

                <ul className="flex-item-right list">
                    <li><a className="group-link" href="#">Account</a></li>
                    <li><a className="group-link" href="./LoginPage.js">Login</a></li>
                    <li><a className="group-link" href="#">SignUp</a></li>
                </ul>

        </nav>
    )
    
}