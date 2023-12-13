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
        







     </div>
    
    
    );
    
    };