import { useRef, useEffect } from 'react';
import logo from '/logo.png';
import './Header.scss';
import HeadLinks from './helpers/HeadLinks';
import menuHamburger from '/menu-hamburger.svg';
import { Link } from 'react-router-dom';
import NavOffcanvas from './helpers/NavOffcanvas';

const Header = () => {
  const logoRef = useRef(document.createElement('div'));
  const menuHamburgerRef = useRef(document.createElement('div'));

  useEffect(() => {
    logoRef.current.addEventListener('mouseover', () => {
      document.getElementById('inner_cursor')?.classList.add('active');
    });
    logoRef.current.addEventListener('mouseleave', () => {
      document.getElementById('inner_cursor')?.classList.remove('active');
    });

    menuHamburgerRef.current.addEventListener('click', () =>
      document.getElementById('nav_offcanvas')?.classList.add('show')
    );
  }, []);
  return (
    <header>
      <div className='logo' ref={logoRef}>
        <figure>
          <Link to='/'>
            <img src={logo} alt='Logo.' />
          </Link>
        </figure>
      </div>
      <div className='lg_links'>
        <HeadLinks />
      </div>
      <div className='sm_links'>
        <NavOffcanvas />
        <div className='menu_hamburger' ref={menuHamburgerRef}>
          <figure>
            <img src={menuHamburger} alt='Menu' />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Header;
