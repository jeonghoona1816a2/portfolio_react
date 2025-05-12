
import React,{useState,useEffect} from "react";

/** useState: 이 훅은 함수형 컴포넌트에 상태 변수를 추가할 수 있게 해줍니다.  setContents는 contents의 값을 업데이트하는 함수입니다. */

function R031_ReactHook( props){
/**useState: 이 훅은 함수형 컴포넌트에 상태 변수를 추가할 수 있게 
 * 해줍니다. 이 컴포넌트에서 contents는 '[This is react]'
 *  문자열로 초기화된 상태 변수이며, setContents는 contents의 
 * 값을 업데이트하는 함수입니다. */
const [contents, setContents] = useState('[This is react]');


useEffect (()=>{console.log('useEffect')});

return(
<div style={{padding:"0px"}}>
<h2>{contents}</h2>
<button onClick={()=>{setContents('[this is Hook]')}}> 버튼 </button>
</div>
)
}

export default R031_ReactHook;