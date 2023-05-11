import { Link } from 'react-router-dom';
import './Contact.scss';

const Contact = () => {
  return (
    <section className='contact'>
      <div className='title'>
        <h1>Contact.</h1>
      </div>
      <hr />
      <div className='email_contact'>
        <p>
          Get in touch or shoot me an email directly on{' '}
          <Link to='mailto:mohamedmahmoudbrzan@gmail.com'>
            mohamedmahmoudbrzan@gmail.com
          </Link>
        </p>
      </div>
      <form>
        <div className='form_group'>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Enter Your Name'
            required
            aria-label='Name Input'
            autoFocus
            autoComplete=''
          />
        </div>
        <div className='form_group'>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Enter Your Email'
            required
            aria-label='Email Input'
          />
        </div>
        <div className='form_group'>
          <textarea
            rows={10}
            name='message'
            id='message'
            placeholder='Enter Your Message'
            required
            aria-label='Message Input'
            spellCheck
          />
        </div>
        <button type='submit' className='btn'>
          Send Message
        </button>
      </form>
      <div className='intro_title'>
        <h1>Contact</h1>
      </div>
    </section>
  );
};

export default Contact;
