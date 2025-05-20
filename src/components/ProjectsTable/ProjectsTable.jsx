// src/components/ProjectsTable/ProjectsTable.jsx
import React from 'react';
import styles from './ProjectsTable.module.scss'; // CSS 모듈을 사용하여 스타일을 적용합니다
export default function ProjectsTable({ projects }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th className={styles.projecttabe_th} >ID</th>
            <th className={styles.projecttabe_th} >프로젝트명</th>
            <th className={styles.projecttabe_th} >설명</th>
            <th className={styles.projecttabe_th} >기술 스택</th>
            <th className={styles.projecttabe_th} >이미지</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(proj => (
            <tr key={proj.id} style={{ borderBottom: '1px solid #eee' }}>
              <td className={styles.projecttabe_td}>{proj.id}</td>
              <td className={styles.projecttabe_td}>{proj.title}</td>
              <td className={styles.projecttabe_td}>{proj.description}</td>
              <td className={styles.projecttabe_td}>{(proj.skills || []).join(', ')}</td>
              <td className={styles.projecttabe_td}>
                {proj.image && proj.image.length > 0 && (
                  <img
                    src={proj.image[0]}
                    alt={proj.title}
                    style={{ width: 60, height: 'auto', borderRadius: 4 }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
