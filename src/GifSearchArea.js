import React, { Component } from 'react';
import ResultGifList from './ResultGifList';
import axios from 'axios';

export default class GifSearchArea extends Component {
  constructor(props){
    super(props);
    this.fetchGifs.bind(this);
    this.sampleUrls = [      
      "https://media3.giphy.com/media/KOCLgcdTywdVsjUevp/giphy.gif?cid=0a76ba883bpfhiwttz5n7v7jxc0pm37xxh5vzi4u5ga51pkl&rid=giphy.gif&ct=g",
      "https://media2.giphy.com/media/WfEwV5Gx3ebBq14mMk/giphy.gif?cid=0a76ba883bpfhiwttz5n7v7jxc0pm37xxh5vzi4u5ga51pkl&rid=giphy.gif&ct=g",
      "https://media3.giphy.com/media/jnNwOFy66TDGc2rWpi/giphy.gif?cid=0a76ba883bpfhiwttz5n7v7jxc0pm37xxh5vzi4u5ga51pkl&rid=giphy.gif&ct=g",
      "https://media4.giphy.com/media/fY0jahqHsqNznkhoaL/giphy.gif?cid=0a76ba883bpfhiwttz5n7v7jxc0pm37xxh5vzi4u5ga51pkl&rid=giphy.gif&ct=g",
      "https://media3.giphy.com/media/jnNwOFy66TDGc2rWpi/giphy.gif?cid=0a76ba883bpfhiwttz5n7v7jxc0pm37xxh5vzi4u5ga51pkl&rid=giphy.gif&ct=g",
      "https://media0.giphy.com/media/dMVra1hQejLaPzyNLw/giphy.gif?cid=0a76ba883bpfhiwttz5n7v7jxc0pm37xxh5vzi4u5ga51pkl&rid=giphy.gif&ct=g",
    ]
    this.a = ["","","","","",""]
    this.state = {
      fetchedGifs: [],
    }


  }
  

  fetchGifs = (e) => {
    e.preventDefault();
    let text = "chainsaw man";
    text = text.replace(/\s/g, "%20");
    let data = null;
    axios.get("http://api.giphy.com/v1/gifs/search?api_key=EyvtutEDRcfCI4Gcx1m4mFX44QVWnjcH&len&q="+text+"&limit=6&offset=" + (Math.round(Math.random()*30)))
      .then(res => {
        data = res.data.data;
        
        const Links = []
        for (var el of data){
          Links.push(el.images.original.url);
        }
        this.setState({ fetchedGifs:Links })
        //this.render()
        console.log(this.state.fetchedGifs)
      })
  }

  render() {
    return (
      <div id='gifSearchArea'>
        <form id='searchForm' onSubmit={this.fetchGifs}>
          <input type={"text"}/>
          <input type={"submit"} value="🔍"/>
        </form>
        {
          (this.state.fetchedGifs == null || this.state.fetchedGifs.length === 0)
          ? null
          : <ResultGifList gifList={this.state.fetchedGifs}/>
        }
      </div>
    )
  }
}
