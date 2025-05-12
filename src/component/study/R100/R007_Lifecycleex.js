import React,{Component} from "react";

class R007_LifecycleEx extends Component{
static getDerivedStateFromprop(props, state){

console.log(`2.getDerivedStateFromProp : `+ props.prop_value);
return{tmp_state:props.prop_value};
}
constructor(props){
    super(props);
    this.state = {};
    console.log(`1. constructro call`)
}
componentDidMount(){
    console.log(`4.componentDidMount Call`)
    console.log(`5. tmp_state : ` + this.state.temp_state);


}

render(){
    console.log(`3.render call`)
    return (

<h2>[This is componentdidmount function]</h2>

    )
    
    }
    



}



export default R007_LifecycleEx;