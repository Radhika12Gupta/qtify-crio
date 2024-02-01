
import React from 'react'
import { Logo } from '../Logo/Logo'
import styles from "./Navbar.module.css"
import Button from "../Button/Button.jsx"
import SearchBar from '../SearchBar/SearchBar'

export const Navbar = ({data}) => {
  return (
    <nav className={styles.navbar}>
      <Logo/>
      <SearchBar placeholder="Search a album of your choice" data={data}/>

      <Button text="Give Feedback"/>

    </nav>
  )
}

