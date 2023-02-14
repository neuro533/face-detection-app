import React from "react";
import './Logo.css';
import logo from './logo.png';
import Tilt from 'react-parallax-tilt';

function Logo(){
    return(
        <div className="ma4 mt0">
         <Tilt className="Tilt shadow-2 br2" style={{width:130,height:130}}>       
         <div>
         <img  src={logo}  alt='ImageNotFound'/>   
         </div>
         </Tilt>       

        </div>

    );

}

export default Logo;
