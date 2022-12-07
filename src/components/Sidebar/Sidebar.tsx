import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
            />
            
            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/56443755?v=4" />
                <strong>Marcos</strong>
                <span>Developer</span>
            </div>

            <footer className={styles.button}>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}