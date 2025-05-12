import List_typ1 from "../component/study/listtype";
export default function ProJect201(){

var objA = { val :40};
var objB = objA;

console.log(objA.val)
console.log(objB.val)

objB.val = 50;

console.log(objA.val)
console.log(objB.val)



var colorArray = ['orange','yallow','green'];

colorArray.length = 10;
colorArray.push("test")
function con(ccc){
console.log("최종 =", ccc.length);
console.log("최종1 =",typeof ccc)

}




var colorsObj = {
    '0':'orange2',
    '1':'yellow2',
    '2':'green2'
    }
    // colorsObj.length = 10;
    // colorsObj.push("test")
    
    console.log(colorsObj)
    console.log(typeof colorsObj) // ofject
    
    

for(let i = 0 ; colorArray.length > i ; i++ ){
    console.log(colorArray[i]);
    if(i = colorArray.length){
        con(colorArray);
    }
}

var arr = ['zero','one','two'];
console.log(arr.length);
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);
arr[3] = 'red';
console.log(arr.length);
console.dir(arr);
var counNum = 0
for (let prop in arr){
    counNum += 1   
console.log(prop, arr[prop])
console.log(counNum) 

}



for (let prop of arr){
 
console.log(prop, arr[prop])


}

console.log("====== 2023-12-14 =======")

arr = ['zero','one','two','three'];
console.log(arr);
delete arr[2];
console.log(arr);


console.log("====== 2023-12-15 =======")
// Array() 생상자 함수로 배열 생성 유사배열 객체
// function dayStudy1215(){

let foo = new Array(3);
console.log(foo)
console.log(foo.length)
let bar = new Array(1,3,3);
console.log(bar)
console.log(bar.length)
console.log("====== 2023-12-15 =======")

let arr2 = ['bar'];
// 기본적이 배열 
let obj2 = {
name : 'foo' , length : 1 

}
console.log(arr2);
console.log(obj2);
arr2.push('brz','ccc')
console.log(arr2);
// obj.push('brz')
console.log(obj2);
// }



// dayStudy1215()

// console.log("====== 2023-12-18 =======")

// function defaultTyp(){
// let num = 0.5;
// console.log(num.toExponetial(1));
// console.log('test'.charAt(2));

// }


// defaultTyp();


console.log("====== 2023-12-18 =======")
function objPlus(){
let add1 = 1 + 2;
console.log(add1);
let add2 = 'my'+ 'string';
console.log(add2);
let add3 = 1 + 'string';
console.log(add3);
let add4 = 'string' + 2;
console.log(add4);
let add5 = 1+1;
console.log(typeof add5);


}

objPlus();



function 연산자374(){
    console.log("====== 2023-12-19 =======")
if (!true){
    console.log("!는 뭘까?")

}
else{
    console.log("반전을 의미한다.",typeof !true) 

}
console.log(1=='1',"1=='1'");
console.log(1==='1',"1==='1'");
console.log("!0",!0);
console.log(typeof !0);
console.log("!!0",!!0);
console.log(typeof !!0);
console.log("!1",!1);
console.log(typeof !1);
console.log("!!1",!!1);
console.log(typeof !!1);
console.log(!0,!!0,!1,!!1);
console.log("!!'',!!false,!!null,!!undefined,!!true,!!'string',!!{},!![]");
console.log(!!'',!!false,!!null,!!undefined,!!true,!!'string',!!{},!![]);



}

연산자374();



var testssss = function(a,b){
return(a+b)
};
console.log(testssss(10,22));

console.log(testssss2(11,22));
function testssss2(x,y){
    return( x+y  )
};
console.log(testssss2(3,4));



console.log("====== 2023-12-19 -2 =======")

var factroialVar = function factroial(n){

if(n <= 1){
return 1;
}
else {  return n * factroial(n-1); }

};

console.log(factroialVar(6));
console.log(factroialVar(3));


console.log("====== 2023-12-20 -1 =======")
function add42(x,y){return( x + y)};
add42.result = add42(3,2);
add42.staus = 'ok';

console.log(add42.result, add42.staus)
if(add42.result = 5){ console.log('같네',typeof add42.result )}
else{console.log('틀리넹')}
if(add42.result == 5){ console.log('같네')}
else{console.log('틀리넹')}
if(add42.result === 5){ console.log('같네')}
else{console.log('틀리넹')}

console.log("====== 2023-12-20-2  =======")

var fnc1 = function(fnc){
fnc();
};

function conslogProgramings(){
console.log('실행시키기 거참 어렵네 ')
}
fnc1(conslogProgramings);


var fooo = function(){
return function(){console.log('리턴값으로 실행하기')};

};
var barr = fooo(); //변수에 저장되면 fooo();로는 실행이 안됨
barr();

console.log("====== 2023-12-21  =======")

