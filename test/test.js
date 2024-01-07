
// function ddiv20231230(){



// console.log('2023-12-30')
// console.log(
    
// Number.isNaN(NaN),
// Number.isNaN(10),
// Number.isNaN(1+undefined) 

//     );
//     let x =3;
//     var result = x%2? '훌수' : '짝수';
//     console.log(result);

//     console.log(1273208%2);
// }
// ddiv20231230()

// console.log("test제곱"+Math.pow(11,11));
// function ddive20231231(){
//     let month = 11;
//     var monthName;
    
//     switch(month){
//     case 1 : monthName='january';
//     break;
//     case 2 : monthName='february';
//     break;
//     case 3 : monthName='March';
//     break;
//     case 4 : monthName='April';
//     break;
//     case 5 : monthName='may';
//     break;
//     case 6 : monthName='june';
//     break;
//     case 7 : monthName='june';
//     break;
//     case 8 : monthName='august';
//     break;
//     case 9 : monthName='september';
//     break;
//     case 10 : monthName='october';
//     break;
//     case 11 : monthName='november';
//     break;
//     case 12 : monthName='december';
//     break;
//     default: monthName='invalid month';


//     }

//     console.log(monthName)
// }
// ddive20231231();

// var years = 2024
// function ddive202312312(years){

// var days = 0;
// switch(years){
// case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//     days = 31;
//     break;
//     case 4: case 6: case 9 : case 11:
//         days = 30;
//     break;
//     case 2: days = (years % 4 === 0 && years % 100 !== 0 ) ||( years % 400 === 0 ) ? 29 : 28;
//     break;
//     defult: console.log('Invalid Month');
// }
// console.log(days);




// };
// function ddiv20240101(){


// for(var i = 1 ; i <= 6; i++ ){
//     for(var j = 1 ; j <= 6; j++ ){

// if (i+j === 6){

//     console.log(`[${i},${j}]`)


// }

    
//     }
// }


// }


// ddiv20240101()

// var countD20240101 = 0;

// function ddiv202401012(){

// while(true){
// countD20240101 +=1
// console.log(`[${countD20240101}]`)
// if (countD20240101 >= 6 ){break;}
    
// }

// }
// ddiv202401012();

// function ddiv2024010123(){
// let countD20240102 = 1;
// console.log(` 여기서부터 시작`)
//     do{

   
//         console.log(` ${countD20240102 }`)
//         countD20240102 ++ 
//     }
// while(countD20240102 <= 6){ 
//     console.log(` finaly~~`)



// }}
// ddiv2024010123();



// function ddiv20240101234(){

//     outer: for (var i = 0; i < 3; i++) {
//         for (var j = 0; j < 3; j++) {

        
//           if (i+j === 3)  break outer;
//           console.log(`test`);
//           console.log(`[ ${i} + ${j}  = ${i+j} ]`);

//           }

//       }


// }
// ddiv20240101234();

// console.log(`20240101 test 1`)
// function ddiv202401012345(){

// var strings = "javascript world is very hard Common may home css";
// let serchItem = "hard";
// console.log(strings.length)
// for (var i = 0 ;  i <= strings.length ; i++ ){
// if(serchItem[0] == strings[i]){
// var word = 0

// word =  serchItem.length;
// if(serchItem === (strings[i + word])){


// }


// }

// console.log(strings[i])

// }



// }

// ddiv202401012345()

// function ddiv20240102() {
// const serchItem2 = `i`;
// const stringName = `javiascript`;
// let counterS = 1;


// for(var i = 1; i <= stringName.length; i++){
    
// if ( stringName[i] !== serchItem2){continue;}
// counterS++;
// console.log(i)

// }

// }
// ddiv20240102()

// function ddive202401023(){
// for( var i = 0; i < string.length; i++){


// }


// }

// function ddiv202401022(){

// let x = 10;
// let str = x.toString();
// console.log( typeof str , str);
// console.log( typeof x , x);
// console.log( `str == x `, str == x );
// console.log(`str === x `, str === x );
// console.log(`암묵적 타입 변환`);


// }
// ddiv202401022()

// function ddiv20240104(){

// console.log(`10` + 2);
// console.log(5 * `10`);
// console.log(!0);
// if(1){console.log(true)}


// }
// ddiv20240104();

// function ddiv20240105(){
// console.log(`문자열 타입으로 변환`)
// console.log(0 +``)
// console.log(typeof (0 +``))

// if (!false){ console.log(false + `is falsy value`)};
// if (!undefined){ console.log(undefined + `is falsy value`)};
// if (!null){ console.log(null + `is falsy value`)};

// if (!0){ console.log(0 + `is falsy value`)};
// if (!NaN){ console.log(NaN + `is falsy value`)};
// if (!``){ console.log(`` + `is falsy value`)};

// var test = 1 ;
// console.log( typeof String(test ) ) ;
// console.log(typeof(test).toString , typeof(test)  );
// var test2 = `1`
// console.log( typeof(test2 ) ) ;

// test2 = Number(test2) 
// console.log( typeof test2 )
// test2 = String(test2);  
// console.log( typeof test2 )
// test2 = parseInt(test2);
// console.log( typeof test2 );

