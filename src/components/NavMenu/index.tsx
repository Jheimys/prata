import styles from './NavMenu.module.css';
import NavLink from '../NavLink';

const NavMenu = () => (
  <nav className={styles.navMenu} aria-label="Navegação principal">
    <ul className={styles.navList}>
      <li><NavLink href="#About">About</NavLink></li>
      <li><NavLink href="#Enterprises">Enterprises</NavLink></li>
      <li><NavLink href="#Contact">Contact</NavLink></li>
    </ul>
  </nav>
);

export default NavMenu;
