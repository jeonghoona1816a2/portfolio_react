import React,{Component} from "react";
import datatype from 'prop-types'

class R020_PropsObjVal extends Component{
render(){
let {ObjectJson} =  this.props

return(
        <div style={{padding:'20px'}}>
            {JSON.stringify(ObjectJson)}
            {/* JSON.stringify() 함수는 JavaScript에서 사용되는 메서드로, JavaScript 객체나 배열을 JSON 문자열로 변환하는 역할을 합니다. 이 메서드는 다음과 같이 사용됩니다:
            JSON.stringify(value[, replacer[, space]]) */}
       </div>
        )
}
}

R020_PropsObjVal.prop_value = {
    ObjectJson : datatype.shape({
    react: datatype.string,
    twohundred: datatype.number
    })
    // shape()를 사용하면 객체의 각 속성에 대한 유형을 세부적으로 지정할 수 있습니다. 이는 개발자가 올바른 데이터
    //  구조를 유지하고 컴포넌트 간의 인터페이스를 명확하게 정의할 수 있도록 도와줍니다.
    }


export default R020_PropsObjVal;