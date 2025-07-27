import styles from './NavLink.module.css';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => (
  <a href={href} className={styles.navLink}>{children}</a>
);

export default NavLink;
