import { useState } from "react";
export default function Props(Props,{age}){
const [Age,setAge] = useState(Props.age);
const Msage = Age > 19 ? "성인":"미성년";
return(
  
    <div>
    
    <h3>사람 이전 {Props.age}</h3>
    
    <button className="btn_cm"  onClick={
        () => { setAge(Age + 1);
        } 
    } >up </button>


<button className="btn_cm"  onClick={
        () => { setAge(Age - 1);
        } 
    } > down </button>
   <div>{Age}{Msage}</div>
    
    </div>
    
    
    
    );
};