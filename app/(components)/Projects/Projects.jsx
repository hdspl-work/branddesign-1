import React from 'react'
import styles from './Projects.module.css'

import { projects } from '@/app/(assets)'
import { ProjectCard } from '..'

const Projects = () => {
  return (
    <div className={`${styles.projects} py-[32px] md:py-[56px] xl:py-[98px] md:px-[24px] xl:px-[190px] flex flex-col gap-[48px] md:gap-[98px] xl:gap-[145px]`}>
      <div className={`${styles.textholder} flex flex-wrap justify-center`}>
        <span className={`w-[292px] h2-b my-[12px] xl:my-0 mx-auto md:mx-0`}>Discover Our Best Work</span>
        <span className={`w-[292px] md:w-[511px] h2-r mx-auto md:mx-0`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vitae! Officia, veritatis ducimus excepturi ullam libero natus quisquam debitis ea voluptatibus dignissimos, est neque, nesciunt aperiam minus eum voluptatum corporis!</span>
      </div>
      <div className={`flex flex-wrap gap-[40px] justify-center [&>*:nth-child(odd)]:md:mr-auto [&>*:nth-child(even)]:md:ml-auto`}>
        {
          projects.map((element, ind) => {
            return(
              <ProjectCard key={element.id} ind={ind} img={element.img} title={element.title} link={element.link} large={element.large} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects