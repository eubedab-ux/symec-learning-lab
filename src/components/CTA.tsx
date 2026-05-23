import styles from '../styles/CTA.module.css';

const CTA: React.FC = () => {
  return (
    <section className={`${styles.cta} section`}>
      <div className="container">
        <div className={styles.ctaBox}>
          <h2 className={styles.title}>¿Listo para elevar el estándar de aprendizaje en tu organización?</h2>
          <p className={styles.subtitle}>
            Únete a las empresas que ya están transformando su conocimiento en ventaja competitiva.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Solicitar una Demo</button>
            <button className={styles.secondaryBtn}>Contactar Ventas</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
