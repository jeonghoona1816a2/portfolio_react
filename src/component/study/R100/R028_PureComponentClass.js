import React,{ PureComponent } from "react";

class R029_PureComponentClass extends  PureComponent{

constructor (props){
super(props);
this.state = {
    StateString: 'react', StateArrayObj:['react',{react:'200'}]
}
}

buttonClick = (type) =>{
if(type === 'String'){ this.setState({StateString:'react'})}
else{this.setState({StateArrayObj: ['react', {react:'200'}]})}
}

render(){
    console.log(' R028 render() 실행')
return(
<div>
<button onClick={e=>{this.buttonClick('String'); console.log('String')}}> 문자열 변경 </button>
<button onClick={e=>{this.buttonClick('ArrayObject');console.log('ArrayObject')}}> 객체 배열 변경시 </button>
</div>
)
}


}
export default R029_PureComponentClass;