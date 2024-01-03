
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


let vr2024103;

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

}

}


vr2024103.test2();







