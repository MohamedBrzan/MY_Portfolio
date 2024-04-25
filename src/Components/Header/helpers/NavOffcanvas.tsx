import { useEffect } from 'react';
import HeadLinks from './HeadLinks';
import menuClose from '/close.svg';

const NavOffcanvas = () => {
  const handleClose = () =>
    document.getElementById('nav_offcanvas')?.classList.remove('show');

  useEffect(() => {
    document.querySelectorAll('.nav_offcanvas ul li').forEach((link) => {
      link.addEventListener('click', () =>
        document.getElementById('nav_offcanvas')?.classList.remove('show')
      );
    });
  }, []);

  return (
    <section className='nav_offcanvas' id='nav_offcanvas'>
      <HeadLinks />
      <div className='close_menu' onClick={handleClose}>
        <figure>
          <img src={menuClose} alt='Menu' />
        </figure>
      </div>
    </section>
  );
};

export default NavOffcanvas;
