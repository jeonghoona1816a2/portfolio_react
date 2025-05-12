

import React, {useState,useEffect} from "react";
export default function ProJect301(){
 
 
    const [currentTime,setCurrentTime] = useState('');

    useEffect(() => {

    function outDate(){
        let now = new Date();
        setCurrentTime("현제 시간 = " + now)
    }
    outDate();

    })

 

    return(
    
    <div>

<p>현시간을표시합니다. {currentTime}</p>




    </div>
    
    
    );
    
    };