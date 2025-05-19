import { render } from "@testing-library/react";
import React,{Component} from "react";
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

class R037_ReactstrapDropdown extends Component{

    constructor (props){
        super(props);
        this.state = {dropdownOpen:false}
    }
    toggle = (e) =>{this.setState({dropdownOpen:!this.state.dropdownOpen})};

render(){

return(
    <div style={{marginBottom:'300px'}}>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}> 
            <DropdownToggle caret> 버튼 Dropdown</DropdownToggle>
                <DropdownMenu> 
                    <DropdownItem header>해더</DropdownItem>
                    <DropdownItem disabled>비활성화버튼</DropdownItem>
                    <a href="http:example.com/"></a>
                    <DropdownItem >example 웹 사이트로이당.</DropdownItem>
                    <DropdownItem onClick={(e)=>alert('Alert 버튼')}>해더</DropdownItem>
               </DropdownMenu>
        </ButtonDropdown>
    </div>
)

}



}




export default R037_ReactstrapDropdown;