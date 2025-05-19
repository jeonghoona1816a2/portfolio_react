import 'bootstrap/dist/css/bootstrap.css'
import React,{Component} from "react";
import { Alert, UncontrolledAlert } from "reactstrap";

class R034_ReactStrapAlerts extends Component{
render(){
return(
<div>
<Alert color="light">simple alert [color : light]</Alert>
<UncontrolledAlert style={{background:'#ccc'}} color="warning">Uncontrollded Alert [color:warning]</UncontrolledAlert>
</div>
)
}
}
export default R034_ReactStrapAlerts;