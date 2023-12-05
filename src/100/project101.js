import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import List_typ1 from "../component/study/listtype";


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



    
    function Header1(props){
        return(
        
            <header1>
            <h1><a href="#" onClick={function(event){ event.preventDefault(); props.onChangeMode();}}>{props.title}</a></h1>
            </header1>
        )
        }
   



        function Nav1(props){
       
       
            // const liaali = 0;
            // for( let i=0; i < props.topics.length; i++){
            //      liaali[i] = <li><a>text</a></li> ;
            
            // }
                const navinner = []
                for (let i=0; i < props.topics.length; i++){
                let num = props.topics[i];
                navinner.push( <li style={{ display: 'inline-block',margin:'20px', cursor:"pointer" }}> <a id={num.id} href={num.link} onClick={event=>{ event.preventDefault(); props.onChangeMode(Number(event.target.id)); }} > {num.title} </a> </li>)
                }

                return(
                    <nav1>
                    <ol>
                        {navinner}
                    </ol>
                    </nav1> 
                )
        }



 

export default function ProJect101(){ 

        var topics=[
        {id:1 , title:"http", body:"html is ...", href:"#  " },
        {id:2 , title:"javascript", body:"javascript is ...", href:"#  " },
        {id:3 , title:"css", body:"css is ...", href:"#  " },
        {id:4 , title:"java", body:"java is ...", href:"#  " }
        ]

        const [mode,setMode] = useState("welcome");
        const [id, setId] = useState(null);

        console.log(mode)
        function chaButton(){if(mode === "welcome" ){  setMode("bye")   } else { setMode("welcome")}}
         let contnet = null;
        if(mode === "welcome"){ contnet = <Article1 title="welcome" h3="웰컴" sub=" content =null mode= welcom}  ); }" ></Article1>
                                }
        else if(mode === "bye"){
        let title, body = null;
        for(let i = 0 ; i<topics.length; i++ ){
                                                console.log(topics[i].id, id)
                                                if(topics[i].id === id){
                                                console.log(i)
                                                title = topics[i].title;
                                                body = topics[i].body;
                                                }

        else if (mode === "create"){
<create></create>


        }
                            

                        }
        contnet = <Article1 title={title} h3="바이" sub={body} ></Article1>
    };

    return(

<div>
    <List_typ1 title="props 설명" day="2023-11-28" sub="test testes" >
    </List_typ1>

<Header1 title="camical"></Header1>
<Article1 title="프롭스 설명" h3="프롭스 추가" sub=" funciton article1(props){ retrun( {props.title}  ); }" ></Article1>
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

<List_typ1 title="이벤트2" day="2023-11-30" sub=" Nav1에 클릭시 id 얼랏 뛰우기

<Nav1 onChangeMode={(id)=>{alert(id)}} topics={topics}></Nav1>
/ 중요 !! onClick={e=>{}} 파라미터가 1개인 경우에는 () 빼도 된다.

<a id={num.id} href={num.link} onClick={event=>{ event.preventDefault(); props.onChangeMode(event.target.id); }} > {num.title} </a>
onclik했을때 event 발생하면 => {event.preventdefault() 기본기능을 막음... props.onchangeMode(envet.target.id) --> <a id={num.id}  이해가 안됨....}
" >

</List_typ1>
<Nav1 onChangeMode={(id)=>{alert(id)}} topics={topics}></Nav1>


<List_typ1 title="userstate" day="2023-11-30" sub=" 유저스테이트 를 이용하여 기본값 바꾸기 
const _mode =  useState('welcome');
const  mode = _mode[0];
const  setMode = _mode[1];
=>  const [mode,setMode] = useState('welcome');


" ></List_typ1>
<button style={{padding:"10px",width:"100px",fontSize:"14px"}} onClick={chaButton }> test</button>
{contnet}
 


<List_typ1 title="userstate2" day="2023-12-02" sub=" 유저스테이트를 이용하여 
메뉴를 클릭했을때 
값 바꾸기  실패 / 
다음에 꼭 다시해보기
" ></List_typ1>



<List_typ1 title="Create" day="2023-12-02" sub=" 
" ></List_typ1>

<a href="/create" onClick={
    (event)=>{event.preventDefault();
        setMode("Create");
        
    }

  
}>Create</a>

<ul>
    <li><a href="/create" onClick={(event)=>{ event.preventDefault(); setMode('CREATE');}}> Create </a></li>
    <li><a href="/Udate" onClick={(event)=>{ event.preventDefault(); setMode('CREATE');}}> update </a></li>
</ul>         


</div>
    );
}