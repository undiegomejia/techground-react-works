import React from 'react'
import themoviedb from '../api/themoviedb'
import SearchBar from './SearchBar';
import VideoDetails from './VideoDetails'
import VideoList from './VideoList'

// // Firebase App (the core Firebase SDK) is always required and must be listed first
// import firebase from "firebase/app";
// // If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// // import * as firebase from "firebase/app"

// // Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";

// const firebaseConfig = {
//   // ...
// };

// firebase.initializeApp(firebaseConfig)

class App extends React.Component {

  state = { movies: [], selectedMovie: null }

  componentDidMount() {
    this.onQuerySubmit('pulp')
}

  onQuerySubmit = async (query:any) => {
    const response = await themoviedb.get('/search/movie', {
      params: {
        query: query,
        include_adult: false
      }
    })
    this.setState({
      movies: response.data.results,
      selectedMovie: response.data.results[0]
    })
  }

  getUpcoming = async ()=>{
    const response = await themoviedb.get('/movie/upcoming')
    this.setState({
      movies: response.data.results,
    })
  }

  getTopRated = async ()=>{
    const response = await themoviedb.get('/tv/top_rated')
    this.setState({
      movies: response.data.results,
    })
  }

  getPopularMovies = async ()=>{
    const response = await themoviedb.get('/movie/popular')
    this.setState({
      movies: response.data.results,
    })
  }

  onMovieSelect = (movie: any) => {
    console.log('App', movie)
    this.setState({selectedMovie:movie})
  }
  

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onQuerySubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <div className="ui buttons">
                <button onClick={this.getUpcoming} className="ui button primary">Upcoming Movies</button>
                <button onClick={this.getTopRated} className="ui button secondary">Top Rated TV Shows</button>
                <button onClick={this.getPopularMovies} className="ui button yellow">Popular Movies</button>
              </div>
              <VideoDetails movie={this.state.selectedMovie}/>
            </div>
            <div className="five wide column">
              <VideoList onMovieSelect={this.onMovieSelect} movies={this.state.movies}/>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}

export default App;
