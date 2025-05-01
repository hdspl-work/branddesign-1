import React from 'react'
import styles from './CTA.module.css'
import { CTAButton } from '..'

const CTA = () => {
  return (
    <div className='bg-body-black xl:px-[314px] md:px-[120px] px-[32px] py-[24px] md:py-[48px] xl:py-[96px] text-center text-[#FFFFFF] flex flex-col gap-[24px] md:gap-[32px] xl:gap-[48px]'>
      <div>
        <div className={`xl:text-[80px] md:text-[60px] text-[30px] my-[8px] md:my-0`}>Let’s <span className='text-text-primary'>Collaborate.</span></div>
        <div className='text-[16px] md:text-[20px] xl:text-[24px]'>Have an idea? Contact Us now and we will work together to bring your idea to life.</div>
      </div>
      <div className='flex justify-center'>
        <CTAButton large={false} />
      </div>
    </div>
  )
}

export default CTA