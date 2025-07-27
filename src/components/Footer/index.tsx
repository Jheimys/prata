import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <div className={styles.leftBlock}>
        <h3 className={styles.title}>Lunch & Learn</h3>
        <p className={styles.subtitle}>
          An experience to learn and share knowledge while enjoying our lunch.<br />
        </p>
      </div>
      <nav className={styles.socialNav}>
        <a
          href="mailto:james.bassani@email.com"
          className={styles.socialLink}
          title="Send me an email"
        >
          📧
        </a>
        <a
          href="https://linkedin.com/in/jamesbassani"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          title="LinkedIn"
        >
          🔗
        </a>
      </nav>
    </div>
    <div className={styles.copy}>
      © {new Date().getFullYear()} Jheimys Bassani. 
    </div>
  </footer>
);

export default Footer;
