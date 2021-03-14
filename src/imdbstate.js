import React from 'react'
import axios from 'axios'
import imdbReducer from './reducers/imdbReducer'

const imdbstate = (props) => {
    const initialState={
        movies:[],
        id='',
        original_title='',
        release_date=''
    }
}

const api_key= "046270245306c37d836ebf79264b3576";
const base_url="https://api.themoviedb.org/3/movie"

const [state,dispatch]=useReducer(imdbReducer,initialState);

const SearchMovies = (keyword) =>{
    setTimeout(()=>{
        axios.get(`${base_url}/${keyword}?api_key=${api_key}`).then(res=>{
            dispatch({type:"SEARCH_USERS",payload:res.data.items}
                    )
        });

    },1000);

}



export default imdbstate
