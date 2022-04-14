import React from 'react';
import MovieList from './MovieList'
import SearchBar from './SearchBar'
<<<<<<< HEAD
import AddMovie from './AddMovie';
import axios from 'axios';
=======
import axios from 'axios'; 
>>>>>>> a2ecb0a8b3c7f68e4e87943c8095d8bcd442f3f2

/*  require('dotenv').config()
console.log(process.env.API_KEY) */
 
class App extends React.Component {

    state = {
        movies: [],
        searchQuery: ''
    }

<<<<<<< HEAD
   
=======
    // TMDB API-Key: b73a19fce11df1f9397a718b906f0950
    // dotenv funktioniert nicht.

>>>>>>> a2ecb0a8b3c7f68e4e87943c8095d8bcd442f3f2
    async componentDidMount() {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=b73a19fce11df1f9397a718b906f0950&language=en-US&page=1")
        console.log(response.data.results);
         this.setState({
            movies: response.data.results
        }) 



    }

<<<<<<< HEAD
=======

>>>>>>> a2ecb0a8b3c7f68e4e87943c8095d8bcd442f3f2

    deleteMovie = async (movie) => {

        axios.delete(`http://localhost:3002/movies/${movie.id}`)

        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )

        // this.setState({movies: newMovieList}) 

        this.setState(state => ({
            movies: newMovieList
        }))
    }

    searchMovie = (event) => {

        this.setState({
            searchQuery: event.target.value
        })



    }

    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )

        return (
            <div className = "container" >
             <div className = "row" >
              <div className = "col-lg-12" >
            <SearchBar 
            searchMovieProp = {this.searchMovie}/> 
              </div> 
             </div>

            <MovieList movies = {filteredMovies}
                       deleteMovieProp = {this.deleteMovie}/>

            <AddMovie />

             </div >
        )

    }

}

export default App;