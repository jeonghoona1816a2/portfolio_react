import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './carouselWrapper';  // carousel.scss 파일을 동일 폴더로 이동 후 상대경로로 import

// 슬라이드에 사용할 스킬 아이템 목록
const items = [
  { src: '/images/ai_logo.png',     altText: 'AI' },
  { src: '/images/and_st.png',      altText: 'Android Studio' },
  { src: '/images/css_logo.png',    altText: 'CSS' },
  { src: '/images/js_logo.png',     altText: 'JavaScript' },
  { src: '/images/react_logo.png',  altText: 'React' },
  { src: '/images/Sass_Logo.png',   altText: 'Sass' },
  { src: '/images/figma_logo.png',  altText: 'Figma' },
  { src: '/images/html5_logo.png',  altText: 'HTML5' },
  { src: '/images/git_logo.png',    altText: 'Git' },
  { src: '/images/w3c_logo.png',    altText: 'W3C' },
  { src: '/images/ws_logo.png',     altText: 'WebSquare' },
  { src: '/images/xd_logo.png',     altText: 'Adobe XD' },
  { src: '/images/ps_logo.png',     altText: 'Photoshop' },
];

export default function CarouselWrapper() {
  return <UncontrolledCarousel items={items} />;
}
