import React,{Component} from "react";
import { UncontrolledCarousel } from "reactstrap";
import BackImg from '../../../images/imarges.jpg'
const items = [

    {
    src:BackImg,
    altText :' 슬리이드 1 이미지 대체 문구 ',
    caption: ' 슬라이드 1',
    header: '슬라이드 제목'
    },
    {
    src:BackImg,
    altText :' 슬리이드 2 이미지 대체 문구 ',
    caption: ' 슬라이드 2',
    header: '슬라이드 제목'
    },
    {
    src:BackImg,
    altText :' 슬리이드 3 이미지 대체 문구 ',
    caption: ' 슬라이드 3',
    header: '슬라이드 제목'
    },
    {
    src:BackImg,
    altText :' 슬리이드 4 이미지 대체 문구 ',
    caption: ' 슬라이드 4',
    header: '슬라이드 제목'
    }
];
class R041_ReactstrapCarousel extends Component{

render(){
    return(

            <UncontrolledCarousel items={items}/>

    )
}

}


export default R041_ReactstrapCarousel ;