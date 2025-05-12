import React,{Component} from "react";

class ClassPrototype extends Component{

constructor(props){
super(props);
this.state = {};
}

componentDidMount(){
//es5 prototype
/** (function() { ... })은 익명 함수를 정의합니다.
()는 이 익명 함수를 즉시 실행하기 위한 괄호입니다.*/
var ExamCountFunc = (function(){
    function ExamCount(num){
    this.number = num;
    }
    /**이 코드는 showNum이라는 함수를 ExamCount 프로토타입에 추가합니다. 이를 통해 ExamCount의 모든 인스턴스가 이 메서드에 접근할 수 있습니다 */
    ExamCount.prototype.showNum= function () {
    console.log(`1. react_ ` + this.number);
    }
    return ExamCount;
})();

var cnt = new ExamCountFunc('200');
cnt.showNum();
/**클래스 생성자 함수 */
class ExamCountClass{
    /**생성자 함수는 constructor라는 이름을 가져야 합니다. 가독성때문에 constructor 통일 */
    constructor(num2){
        this.number2 = num2;
    }
    showNum(){
    console.log(`2.react ${this.number2}`);
    }
}
/**ExamCountClass의 인스턴스 생성 */
var cnt2 = new ExamCountClass('2houndred');
cnt2.showNum();

}


render(){

return(

<h2>[this is  class]</h2>

)

}



}


export default ClassPrototype;