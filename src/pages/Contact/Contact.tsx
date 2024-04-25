import { Link } from 'react-router-dom';
// import * as SendEmail from 'emailjs';
import './Contact.scss';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const submitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // const client = new SendEmail.SMTPClient({
      //   user: 'mohamedmahmoudbrzan@gmail.com',
      //   password: '18199621MEDOMm',
      //   host: 'gmail.com',
      //   ssl: true,
      // });
      // // send the message and get a callback with an error or details of the message that was sent
      // return client.send(
      //   {
      //     text: name,
      //     from: 'Me',
      //     to: email,
      //     cc: 'else <else@mohamedmahmoudbrzan@gmail.com>',
      //     subject: message,
      //   },
      //   (err, message) => {
      //     console.log(err || message);
      //   }
      // );

      setName('');
      setEmail('');
      setMessage('');
      const ele = document.getElementById('thanks');
      ele.classList.add('active');
      setTimeout(() => ele.classList.remove('active'), 5000);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    state: React.Dispatch<React.SetStateAction<string>>
  ) => state(e.target.value);

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
      <p className='thanks_message' id='thanks'>
        <strong>
          <small>Thanks for your message 🤝</small>
        </strong>
      </p>
      <form onSubmit={submitMessage}>
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
            value={name}
            onChange={(e) => handleChange(e, setName)}
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
            value={email}
            onChange={(e) => handleChange(e, setEmail)}
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
            value={message}
            onChange={(e) => handleChange(e, setMessage)}
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
