import React,{Component} from "react";

class R025_SetState extends Component{

constructor(props){
super(props);
this.state = {StateString: 'react',}

}

StateChange = (flag) => {
if(flag == 'direct'){this.state.StateString = '리엑트'};
if(flag == 'setstate'){this.setState({StateString:'리액트'})};
}

    render(){
        return(<div style={{padding:"20px"}}>

<button onClick={(e)=>{this.StateChange('direct',e)}}> state 직접병견 </button>

<button onClick={(e)=>{this.StateChange('setstate',e)}}> setStarte 직접병견 </button>


<p></p>
[state 변경] starteStating : {this.state.StateString}
{/* React에서는 상태를 직접 변경하는 것을 권장하지 않으며, 대신 setState()를 사용하여 상태를 변경해야 합니다. */}
        </div>)


    }


}

export default R025_SetState;