import React from 'react'
import './footer.css'
import {FaFacebookF , FaInstagram, FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href='4' className='footer__logo'>CREATOR</a>

      <ul className='permalinks'>
      <l1><a href='#home'>Home</a></l1>
      <l1><a href='#about'>About</a></l1>
      <l1><a href='#experience'>Experience</a></l1>
      <l1><a href='#services'>Services</a></l1>
        <l1><a href='#testimonial'>Testimonial</a></l1>
        <l1><a href='#contacts'>Contacts</a></l1>
      </ul>
      <div className='footer__socials'>
      <a href='https://facebook.com'> <FaFacebookF/></a>
      <a href='https://instagram.com'> <FaInstagram/></a>
      <a href='https://twitter.com'><FaTwitter/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Creator. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer