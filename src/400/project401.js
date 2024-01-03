

import List_typ1 from "../component/study/listtype";
export default function ProJect401(){

    console.log('2023-12-28');
    console.log(score);
score = 80;
console.log(score);
var score;
console.log(score);
console.log('할당 연산자');

function ddive20231230(){
let x; 
x=10;
console.log('first =', x);
x+=10;
console.log('sum =', x);
x-=10;
console.log('subtract =', x);
x*=10;
console.log('multiply =', x);
x/=10;
console.log('first =', x);
x%=10;
console.log('first =', x);

let str ='My name is';
str +='Lee'
console.log(str)

console.log('2023-12-30');



if ('0'==''){console.log(true)} else{console.log(false)};
if (0 ==''){console.log(true)} else{console.log(false)};
if ('0'=='0'){console.log(true)} else{console.log(false)};
if (false =='false'){console.log(true)} else{console.log(false)};
if (false=='0'){console.log(true)} else{console.log(false)};
if (false=='null'){console.log(true)} else{console.log(false)};
if (false=='undefined'){console.log(true)} else{console.log(false)};



}
ddive20231230();

function ddive20231231(){
let month = 11;
var monthName;

switch(month){
case(1): monthName='january';
case(2): monthName='february';
case(3): monthName='March';
case(4): monthName='April';
case(5): monthName='may';
case(6): monthName='june';
case(7): monthName='june';
case(8): monthName='august';
case(9): monthName='september';
case(10): monthName='october';
case(11): monthName='november';
case(12): monthName='december';
default: monthName='invalid month';

console.log(monthName)
}





};








    return(
    

    <div>



<List_typ1 title="3.5.6 배열 요소 삭제" day="2023-12-30" sub="

==는 동등비교<br> === 일치비교 (타입이 같음) <br>
!= 부동등비교<br> !== 불일치비교 (타입이 같음)<br>
if ('0'==''){console.log(true)} else{console.log(false)}; false <br>
if (0 ==''){console.log(true)} else{console.log(false)}; 0과 비어있음은 같음 true <br>
if (0=='0'){console.log(true)} else{console.log(false)}; true <br>
if (false =='false'){console.log(true)} else{console.log(false)}; 외워야한다 false == 'false' 다름...<br>
if (false=='0'){console.log(true)} else{console.log(false)}; true <br>
if (false=='null'){console.log(true)} else{console.log(false)}; false <br>
if (false=='undefined'){console.log(true)} else{console.log(false)}; false <br>


" ></List_typ1>
<List_typ1 title="7.4 삼향 조건 연산자" day="2023-12-30" sub="

삼항 조건 연산자 ternary operator 조건식의 평가 결과에 따라 반환할 값을 결정한다.<br>
자바스크립트의 유일한 삼항 연산자이며, 부수 효과는 없다. 삼항조건 연산자 표현식<br>



" ></List_typ1>


    </div>
    
    
    );
    
    };