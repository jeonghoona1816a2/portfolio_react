import React,{Component} from "react";

class R022_PropDefault extends Component{

render(){
let {ReactString, ReactNumber}= this.props;
return(
<div style={{padding:'0px'}}>
 <span> {ReactString}</span> <span>{ReactNumber}</span> 
</div>
)
}
}

R022_PropDefault.defaultProps = {

    ReactString: '리엑트' ,R0eatNumber : 400
}


export default R022_PropDefault;