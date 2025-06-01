import React from 'react';
// import ProjectsList from '../components/layout/Projects'; // 이름 변경

import ProjectsTable from '../components/ProjectsTable';
import projectsData from '../components/data/projects.json'; // 위 JSON 배열을 projects.json 등에 저장해 두세요


export default function Projects() {
  return (
    <>
          {/* <ProjectsList style={{Header:"1500px"}} /> */}
<hr />   <ProjectsTable projects={projectsData} />
    </>

  );
}