import React, { Component,useContext } from 'react'
import Movie from './Movie'
import Loading from './Loading'
import MovieFinderContext from '../context/movie/MovieFinderContext'

const Movies = () => {
        const movieFinderContext=useContext(MovieFinderContext);
        const {movies,loading}=movieFinderContext
        if(loading){
            return <Loading/>
        }else{

            return (
                <div className="container mt-3">
                    <div className="row">
                    {movies.map(movie=>(
                        <Movie movie={movie} key={movie.id}/>
                    ))}
                </div>
                </div>
            )
        }
        
    
}

export default Movies
