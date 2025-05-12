import logo from './logo.svg';
import './css/App.css';
import './css/Common.css';
import './css/Mobile.css';
import React, { useState }from 'react';
import Header from './component/header';
import Lnb from './component/lnb';
import State1 from './component/study/state1';
import Props from './component/study/props';
import StudyTest from './component/study/studyTest';
import Username from './component/study/userName';
import DayList from './component/study/daylist';
import Days from './component/study/days';
import Project101 from './100/project101';
import Project201 from './200/project201';
import Project301 from './300/project301';
import Project401 from './400/project401';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './100/home';

function App() {
// const bgName='React 개발';/** */

// let [listTile,titleChange] = useState(['유저스테이트', '디스트럭쳐', 'state여야지 스무스']);
// let [faNum,faNumchange] = useState(0);
// let posts = " 안녕하세요 데이터 바인딩 합니다.";
// let posts1 = "abc"
// let posts2 = {color:'#ccc',fontSize:"30px"};

// function showText(e){
// console.log(e.target.value);
// };
//?** sowText 쓰지 않고 바로 사용 하기


/**function nameChange(){
  titleChange(['userstate는', '첫번째는 사용시', '두번째는 바꿀때 사용']);
}; */
// function nameChange(){
// var newNameArray = [...listTile];/** deep copy ...넣으면 스페이스오퍼레이터 이용 :중가로 소가로 제거 란 의미 */
// newNameArray[0] = "스테이트 데이터 변경"
// titleChange(newNameArray);
// };
/** 페이지 구분은 라이투를 써야함 하지만 오늘은 모달창만 */

function clBtn (ag){ console.log(ag) }

function ccc(){   return 1000; };
  return ( 


<div className="App">
<Header/> 
  <div className='contaner'>
<Lnb/>
<div className='content'>
  {// <div style={posts2}>   {posts}</div>
//<div className='posts1'>  {posts}<img src={ logo }></img></div>
} 
{/* <div ><button onClick={clBtn(1111111)}></button></div> */}
<div className='list_typ1'>
<BrowserRouter>
<nav > 
<Link to="/">home</Link>
<Link to="project101">page1</Link>
<Link to="project201">page2</Link>
<Link to="project301">page3</Link>
<Link to="project401">page4</Link>
</nav>

<Routes>
  <Route path="Home" element={<Home/>} />
  <Route path="Project101" element={<Project101/>} />
  <Route path="Project201" element={<Project201/>} />
  <Route path="Project301" element={<Project301/>} />
  <Route path="Project401" element={<Project401/>} />
</Routes>

</BrowserRouter>


<div className='title'><h3>유저스테이트</h3><div className='fave'><a onClick={ ()=>{faNumchange( faNum + 1)}}>👍</a><span>{faNum}</span></div></div>
<span>2023년 11월 14일</span>
<State1></State1><State1></State1>
</div>
<div className='list_typ1'>
<div className='title'>
<h3>props : properties</h3><div className='fave'><a onClick={ ()=>{faNumchange( faNum + 1)}}>👍</a><span>{faNum}</span></div></div>
<span>2023년 11월 15일</span>

<Props age={22}/>
<Props age={50}/>
<Props age={10}/>

</div>


<div className='list_typ1'>
<h3>studytest</h3>
<span>2월 15일</span>
<Username name ={"jeone"}/>
<StudyTest test21 ={1000}/>
<StudyTest test21 ={2000}/>
</div>
<div className='list_typ1'>
<h3>{listTile[2]}</h3>
<span>2월 15일</span>

</div>


</div>

</div>



    </div>
  );
}
/** 대문자로 만든다. 
 * 상위 cmponent에서 만든 state 쓰려면 props 문법 
 * 이용해야함 mpn stop
 * 
*/


export default App;
