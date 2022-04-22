import React from "react";
import '../assets/css/Header.css';


export default function Header(){
    return(
        <nav className="flex-container">
            
                <img src="../assets/images/newlogo.png" alt="logo"/>
                <ul className="flex-item-left list">
                    <li><a href="./Homepage.js">Homepage</a></li>
                    <li><a href="#">Dashboard</a></li>
                </ul>

                <ul className="flex-item-right list">
                    <li><a href="#">Account</a></li>
                    <li><a href="./LoginPage.js">Login</a></li>
                    <li><a href="#">SignUp</a></li>
                </ul>

        </nav>
    )
    
}