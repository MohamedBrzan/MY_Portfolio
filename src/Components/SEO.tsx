import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
}

const defaultDescription =
  'Portfolio of Mohamed Mahmoud Brzan — Full Stack Software Engineer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies.';

const SEO = ({ title, description = defaultDescription }: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
