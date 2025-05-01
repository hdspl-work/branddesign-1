'use client'

import { React, useState, useEffect } from 'react'
import { FaArrowUp } from "react-icons/fa6";

const BTT = () => {
    
    const [scrolls, setscrolls] = useState(0)
    useEffect(() => {
      window.addEventListener('scroll', (e) => {
        setscrolls(window.scrollY)
      })
    }, [])
    

    return (
        <div className={`p-4 fixed bottom-[30px] right-[30px] text-text-primary bg-body-black rounded-full cursor-pointer ${scrolls>0?'block':'hidden'}`} onClick={()=>{setscrolls(0); window.scrollTo(scrolls, 0)}}>
            <FaArrowUp fontSize={32} />
        </div>
    )
}

export default BTT
