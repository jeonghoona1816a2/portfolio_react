function Header1(props){
return(

    <header1>
    <h1>{props.title}</h1>
    </header1>
)
}
function Nav1(props){
return(
<nav1>
<ol>
<li><a href={props.link1}>{props.menu1}</a>  </li>
<li><a href={props.link2}>{props.menu2}</a>  </li>
<li><a href={props.link2}>{props.menu3}</a>  </li>
<li><a href={props.link4}>{props.menu4}</a>  </li>

</ol>
</nav1>

)}

function Nav2(props){
   const topics=[
{id:1 , title:"http", body:"html is ...", href:"#  " },
{id:2 , title:"javascript", body:"javascript is ...", href:"#  " },
{id:3 , title:"css", body:"css is ...", href:"#  " },
{id:4 , title:"java", body:"java is ...", href:"#  " }
    
   ]
return(
<nav1>
<ol>
<li><a href={props.link1}>{props.menu1}</a>  </li>
<li><a href={props.link2}>{props.menu2}</a>  </li>
<li><a href={props.link2}>{props.menu3}</a>  </li>
<li><a href={props.link4}>{props.menu4}</a>  </li>

</ol>
</nav1>

)}
function Article1(props){
return(
<article1> {props.title}
    <h3>{props.h3}</h3>
   {props.sub}
</article1>


)


};
export default function ProJect101(){ 
    return(

<div>
<Header1 title="가나다라마바사"></Header1>
<Header1 title="camical"></Header1>
<Nav1 menu1="test1" menu2="test2" menu3="test3" menu4="test4"></Nav1>
<Article1 title="프롭스 설명" h3="프롭스 추가" sub=" funciton article1(props){ retrun( {props.title}  ); }" ></Article1>

</div>
    );
}