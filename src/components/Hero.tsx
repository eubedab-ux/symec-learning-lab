import styles from '../styles/Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <img src="/logo.png" alt="SYMEC Logo" className={styles.mainLogo} />
          </div>
          <div className={styles.badge}>Corporate Learning Lab</div>
          <h1 className={styles.title}>
            Redefiniendo el <span className={styles.highlight}>Aprendizaje Ejecutivo</span> con Precisión Tecnológica
          </h1>
          <p className={styles.subtitle}>
            SYMEC Learning Lab: Una capa de comunicación avanzada que conecta tu talento con la maestría técnica. 
            Difusión, formación y analítica de alto nivel en un ecosistema premium.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryBtn} onClick={() => { const el = document.getElementById('benefits'); if (el) { el.scrollIntoView({ behavior: 'smooth' }); } }}>Explorar Learning Lab</button>
            <a 
              href="https://offset-yam-19659398.figma.site/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.secondaryBtn}
            >
              Ver Prototipo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
