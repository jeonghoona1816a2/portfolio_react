import React,{Component} from "react";
import { Button, ButtonGroup, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import BackImg from '/Users/a1816/OneDrive/문서/react_project/mynewwebproject/src/images/imarges.jpg'
// C:\Users\a1816\OneDrive\문서\react_project\mynewwebproject\src\images
class R040_ReactstrapCard extends Component{



render(){

    return(
    <div>
    <Card>
    <CardImg top height={'200px'} src={BackImg} alt="card images"/>
        <CardBody>

    <CardTitle> card 제목 </CardTitle>
     <CardSubtitle>card 소제목</CardSubtitle>
     <CardText>내용을 넣습니다.</CardText>
     <ButtonGroup><Button>1</Button><Button>2</Button></ButtonGroup>
      </CardBody>
 
    </Card>    
    </div>)
}

}

export default R040_ReactstrapCard;