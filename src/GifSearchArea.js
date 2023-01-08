import React, { Component } from 'react';
import ResultGifList from './ResultGifList';
import axios from 'axios';
import './GifSearchArea.css'

export default class GifSearchArea extends Component {
  constructor(props){
    super(props);
    this.fetchGifs.bind(this);
    this.state = {
      fetchedGifs: []
    }
  }
  

  fetchGifs = (e) => {
    e.preventDefault();
    let text = e.target.searchTerm.value;
    if(text === "" || text === null) return;
    // format the search query
    text = text.replace(/\s/g, "%20");
    // get generate API url
    const url = "http://api.giphy.com/v1/gifs/search?api_key=EyvtutEDRcfCI4Gcx1m4mFX44QVWnjcH&len&q="+text+"&limit=6&offset=" + (Math.round(Math.random()*30));
    // send request
    axios.get(url)
      .then(res => {
        const data = res.data.data;
        const Links = []
        for (var el of data){
          Links.push(el.images.preview_gif.url);
        }
        this.setState({ fetchedGifs:Links })
      })
  }

  render() {
    return (
      <div id='gifSearchArea'>
        <form id='searchForm' onSubmit={this.fetchGifs}>
          <input type={"text"} name={"searchTerm"} onChange={this.handleChange}/>
          <input type={"submit"} value="🔍"/>
        </form>
        {
          ( this.state.fetchedGifs == null || 
            this.state.fetchedGifs.length === 0)
          ? null
          : <ResultGifList gifList={this.state.fetchedGifs} saveHandle={this.props.saveHandle}/>
        }
      </div>
    )
  }
}
