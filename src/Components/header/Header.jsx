import React from 'react'
import './header.css'
import Cta from './Cta'
import Chike from '../../assets/Chike-Beautiful-People.jpg'
import Headersocials from './Headersocials'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5> Hello i'm</h5>
        <h2>Atole Kester</h2>
        <h5 className='text-light'>Full-stack developer</h5>
        <Cta />
        <Headersocials />
        <div className='me'>
        <img src={Chike} alt=''></img>
        </div>
        <a href='#contacts' className='scroll__down'>Scroll down</a>
      </div>

    </header>
  )
}

export default Header