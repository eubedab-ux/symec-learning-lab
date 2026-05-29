import React, { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import styles from '../styles/Teaser.module.css';
import teaserThumbnail from '../assets/teaser_thumbnail.png';

const Teaser: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section id="teaser" className={`${styles.teaser} section`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Descubre la experiencia <span className="highlight">SYMEC Learning Lab</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Una propuesta de microlearning diseñada para entornos corporativos de alta exigencia.
          </p>
        </div>

        <div className={styles.videoContainer}>
          <div className={styles.videoWrapper} onClick={handleOpenModal}>
            <img
              src={teaserThumbnail}
              alt="SYMEC Learning Lab Teaser Thumbnail"
              className={styles.videoThumbnail}
              loading="lazy"
            />

            <div className={styles.videoOverlay}>
              <div className={styles.techGrid}></div>

              <div className={styles.techDecor}>
                <div className={`${styles.techLine} ${styles.topLeft}`}></div>
                <div className={`${styles.techLine} ${styles.topRight}`}></div>
                <div className={`${styles.techLine} ${styles.bottomLeft}`}></div>
                <div className={`${styles.techLine} ${styles.bottomRight}`}></div>
              </div>

              <div className={`${styles.hudText} ${styles.hudLeft}`}>
                <span>[ SML-01 // TEASER PROMOTIONAL ]</span>
              </div>
              <div className={`${styles.hudText} ${styles.hudRight}`}>
                <span>CALIDAD: 4K ULTRA HD</span>
              </div>

              <button
                className={styles.playButton}
                aria-label="Reproducir video"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenModal();
                }}
              >
                <div className={styles.ripple}></div>
                <div className={styles.ripple2}></div>
                <Play className={styles.playIcon} size={32} fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className={styles.modal}
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalClose}
              onClick={handleCloseModal}
              aria-label="Cerrar video"
            >
              <X size={18} />
              <span>Cerrar</span>
            </button>
            <iframe
              className={styles.modalIframe}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
              title="SYMEC Learning Lab Teaser"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Teaser;
