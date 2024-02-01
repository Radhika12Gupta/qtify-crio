import React, { useState } from 'react'
import styles from "./Searchbar.module.css"
import {Autocomplete} from "@mui/material"
import {ReactComponent as SearchIcon} from "../../assests/Search-icon.svg"
import { TextField } from '@mui/material'

export default function SearchBar({placeholder,data}){
  // const [val,setVal]=useState(null)
  // const changeHandler=(e)=>{
  //   setVal(e.target.value)
  // }

  // const clickHandler=()=>{

  // }
  return (
    <form className={styles.wrapper}>
        <div>
          <input className={styles.search} placeholder={placeholder}/>
        </div>
        {/* <Autocomplete
         className={styles.search}
         freeSolo
         id="free-solo-2-demo"
         disableClearable
         options={data.map((option)=> option.title)}
         renderInput={(params)=>(
          <TextField 
          {...params}
          label={placeholder}
          InputProps={{
            ...params.InputProps,
            type:'search',
          }}

          onChange={changeHandler}
          />
         )}
  sx={{ width: 300 }}
/> */}
        <div>
           <button className={styles.searchButton} type="submit" 
          //  onClick={clickHandler}
           >
           <SearchIcon/>
           </button>
        </div>
    </form>
  )
}

