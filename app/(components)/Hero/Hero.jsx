import React from 'react'
import styles from './Hero.module.css'
import { CTAButton } from '..'
import Image from 'next/image'

import { neural } from '@/app/(assets)'

const Hero = () => {
  return (
    <div className={`${styles.hero} flex md:flex-nowrap flex-wrap-reverse justify-between px-0 py-0 md:pl-[24px] md:py-[8px] xl:px-0 xl:py-0`}>
      <div className={`${styles.leftwrapper} mt-[30px] xl:my-[210px] w-fit mx-auto md:mx-0 xl:ml-[190px]`}>
        <div className={`${styles.text}`}>
          <span className={`${styles.text1} top-r block`}>We Create Best<br />Digital Products.</span>
          <span className={`p-r`}>We design and develop best apps, always<br />thinking about your users. </span>
        </div>
        <div className={`${styles.button} mt-[32px] flex justify-center md:block`}>
          <CTAButton large={true} />
        </div>
      </div>

      <div className={`${styles.image} xl:w-[750px] xl:h-[636px] w-full md:w-[450px] h-auto md:rounded-tl-[150px] md:rounded-bl-[150px] rounded-bl-[50px] rounded-br-[50px] md:rounded-br-[0px]`}>
        <Image className='xl:w-[750px] xl:h-[636px] w-full md:w-[450px] h-auto mx-auto md:rounded-tl-[150px] md:rounded-bl-[150px] rounded-bl-[50px] rounded-br-[50px] md:rounded-br-[0px]' src={neural} alt='img' priority />
      </div>

    </div>
  )
}

export default Hero