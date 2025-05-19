
export default function List_typ1(props){

return(
    
    
    <div className='list_typ1'>
    <div className='title'><h3>{props.title}</h3>      <div>  <span>{props.day}</span> </div>  <div className='fave'><a >👍</a><span> 링클 </span></div></div>

    <div dangerouslySetInnerHTML={{ __html: props.sub }}></div>
    </div>




);


}


