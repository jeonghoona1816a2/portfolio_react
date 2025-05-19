import React,{Component} from "react";
import { ListGroup,ListGroupItem,Badge } from "reactstrap";

class R047_ReactstrapListGroup extends Component{

    render(){
        return(
            <>
            <ListGroup style={{margin:'50px'}}>
                <ListGroupItem color="danger" className="justify-content-between">
                  Badge  <Badge style={{marginLeft:'10px'}} pill>200</Badge>
                </ListGroupItem>
                <ListGroupItem disabled href="#">
                    Disable
                </ListGroupItem>
                <ListGroupItem tag="a" href="#">
                    Link
                </ListGroupItem>
                <ListGroupItem tag='button' action onClick={(e)=>{alert('button')}} > Button
                </ListGroupItem>
            </ListGroup>
            </>
        )
    }

}



export default R047_ReactstrapListGroup;