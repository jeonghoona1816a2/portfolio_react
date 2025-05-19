import React,{Component} from "react";

class R013_ArrowFunction extends Component{
    constructor(props){
    super(props);
    this.state = {
        arrowFuc : `React300`, num : 3 
    };
    }      
/**1.외부 API에서 데이터 가져오기
2.타이머를 시작하거나 외부 이벤트 리스너를 등록하기
3.외부 라이브러리와의 통합
4.DOM 업데이트 후 추가적인 작업 수행 */
    componentDidMount(){
/**함수를 생성하는 내장 생성자(constructor) 함수 */
        Function1(1) ;
        this.Function2(1,1);
        this.Function3();
        this.Function4();
        this.Function5(0,2,3);
    
    
    function Function1(num1){
                return console.log ( num1+ `.Es5 fuction`)
            }
    }

    Function2 = (num1,num2) => {
        let num3 = num1 + num2;
        console.log (num3+`start Arrow Function  `+this.state.arrowFuc)
    }

    Function3 (){
        var this_bind = this;
        setTimeout(function(){
                console.log(this_bind.state.num +` Es5 Callback Function noBind :`)
                console.log(this.state.arrowFuc)

        },100 );
    }

    Function4() {
        setTimeout(
            function() {
                console.log(`4. Es5 Callback Function Bind : ` + this.state.arrowFuc)
            }.bind(this),100
        )
    }

    Function5(num1, num2, num3){
        const num4 = num1 + num2 + num3;
        setTimeout(() => {console.log(`${num4} . Arrow Callback Function : `+this.state.arrowFuc)},100);

    }


    render(){
            return(<h2>[This is ArrowFunction]</h2>)

    }



}

export default R013_ArrowFunction; 