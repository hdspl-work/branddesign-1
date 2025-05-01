import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './ProjectCard.module.css'

import { FaChevronRight } from "react-icons/fa";

const ProjectCard = ({ img, title, link, large, ind }) => {
    return (
        <div className={`flex flex-col gap-[4px] md:gap-[8px] xl:gap-[12px] h-fit ${(ind%2!=0)?'mt-[0px] xl:mt-[32px]':''}`}>
            <Image className={`w-[310px] md:w-[510px] ${large?'h-[420px] md:h-[620px]':'h-[310px] md:h-[510px]'}`} src={img} alt='img' />
            <div className='h3-r'>
                {title}
            </div>
            <span className='text-text-primary p-sb' ><Link className={`flex gap-[16px] ${styles.link}`} href={link}>View Project <span><FaChevronRight /></span></Link></span>
        </div>
    )
}

export default ProjectCard