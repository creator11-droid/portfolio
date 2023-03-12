import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'
import {RiMessengerFill} from 'react-icons/ri'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contacts = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v4qfnbh', 'template_vq71m56', form.current, 'O3J7rZ-Q-aFnMzrWv')
     e.target.reset()
  };
  return (
    <section id='contacts'>
      <h5>Get in touch</h5>
      <h2>Contact</h2>
      <div className='container contact__container'>
          <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>atolekester@gmail.com</h5>
            <a href='mailto:atolekester@gmail.com' target={'_blank'} rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerFill className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Atole Kester</h5>
            <a href='https://m.me/atole.kester.9'target={'_blank'} rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>0123456789</h5>
            <a href='https://api.whatsapp.com/send?phone=+23408146300551'target={'_blank'} rel='noreferrer'>Send a message</a>
          </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name'placeholder='Your Full Name' required/>
            <input type='email'name='email' placeholder='Your Email' required/>
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>

      </div>
    </section>
  )
}

export default Contacts