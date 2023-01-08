import React, { useState } from 'react';
import './App.css';
import GifSearchArea from './GifSearchArea';
import GifStarArea from './GifStarArea';

const App = () => {
  const [favGifUrls, setfavGifUrls] = useState([])
  const addFavouriteGif = (url) => {
    setfavGifUrls([...favGifUrls, url])
  }

  return(
    <div className='App'>
      <div className='Search-area'>
        <h1>Gif Searcher</h1>
        <GifSearchArea saveHandle={addFavouriteGif}/>
      </div>
      <GifStarArea starUrls={favGifUrls}/>
    </div>
  );
}

export default App;
