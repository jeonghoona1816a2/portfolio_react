// components/layout/Sidebar/Sidebar.jsx
import React from 'react';
import styles from './Content.module.scss';
import { Routes, Route } from 'react-router-dom';

import Home from '../../../pages/Home/Home';
import About from '../../../pages/About';
import Projects from '../../../pages/Projects';
import Articles from '../../../pages/Articles';
import Contact  from '../../../pages/Contact';

export default function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.content_inner}>
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/about"   element={<About />} />
          <Route path="/projects"element={<Projects />} />
          <Route path="/articles"element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}





// const Content = () => (

//         <div className={styles.content}>
//           <div className={styles.content_inner}>
//             <section>
//               <h2>안녕하세요, UI/UX 담당자 전정훈입니다</h2>
//               <p>
//                 이 인사는 늘 새로운 시작을 알리며, 디자인·퍼블리싱·개발 전 영역에서
//                 최적의 사용자 경험을 실현하려는 제 열정을 담고 있습니다. ‘모바일 경계
//                 허물기 · 모듈 고려 · 초경량 퍼포먼스 · 전방위 접근성 · 신뢰의 코드 ·
//                 테스트 중심 안정성’이라는 여섯 가지 철학을 바탕으로, 사용자 우선·유연
//                 협업으로 최고의 결과물을 만들어 가겠습니다. 귀사와도 이 설렘으로 함께
//                 시작하기를 기대합니다. 감사합니다.
//               </p>
//             </section>

//             <section>
//               <h3>Skills</h3>
//               <div className= {styles.skills_list}>
//                 <div className="skill_item">1</div>
//                 <div className="skill_item">2</div>
//                 <div className="skill_item">3</div>
//                 <div className="skill_item">4</div>
//                 <div className="skill_item">5</div>
//                 <div className="skill_item">6</div>
//                 <div className="skill_item">7</div>
//                 <div className="skill_item">8</div>
//               </div>
//             </section>

//             <section>
//               <h3>Projects</h3>
//               <div className="projects_list">
//                 <div className="project_item">1</div>
//                 <div className="project_item">2</div>
//                 <div className="project_item">3</div>
//                 <div className="project_item">4</div>
//               </div>
//             </section>
//           </div>
//         </div>


// );

// export default Content;
