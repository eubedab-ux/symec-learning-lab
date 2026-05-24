import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from '../styles/LoginModal.module.css';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  /* Lock body scroll while open & close on Escape */
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  /* Close when clicking the dark overlay (not the modal itself) */
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
      >
        {/* Close button */}
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Cerrar"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Title */}
        <h2 id="login-title" className={styles.title}>Login</h2>

        {/* Form */}
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.field}>
            <label htmlFor="login-email" className={styles.label}>
              Usuario o email
            </label>
            <input
              id="login-email"
              type="text"
              className={styles.input}
              placeholder="nombre@empresa.com"
              autoComplete="username"
              autoFocus
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="login-password" className={styles.label}>
              Contraseña
            </label>
            <input
              id="login-password"
              type="password"
              className={styles.input}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          <a href="#" className={styles.forgot} onClick={(e) => e.preventDefault()}>
            ¿Has olvidado tu contraseña?
          </a>

          <button type="submit" className={styles.submitBtn}>
            Entrar
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default LoginModal;
