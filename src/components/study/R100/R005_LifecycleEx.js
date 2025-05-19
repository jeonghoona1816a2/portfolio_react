import React,{Component} from 'react';
class R005_LifecycleEx2 extends Component{

constructor(props){

    super(props);
    this.state = {};
    console.log(`1. constructor Call`);
}
render(){
console.log(`3.render Call`);
return(<h2> [This is constructror function]</h2>);


}

}
export default R005_LifecycleEx2;