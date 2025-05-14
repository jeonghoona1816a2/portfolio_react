import logo from './logo.svg';
import './css/App.css';
import './css/Common.css';
import './css/Mobile.css';
import React, { useState }from 'react';
import Lnb from './component/lnb';
import Home from './100/home';
import Project101 from './100/project101';
import Project201 from './200/project201';
import Project301 from './300/project301';
import Project401 from './400/project401';
import Project501 from './500/project501';
import Project601 from './600/project601';

import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return ( 
<div className="App">

<div className='warp'>

<BrowserRouter>
<div className='header'>
<h1> <a>전정훈 포트폴리오 </a> </h1>
<nav className='gnb' > 
<Link to="/">home</Link>
<Link to="project101">reactStart</Link>
<Link to="project201">javascript</Link>
<Link to="project301">javaScript+jquery 정복</Link>
<Link to="project401">모던자바스크립트 deep dive</Link>
<Link to="project501">초보자를위한 리엑트 100제</Link>
<Link to="project601">초보자를위한 리엑트 200제</Link>
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
  <Route path="Project501" element={<Project501/>} />
  <Route path="Project601" element={<Project601/>} />
  
</Routes>
</div>

</div>
</BrowserRouter>
</div>



    </div>
  );
}


export default App;
