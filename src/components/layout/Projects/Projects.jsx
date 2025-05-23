// src/components/layout/Projects/Projects.jsx
import React, { Suspense, lazy } from 'react';
import projects from '../../data/projects.json';
import styles from './Projects.module.scss';
import { usePopup } from '../../Popup/PopupContext';
import '../../../css/carousel.scss';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const truncate = (text, max = 100) =>
    text.length > max ? `${text.slice(0, max)}...` : text;

  const { showPopup } = usePopup();

  const openProjectModal = (project) => {
    // projects.json의 link 필드(파일명 or 폴더명)를 이용해 동적 import
    const linkValue = Array.isArray(project.link) ? project.link[0] : project.link;
    let ProjectComponent = null;
    if (linkValue) {
      ProjectComponent = lazy(() =>
        import(`../../../pages/Projectpages/${linkValue}`)
      );
    }

    showPopup(
      <div
        className={styles.project_modal}
        role="dialog"
        aria-modal="true"
        style={{
          width: '90vw',
          maxWidth: 1200,
          maxHeight: '80vh',
          overflowY: 'auto',
          padding: '24px',
          background: '#fff',
          borderRadius: '8px',
        }}
      >
        {ProjectComponent ? (
          <Suspense fallback={<div>로딩 중...</div>}>
            <ProjectComponent />
          </Suspense>
        ) : (
          <>  {/* linkValue 없을 때 기본 UI */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className={styles.modal_skill_list}>
              {project.skills.map((skill) => (
                <li key={skill} className={styles.modal_skill}>
                  {skill}
                </li>
              ))}
            </ul>
            {project.image && project.image.length > 0 && (
              <div className={styles.modal_image_container}>
                <img
                  src={project.image[0]}
                  alt={project.title}
                  className={styles.modal_image}
                />
              </div>
            )}
          </>
        )}
      </div>,
      {
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
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
            onKeyPress={(e) => e.key === 'Enter' && openProjectModal(project)}
          >
            <div className={styles.project_card_image}>
            {project.image && project.image.length > 0 ? (
              <div
                className={styles.modal_image_container}
                style={{
                  width: '100%',
                  height: '100px',
                  backgroundImage: `url(${project.image[0]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundPositionY: '30%',
                }}
              />
            ) : (
              <div
                className={styles.modal_image_container}
                style={{
                  width: '100%',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#f1f1f1',
                  color: '#aaa',
                  fontSize: '1rem',
                }}
              >
                이미지없음
              </div>
            )}


            </div>
            <div className={styles.project_title}>
            <h4>{project.title}</h4>    
             <button className="button_small"
              onClick={() => openProjectModal(project)}        >
              <ExternalLink  size={18} />
            </button>
            </div>
            <p>{truncate(project.description, 50)}</p>
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
       
          </div>
        ))}
      </div>
    </section>
  );
}
