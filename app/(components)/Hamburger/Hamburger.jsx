'use client'

import { React, useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Hamburger.module'
import { CTAButton } from '..'

const Button = ({ toggle, settoggle }) => {
  setTimeout(() => {
    if (toggle) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, 200);

  return (
    <div className={'relative'} onClick={() => { settoggle(!toggle) }}>
      <div className={`w-[32px] min-h-[4px] rounded-sm transition ${toggle ? 'bg-body-white mb-0 rotate-45' : 'bg-body-black'} mb-1`} ></div>
      <div className={`w-[20px] min-h-[4px] rounded-sm transition ${toggle ? 'bg-body-white hidden' : 'bg-body-black'} mb-1`} ></div>
      <div className={`w-[32px] min-h-[4px] rounded-sm transition ${toggle ? 'bg-body-white absolute top-0 -rotate-45' : 'bg-body-black'}`} ></div>
    </div>
  )
}

const Hamburger = () => {

  const [load, setload] = useState(false)
  const [toggle, settoggle] = useState(false)

  useEffect(() => {
    if (!load) {
      <span>Loading</span>
    } 
  }, [])

  return (
    <>
      <div>
        <Button toggle={toggle} settoggle={settoggle} />
      </div>
      <div className={`bg-[rgba(0,0,0,0.1)] absolute right-0 top-0 min-h-full ${toggle ? 'z-50 visible min-w-full' : '-z-50 invisible min-w-0'} flex justify-end`} onClick={() => { if (toggle) settoggle(false) }}>
        <div className={`bg-body-black text-body-white ${toggle ? 'w-[250px]' : 'w-0'} transition-all`}>
          <div className={`${toggle ? 'visible' : 'invisible'}  mr-[30px] mt-[50px] flex justify-end`}>
            <Button toggle={toggle} settoggle={settoggle} />
          </div>
          <div className={`mt-[50px] top-0 bottom-0 relative w-100 h-[85%] flex flex-col justify-between`}>
            <div className={`flex flex-col ${toggle ? 'text-[18px]' : 'text-[0px]'}`} style={{ alignItems: 'center' }} >
              <span className={`my-5`}>
                <Link href='#projects'>projects</Link>
              </span>
              <span className={`my-5`}>
                <Link href='#home'>course</Link>
              </span>
              <span className={`my-5`}>
                <Link href='#about'>about us</Link>
              </span>
              <span className={`my-5`}>
                <Link href='#contact'>contact us</Link>
              </span>
            </div>
            <div className={`${toggle ? 'flex' : 'hidden'} justify-center`}>
              <CTAButton large={false} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hamburger