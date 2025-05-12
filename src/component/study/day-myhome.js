import dummy from '../data/data.json';
export default function day(){
    console.log(dummy)


    return(
   
<table>

<tbody>

{dummy.words.map( words => (<tr><td>1{words.eng}</td><td>{words.kor}</td> </tr>))}



</tbody>



</table>


  
)




};