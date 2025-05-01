import React from 'react'
import styles from './Testimonial.module.css'
import { testimony } from '@/app/(assets)'
import TestimoneyCard from '../TestimonyCard/TestimoneyCard'

const Testimonial = () => {
  return (
    <div className={`py-[24px] md:py-[49px] xl:py-[98px] pl-[0px] md:pl-[24px] xl:pl-[190px] flex-col gap-[12px] md:gap-[24px] xl:gap-[48px]justify-center md:justify-start`}>
      <div className={`flex flex-col gap-[6px] md:gap-[8px] xl:gap-[10px] w-fit mx-auto md:mx-0`}>
        <span className='p-r text-text-primary'>Testimonial</span>
        <span className='h2-b'>Our Clients Recommend Us</span>
      </div>
      <div className={`m-[8px] sm:m-[12px] md:m-0`}>
        {
          testimony.map((ele, ind) => {
            return(
              <TestimoneyCard key={ind} id={ele.id} ind={ind} img={ele.img} logo={ele.logo} rating={ele.rating} text={ele.text} name={ele.name} desig={ele.desig} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Testimonial