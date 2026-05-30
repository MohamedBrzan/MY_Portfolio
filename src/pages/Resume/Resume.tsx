import './Resume.scss';
import SEO from '../../Components/SEO';
import cv from '/MohamedBrzan_CV.pdf';

const Resume = () => {
  return (
    <section className="resume">
      <SEO title="Resume — Mohamed Mahmoud" />
      <h1>Resume</h1>
      <div className="resume_content">
        <object
          data={cv}
          type="application/pdf"
          width="100%"
          height="600px"
          aria-label="Resume PDF"
        >
          <p>
            Your browser does not support embedded PDFs.{' '}
            <a href={cv} target="_blank" rel="noopener noreferrer">
              Download the resume
            </a>
          </p>
        </object>
      </div>
    </section>
  );
};

export default Resume;
