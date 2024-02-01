import React from 'react'
import headphones from '../../assests/vibrating-headphone 1.png'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
      <h1>100 Thousand Songs, ad-free</h1>
      <h1>Over Thousands podcast episodes</h1>

      </div>
      <div>
      <img src={headphones} width={212} alt="headphones"/>
    </div>
    </div>
  )
}
