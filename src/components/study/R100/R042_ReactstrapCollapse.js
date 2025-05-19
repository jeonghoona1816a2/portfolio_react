import React, { Component } from "react";
import { UncontrolledCollapse, Button, Card, CardBody } from "reactstrap";

class R042_ReactstrapCollapse extends Component {
  render() {
    return (
      <div style={{height:'400px'}}>
        {/* 버튼을 클릭하여 카드를 펼치거나 접을 수 있도록 함 */}
        <Button style={{margin:'50px'}} color="warning" id='toggle'>펼치기/접기</Button>
        {/* toggle 속성을 사용하여 카드가 펼쳐지거나 접힐 수 있도록 함 */}
        <UncontrolledCollapse toggler='#toggle'>
        {/* <UncontrolledCollapse toggler='#toggle'> #을 넣어도 무관하다 */} 
          <Card style={{height:'200px', background:'#ccc'}}>
            <CardBody>
              React 200
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    );
  }
}

export default R042_ReactstrapCollapse;