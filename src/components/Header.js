import React from "react";
import '../assets/css/Header.css'

export default function Header(){
    return(
        <header className="flex-container">
            <div className="flex-item-left ">
                <img src="" alt="logo"/>
                <ul className="list">
                    <li>Homepage</li>
                    <li>Dashboard</li>
                </ul>
            </div>

            <div className="flex-item-right">
                <ul className="list">
                    <li>Account</li>
                    <li>Login</li>
                    <li>Signup</li>
                </ul>
            </div>
            
                
            
        </header>
    )
    
}