import React,{Component} from "react";
class R011_SpreadOperator extends Component{

constructor(props){

super(props);
this.state = {};

}

componentDidMount(){
var varArray1 = ['num1','num2'];
var varArray2 = ['num3','num4'];

var sumvarArr1 = [varArray1[0],varArray1[1],varArray2[0],varArray2[1],];
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const newArray = array1.concat(array2);
// console.log(newArray); // [1, 2, 3, 4, 5, 6]
var sumvarArr2 = [].concat(varArray1,varArray2);/** */
console.log(`sumvarArr1 : `+sumvarArr1);
console.log(`sumvarArr2 :` + sumvarArr2);

//ES6 Array
console.log(`ES6 Array`)

let sumLetarr = [...varArray1, ...varArray2];/** */
// 이 코드는 두 개의 배열을 합쳐서 새로운 배열을 만드는데, 전개 연산자 (...)를 사용하여 이를 수행합니다. 
console.log( `2.sumLetarr  ` + sumLetarr)
const [sum1,sum2, ...remain] = sumLetarr ; 

// 주어진 코드는 varArray1과 varArray2 두 배열을 합쳐서 sumLetarr이라는 새로운 배열을 만듭니다. 그런 다음,
//  이 배열을 분해하여 첫 번째 요소인 sum1, 두 번째 요소인 sum2, 그리고 나머지 요소들을 remain에 할당합니다.

console.log(`3.sum1, ` + sum1 +  `+ sum2 +` + sum2 + `remain : ` + remain)
var varObj1 = {key1 : 'val1',key2 : `var2`};
var varObj2 = {key3 : 'val3',key4 : `var4`};
//javascript objact

var sumVarObj = Object.assign({},varObj1,varObj2);/** */
// const target = { a: 1, b: 2 };
// const source1 = { b: 4, c: 5 };
// const source2 = { d: 7 };

// const result = Object.assign(target, source1, source2);

// console.log(target); // { a: 1, b: 4, c: 5, d: 7 }
// console.log(result); // { a: 1, b: 4, c: 5, d: 7 }


// console.log(...varObj1, ...varObj2);
// 객체는 전개 연산자로 직접 분해할 수 없다
console.log(`4. sumVarobj : ` + JSON.stringify(sumVarObj));/**JSON.stringify(sumVarObj) */

var sumLetObj = {...varObj1,...varObj2};

console.log(`5. sumletobj :` + JSON.stringify(sumLetObj));
// sumLetObj 객체를 JSON.stringify() 함수를 사용하여 JSON 문자열로 변환한 후 출력합니다. 

var {key1, key3, ...others} = sumLetObj ;
console.log( `6. key1 : ` + key1 + ` \n key3 : ` + key3 + `\n others : ` + JSON.stringify(others))  


}
render(){


    return(<h2>[this is spreadoperator]</h2>);

}


}
export default R011_SpreadOperator;