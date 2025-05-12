import React,{Component} from "react";

class R010_Variable extends Component{

constructor(prop){

super(prop);
this.state = {};

}

componentDidMount(){

var varName = 'react';
console.log('varName1 :' + varName);
var varName = '200';//'varName' is already defined no-redeclare
console.log('varName2 :' + varName);

let letName = 'react';
console.log('letName1 :' + letName);
letName = 'react200';//'varName' is already defined no-redeclare
console.log('letName2 :' + letName);

const constName = 'react';
console.log('constName :' + constName);


}

render(){
    return(<h2>[this is variable]</h2>)
}




}


export default R010_Variable;