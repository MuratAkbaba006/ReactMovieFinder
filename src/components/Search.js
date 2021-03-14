import React,{useState,useContext} from 'react'
import MovieFinderContext from '../context/movie/MovieFinderContext'
import AlertContext from '../context/alert/alertContext'

const Search = () => {
    
    const {searchMovies,clearMovies,movies} = useContext(MovieFinderContext)
    const {setAlert}=useContext(AlertContext);
    
    const [keyword,setKeyword]=useState('');
    
    

const onChange=(e)=>{
    setKeyword(e.target.value)
}

const onSubmit=(e)=>{
e.preventDefault();
if(keyword===''){
    setAlert("Search alanı boş bırakılamaz","danger")
}else{

    searchMovies(keyword);
    setKeyword('');
}


}

    
    return (
        <div className="container mt-3">
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="text" value={keyword} onChange={onChange} className="form-control"/>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </div>
            </form>
            {movies.length>0 &&
            <button onClick={clearMovies} className="btn btn-secondary btn-sm btn-block mt-2">Clear Search Results</button>
            }    
        </div>
        )
    
}

export default Search

