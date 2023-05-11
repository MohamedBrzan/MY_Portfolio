import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const HeadLinks = () => {
  const ulRef = useRef(document.createElement('ul'));

  useEffect(() => {
    ulRef.current.addEventListener('mouseover', () => {
      document.getElementById('inner_cursor')?.classList.add('open');
      document.getElementById('outer_cursor')?.classList.add('open');
    });
    ulRef.current.addEventListener('mouseleave', () => {
      document.getElementById('inner_cursor')?.classList.remove('open');
      document.getElementById('outer_cursor')?.classList.remove('open');
    });
  }, []);

  return (
    <nav className='head_links'>
      <ul ref={ulRef}>
        <li>
          <NavLink to='/about' className=''>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/projects'>projects</NavLink>
        </li>
        <li>
          <NavLink to='/resume'>Resume</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeadLinks;
