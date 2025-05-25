import React from 'react';

export default function Project000() {
  return (
    <div className="project-page" style={{ padding: '16px' }}>
      {/* 프로젝트 제목 */}
      <h2>Project 000 Title</h2>

      {/* 이미지: 나중에 경로와 alt 텍스트를 수정하세요 */}
      <img
        src="../../../images/portfolio/01-daebeopwon-uiux-freelancer.png" // 이미지 경로
        alt="Project 000 Preview"
        style={{ maxWidth: '100%', height: 'auto', margin: '16px 0' }}
      />

      {/* 설명 텍스트: 나중에 내용을 채워주세요 */}
      <p style={{ fontSize: '16px', lineHeight: '1.5', height: '800px' }}>
<h1>UI 디자이너라면 꼭 알아야 할 <b>여백(Spacing) 가이드</b></h1>
    <p style={{color:"#666", marginBottom:"30px"}}>4px/8px 그리드와 실전 적용 노하우로 화면을 더욱 “프로”처럼!</p>

    <h2>1. 여백(Spacing)의 기본 원칙</h2>
    <h3>1) 4px/8px Grid System</h3>
    <ul>
      <li>4px 또는 8px을 기준으로, 모든 간격을 배수로 설정</li>
      <li>예시: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64px 등</li>
    </ul>
    <h3>2) 계층적 간격 설정 예시</h3>
    <ul>
      <li><b>타이틀-본문:</b> 24px 또는 32px (중요한 구분은 32px, 자연스러운 구분은 24px)</li>
      <li><b>카드-카드:</b> 16px 또는 24px (리스트형: 16px, 그리드형: 24px)</li>
      <li><b>내부 요소(텍스트-버튼 등):</b> 8px 또는 12px</li>
    </ul>
    <h3>3) 계층적 간격을 쓰는 이유</h3>
    <ul>
      <li><b>8~12px:</b> 텍스트, 버튼 등 작은 요소 구분</li>
      <li><b>16~24px:</b> 카드, 섹션, 리스트 등 중간 구분</li>
      <li><b>32px 이상:</b> 타이틀, 섹션 구분, 큰 화면 분할</li>
    </ul>

    <h2>2. 대표 디자인 시스템에서의 활용 예시</h2>
    <ul>
      <li><b>Material Design (Google):</b> 8pt 그리드, 컴포넌트 최소 간격 8px, 주요 구분 24~32px</li>
      <li><b>Apple HIG:</b> 8, 16, 24, 32, 40px 등 계단식 마진 권장</li>
      <li><b>카카오, 네이버 등:</b> 8px, 12px, 16px, 24px 등 배수 활용</li>
    </ul>

    <h2>3. 실전 적용 팁</h2>
    <ul>
      <li>10px, 14px 등 애매한 값은 피하기</li>
      <li>배수 시스템을 사용하면 디자인이 훨씬 정돈됨</li>
      <li>카드, 리스트, 섹션: 16/24/32px</li>
      <li>내부(텍스트-버튼): 8/12px</li>
      <li>배수로 통일하면 개발 협업도 쉬워지고, 전체적 균형이 살아남</li>
    </ul>
    <span className="tip">
      💡 <b>한 줄 요약:</b> “4/8px 배수 그리드와 계층적 간격(8, 16, 24, 32px 등)을 쓰면 자연스럽고 프로다운 디자인을 만들 수 있다!”
    </span>

    <h2>4. 여백(Spacing) 실전 적용 예시 표</h2>
    <table>
      <thead>
        <tr>
          <th>용도</th>
          <th>권장 간격(px)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>타이틀-본문</td>
          <td>24 ~ 32</td>
        </tr>
        <tr>
          <td>카드-카드</td>
          <td>16 ~ 24</td>
        </tr>
        <tr>
          <td>버튼-텍스트</td>
          <td>8 ~ 12</td>
        </tr>
        <tr>
          <td>섹션-섹션</td>
          <td>32 ~ 40</td>
        </tr>
        <tr>
          <td>라인/디바이더</td>
          <td>16 ~ 24</td>
        </tr>
      </tbody>
    </table>

    <span className="tip">
      여백은 “비어 있는 공간”이 아니라, <b>디자인의 균형, 가독성, 사용성</b>을 완성하는 핵심 요소입니다.<br/>
      4px/8px 배수 그리드를 활용해 한 단계 높은 완성도의 UI를 만들어보세요!
    </span>
      </p>
    </div>
  );
}
