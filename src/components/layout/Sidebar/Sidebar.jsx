// src/component/layout/Sidebar/Sidebar.jsx
import React from 'react';
import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';

const MENU = [
  { path: '/',         label: 'Home' },
  { path: '/about',    label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/articles', label: 'Articles' },
  { path: '/contact',  label: 'Contact' },
];

// const Sidebar = () => (
//   <aside className={styles.sidebar}>
//     <div className={styles.profile_card}>
//       <h1>profile</h1>
//       <h4>JEONJEONGHOON</h4>
//       <div className={styles.myimage}></div>
//     </div>

//     <div className={styles.menu_list}>
//       <div className={styles.menu_item}>Home</div>
//       <div className={styles.menu_item}>About</div>
//       <div className={styles.menu_item}>Projects</div>
//       <div className={styles.menu_item}>Articles</div>
//       <div className={styles.menu_item}>Contact</div>
//     </div>
//   </aside>
// );

// export default Sidebar;

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
       <div className={styles.profile_card}>
      <h1>profile</h1>
    <h4>JEONJEONGHOON</h4>       <div className={styles.myimage}></div>
     </div>
      <nav className={styles.menu_list}>
        {MENU.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              isActive ? styles.menu_item_active : styles.menu_item
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
