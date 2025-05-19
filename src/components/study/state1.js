
import { useState } from "react";
export default function State1(){
    const [names1,setnames1] = useState('Mike') ;
    const [names2,setnames2] = useState('Mike') ;
//  let name = "Mike"
    function chageName(){

// const newName = names1 === "Mike" ? "jane" : "Mike";
// setnames1(newName);

setnames1(names1 === "Mike" ? "jane" : "Mike");



    };
    // function chageName(){
    //     name = name === "mike"?"jane":"mike"
    //     console.log(name);
    //     document.getElementById("Name").innerText=name;
    //             };


return(

  <div>

<button className="btn_cm" onClick={chageName}>{names1}</button>
<button className="btn_cm" onClick={()=>{setnames2(names2 === "Mike" ? "jane" : "Mike")}}>{names2}</button>


  </div>




);

    
};