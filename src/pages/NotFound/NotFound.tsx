import { Link } from 'react-router-dom';
import SEO from '../../Components/SEO';
import './NotFound.scss';

const NotFound = () => {
  return (
    <section className="not-found">
      <SEO title="404 — Page Not Found" />
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go home</Link>
    </section>
  );
};

export default NotFound;
