import { useEffect, useRef } from 'react';
import Project from '../../../Ts/interfaces/Project';
import world from '/world.svg';
import externalLink from '/external-link.svg';

interface SeeProjectProps extends Project {
  onClose: () => void;
}

const SeeProject = ({
  title,
  image,
  desc,
  about,
  techs,
  website,
  github,
  onClose,
}: SeeProjectProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleTabTrap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const modal = dialogRef.current?.querySelector('.modal');
      if (!modal) return;
      const focusable = modal.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTabTrap);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTabTrap);
      previousFocus.current?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="see_project active"
      role="dialog"
      aria-modal="true"
      aria-label={`Project: ${title}`}
      ref={dialogRef}
      tabIndex={-1}
    >
      <div className="backdrop" onClick={onClose} aria-hidden="true" />
      <div className="modal">
        <div className="content">
          <div className="project_title">
            <h2>
              <strong>{title}</strong>
            </h2>
            <button
              className="close_button"
              onClick={onClose}
              aria-label="Close project details"
              type="button"
            >
              ✕
            </button>
          </div>

          <p className="project_desc">{desc}</p>

          <figure>
            <img src={image} alt={`${title} screenshot`} loading="lazy" />
          </figure>
          <div className="project_about">
            <h3>About</h3>
            <p>{about}</p>
          </div>
          <div className="project_techs">
            <h3>Technologies</h3>
            <div className="techs">
              {techs.map((tech, index) => (
                <span key={index}>
                  <strong>
                    <small>{tech}</small>
                  </strong>
                </span>
              ))}
            </div>
          </div>
          <div className="website_url">
            <div className="top">
              <h3>Website</h3>
              <figure>
                <img src={world} alt="" />
              </figure>
            </div>
            <a href={website} target="_blank" rel="noopener noreferrer">
              {website}
            </a>
          </div>
        </div>
        <div className="github">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <div className="git_content">
              <h3>Open Project</h3>
              <figure>
                <img src={externalLink} alt="" />
              </figure>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SeeProject;
