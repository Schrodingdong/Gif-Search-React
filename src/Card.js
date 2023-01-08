import React, { useState } from 'react'
import './Card.css'


const Card = ({ gif }) => {
  const gifLink = gif;
  const [fill, setfill] = useState("");
  const [saved, setSaved] = useState(false);

  const saveGif =() => {
    setSaved(!saved)
    console.log(saved)
    saved?setfill("#FFC700"):setfill("");
  }

  return (
    <div className='gif-card'>
      <div className='black-overlay'></div>
      <img src={gifLink} style={{ objectFit:"cover", width:"100%", height:"100%",borderRadius: "10px" }}/>
      <div className='starButtonContainer'
        onMouseDown={() => saveGif()}>
        <svg width="20" height="20" viewBox="0 0 602 602" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M301 27.3344L388.056 206.953L389.339 209.6L392.253 210.003L590.009 237.321L446.084 375.646L443.963 377.684L444.48 380.579L479.607 577.074L303.594 482.921L301 481.533L298.406 482.921L122.369 577.074L157.519 380.58L158.037 377.684L155.917 375.646L11.9908 237.321L209.747 210.003L212.661 209.6L213.944 206.953L301 27.3344Z"
            fill={fill} stroke="#FFC700" stroke-width="20" />
        </svg>
        <button style={{ width:"100%", height:"100%",display:"" }}></button>
      </div>
    </div>
  )
}
export default Card;
