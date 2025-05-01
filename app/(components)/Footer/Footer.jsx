import React from 'react'
import styles from './Footer.module.css'

import Link from 'next/link'

import { FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={`xl:px-[80px] xl:py-[64px] md:px-[40px] md:py-[24px] px-[20px] py-[12px] text-[#FFFFFF] bg-body-black flex flex-col xl:gap-[96px] md:gap-[48px] gap-[12px]`}>
      <div className='flex flex-col xl:gap-[16px] md:gap-[8px] gap-[4px] xl:text-left md:text-center text-center'>
        <div>Discover Why we are the best <span className='text-text-primary'>Digital Agency.</span></div>
        <div className={`text-[#FFFFFF] flex xl:justify-start md:justify-center justify-center gap-[28px] text-[16px] md:text-[24px] xl:text-[32px] mt-6 md:mt-4 xl:mt-0`}>
          <span>
            <Link href='#projects'>Project</Link>
          </span>
          <span>
            <Link href='#home'>Courses</Link>
          </span>
          <span>
            <Link href='#about'>About Us</Link>
          </span>
          <span>
            <Link href='#contact'>Contact Us</Link>
          </span>
        </div>
      </div>
      <div className='p-r flex justify-between flex-col-reverse xl:flex-row my-[8px] md:my-0'>
        <span className='text-center md:text-center xl:text-left'>2025 &copy; HDSPL | All Rights Reserved</span>
        <div className='flex gap-[30px] justify-center xl:justify-start mb-5 md:mb-3 xl:my-0'>
          <Link href='#' className='flex gap-[10.5px] justify-center align-middle items-center'><FaYoutube fontSize={24} />Youtube</Link>
          <Link href='#' className='flex gap-[10.5px] justify-center align-middle items-center'><FaInstagram fontSize={24} />Instagram</Link>
          <Link href='#' className='flex gap-[10.5px] justify-center align-middle items-center'><FaXTwitter fontSize={24} />X</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer