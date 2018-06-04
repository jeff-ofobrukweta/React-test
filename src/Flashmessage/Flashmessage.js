import React from 'react';
import './Flashmessage.css';



const Flashmessage =(props)=>{
   return (
            <div className="flash" >
            <span id="main" className="fade-In">{props.children}</span>
            </div>
        );
}

export default Flashmessage;