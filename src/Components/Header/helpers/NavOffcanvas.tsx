import { useEffect, useRef } from 'react';
import HeadLinks from './HeadLinks';
import menuClose from '/close.svg';

interface NavOffcanvasProps {
  open: boolean;
  onClose: () => void;
}

const NavOffcanvas = ({ open, onClose }: NavOffcanvasProps) => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      navRef.current?.focus();
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      if (open) document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <section
      className={`nav_offcanvas${open ? ' show' : ''}`}
      aria-hidden={!open}
      role="dialog"
      aria-label="Navigation menu"
      ref={navRef}
      tabIndex={-1}
    >
      <HeadLinks onNavigate={onClose} />
      <button className="close_menu" onClick={onClose} aria-label="Close menu" type="button">
        <figure>
          <img src={menuClose} alt="" />
        </figure>
      </button>
    </section>
  );
};

export default NavOffcanvas;
