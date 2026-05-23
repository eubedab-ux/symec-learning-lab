import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <img src="/logo.png" alt="SYMEC" className={styles.footerLogo} />
            <p className={styles.brandText}>
              Redefiniendo el aprendizaje corporativo a través de la precisión tecnológica.
            </p>
          </div>
          <div className={styles.linksGroup}>
            <h4 className={styles.groupTitle}>Producto</h4>
            <ul>
              <li><a href="#benefits">Características</a></li>
              <li><a href="#methodology">Metodología</a></li>
              <li><a href="#analytics">Analytics</a></li>
            </ul>
          </div>
          <div className={styles.linksGroup}>
            <h4 className={styles.groupTitle}>Compañía</h4>
            <ul>
              <li><a href="#">Sobre nosotros</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Privacidad</a></li>
            </ul>
          </div>
          <div className={styles.linksGroup}>
            <h4 className={styles.groupTitle}>Soporte</h4>
            <ul>
              <li><a href="#">Centro de ayuda</a></li>
              <li><a href="#">Documentación</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} SYMEC Learning Lab. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
