import React, { useEffect,useContext } from 'react'
import Loading from './Loading';
import MovieFinderContext from '../context/movie/MovieFinderContext'
import noimage from './resim-yok.jpg'
const img_baseurl="https://image.tmdb.org/t/p/w500";
const MovieDetails = ({match}) => {

    const {getMovie,loading,movie}=useContext(MovieFinderContext);
    useEffect(()=>{
        

            getMovie(match.params.id);
        
        
        

    },[])

    
   
    
       
        const {id,original_title,poster_path,overview,vote_average,budget,release_date,genres}=movie;
        const category_name=[];
        if(genres){
        genres.map(genre=>{
          category_name.push(genre.name);
        })   
    }
        
    var image_url=''
    if(poster_path)
    {
       image_url=img_baseurl+poster_path
    }else{
         image_url=noimage
    } 
        if(loading) return <Loading/>

        return (
           <div className="container mt-3">
               <div className="row">
                   <div className="col-md-3">
                       <div className="card">
                       <img src={image_url} className="card-img-top"/>
                    
                       </div>
                       
                   </div>
                   <div className="col-md-9">
                       <div className="card">
                           <div className="card-body">
                           <p className="card-text">Name:{original_title}</p>
                           <p><i className="far fa-clipboard "></i> { overview}</p>
                           <p>IMDB:{vote_average}</p>
                           
                           <p>Budget:{budget}$</p>
                           <p>Relase Date:{release_date}</p>
                           <p>Category1:{category_name[0]}</p>
                           {category_name[1] && <>
                            <p>Category2:{category_name[1]}</p>
                           </>}
                           {category_name[2] && 
                            <>
                                <p>Category3:{category_name[2]}</p> 
                            </>}
                            {category_name[3] && 
                            <>
                            <p>Category4:{category_name[3]}</p>
                            </>}   
                        

                           
                             
                            </div>
                       </div>
                   </div>
               </div>
           </div>
        )
    
}

export default MovieDetails
