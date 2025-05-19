import React,{Component} from "react";
class R006_LifecycleEx extends Component{

static getDerivedStateFromProps(props, state){

    console.log( '2. getDerivedstateFromProps :'+ props.prop_value );
    return{};
}
constructor(props){
super(props);
this.state = {};
console.log(`1.constructro Call`)};

render(){

console.log(`3.render call`)

return(

<h2>[this is constructro function]</h2>

)


}





}



export default R006_LifecycleEx;