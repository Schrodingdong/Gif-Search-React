import React, { Component } from 'react'
import './GifStarArea.css'

export default class GifStarArea extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='star-area'>
        <div className='star-content'>
          <h3>Favourite Gifs</h3>
          <div className='favourite-gifs'>
            {
              this.props.starUrls.map(el => {
                return <img src={el} alt="gif"/>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
