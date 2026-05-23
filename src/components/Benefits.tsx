import { Shield, BarChart3, Zap, Globe } from 'lucide-react';
import styles from '../styles/Benefits.module.css';

const benefits = [
  {
    icon: <Shield size={32} />,
    title: "Seguridad Enterprise",
    description: "Protección de datos de nivel corporativo y cumplimiento de estándares internacionales."
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Analytics Avanzado",
    description: "Toma decisiones basadas en datos reales sobre el progreso y desempeño de tu equipo."
  },
  {
    icon: <Zap size={32} />,
    title: "Microlearning de Alto Impacto",
    description: "Módulos diseñados para una retención máxima en el menor tiempo posible."
  },
  {
    icon: <Globe size={32} />,
    title: "Acceso Global",
    description: "Plataforma multi-idioma con disponibilidad 24/7 desde cualquier parte del mundo."
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="section">
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title">SYMEC <span className="highlight">Learning Lab</span>: El Centro de Difusión Inteligente</h2>
          <p className="section-subtitle">Una plataforma diseñada para la comunicación ejecutiva y la capacitación de alto nivel.</p>
        </div>
        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{benefit.icon}</div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
