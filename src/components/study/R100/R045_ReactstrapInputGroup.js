import React,{Component} from "react";
import { InputGroup, InputGroupText, Input, Button } from "reactstrap";

class R045_ReactstrapinputGroup extends Component{

render(){

    return(
        <div>
        <InputGroup>
        <Input placeholder='userid' />

            <InputGroupText>@reactmail.com</InputGroupText>

        </InputGroup>

        <InputGroup>


            <Button>버튼</Button>

        <Input/>
        </InputGroup>
        </div>
    )

}




}


export default R045_ReactstrapinputGroup;