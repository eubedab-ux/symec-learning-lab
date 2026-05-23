import styles from '../styles/Mobile.module.css';

const Mobile: React.FC = () => {
  return (
    <section id="mobile" className={`${styles.mobile} section`}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.visual}>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneScreen}>
                <div className={styles.appHeader}>
                  <div className={styles.appLogo}>S</div>
                  <div className={styles.appProfile}></div>
                </div>
                <div className={styles.appContent}>
                  <div className={styles.appCard}></div>
                  <div className={styles.appCard}></div>
                  <div className={styles.appCard}></div>
                </div>
                <div className={styles.appNav}>
                  <div className={styles.appNavItem}></div>
                  <div className={styles.appNavItem}></div>
                  <div className={styles.appNavItem}></div>
                </div>
              </div>
            </div>
            <div className={styles.glow}></div>
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>Aprendizaje <span className="highlight">Sin Límites</span></h2>
            <p className={styles.description}>
              La experiencia SYMEC está optimizada para dispositivos móviles. 
              Permite que tus colaboradores aprendan en cualquier momento y lugar, 
              con una interfaz fluida e intuitiva.
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>+98%</span>
                <span className={styles.statLabel}>Uptime</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Responsive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
