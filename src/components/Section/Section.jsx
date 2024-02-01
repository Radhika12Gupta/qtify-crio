import { CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import styles from "./Section.module.css"
import { Card } from '../Card/Card'
import Carousel from '../Carousel/Carousel'
import BasicTabs from "../Tabs/Tabs"
import Box from '@mui/material/Box';

export const Section = ({data,title,type,filteredDataValues=[],value=0,handleChange=null,genres}) => {
    const [carouselToggle,setCarouselToggle]=useState(true)
    const handleToggle=()=>{
        setCarouselToggle(!carouselToggle)
    } 
    console.log("section",data,carouselToggle)
  return (
    <div>
       <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
            {!carouselToggle? "Collapse All":"Show All"}
        </h4>
      </div>
      {
        type==="song"? <BasicTabs value={value} handleChange={handleChange} Genres={genres}/>:null
      }
      {
        data.length===0?(
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <CircularProgress/ >
            </Box>
        ):(
            <div className={styles.cardWrapper}>
                {!carouselToggle?(
                    <div className={styles.wrapper}>
                        {filteredDataValues.map((ele)=>
                            <Card data={ele} type={type}></Card>
                        )}
                    </div>
                ):(
                    <Carousel data={filteredDataValues} renderComponent={(data)=> <Card data={data} type={type}></Card>}></Carousel>
                )}
            </div>
        )
      }
    </div>
  )
}

