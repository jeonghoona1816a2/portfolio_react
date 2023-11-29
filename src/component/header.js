
import React from 'react';
import dummy from '../component/data/data.json';
import {BrowserRouter, Link,Routes,Route } from 'react-router-dom';
export default function Header(){

return(

<div className='black-nav header'>

<nav className='gnb'> 
<Link to="/">home</Link>
<Link to="project101">page1</Link>
<Link to="project201">page2</Link>
<Link to="project301">page3</Link>
<Link to="project401">page4</Link>
<Link to="project501">page5</Link>
</nav>

{/* <div className='gnb'><ul> {dummy.menu.map( name=> ( <li> {name.name} </li>  ))}</ul></div> */}

{/* <nav> <Link to="/">home</Link>
 */}

{/* 
</nav> */}



</div>

);


}