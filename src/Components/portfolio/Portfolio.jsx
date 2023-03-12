import React from 'react'
import './portfolio.css'
import {FaGithub , FaDribbbleSquare} from 'react-icons/fa'
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.jpg'
import IMG4 from '../../assets/project4.jpg'
import IMG5 from '../../assets/project5.jpg'
import IMG6 from '../../assets/Project7.jpg'

const data = [
  {
    id: 1,
    image:IMG1,
    title: 'Sankey chart',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels/shots',
  },
    {
    id: 2,
    image:IMG2,
    title:'Basketball app' ,
    github: 'https://github.com',
    demo: 'https://dribbble.com',
  },
    {
    id: 3,
    image:IMG3,
    title: 'Nike mobile stores',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Favour_Dumnoi',
  },
    {
    id: 4,
    image:IMG4,
    title:'Docking page design' ,
    github: 'https://github.com',
    demo: 'https://dribbble.com/Favour_Dumnoi' ,
  },
    {
    id: 5,
    image:IMG5,
    title: 'Dark mode music player',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16943271-Cryptocurrency-Mobile-App',
  },
    {
    id: 6,
    image: IMG6,
    title: 'Crytocurrency mobile app',
    github: 'https://github.com',
    demo:'https://dribbble.com/shots/16943271-Cryptocurrency-Mobile-App' ,
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
     {
      data.map(({id, image, title, github, demo })=>{
        return(
            
         <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title}></img>
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'> 
            <a href={github}  className='btn'>< FaGithub/></a>
          <a href={demo} className='btn btn-primary' target={'_blank'} rel='noreferrer'><FaDribbbleSquare/></a>
          </div>
        </article>
        )
      })
     }
        
      </div>
    </section>
  )
}

export default Portfolio