import React from 'react'
import LogoImage from "../../assests/Logo-Qtify.png"
import styles from "./Logo.module.css"

export const Logo = () => {
  return (
    <img src={LogoImage} alt="image" width={67} className={styles.logo}/>
  )
}

