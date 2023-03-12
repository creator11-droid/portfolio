import React from 'react'
import './testimonial.css'
import AVT1 from '../../assets/potrait1.jpg'
import AVT2 from '../../assets/potrait2.jpg'
import AVT3 from '../../assets/potrait3.jpg'
import AVT4 from '../../assets/potrait4.jpg'
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data = [
    {
      avatar: AVT1,
      name: 'Paul Scopes',
      review:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facilis nisi maxime asperiores impedit dicta culpa vitae quidem enim unde. Quia blanditiis et accusantium consequuntur consectetur facilis dicta. Fugit, tenetur!',
    },
     {
      avatar: AVT2,
      name: 'Tom Dullerly',
      review:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facilis nisi maxime asperiores impedit dicta culpa vitae quidem enim unde. Quia blanditiis et accusantium consequuntur consectetur facilis dicta. Fugit, tenetur!',
    },
     {
      avatar: AVT3,
      name: 'Jamie Bluetowel',
      review:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facilis nisi maxime asperiores impedit dicta culpa vitae quidem enim unde. Quia blanditiis et accusantium consequuntur consectetur facilis dicta. Fugit, tenetur!',
    },
     {
      avatar: AVT4,
      name: 'Ian Wrong',
      review:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe facilis nisi maxime asperiores impedit dicta culpa vitae quidem enim unde. Quia blanditiis et accusantium consequuntur consectetur facilis dicta. Fugit, tenetur!',
    },
]
const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>
      <Swiper className='container testimonials__container'
       modules={[ Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation={{clickable:true}}
      pagination={{ clickable: true }}
      >
     {
      data.map(({avatar, name, review, index})=>{
        return(
           <SwiperSlide key={index} className='testimonial'>
        <div className='client__avatar'>
          <img src={avatar} alt='client'></img>
        </div>
              <h5 className='client__name'> {name}</h5>
          <small className='client__review'>{review}</small>
      </SwiperSlide>
        )
      })
     }
      
    
      </Swiper>
    </section>
  )
}

export default Testimonial