import { useRef, useState, useCallback, useEffect } from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import AppRoutes from './Routes/AppRoutes';
import { CursorContext } from './contexts/CursorContext';
import SkipToContent from './Components/SkipToContent';

function App() {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const [cursorActive, setCursorActive] = useState(false);
  const [cursorOpen, setCursorOpen] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  const setActive = useCallback((active: boolean) => setCursorActive(active), []);
  const setOpen = useCallback((open: boolean) => setCursorOpen(open), []);

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsFinePointer(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (innerRef.current) {
        innerRef.current.style.left = `${x}px`;
        innerRef.current.style.top = `${y}px`;
      }
      if (outerRef.current) {
        outerRef.current.style.left = `${x}px`;
        outerRef.current.style.top = `${y}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isFinePointer]);

  return (
    <CursorContext.Provider value={{ setActive, setOpen }}>
      <SkipToContent />
      <Header />
      <main id="main-content">
        <AppRoutes />
      </main>
      {isFinePointer && (
        <div className="app">
          <div
            className={`inner_cursor${cursorActive ? ' active' : ''}${cursorOpen ? ' open' : ''}`}
            ref={innerRef}
          />
          <div className={`outer_cursor${cursorOpen ? ' open' : ''}`} ref={outerRef} />
        </div>
      )}
    </CursorContext.Provider>
  );
}

export default App;
