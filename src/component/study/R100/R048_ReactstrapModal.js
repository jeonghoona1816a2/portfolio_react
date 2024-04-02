import React,{Component} from "react";
import { Button,Modal,ModalHeader,ModalBody,ModalFooter } from "reactstrap";

class R048_ReactstrapModal extends Component{
constructor(props){
    super(props);
    this.state = {Modal:false}
}

toggle = () =>{this.setState({modal:!this.state.modal})}


    render(){
        return(
            <>
                <Button onClick={this.toggle}>버튼</Button>
                <Modal isOpen={this.state.modal}>

                    <ModalHeader>
                        ModalHeader
                    </ModalHeader>
                    <ModalBody>
                        The gennerated Lorem Ipsum is thereFore alwary free from repettion
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggle}>확인</Button>      <Button onClick={this.toggle}>닫기</Button>
                    </ModalFooter>

                </Modal>
            </>
        )
    }


}

export default R048_ReactstrapModal;