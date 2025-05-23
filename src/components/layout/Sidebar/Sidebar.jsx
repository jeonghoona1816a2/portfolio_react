import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import { Home,Speech,FolderOpen,Layers, MessageCircle, PanelLeft  } from 'lucide-react';


const MENU = [
  { path: '/',         label: 'Home' , icon:Home },
  { path: '/about',    label: 'About'  , icon:Speech },
  { path: '/projects', label: 'Projects' , icon:FolderOpen  },
  { path: '/workarticles', label: 'workarticles' , icon:Layers  },
  { path: '/contact',  label: 'Contact' , icon:MessageCircle },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.profile_card}>
       <div><h1 className={styles.title}>P</h1><h1  className={styles.title}>ro</h1><h1 className={styles.title}>F</h1><h1  className={styles.title}>ile</h1></div>
        <h5>  JEON<span style={{ color: "#FF7143" }}>.</span>JEONG HOON</h5>
        <div className={styles.myimage}></div>
      </div>
      <nav className={styles.menu_list}>
        {MENU.map(({ path, label, icon: Icon  }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            className={({ isActive }) =>
              isActive ? styles.menu_item_active : styles.menu_item
            }
          >
           <Icon size={20} className={styles.menu_icon} /> {label}
          </NavLink>
        ))}
      </nav>
      <button
        className={styles.collapse_btn}
        onClick={() => setCollapsed((prev) => !prev)}
        aria-label="사이드바 열기/닫기"
       title="사이드바 열기/닫기"
      >
        <PanelLeft/>
      </button>
    </aside>
  );
}