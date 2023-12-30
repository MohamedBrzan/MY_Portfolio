import { useRef } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import AppRoutes from './Routes/AppRoutes';

function App() {
  const innerRef = useRef(document.createElement('div'));
  const outerRef = useRef(document.createElement('div'));
  window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    innerRef.current.style.left = `${x}px`;
    innerRef.current.style.top = `${y}px`;
    outerRef.current.style.left = `${x}px`;
    outerRef.current.style.top = `${y}px`;
  });

  return (
    <>
      <Header />

      <AppRoutes />
      <div className='app'>
        <div className='inner_cursor' id='inner_cursor' ref={innerRef}></div>
        <div className='outer_cursor' id='outer_cursor' ref={outerRef}></div>
      </div>
    </>
  );
}

export default App;