// test2 = String(test2);  
// console.log( typeof test2 )
// test2 = parseFloat(test2);
// console.log( typeof test2 );
// }
// ddiv20240105();


var vr2024103;

vr2024103 = {
//  내부 함수 사용
test(){
let x1= 'x';

var x2 = [`x`,``,`false`,0,1,NaN,Infinity,null,undefined,{},[]]
for(x=0; x <= x2.length; x++ ){

    x1= x2[x];
    console.log(x1)
    console.log(typeof x1)
    x1 = Boolean(x1)
    console.log(x1)
    console.log(typeof x1)
    console.log(`-----`)
}


},
test2(){
    let testx = [`cat` || `dog`,false || `dog`,`cat` || false, `cat` && `dog`, false && `dog`,`cat` && false  ];

for(var x = 0; x <= testx.length; x++ ){
console.log(testx[x]);
console.log(`--------`);
console.log((`cat` || `dog`).toString)
}

},

test3(){

let  trueTest =  true;
let  consTest =  `finay`;

consTest = trueTest && consTest;
console.log(consTest);



},
test4(){

let done = true;
let done2 = false;
let messge ;
//주어진 조건이 ture일 때

messge = done || `완료`;

console.log(messge);


},
test5(){

    let done = [true,false,NaN,undefined,null];
    let messge ;
    //주어진 조건이 ture일 때
    for(var x =0; x <= done.length; x++ ){
        console.log(`&&`,done[x] )
        messge =done[x] && `완료`;
    
        console.log(typeof messge,`=`,messge);


    };
    console.log(`-------`);
    for(var x =0; x <= done.length; x++ ){
        console.log(`||`,done[x] )
        messge = done[x] || `완료`;
    
        console.log(typeof messge,`=`,messge);


    }
    },
    test6(){
var elem = [true,false, undefined,null,0,-0,NaN,''];
for(var x = 0; x <= elem.length; x++){
    value = null;
    var value = elem[x] && elem[x]?.value;
    console.log(value);
}
    }, test7(){

        let person = {
        name : 'john'
        ,age: 21
        ,syhelow:()=>{ console.log(`지금은  테스트중 ${this.name}`);}

        };

        console.log(person);


    },
    test7(){
let person = {
Firstchaild: "johtn",
};
let obj = {};
let key = `hello`;
obj[key] = `world`;

obj[person] = `world`;

console.log(obj);

console.log(typeof obj);

    },
    test8(){

    let circle = {

        radius : 5,
        getDiameter : function(){
        return ( 2 * this.radius);
        }
        };
        

      console.log(circle.getDiameter());
    },

    test9(){
let person = {
name : `lee`



};
console.log(person.name);
console.log( person['name'] );
person.age = 20;
console.log(person);
delete person.age ;
console.log(person);

let age = 20, name = `jehn`;
var person2 = {name:name ,age : age } ;
console.log(person2);

let person3 = { age, name};
console.log(person3)




},
 test10(){   

let prefix = 'prop';
let obj={};
let obj2={};
for(var i=1; i <= 10; i++){
for(var j = 1; j <= 10; j++){
    obj[ `id_`+Number(i+j)] = i * j;

}
}

for(var g = 1; g <= 10; g++){
    obj2[`id${g}`] = g ;

}

console.log(obj);
console.log(obj2);

 },
 test11(){

let str = `string print`;

for(var i = 0; i <= str.length; i++){
console.log(str[i]);

};

str[0] = `a`;
console.log(str[0]);


let testNum1 = 1000;
let testNum2 =  testNum1
console.log(`${testNum1}|${testNum2}`)
testNum1 = 2000;
console.log(`${testNum1}|${testNum2}`)
 },
 test11(){
 const obj = {x: {y : 1}};
 const c1 = {... obj};
console.log (c1 === obj) ;
console.log (c1.x === obj.x) ;
 },
 test12(){
let person = {name:`yoo`};

let copy = person;
console.log(copy === person);
copy.name=`kim`;

copy.address = `yeoju`;
console.log(copy );
 },
 test13(){


function add(x,y){

return (x + y);

}
console.log(add(123,321));

var add2 = { add(x,y){ return x+y } ,  add2(x,y){ return x+y }
}
console.log(add2.add(234,432));
console.log(add2.add2(345,543));



 },

 test15(){

let obj = new Function('x','y','return(x+y)');
console.log(obj(123,321));
// 클로저가 없음 잘안사용함 ...
console.log(`______________`);

var add = (x,y)=>x+y;
console.log(add(123,123));
// 화살표 함수는 this 바인딩, prototype 프로퍼티가 없으며 arguments 객체를 생성하지 않는다..

var add2 = function(x,y){
    
    console.log(arguments);
    
    return x + y ;};
var resert = add2 (222,333);

console.log(resert);


 },test16(){


var add = function(x,y){

if (typeof x !== 'number' || typeof y !== 'number' ){

    throw new TypeError('숫자가 아닙니다.')
};
return x + y ;



}
console.log(add(432,123));

console.log(add(`test`,123));




 }
    
    
}

vr2024103.test16();




