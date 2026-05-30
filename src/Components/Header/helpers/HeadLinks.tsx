import { NavLink } from 'react-router-dom';
import { useCursor } from '../../../contexts/CursorContext';

interface HeadLinksProps {
  onNavigate?: () => void;
}

const HeadLinks = ({ onNavigate }: HeadLinksProps) => {
  const { setOpen } = useCursor();

  return (
    <nav className="head_links" aria-label="Main navigation">
      <ul onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <li>
          <NavLink to="/about" onClick={onNavigate}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" onClick={onNavigate}>
            projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" onClick={onNavigate}>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={onNavigate}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeadLinks;
