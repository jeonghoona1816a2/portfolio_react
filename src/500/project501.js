// import List_typ1 from "../component/study/listtype";// PascalCase로 수정
// import R003_ImportComponent from "../component/study/R003_ImportComponent";
// import LifecycleEx from '../component/study/R004_lifecycleEx';
// import LifecyCleEx2 from '../component/study/R005_LifecycleEx';
// import LifecyCleEx3 from '../component/study/R006_LifecycleEx';
// import LifecycleEx7 from "../component/study/R007_Lifecycleex";
// import LifecycleEx from "../component/study/R008_LifecycleEx";
// import Es6 from "../component/study/R009_Es6";
// import Variable from "../component/R010_Variable";
// import SpreadOperator from "../component/study/R011_SpreadOperator";
// import ClassPrototype from "../component/study/R012_Class&prototype";
// import ArrowFunction from "../component/study/R013_ArrowFunction"
// 반드시 import 는 대문자로 !!!!!!!
// import ForEach from"../component/study/R014_ForEach";
import R015_Map from'../component/study/R100/R015_Map';
import R016_Jquery from '../component/study/R100/R016_Jquery';
import R017_props from '../component/study/R100/R017_props';
import PropDatatype from '../component/study/R100/R018_propsDatatype';
import PropsBoolean from '../component/study/R100/R019_PropsBoolean';
import R020_PropsObjVal from '../component/study/R100/R020_PropsObjVal';
import PropsRequired from '../component/study/R100/R021_PropsRequired';
import PropDefault from '../component/study/R100/R022_PropsDefault ';
import PropNode from '../component/study/R100/R023_PropsNode';


export default function ProJect501(){
    return(
    <div className="newRact">
    <R015_Map/>
    <R016_Jquery/>
    <R017_props props_val="This is props"/>
    <div>
            <h1>start react 200!</h1>
            <p>css 적용기</p>
            <PropDatatype String = "react" Number={200} Boolean = {1==1} Array = {[0,1,8]} ObjectJson = {{react:"리액트",twohundred:"200"}} Function={console.log('FunctionProps : function')} />     
    </div>

        <div>
            <PropsBoolean BooleanTrueFalse={false}/>
            <PropsBoolean BooleanTrueFalse/>
            <PropsBoolean BooleanTrueFalse={1}/>
            <PropsBoolean BooleanTrueFalse={0}/>
        </div>

<div>
<R020_PropsObjVal ObjectJson={{react:'리엑트',twohundred:'200'}}/>

</div>

<div><PropsRequired ReactNumber = {200}/></div>
<div><PropDefault ReactNumber ={200}/> </div>
{/* <ForEach/> */}
{/* <R003_ImportComponent>test</R003_ImportComponent> */}
{/* <List_typ1 title="component 사용" day="2024-02-09" sub="
componet란 코드 뭉치 !<br>
Roo3_ImportaComponent.js 를 생성 하였고 <br>
내부에 import React, {Component} from 'react'; 컴포넌트 속성 설정 후  <br>
클래스 생성 
class R003_ImportComponent extends Component {<br>

render(){<br>
return (<br>
내용<br>
)<br>
}<br>
}<br>
export default App;

적용할 화면에서 <br>
import 이름작성 from '주소로 '

" ></List_typ1>

<List_typ1 title="render funtion" day="2024-02-09" sub="
위와 동일

" ></List_typ1> */}

{/* <LifecycleEx></LifecycleEx>
<List_typ1 title="render funtion" day="2024-02-09" sub="
위와 동일
" ></List_typ1> */}

{/* 
<LifecyCleEx2></LifecyCleEx2> */}

{/* <div><h1>start react 200!</h1>
<p>css 적용하기 </p>
<LifecyCleEx3 prop_value = 'FromApp.js'></LifecyCleEx3>
</div> */}

{/* <List_typ1 title="render funtion" day="2024-02-10" sub="
위와 동일
" ></List_typ1> */}

{/* 
<LifecycleEx7 ></LifecycleEx7> */}

{/* <LifecycleEx prop_value = 'FromApp.js'/> */}

{/* <div>

<h1>Start React 200!</h1>
<p>CSS 적용하기</p> */}
{/* <Es6/> */}


{/* <Variable></Variable> */}

{/* <SpreadOperator></SpreadOperator> */}
{/* <ClassPrototype/> */}
{/* <ArrowFunction/> */}

{/* </div> */}



    </div>
    
    );
    
    };