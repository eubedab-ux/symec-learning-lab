import styles from '../styles/Analytics.module.css';

const Analytics: React.FC = () => {
  return (
    <section id="analytics" className="section">
      <div className="container">
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.title}>Learning <span className="highlight">Analytics</span></h2>
            <p className={styles.description}>
              Transforma el aprendizaje en resultados medibles. Nuestro panel de control ejecutivo proporciona 
              visibilidad total sobre el ROI de tu formación corporativa.
            </p>
            <ul className={styles.features}>
              <li>Monitoreo de progreso en tiempo real</li>
              <li>Mapas de calor de retención de conocimiento</li>
              <li>Reportes de cumplimiento automatizados</li>
              <li>Predicciones de desempeño basadas en AI</li>
            </ul>
          </div>
          <div className={styles.visual}>
            <div className={styles.dashboard}>
              <div className={styles.dbHeader}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.dbBody}>
                <div className={styles.dbGrid}>
                  <div className={styles.dbCard}>
                    <span className={styles.dbLabel}>Retención</span>
                    <div className={styles.dbValue}>94%</div>
                    <div className={styles.dbChartSmall}>
                      <div className={styles.dbBar} style={{width: '94%', backgroundColor: 'var(--color-brand-green)'}}></div>
                    </div>
                  </div>
                  <div className={styles.dbCard}>
                    <span className={styles.dbLabel}>Engagement</span>
                    <div className={styles.dbValue}>82%</div>
                    <div className={styles.dbChartSmall}>
                      <div className={styles.dbBar} style={{width: '82%', backgroundColor: 'var(--color-brand-orange)'}}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.dbMainChart}>
                  <div className={styles.dbChartLine}></div>
                  <div className={styles.dbChartPoints}>
                    <div className={styles.dbPoint} style={{bottom: '20%', left: '10%'}}></div>
                    <div className={styles.dbPoint} style={{bottom: '45%', left: '30%'}}></div>
                    <div className={styles.dbPoint} style={{bottom: '35%', left: '50%'}}></div>
                    <div className={styles.dbPoint} style={{bottom: '70%', left: '70%'}}></div>
                    <div className={styles.dbPoint} style={{bottom: '60%', left: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
