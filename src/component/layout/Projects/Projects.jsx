import React from 'react';
import projects from '../../data/projects.json';//test data
import styles from './Projects.module.scss';


export default function Projects() {
  return (
              <section>
               <h4>Projects</h4>
   
            <div className={styles.projects_list}>
              {projects.map(({ id, title, description, skills }) => (
                <div key={id} className={styles.project_item}>
                  <div className={styles.project_skill_list}>
                    {skills.map((skillKey) => (
                      <div
                        key={skillKey}
                        className={styles.project_skill}
                        style={{
                          backgroundImage: `var(--skill-image-${skillKey})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize:   'contain',
                          backgroundPosition: 'center'
                        }}
                      />
                    ))}
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
              </div>   
            
             </section>
  );
}
