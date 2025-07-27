import styles from './Header.module.css'
import Logo from '../Logo'
import IconMenu from '../IconMenu'
import NavMenu from '../NavMenu'

import logo from '../../assets/logo.jpg'

const Header = () => (
  <header className={styles.mainHeader}>
    <div className={styles.headerContent}>
      <Logo src={logo} alt="Prata Living" />
      <NavMenu />
      <IconMenu className={styles.iconMenu} />
    </div>
  </header>
);

export default Header;
