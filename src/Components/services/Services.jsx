import React from 'react'
import './services.css'
import{AiOutlineCheck} from 'react-icons/ai'
const Services = () => {
  return (
    <section id='services'> 
    <h5> What i Offer</h5>
    <h2>My Services</h2>
    <div className='container services__container'>
      <article className='service'>
        <div className='service__head'> 
        <h3>UI/UX</h3>
        </div>
        <ul className='service__list'>
          <li>
                      <AiOutlineCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </li>
          <li>
                      <AiOutlineCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </li>
          <li>
                      <AiOutlineCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </li>
          <li>
                      <AiOutlineCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </li>
          <li>
                      <AiOutlineCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </li>
        </ul>

      </article>
       <article className='service'>
        <div className='service__head'> 
        <h3>Web Development</h3>
        </div>
        <ul className='service__list'>
          <li>
                      <AiOutlineCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </li>
          <li>
                      <AiOutlineCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </li>
          <li>
                      <AiOutlineCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </li>
          <li>
                      <AiOutlineCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </li>
          <li>
                      <AiOutlineCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </li>
         
        </ul>

      </article>
       <article className='service'>
        <div className='service__head'> 
        <h3>Bored Dude</h3>
        </div>
        <ul className='service__list'>
          <li>
                      <AiOutlineCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </li>
          <li>
                      <AiOutlineCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </li>
          <li>
                      <AiOutlineCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </li>
          <li>
                      <AiOutlineCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </li>
          <li>
                      <AiOutlineCheck className='service__list-icon'/>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </li>
        </ul>

      </article>

    </div>
    </section>
  )
}

export default Services