function add423(x,y){
    return x+y;
}
console.log(add423(3,4));

console.dir(add423);
// for (let i  in arr)
// {console.log(arr[i])}
// orange
// yallow
// green
// undefined 7
// test



//   var a = 100;
//   var objA = {value: 100};

//   function changeArg(num,obj){
//     num = 222;
//     obj.value = 333;
//     console.log("in",num)
//     console.log("in",obj)
//   }
//     changeArg(a,objA);
//     console.log("out",a);
//     console.log("out",objA);
   
    return(
    
    <div>
        
 <List_typ1 title="javascript deep new start" day="2023-12-05" sub=" 
retrun에서 뛰어쓰기 찾기
<br><p>
찾기 완료 dangerouslySetInnerHTML={{ __html: props.content }} 를 이용함
<p>
dangerouslySetInnerHTML은 위험해서 다른 방법을 찾아야 할것 같은. ..  

" ></List_typ1>

<List_typ1 title="3.3 참조 타입의 특성" day="2023-12-05" sub=" 
var objA = { val :40};  <br>
var objB = objA;  <br>

console.log(objA.val) <br>
console.log(objB.val)  <br>

objB.val = 50;  <br>

console.log(objA.val)  <br>
console.log(objB.val) <br>
#  obja와 obja는 태두리이며 val:40을 참조 하고 있을 뿐...

" ></List_typ1>




   <List_typ1 title="3.3.2 참조에 의한 함수 호출 방식" day="2023-12-05" sub=" 
   

난이도 :상 <br>
Call by Value 와 Call by Reference 차이

var a = 100;<br>
var objA = {value:100};<br>
function chaageArg(num,obj)ㅓ <br>
num = 200;<br>
obj.value = 200;<br>
console.log(num);<br>
console.log(obj);<br>
ㅏ <br>
chageArg(a,objA); <br>
console.log(a);<br>
console.log(objA);<br>
# 여기서 중요 포인트는 chageArg(a, objA); 의 <br> 
 프로그램 실행은 a 의 값을 변화 시킨다. 일시적으로..<br>
프로그램 실행 이후 objA 에 실행 와중에 200으로 유지된다. 


" ></List_typ1>
        






 <List_typ1 title="3.5.4 객채와 배열" day="2023-12-12" sub=" 
       화면     <br> 
        var colorArray = ['orange','yallow','green'];     <br> 
        colorArray.length = 10;     <br> 
        colorArray.push('test/')     <br> 
        function con(ccc){     <br> 
        console.log('최종 =', ccc.length);     <br> 
        console.log('최종1 =',typeof ccc)     <br> 

        }     <br> 
        <br>      <br> 
        for(let i = 0 ; colorArray.length > i ; i++ ){     <br> 
            console.log(colorArray[i]);     <br> 
            if(i = colorArray.length){     <br> 
                con(colorArray);     <br> 
            }     <br> 
        }     <br> 
        <br> 
        // orange     <br> 
        // yallow     <br> 
        // green     <br> 
        // undefined 7     <br> 
        // test     <br> 
        <br>      <br> 

        var colorsObj = {     <br> 
        '0':'orange2',     <br> 
        '1':'yellow2',     <br> 
        '2':'green2'     <br> 
        }     <br> 
        // colorsObj.length = 10;     <br> 
        // colorsObj.push('test')     <br> 

        console.log(colorsObj)     <br> 
        console.log(typeof colorsObj) // ofject     <br> 
<br> 


1. 배열과 객체 생성 <br>
colorsArray  배열, colorsObj 객체 생성 colorsObj['0'] 한것이 아니라colorsObj[0] 자동으로 문자로 변환 하는 기능이 있음
2. typeof 연산산자   <br>
console.log( typeof  colors000) 실행시 모두 object이기 때문에 object표현됨 <br>
3.lenght 프로퍼티 존재 여부  <br>
배열(array) 근본적으로 배열 하지만 배열은 3이라는 숫자가 나옴.., 객채 (object) 근본적으로 프로펄티가 존재하지 않는다. <br>
4. 배열 표준 메서드 호출 여부  <br>
객채 (object) 는 .push() .pop() 등을 사용 할 수 없다.  <br>
" ></List_typ1>
        


        <List_typ1 title="3.5.5 배열의 프로퍼티 동적 생성" day="2023-12-13" sub=" 
var arr = ['zero','one','two'];<br>
console.log(arr.length);<br>
출력 : 3<br>
arr.color = 'blue';<br>
arr.name = 'number_array';<br>
console.log(arr.length);<br>
출력 : 3<br>
arr[3] = 'red';<br>
console.log(arr.length);<br>

출력 : 4출력 : 4
console.dir(arr);<br>
배열에서 넘버를 제외하고는 .length로 표현이 안됨...출력 : 4

그럼 어떻게 확인하지 ??console.dir(arr); 방법이 없는 것인가 ??<br>
lenght 프로펄티는 array 원소의 가장 큰 인덱스가 변했을 경우만 변경 된다.!!





" ></List_typ1>
        

        <List_typ1 title="3.5.6 배열 요소 삭제" day="2023-12-13" sub="

var arr = ['zero','one','two'];<br>
console.log(arr.length); <br>
arr.color = 'blue'; <br>
arr.name = 'number_array'; <br>
console.log(arr.length);<br>
arr[3] = 'red';<br>
console.log(arr.length);<br>
console.dir(arr);<br>
var counNum = 0<br>
for (let prop in arr){<br>
    counNum += 1   <br>
console.log(prop, arr[prop])<br>
console.log(counNum) <br>

}
for (let prop of arr){<br>
console.log(prop, arr[prop])<br>


}<br>
for in문은 0에서 3까지  color와 name 까지 출력된다.<br>
for문은  0~ 3까지 배열 요소들만표현된다.

" ></List_typ1>
        

        <List_typ1 title="3.5.8~9 Array() 생성 함수 및 유사 배열 객체" day="2023-12-15" sub="


let foo = new Array(3);<br>
console.log(foo)<br>
console.log(foo.length)<br>
let bar = new Array(1,3,3);<br>
console.log(bar)<br>
console.log(bar.length)<br>
Array() 생성자 함수 <br> 
 1개의 숫자의 경우 행당 숫자 만큼의 빈 배열 생성.<br>
 그외의 경우 1,3,3,3,3 호출된 안자를 요소로 같는 배열 생성<br>




" ></List_typ1>

<List_typ1 title="3.6 기본타입과 표준 매서드" day="2023-12-15" sub="

예정1
toExponential(); <br>
charAt(); <br>
에 대한 내용 


" ></List_typ1>

<List_typ1 title="3.7.1 + 연산자, typeof 연산자" day="2023-12-18" sub="


function objPlus(){<br>
let add1 = 1 + 2; <br>
console.log(add1); <br>
let add2 = 'my'+ 'string'; <br>
console.log(add2); <br>
let add3 = 1 + 'string';<br>
console.log(add3); <br>
let add4 = 'string' + 2; <br>
console.log(add4); <br>
let add5 = 1+1; <br>
console.log(typeof add5); <br>
숫자와 문자를 + 하면 string 문자와 문자로 합쳐진다...
<br> console.log( typeof add5) 타입을 알려면.... 

}

objPlus();


" ></List_typ1>


<List_typ1 title="3.7.4  연산자" day="2023-12-18" sub="


console.log(1=='1','1=='1'');<br>
console.log(1==='1','1==='1'');<br>
console.log('!0',!0);<br>
console.log(typeof !0);<br>
console.log('!!0',!!0);<br>
console.log(typeof !!0);<br>
console.log('!1',!1);<br>
console.log(typeof !1);<br>
console.log('!!1',!!1);<br>
console.log(typeof !!1);<br>
console.log(!0,!!0,!1,!!1);<br>
console.log('!!'',!!false,!!null,!!undefined,!!true,!!'string',!!{},!![]');<br>
console.log(!!'',!!false,!!null,!!undefined,!!true,!!'string',!!{},!![]);<br>
연산자 ! 개는 반전 2개는 반전의 반전 true와 false를 구별용 


" ></List_typ1>
<List_typ1 title="4.1 함수 정의" day="2023- 12-19" sub="


function . . . . . . . add(x,y).. . . .  . {retrun x+y;};<br>
function키워드_함수명_매개변수 리스트_ 함수 몸체
<br><br>
4.1.2 함수 선언문 방식<br><br>
add() 함수 선언문  <br>
function add(x,y) { <br>
    retrun x + y;<br>
};<br>
console.log(add(3,4));<br><br>
4.1.2 함수 표현식 방식<br><br>

var add = fucntion(){<br>
retrun x + y<br>
}<br>
var plus = add<br>

console.log(add(1,2))<br>
console.log(plus(1,2))<br>

var testssss = function(a,b){<br>
    return(a+b) <br>
    }; <br>
    console.log(testssss(10,22)); <br>
    <br>
    console.log(testssss2(11,22)); <br>
    function testssss2(x,y){ <br>
        return( x+y  ) <br>
    }; <br>
    console.log(testssss2(3,4)); <br>
    
선언식으로 표현된 fuciton은 선언 이전에 실행 가능 ...



" ></List_typ1>


<List_typ1 title="4.1 함수 표현방식으로 구현한 팩토리얼 함수" day="2023-12-19" sub="



" ></List_typ1>

<List_typ1 title="4.2 자바스크립트에서는 함수도 객체다." day="2023-12-20" sub="





" ></List_typ1>










     </div>
    
    
    );
    
    };