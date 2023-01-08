import React from 'react'
import Card from './Card'
import './ResultGifList.css'

export default function ResultGifList({gifList, saveHandle}) {
  return (
    <div className='gridContainer'>
      {
        gifList.map((gif,id) => {
          return <Card key={id} gif={gif} saveHandle={saveHandle}/>
        })
      }
    </div>
  )
}
