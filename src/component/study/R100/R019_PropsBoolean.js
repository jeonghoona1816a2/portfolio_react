import React,{Component} from "react";

class R019_PropsBoolean extends Component{


render(){

   let {
BooleanTrueFalse
   }  = this.props

   return (
<div style={{paading:'10px'}}>
{BooleanTrueFalse ? '2.':'1.'}
{BooleanTrueFalse.toString()}
</div>

   )

}



}


export default R019_PropsBoolean;