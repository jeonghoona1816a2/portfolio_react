import logo from './logo.svg';
import './css/App.css';
import './css/Common.css';
import './css/Mobile.css';
import React, { useState }from 'react';
import Header from './component/header';
import Lnb from './component/lnb';
import State1 from './component/study/state1';
import Props from './component/study/props';

import Home from './100/home';
import Project101 from './100/project101';
import Project201 from './200/project201';
import Project301 from './300/project301';
import Project401 from './400/project401';
import Project501 from './500/project501';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';


function App() {
  return ( 
<div className="App">

<div className='warp'>

<BrowserRouter>
<div className='header'>
<h1> react</h1>
<nav className='gnb' > 
<Link to="/">home</Link>
<Link to="project101">page1</Link>
<Link to="project201">page2</Link>
<Link to="project301">page3</Link>
<Link to="project401">page4</Link>
<Link to="project501">page5</Link>
</nav>
</div>
<div className='container'>
<Lnb/>
<div className='content'>
<Routes>
  <Route path="Home" element={<Home/>} />
  <Route path="Project101" element={<Project101/>} />
  <Route path="Project201" element={<Project201/>} />
  <Route path="Project301" element={<Project301/>} />
  <Route path="Project401" element={<Project401/>} />
</Routes>

<div className='list_typ1'>
<div className='title'><h3>유저스테이트</h3><div className='fave'><a >👍</a><span> 링클 </span></div></div>
<span>2023년 11월 14일</span>
<State1></State1><State1></State1>
</div>
<div className='list_typ1'>

<div className='title'><h3>유저스테이트</h3><div className='fave'><a >👍</a><span> 링클 </span></div></div>
<span>2023년 11월 15일</span>

<Props age={22}/>
<Props age={50}/>
<Props age={10}/>

</div>
</div>

</div>
</BrowserRouter>
</div>



    </div>
  );
}


export default App;
