import React from "react";
import logo from './logo.svg';
import "./style.css";

export default function Navbar(props){
    return(
        <div className="container-fluid">
            
            <nav  className={props.darkMode ? "dark": ""}>
            
                
                <img src={logo} className="reatlogo" ></img>
                
                    <div className="navtext">
                        React Course - Project 1
                    </div>
                <div className="tog" >
                    <p className="toglight">Light</p>
                    <div className="togslider"
                    onClick={props.toggleDarkMode} >
                        <div className="togcircle">

                        </div>
                    </div>
                    <p className="togdark">Dark</p>
                </div>

            
            </nav>
            
            
        </div>
    )
}