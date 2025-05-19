import React,{Component} from "react";
import { Button,ButtonGroup } from "reactstrap";

class R039_ReactstrapButton extends Component{

    constructor(props){super(props); }
    render(){
        return(
            <div>
                <ButtonGroup>
                <Button color="primary">primary</Button>
                <Button color="info">info</Button>
                <Button color="success">success</Button>
                <Button color="danger">danger</Button>
                </ButtonGroup>

            </div>
        )
    }

}

export default R039_ReactstrapButton;