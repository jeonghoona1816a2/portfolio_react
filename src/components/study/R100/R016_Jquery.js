import React,{Component} from "react";
import $ from 'jquery';

class R016_Jquery extends Component{

imput_alert = (e) => {
var input_val = $('#inputId').val();
// .val() 함수는 선택된 요소의 값을 반환합니다. 따라서 $('#inputId').val()은 id가 'inputId'인 input 요소의 값을 반환합니다.
alert(input_val);
}

render(){
    return(
        <div>
            <h2>[ This Is jquery 123 ]</h2>
            <div>123   
            </div>
            <input type="text" id='inputId' name='inputName'/>
            <button id="buttonId" onClick={e => this.imput_alert(e)}> jquery Button</button>

        </div>     
        )
    }
}


export default R016_Jquery;