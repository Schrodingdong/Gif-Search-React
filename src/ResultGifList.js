import React from 'react'
import Card from './Card'
import './ResultGifList.css'

export default function ResultGifList({gifList}) {
  return (
    <div className='gridContainer'>
      {
        gifList.map((gif,id) => {
          return <Card key={id} gif={gif} />
        })
      }
    </div>
  )
}
