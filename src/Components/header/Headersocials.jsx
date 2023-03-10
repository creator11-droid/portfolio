import React from 'react'
import {BsLinkedin , BsGithub, BsDribbble} from 'react-icons/bs'
const Headersocials = () => {
  return (
    <div className='header__social'>
            <a href='https://www.linkedin.com' target={'_blank'} rel='noreferrer'><BsLinkedin/></a>
            <a href='https://www.github.com' target={'_blank'} rel="noreferrer"><BsGithub /></a>
            <a href='https://www.dribble.com' target={'_blank'} rel='noreferrer'><BsDribbble /></a>
    </div>
  )
}

export default Headersocials