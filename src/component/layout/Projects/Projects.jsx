import React, { useState } from 'react';
import projects from '../../data/projects.json';
import styles from './Projects.module.scss';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section>
      <h4>Projects</h4>
      <div className={styles.projects_list}>
        {projects.map(({ id, title, description, skills }) => (
          <div
            key={id}
            className={styles.project_item}
            onClick={() => openModal({ id, title, description, skills })}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && openModal({ id, title, description, skills })}
          >
            <div className={styles.project_skill_list}>
              {skills.map((skillKey) => (
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
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className={styles.modal_overlay} onClick={closeModal}>
          <div
            className={styles.project_modal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button className={styles.modal_close} onClick={closeModal} aria-label="Close modal">
              ×
            </button>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <ul className={styles.modal_skill_list}>
              {selectedProject.skills.map((skill) => (
                <li key={skill} className={styles.modal_skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
