import React from 'react'
import styles from './CTAButton.module.css'

import { TiChevronRight } from "react-icons/ti";

const CTAButton = ({ large }) => {
    return (
        <button className={`${styles.button} flex ${large?'p-[24px]':'p-[16px]'} bg-text-primary text-body-white ${large?'p-sb':'s-b'}`}>Start Your Project<span className={`${styles.chevy} ml-[10px]`}><TiChevronRight /></span></button>
    )
}

export default CTAButton