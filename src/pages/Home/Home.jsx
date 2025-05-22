import React from 'react';
import styles from '../Home/Home.module.scss';

import Projects from '../../components/layout/Projects';

export default function Home() {
   const skills = Array.from({ length: 12 }, (_, i) => i + 1);
  // const projcts = Array.from({ length: 4 }, (_, i) => i + 1);


  return (
    <section>
      {/* <h2>Home</h2>
      <p>환영합니다! 저는 UI/UX 전정훈 차장입니다. 이곳은 제 포트폴리오의 첫 화면입니다.</p> */}

      
        <div className={styles.content}>
          <div className={styles.content_inner}>
             {/* <section>
               <h2>안녕하세요, UI/UX 담당자 전정훈입니다</h2>
               <p>
                 이 인사는 늘 새로운 시작을 알리며, 디자인·퍼블리싱·개발 전 영역에서
                 최적의 사용자 경험을 실현하려는 제 열정을 담고 있습니다. ‘모바일 경계
                 허물기 · 모듈 고려 · 초경량 퍼포먼스 · 전방위 접근성 · 신뢰의 코드 ·
                 테스트 중심 안정성’이라는 여섯 가지 철학을 바탕으로, 사용자 우선·유연
                 협업으로 최고의 결과물을 만들어 가겠습니다. 귀사와도 이 설렘으로 함께
                 시작하기를 기대합니다. 감사합니다.
               </p>
             </section> */}

             <section >
               <h4>Skills</h4>
               <div className={styles.skills_list}>
                 {skills.map((num) => (
                          <div key={num} className={styles.skill_item}>
                            {/*num*/}
                          </div>
                        ))}
               </div>
             </section>
            <Projects />
          
           </div>
         </div>


    </section>
  );
}
