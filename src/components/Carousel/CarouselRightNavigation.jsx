import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import styles from "./Carousel.module.css"
import RightArrow from "../../assests/RightArrow.png"
const CarouselRightNavigation = () => {
    const swiper=useSwiper()
    const [isEnd,setIsEnd]=useState(swiper.isEnd)

    useEffect(()=>{
       swiper.on("slideChange",function(){
        setIsEnd(swiper.isEnd)
       })
    },[swiper])
  return (
    <div className={styles.rightNavigation}>
      {!isEnd ? <img src={RightArrow} onClick={()=> swiper.slideNext()}/> :null }
    </div>
  )
}

export default CarouselRightNavigation
