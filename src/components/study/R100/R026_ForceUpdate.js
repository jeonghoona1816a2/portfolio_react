import React,{Component} from "react";

class R026_ForceUpdate extends Component{

    constructor(props){
super(props);
this.state = {
StateString:'react'    
}


    }

StateChage = () =>{
this.state.StateString = '리엑트';
this.forceUpdate();
}

render(){

return(

<div>
<button onClick={(e)=>{this.StateChage(e)}}>
state 직접병경
</button>
<br/>
[state 변경하기] StateString : {this.state.StateString}

</div>

)


}

// forceUpdate() 메서드는 React 컴포넌트를 강제로 다시 렌더링하며, 
// 이는 일반적으로 React의 추천 방법이 아닙니다. forceUpdate()를 사용하는 
// 것은 컴포넌트의 상태나 속성이 변경되었을 때 자동으로 업데이트되지 않고, 
// 사용자가 직접 강제로 업데이트를 실행해야 한다는 의미입니다. 이는 React의 
// 성능과 예측 가능성을 저하시킬 수 있습니다.


}



export default R026_ForceUpdate;