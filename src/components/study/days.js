import dummy from '../data/data.json';
export default function Days(){
  
    const dayNum = 1;
    const wordList = dummy.words.filter(words => words.day === dayNum)
    console.log(wordList)
    return(
   
<table className='table_cm'>
<tbody>
{wordList.map( words => (<tr><td>{words.eng}</td><td>{words.kor}</td> </tr>))}
</tbody>
</table>


  
)




};