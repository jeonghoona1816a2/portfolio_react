function Header1(props){
return(

    <header1>
    <h1><a href="#" onClick={function(event){ event.preventDefault(); props.onChangeMode();}}>{props.title}</a></h1>
    </header1>
)
}



    function Nav1(props){
                        const navinner = []
                        for (let i=0; i < props.topics.length; i++){
                            let num = props.topics[i];
                            navinner.push( <li style={{ display: 'inline-block',margin:'20px', cursor:"pointer" }}> <a href={num.link} > {num.title} </a> </li>)
                            }

    return(
    <nav1>
    <ol>
    {navinner}
    </ol>
    </nav1> 
    )}

{/* </nav1>
<nav1>
<ol>
<li><a href={props.link1}>{props.menu1}</a>  </li>
<li><a href={props.link2}>{props.menu2}</a>  </li>
<li><a href={props.link2}>{props.menu3}</a>  </li>
<li><a href={props.link4}>{props.menu4}</a>  </li>

</ol>
</nav1> */}

// function Nav2(props){

// return(
// <nav1>
// <ol>
// <li><a href={props.link1}>{props.menu1}</a>  </li>
// <li><a href={props.link2}>{props.menu2}</a>  </li>
// <li><a href={props.link2}>{props.menu3}</a>  </li>
// <li><a href={props.link4}>{props.menu4}</a>  </li>

// </ol>
// </nav1>

// )}
    function Article1(props){
    // const sub = document.querySelector('.subtext');
    // console.log(sub)

    return(
    <article1> {props.title}
        <h3>{props.h3}</h3>
    {props.sub}
    </article1>
    )
    };


function List_typ1(props){

    return(
    <div className='list_typ1'>
    <div className='title'><h3>{props.title}</h3><div className='fave'><a >👍</a><span> 링클 </span></div></div>
    <span>{props.day}</span>
    {props.sub}
    </div>
       
    )
    }
    





export default function ProJect101(){ 
var topics=[
    {id:1 , title:"http", body:"html is ...", href:"#  " },
    {id:2 , title:"javascript", body:"javascript is ...", href:"#  " },
    {id:3 , title:"css", body:"css is ...", href:"#  " },
    {id:4 , title:"java", body:"java is ...", href:"#  " }
              ]

    return(

<div>
    <List_typ1 title="props 설명" day="2023-11-28" sub="test testes" >
    </List_typ1>



<Header1 title="camical"></Header1>

<Article1 title="프롭스 설명" h3="프롭스 추가" sub=" funciton article1(props){ retrun( {props.title}  ); }" ></Article1>
<Nav1 topics={topics}></Nav1>
<Article1 title="프롭스 설명" h3="프롭스 추가" sub=" funciton article1(props){ retrun( {props.title}  ); }" ></Article1>
<List_typ1 title="이벤트" day="2023-11-29" sub="리턴 내부에 <header1></header1>에  onChangeMode={function(){ alert('Hader')}}
변경 
리턴 내부에 <header1></header1>에  onChangeMode={()=>{ alert('Hader')}}

<header1>
<h1><a href='#' onClick={function(event){ event.preventDefault(); props.onChangeMode();}}>{props.title}</a></h1>
</header1>
컨퍼넌트 내부에 onClick 넣고 fuction(이벤트) 뽑아 준다. 이벤트 내부에는 props.onchagemode 프로그램을 넣어 주며

외부컨퍼넌트( onChageMode()=>{alert('text')} ) - 내부컨퍼넌트(event 발생하면 프리이벤트 디폴트, props.onChangeMode 실행)   )
" >

</List_typ1>
<Header1 title="가나다라마바사" onChangeMode={function(){alert('teader')}}></Header1>


</div>
    );
}