import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import styles from "./Carousel.module.css"
import LeftArrow from "../../assests/LeftArrow.png"
const CarouselLeftNavigation = () => {
    const swiper=useSwiper()
    const [isBeginning,setIsBeginning]=useState(swiper.isBeginning)
    useEffect(()=>{
       swiper.on("slideChange",function(){
        setIsBeginning(swiper.isBeginning)
       })
    },[swiper])
  return (
    <div className={styles.leftNavigation}>
      {!isBeginning ?<img src={LeftArrow} onClick={()=> swiper.slidePrev()}/> :null }
    </div>
  )
}

export default CarouselLeftNavigation
