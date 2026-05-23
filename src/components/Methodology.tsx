import styles from '../styles/Methodology.module.css';

const steps = [
  {
    number: "01",
    title: "Evaluación de Perfil",
    description: "Analizamos las competencias actuales y objetivos de aprendizaje de cada colaborador."
  },
  {
    number: "02",
    title: "Rutas Personalizadas",
    description: "Algoritmos inteligentes diseñan el camino más eficiente hacia la maestría."
  },
  {
    number: "03",
    title: "Micro-píldoras de Conocimiento",
    description: "Contenido de alta calidad en formatos breves y accionables."
  },
  {
    number: "04",
    title: "Validación y Feedback",
    description: "Evaluaciones continuas para asegurar el aprendizaje real y duradero."
  }
];

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className={`${styles.methodology} section`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Metodología <span className="highlight">SYMEC</span></h2>
          <p className={styles.sectionSubtitle}>Un proceso optimizado para la retención máxima en entornos corporativos dinámicos.</p>
        </div>
        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>{step.number}</span>
                <div className={styles.stepLine}></div>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
