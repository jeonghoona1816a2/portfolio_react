import React,{Component} from "react";

class R009_Es6 extends Component{

constructor(props){
super(props);
this.state ={};
}

componentDidMount(){
var jsString1 = `자바스크립트`;
var jsString2 = `입니다\n 다음 줄입니다.`;
console.log(jsString1 + `문자열` + jsString2 + `~`);
var Es6Strin1 = `es6`;
var Es6Strin2 = `입니다.`;
console.log(`${Es6Strin1}  + 문자열 + ${Es6Strin1} !!____ 다음 줄입니다. `);

var LongString = `ES6에 추가된 String 함수들입니다.`;
console.log(`startsWith :`+LongString.startsWith('ES6에 추가'));
console.log(`startsWith :`+LongString.endsWith('함수들입니다.'));
console.log(`startsWith :`+LongString.includes('추가된 String'));

}

render(){

    return(
        <h2>[THIS IS ES6 STRING]</h2>
    )
}


}

export default R009_Es6;