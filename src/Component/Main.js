import React from "react";
import "./style.css";
export default function Main(props){
    return(
        
        <main className={props.darkMode ? "dark ": ""}>   
            <h1 className="head1">Fun facts about React</h1>
            <ul >
                <li className="listtext">Was first released in 2013</li>
                <li className="listtext">Was originally created by Jordan Walke</li>
                <li className="listtext">Has well over 100K stars on GitHub</li>
                <li className="listtext">Is maintained by Facebook</li>
                <li className="listtext">Powers thousands of enterprise apps, including mobile apps</li>

            </ul>
        </main>

    );
}