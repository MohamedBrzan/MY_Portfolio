import './Contact.scss';
import { useState, useCallback, type FormEvent } from 'react';
import SEO from '../../Components/SEO';

interface FieldState {
  value: string;
  touched: boolean;
}

const validateName = (v: string) => (v.trim().length >= 2 ? '' : 'Name must be at least 2 characters');
const validateEmail = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Please enter a valid email';
const validateMessage = (v: string) => (v.trim().length >= 10 ? '' : 'Message must be at least 10 characters');

const validators = {
  name: validateName,
  email: validateEmail,
  message: validateMessage,
} as const;

type FieldName = keyof typeof validators;

const Contact = () => {
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  const [fields, setFields] = useState<Record<FieldName, FieldState>>({
    name: { value: '', touched: false },
    email: { value: '', touched: false },
    message: { value: '', touched: false },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);

  const getError = useCallback(
    (name: FieldName) => {
      const { value, touched } = fields[name];
      return touched ? validators[name](value) : '';
    },
    [fields],
  );

  const isValid = useCallback(() => {
    return (
      !validateName(fields.name.value) &&
      !validateEmail(fields.email.value) &&
      !validateMessage(fields.message.value)
    );
  }, [fields]);

  const handleChange = (name: FieldName, value: string) => {
    setShowError(false);
    setFields((prev) => ({ ...prev, [name]: { ...prev[name], value } }));
  };

  const handleBlur = (name: FieldName) => {
    setFields((prev) => ({ ...prev, [name]: { ...prev[name], touched: true } }));
  };

  const resetForm = () => {
    setFields({
      name: { value: '', touched: false },
      email: { value: '', touched: false },
      message: { value: '', touched: false },
    });
    setSubmitted(false);
    setShowError(false);
  };

  const submitMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formspreeId || !isValid()) return;

    setIsSubmitting(true);
    setShowError(false);

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.name.value,
          email: fields.email.value,
          message: fields.message.value,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setShowError(true);
      }
    } catch {
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (
    name: FieldName,
    label: string,
    type: string = 'text',
    rows?: number,
  ) => {
    const error = getError(name);
    const hasValue = fields[name].value.length > 0;
    const inputProps = {
      id: name,
      name,
      value: fields[name].value,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        handleChange(name, e.target.value),
      onBlur: () => handleBlur(name),
      required: true,
      'aria-invalid': !!error,
      'aria-describedby': error ? `${name}-error` : undefined,
    };

    const Tag = rows ? 'textarea' : 'input';

    return (
      <div
        className={`form_group${error ? ' error' : ''}${hasValue && !error ? ' valid' : ''}`}
      >
        <label htmlFor={name}>{label}</label>
        <Tag
          {...inputProps}
          {...(rows ? { rows, spellCheck: true } : { type })}
          placeholder=" "
        />
        {error && (
          <span className="error_text" id={`${name}-error`} role="alert">
            {error}
          </span>
        )}
      </div>
    );
  };

  const renderFallback = () => (
    <div className="form_fallback">
      <div className="fallback_icon">✉</div>
      <h2>Want to get in touch?</h2>
      <p>
        Drop me an email and I&apos;ll get back to you as soon as possible.
      </p>
      <a
        href="mailto:mohamedmahmoudbrzan@gmail.com"
        className="fallback_btn"
      >
        Send me an email
      </a>
    </div>
  );

  const renderSuccess = () => (
    <div className="success_state">
      <div className="success_icon">✓</div>
      <h2>Message sent!</h2>
      <p>Thanks for reaching out. I&apos;ll get back to you soon.</p>
      <button type="button" className="btn btn_outline" onClick={resetForm}>
        Send another message
      </button>
    </div>
  );

  const renderForm = () => (
    <form onSubmit={submitMessage} noValidate>
      {renderField('name', 'Name')}
      {renderField('email', 'Email', 'email')}
      {renderField('message', 'Message', undefined, 8)}
      {showError && (
        <p className="error_message" role="alert">
          Something went wrong. Please try again or email me directly.
        </p>
      )}
      <button
        type="submit"
        className="btn"
        disabled={isSubmitting || !isValid()}
      >
        {isSubmitting ? (
          <>
            <span className="spinner" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );

  return (
    <section className="contact">
      <SEO title="Contact — Mohamed Mahmoud" />
      <h1 className="title">Contact.</h1>
      <hr />

      <div className="contact_layout">
        <div className="contact_info">
          <p className="contact_intro">
            Have a question, a project idea, or just want to say hello? I&apos;d
            love to hear from you.
          </p>
          <div className="contact_email">
            <span className="email_icon">✉</span>
            <a href="mailto:mohamedmahmoudbrzan@gmail.com">
              mohamedmahmoudbrzan@gmail.com
            </a>
          </div>
          <div className="contact_socials">
            <a
              href="https://github.com/MohamedBrzan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-brzan-01966518a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/201113772369"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="contact_form_wrapper">
          {!formspreeId && renderFallback()}
          {formspreeId && submitted && renderSuccess()}
          {formspreeId && !submitted && renderForm()}
        </div>
      </div>

      <div className="intro_title" aria-hidden="true">
        <p>Contact</p>
      </div>
    </section>
  );
};

export default Contact;
