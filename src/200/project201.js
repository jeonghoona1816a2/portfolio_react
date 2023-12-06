import List_typ1 from "../component/study/listtype";
export default function ProJect201(){

var objA = { val :40};
var objB = objA;

console.log(objA.val)
console.log(objB.val)

objB.val = 50;

console.log(objA.val)
console.log(objB.val)





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
        
     </div>
    
    
    );
    
    };