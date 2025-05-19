import { type } from "@testing-library/user-event/dist/type";
import React,{Component} from "react";
import { Button,ButtonGroup } from "reactstrap";

class R038_reacstrapButtonGroup extends Component{

constructor(props){
super(props);
this.state = {Number:10};
}

move = (type,e) =>{
if(type === 'left'){
    this.setState({Number:this.state.Number - 1})
 } else if (type ==='right'){this.setState({Number:this.state.Number + 1 })}
 else if (type ==='reset'){this.setState({Number:this.state.Number = 10 })}
}

render(){
return(
<div>

<ButtonGroup>
<Button onClick={(e) => {this.move('right')} } >+</Button>
<Button onClick={(e) => {this.move('reset')} } >{this.state.Number}</Button>

<Button onClick={(e) => {this.move('left')} } >-</Button>

</ButtonGroup>

</div>

)


}

}

export default R038_reacstrapButtonGroup;