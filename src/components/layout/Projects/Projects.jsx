// src/component/layout/Projects/Projects.jsx
import React from 'react';
import projects from '../../data/projects.json';
import styles from './Projects.module.scss';
import { usePopup } from '../../Popup/PopupContext';

export default function Projects() {
  const truncate = (text, max = 100) =>{
    return(  text.length > max ? `${text.slice(0, max)}...` : text);
  }


  const { showPopup } = usePopup();

  const openProjectModal = (project) => {
    showPopup(
      <div
        className={styles.project_modal}
        role="dialog"
        aria-modal="true"
      >
        <h3>{project.title}</h3>
          <p>{project.description}</p>
        <ul className={styles.modal_skill_list}>
          {project.skills.map((skill) => (
            <li key={skill} className={styles.modal_skill}>
              {skill}

            </li>
            
          ))}
        </ul>
                {/* <div style={{ backgroundImage: `url(${project.image})`, height:'100%', width:"100%" }}>1</div> */}
                {/* 이미지가 길어지면 스크롤 되는 컨테이너 */}
       {/** 이미지가 없을때 */}
        {project.image && project.image.length > 0 && (
        <div className={styles.modal_image_container}>        
          <img
            src={project.image[0]}
            alt={project.title}
            className={styles.modal_image}
          />
       </div>)}
      </div>,
      {
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '50%',
        // 필요에 따라 height도 지정 가능
        maxHeight: '80vh',
        overflowY: 'auto',
        
      }
    );
  };

  return (
    <section>
      <h4>Projects</h4>
      <div className={styles.projects_list}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={styles.project_item}
            tabIndex={0}
            onKeyPress={(e) =>
              e.key === 'Enter' && openProjectModal(project)
            }
          >
            <div className={styles.project_skill_list}>
              {project.skills.map((skillKey) => (
                <div
                  key={skillKey}
                  className={styles.project_skill}
                  style={{
                    backgroundImage: `var(--skill-image-${skillKey})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                  }}
                />
              ))}
            </div>
            <h3>{project.title}</h3>
              <p>{truncate(project.description, 50)}</p>
            <button onClick={() => openProjectModal(project)} role="button" > 자세히 보기</button>
          </div>
        ))}
      </div>
    </section>
  );
}
