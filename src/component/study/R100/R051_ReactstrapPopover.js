import React,{Component} from "react";
import { Button,UncontrolledPopover, PopoverHeader, PopoverBody, Popover } from "reactstrap";

class R051_ReactstrapPopover extends Component{

    render(){
        return(
            <>
            <Button id="Popover_id" type="button">popoverbutton</Button>   
            <UncontrolledPopover target='Popover_id'>
                <PopoverHeader>react200</PopoverHeader>
                <PopoverBody> The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles.</PopoverBody>
                </UncontrolledPopover>         
            </>
        )
    }


}

export default R051_ReactstrapPopover;