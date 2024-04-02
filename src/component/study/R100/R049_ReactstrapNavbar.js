import { render } from "@testing-library/react";
import React,{Component} from "react";
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "bootstrap";
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink } from "reactstrap";

class R048_ReactstrapModal extends Component{

constructor(props){
    super(props);
    this.state = {collapsed:false}
}

toggle = ()=>{ this.setState({collapsed: !this.state.collapsed})}

render(){

return(
    <>
     <Navbar>
        <NavbarBrand  className='mr-auto' color="faded">Navbar</NavbarBrand>
        <NavbarToggler onClick={this.toggle} className="mr-2"/>
        <Collapse isOpen={this.state.collapsed} navbar >
        <Nav navbar>
            <NavItem >
                <NavLink style={{style:'#ccc'}} href="#">react</NavLink>
            </NavItem>
            <NavItem style={{style:'#ccc'}}>
                <NavLink href="#">200</NavLink>
            </NavItem>
            <NavItem style={{style:'#ccc'}}>
                <NavLink href="#">400</NavLink>
            </NavItem>
        </Nav>
        </Collapse>
    </Navbar>
    
    </>
)

}

}


export default R048_ReactstrapModal;