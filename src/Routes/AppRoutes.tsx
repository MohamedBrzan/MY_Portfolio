import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AppRoutes;
