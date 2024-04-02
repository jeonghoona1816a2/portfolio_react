import React,{Component} from "react";
class R033_RetrunMap extends Component{

render(){
    const element_Arrray = [
    <li>react</li>,<li>200</li>,<li>Array map</li>
    ]
/** .map() 다른 예제  */
const items = ['apple1','apple2','apple3','apple4','apple5','apple6'];

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]


return(
    <div>
<ul>
{element_Arrray.map((array_val) => array_val) }
</ul>

<table style={{border:'1px solid #fff'}}>
<tr>
{/* {items.map((item,index)=>{<li title={index}>{item} </li>})} */}
{items.map((item,index)=><td style={{border:'1px solid #fff'}} title={index+1}>{item} </td>)}
</tr>

</table>

    </div>

)
}

}
export default R033_RetrunMap;