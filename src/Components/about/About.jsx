import React from 'react'
import './about.css'
import Chike from '../../assets/Chike-Beautiful-People.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import{BsFillFolderFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know more</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
          <img src ={Chike} alt ='about__image'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1 year developing experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>0</small>
            </article>
            <article className='about__card'>
              <BsFillFolderFill className='about__icon'/>
            <h5>Projects</h5>
            <small>3 Completed</small>
            </article>

          </div>
           <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium architecto, quidem odit aliquid expedita aperiam veritatis error labore, eius nisi voluptatibus totam minima neque doloremque fuga, in facere magni praesentium?
            </p>
            <a href='#contacts' className='btn btn_primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About