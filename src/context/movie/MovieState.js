import React,{useReducer} from 'react'
import MovieReducer from './MovieReducer'
import MovieFinderContext from './MovieFinderContext'
import axios from 'axios'

const api_key="046270245306c37d836ebf79264b3576"

const MovieState = (props) => {
    const initialState={
        id:'',
        movies:[],
        movie:{},
        loading:false 
    }
    
const [state,dispatch]=useReducer(MovieReducer,initialState);

const searchMovies=(keyword)=>{
    setLoading();
    setTimeout(()=>{
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&page=1&query=${keyword}`)
      .then(res=>{


        dispatch({
            type:"SEARCH_MOVİES",
            payload:res.data.results
        })
       

      });
    },2000);
   
  }

  const getMovie=(movieId)=>{
    setLoading();
    setTimeout(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`)
      .then(res=>{
        dispatch({
          type:"GET_MOVİE",
          payload:res.data
        })
        

        
      });
    },2000);

  }

  const clearMovies=()=>{
    dispatch({
      type:"CLEAR_MOVİES"
    })
  }


  const setLoading = () =>{
      dispatch({type:"SET_LOADİNG"})
  }

return <MovieFinderContext.Provider value={{
    id:state.id,
    movies:state.movies,
    movie:state.movie,
    loading:state.loading,
    searchMovies,
    clearMovies,
    getMovie
}}>
        {props.children}
</MovieFinderContext.Provider>
}


export default MovieState