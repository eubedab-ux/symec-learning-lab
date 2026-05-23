import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="SYMEC" className={styles.logoImg} />
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#benefits">Beneficios</a></li>
          <li><a href="#methodology">Metodología</a></li>
          <li><a href="#analytics">Analytics</a></li>
          <li><a href="#mobile">Mobile</a></li>
        </ul>
        <div className={styles.navActions}>
          <button className={styles.ctaButton}>Acceder</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
