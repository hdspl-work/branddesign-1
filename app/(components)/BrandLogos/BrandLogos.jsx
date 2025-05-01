import React from 'react'
import styles from './BrandLogos.module.css'

import Image from 'next/image'

import { meta, google, pinterest, youtube } from '@/app/(assets)'

const BrandLogos = () => {
  return (
    <div className={`${styles.brandlogos} my-[18px] md:my-[20px] xl:my-[24px] py-[38px] gap-[24px] `}>
      <span className={`text-body-black p-r text-center`}>The best Companies trust us.</span>
      <div className={`${styles.logoholder} flex mx-[80px] md:mx-[220px] xl:mx-[240px] gap-[80px] xl:gap-[140px] flex-wrap md:flex-nowrap`}>
        <Image className={`${styles.logo} w-[100px] md:w-[120px] xl:w-[150px]`} src={google} alt='image' />
        <Image className={`${styles.logo} w-[100px] md:w-[120px] xl:w-[150px]`} src={meta} alt='image' />
        <Image className={`${styles.logo} w-[100px] md:w-[120px] xl:w-[150px]`} src={youtube} alt='image' />
        <Image className={`${styles.logo} w-[100px] md:w-[120px] xl:w-[150px]`} src={pinterest} alt='image' />
      </div>
    </div>
  )
}

export default BrandLogos