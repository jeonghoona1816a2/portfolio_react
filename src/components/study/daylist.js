import dummy from '../data/data.json';
export default function DayList(){

return(
<table className='table_cm '>
<tbody><tr>
{dummy.days.map(day=>( <td>{day.day}</td>  ))}
</tr>  
</tbody>

</table>
   

);
}