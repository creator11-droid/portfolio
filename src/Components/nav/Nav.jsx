import React from 'react'
import './nav.css'
import {ImHome } from 'react-icons/im'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {RiHistoryFill} from 'react-icons/ri'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav]= useState('1')
  return (
      <nav>
          <a href='1' className={activeNav === '1' ? 'active' : ''}><ImHome /></a>
              <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiBookBookmark /></a>
              <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiHistoryFill /></a>
            <a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
                <a href='#contacts' onClick={()=> setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><BiMessageSquareDetail/></a>
      </nav>
    )
}

export default Nav