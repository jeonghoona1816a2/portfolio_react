
import React,{Component} from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

class R036_ReactstrapBreadcrumbs extends Component{

render(){

return(
<div id="top">
<div>가나다라</div>
<Breadcrumb tag='nav' style={{position:"fixed", top:'100px', height:'100px', width:'50px',right:'100px'}} listTage = '<div>'>
 
<BreadcrumbItem tag='a' href='#top' >go_top</BreadcrumbItem>
<BreadcrumbItem tag='a' href='#bottom' >go_bottom</BreadcrumbItem>
</Breadcrumb>
<div id='bottom' style={{marginTop:'1300px'}}></div>
<span>bottom</span>
</div>
)

}


}

export default R036_ReactstrapBreadcrumbs;