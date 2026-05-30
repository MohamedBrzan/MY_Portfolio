import { useState } from 'react';
import logo from '/logo.png';
import './Header.scss';
import HeadLinks from './helpers/HeadLinks';
import menuHamburger from '/menu-hamburger.svg';
import { Link } from 'react-router-dom';
import NavOffcanvas from './helpers/NavOffcanvas';
import { useCursor } from '../../contexts/CursorContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setActive } = useCursor();

  return (
    <header>
      <div
        className="logo"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <figure>
          <Link to="/">
            <img src={logo} alt="Mohamed Mahmoud — Home" />
          </Link>
        </figure>
      </div>
      <div className="lg_links">
        <HeadLinks />
      </div>
      <div className="sm_links">
        <NavOffcanvas open={menuOpen} onClose={() => setMenuOpen(false)} />
        <button
          className="menu_hamburger"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-label="Open navigation menu"
          type="button"
        >
          <figure>
            <img src={menuHamburger} alt="" />
          </figure>
        </button>
      </div>
    </header>
  );
};

export default Header;
