import React,{Component} from "react";
import datatype from 'prop-types';



class R018_propDatatype extends Component{
render(){
    // <propsDatatype String = "react" Number={200} Boolean = {1==1} Array = {[0,1,8]} Object Json = {{react:"리액트",twohundred:"200"}} Function={console.log('FunctionProps : function')}
    // />
    let {
        String, Number, Boolean, Array, ObjectJson, Function    
    } = this.props
    return(

    <div style={{padding:`1px`}}>
    <p> StringProps:{String} </p>
    <p> NumberProps:{Number} </p>
    <p> NumberProps:{Number} </p>
    <span>BooleanProps:{Boolean.toString}</span>
    <p>ArrayProps:{Array.toString}</p>
    <p>Object JsonProps:{JSON.stringify(ObjectJson)}</p>
    <p>Function:{Function}</p>
    </div>

)
}
}

    R018_propDatatype.propTypes = {
        String: datatype.number,
        Number: datatype.number,
        Boolean: datatype.bool,
        Array: datatype.array,
        ObjectJson: datatype.object,
        Function:datatype.func,
    }

export default R018_propDatatype;