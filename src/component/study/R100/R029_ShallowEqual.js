import React,{Component} from "react";
import { shallowEqualArrays } from "shallow-equal";
// 라이브러리를 사용하여 배열의 얕은 비교를 수행하는 예제
class R029_ShallowEqual extends Component{

constructor(props){
super(props);
this.state = {StateString:'react'};
}
/**shouldComponentUpdate() 메서드에서는 현재 상태와 다음 상태를 비교하여 변경 여부를 결정하고 */ 
shouldComponentUpdate(nextprops, nextState){
return  (!shallowEqualArrays(this.state,nextState))
}

// shallowEqualArrays()를 사용하는 이유는 React 컴포넌트에서 
// 불필요한 리렌더링을 방지하고 성능을 최적화하기 위함입니다. React에서는 
// 컴포넌트의 상태나 속성이 변경되었을 때 리렌더링을 수행합니다. 그러나 때로는 
// 상태나 속성이 변경되었더라도 UI가 변경되지 않아도 되는 경우가 있습니다. 이때 
// shallowEqualArrays()를 사용하여 상태나 속성의 변경 여부를 판단하고, 변경되지 
// 않았을 경우 리렌더링을 방지할 수 있습니다.


componentDidMount(){
    const object = {React:'200'};
    const Array1 = ['리엑트',object];
    const Array2 = ['리엑트',object];
    const Array3 = ['리엑트',{React:'200'}];

console.log('shallowEqualArrays(Array1,Array2):' + shallowEqualArrays(Array1, Array2));
console.log('shallowEqualArrays(Array2,Array3):' + shallowEqualArrays(Array2, Array3));
this.setState({StateString:'react'})

}

render(){
console.log('render() 실행' )
return(<div> shallowEqual</div>)
}


}
export default R029_ShallowEqual;