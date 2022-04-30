import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fqlnwld', 'template_a0w3msw', form.current, '3DfNKLpFaRFzbGe4E')
    e.target.reset()
    alert=("Thank you! I will reply to your email As soon as I can!");

  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>mrspinosaurus1110@gmail.com</h5>
            <a href="mailto:mrspinosaurus1110@gmail.com"  target="_blank" rel="noreferrer">Send an email</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Armando Robles</h5>
            <a href="https://m.me/armando.robles.9843"  target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Armando Robles</h5>
            <a href="https://linkedin.com/in/armando-robles-52417a233"  target="_blank" rel="noreferrer">View Profile</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact