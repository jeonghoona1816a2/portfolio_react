import React,{Component} from "react";
class R015_Map extends Component{



    componentDidMount(){
        var Map_Arr = [3,2,8,8];
        let Map_newArr = Map_Arr.map(x=>x);
        // map() 메서드는 배열의 각 요소를 변형하거나 새로운 배열을 생성할 때 사용됩니다. 
        console.log(`1.map_newArr : {${Map_newArr}}`)

        let Map_mulititArr = Map_Arr.map(x => x * 2)
        console.log(`2.Map_mulitiArr : ${Map_mulititArr}`)

        var objArray = [{key:'reat',value:'200'},{key:`리엑트`,value:`TwoHundred`}];
    
        let Map_objArr = objArray.map((obj, index) => {
            console.log((index+3)+`.obj : `+ JSON.stringify(obj))
            var Obj = {};
            Obj[obj.key] = obj.value;
            return Obj;
        })
    
        console.log(`5. Map_objArr  ` + JSON.stringify(Map_objArr))
    }
    render(){
      return( <h2>[R015_Map]</h2> )
    }


}
export default R015_Map;