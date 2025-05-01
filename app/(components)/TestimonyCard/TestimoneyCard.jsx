import React from 'react'
import styles from './TestimoneyCard.module.css'
import Image from 'next/image'

import { IoStar, IoStarHalf } from "react-icons/io5";

const TestimoneyCard = ({ id, ind, img, logo, rating, text, name, desig }) => {
    let decimal = ((rating * 10) % 10);
    let a = rating * 10;
    let b = 0;
    while (a > 0) {
        b = b * 10 + a % 10;
        a = Math.floor(a / 10);
    }
    let before = b % 10;
    let array = []
    for (let index = 1; index <= before; index++) {
        array.push('*')
    }
    return (
        <div className={`w-fit flex flex-wrap mt-[18px]`}>
            <div className={`w-full h-[full] md:w-[240px] md:h-[240px] xl:h-[440px] xl:w-[440px]`}>
                <Image className={`w-full h-[full] md:w-[240px] md:h-[240px] xl:w-[440px] xl:h-[360px]`} src={img} alt='image' />
                <div className={`relative px-3`}>
                    <div className={`absolute bg-bg-color bottom-3 left-3 px-2`}>
                        <Image className={`w-[84px] h-[20px] md:w-[99px] md:h-[35px] xl:w-[113px] xl:h-[49px]`} src={logo} alt='logo' />
                    </div>
                </div>
            </div>
            <div className={`px-[0px] md:px-[20px] xl:px-[40px] py-[13px] md:py-[27px] xl:py-[45px] w-full md:w-[500px] bg-body-white`}>
                <div className='flex flex-col gap-[7px] xl:gap-[28px] mx-0 sm:mx-[8px] md:mx-0'>
                    <div className='flex flex-col gap-[8px]'>
                        <div className={`flex ${styles.starholder} text-text-primary`}>
                            {
                                array.map((ele, ind) => {
                                    return (
                                        <IoStar key={ind*10000} />
                                    )
                                })
                            }
                            {
                                decimal == 5 && <IoStarHalf />
                            }
                        </div>
                        <span className='s-b'>{rating}/5</span>
                    </div>
                    <p className='p-r w-fit mx-auto'>Lorem ipsum dolor sit amet consectetur. Neque enim sed ut felis. Sapien ac aliquam integer eget a senectus. </p>
                </div>
                <div className='w-[300px] sm:w-[360px] h-[1px] mx-auto md:mx-0 bg-body-grey my-[13px] md:my-[20px] xl:my-[35px]'></div>
                <div className='w-fit mx-[8px] md:mx-0'>
                    <div className='w-fit p-sb'>{name}.</div>
                    <div className={`w-fit ${styles.desig}`}>{desig}</div>
                </div>
            </div>
        </div>
    )
}

export default TestimoneyCard
