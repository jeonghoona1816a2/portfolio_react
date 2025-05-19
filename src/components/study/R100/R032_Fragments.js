import React,{Component} from "react";

class R032_Fragements extends Component{


render(){


return(

    /**<React.Fragment>는 여러 요소를 그룹화합니다. 
     * <p>와 <span> 요소가 자식 요소로 포함됩니다. 
     * 이렇게 Fragment를 사용하면 불필요한 div 요소를
     *  추가하지 않고도 여러 요소를 그룹화할 수 있습니다. */
<React.Fragment>
<p>P Tage</p>
<span>Span Tag</span>
{/* <>
<p>P Tage</p>
<span>Span Tag</span>
</>  위와 같이 사용 가능*/}
</React.Fragment>



)


}


}


export default R032_Fragements;