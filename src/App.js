import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero"
import { useEffect, useState } from "react";
import { fetchSongs, fetchTopAlbums, fetchNewAlbums,fetchGenres } from "./api/api";
import { Card } from "./components/Card/Card.jsx"
import { Section } from "./components/Section/Section";
import styles from "./App.module.css"
function App() {
  const [data,setData]=useState([])
  const [songsData,setSongsData]=useState([])
  const [newAlbumData,setNewAlbumData]=useState([])
  const [Genres,setGenres]=useState([])
  const [filteredDataValues,setFilteredDataValues]=useState([])
  const [value,setValue]=useState(0)


  const handleChange=(event,newValue)=>{
    console.log("handle change",newValue)
     setValue(newValue)
     generateSongsData(value)
  }

  const generateSongsData=(value)=>{
    let key;
    if(value===0)
    {
      setFilteredDataValues(songsData)
      return
    }
    else if(value===1)
    {
      key='rock'
    }
    else if(value ===2)
    {
      key ='pop'
    }

    const res=songsData.filter((item)=> item.genre.key===key)
    setFilteredDataValues(res)
  }

  useEffect(()=>{
    generateTopAlbums()
    generateNewAlbums()
    generateAllSongsData()
    generateAllGenres()
  },[])


  const generateTopAlbums=async()=>{
           try{
            const data=await fetchTopAlbums()
            setData(data)
           }
             catch(err){
              console.log("error",err)

}
  }

  const generateNewAlbums=async()=>{
    try{
     const data=await fetchNewAlbums()
     setNewAlbumData(data)
    }
      catch(err){
       console.log("error",err)

}
}

  const generateAllSongsData=async()=>{
    try{
     const data=await fetchSongs()
     setSongsData(data)
     setFilteredDataValues(data)
    }
      catch(err){
       console.log("error",err)

}
}

const generateAllGenres=async()=>{
  try{
   const data=await fetchGenres()
   setGenres(data)
  }
    catch(err){
     console.log("error",err)

}
}



  return (
    <div className="App">
       <Navbar data={data}/>
       <Hero/>
       <div className={styles.sectionWrapper}>
       <Section data={data} title="Top Albums" type="album" filteredDataValues={data}/>
       <Section data={newAlbumData} title="New Albums" type="album" filteredDataValues={newAlbumData}/>
       <Section data={songsData}
        title="Songs" 
        type="song" 
        filteredDataValues={filteredDataValues}
        value={value}
        handleChange={handleChange}
        genres={Genres}
       />
       </div>
    </div>
  );
}

export default App;
