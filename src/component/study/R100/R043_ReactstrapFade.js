import React,{Component} from "react";
import { Button,Fade } from "reactstrap";

class R043_Reactstrapfade extends Component{
    constructor(props){
        super(props)
        this.state = {fadeInOut:true}
    }
toggle = (e) => {this.setState({fadeInOut: !this.state.fadeInOut})}

render(){
    return(
        <div>
 <Button onClick={this.toggle}>Fade In&Out</Button>
 <Fade in={this.state.fadeInOut} tag='h1'>가나다라마바사 아자차</Fade>
        </div>
    )
}


}

export default R043_Reactstrapfade;