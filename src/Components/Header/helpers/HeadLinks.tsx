import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/projects'>projects</Link>
        </li>
        <li>
          <Link to='/resume'>Resume</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeadLinks;
