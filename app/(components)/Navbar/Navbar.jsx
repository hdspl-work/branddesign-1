import React from 'react'
import styles from './Navbar.module.css'

import Link from 'next/link'
import { CTAButton, Hamburger } from '..'

const Navbar = () => {
  return (
    <div className={`flex justify-between`}>
      <div className='flex'>
        <Link href='/'>
          <div className={`${styles.logoholder} flex mr-[64px] xl:ml-[80px] ml-[40px] xl:my-[48px] my-[24px]`}>
            <div className={`w-[17px] h-[17px] rounded-full bg-text-primary`}></div>
            <span className={`p-sb ml-[8px] hidden md:block`}>Digital Agency</span>
          </div>
        </Link>
        <div className={`${styles.menu} p-[10px] my-[38px] xl:block hidden`}>
          <span className={`mr-[48px]`}>
            <Link href='#projects'>Projects</Link>
          </span>
          <span className={`mr-[48px]`}>
            <Link href='#home'>Course</Link>
          </span>
          <span className={`mr-[48px]`}>
            <Link href='#about'>About Us</Link>
          </span>
          <span>
            <Link href='#contact'>Contact Us</Link>
          </span>
        </div>
      </div>
      <div className={`${styles.button} mr-[94.15px] my-[33.5px] xl:block hidden`}>
        <CTAButton large={false} />
      </div>
      <div className={`${styles.button} mr-[50px] my-[33.5px] xl:hidden block`}>
        <Hamburger />
      </div>
    </div>
  )
}

export default Navbar