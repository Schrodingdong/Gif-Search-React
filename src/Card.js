import React, { useState, useEffect } from 'react'
import './Card.css'


const Card = ({ gif,saveHandle }) => {
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    setSaved(false)
  }, [gif])
  

  const saveGif =() => {
    if (saved) return;
    console.log(gif + " is now saved !")
    setSaved(true);
    saveHandle(gif)
  }

  return (
    <div className='gif-card'>
      <div className='black-overlay'></div>
      <img src={gif} alt='gif' style={{ objectFit:"cover", width:"100%", height:"100%",borderRadius: "10px" }}/>
      <div className='starButtonContainer' onMouseDown={() => saveGif()}>
        <button>+</button>
      </div>
    </div>
  )
}
export default Card;
