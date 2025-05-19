import React,{Component} from "react";

class R014_ForEach extends Component{

componentDidMount(){
var For_Arr = [3,2,8,8];
var For_newArr = [];
for (var i = 0; i < For_Arr.length; i++){

    For_newArr.push(For_Arr[i]);
}
console.log(`1. For_newArr : [${For_newArr}]` );
console.log(`1. For_newArr : [`+ For_newArr +`]` );

var ForEach_Arr = [3,3,9,8];
var ForEach_newArr  = [];
ForEach_Arr.forEach((result) => {ForEach_newArr.push(result)}) 
// array.forEach(callback(currentValue [, index [, array]])[, thisArg])
console.log(`1. ForEach_Arr : [`+ ForEach_newArr +`]` );

// // 기존 함수 표현식
// function add(a, b) {
//     return a + b;
// }

// // 화살표 함수 표현식
// var add = (a, b) => a + b;


}

render(){
    return(<h2>This Is ForEach</h2>)
    }
} 

export default R014_ForEach;
