import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import noimage from'./resim-yok.jpg'

const img_baseurl="https://image.tmdb.org/t/p/w500";
class Movie extends Component {
    
    render() {
        const {id,original_title,poster_path,vote_average,release_date}=this.props.movie;
        var image_url=''
        if(poster_path)
        {
           image_url=img_baseurl+poster_path
        }else{
             image_url=noimage
        }
        
        
        return (
            
                <div className="col-md-3">
                <div className="card ">
                    
                    <img src={image_url} alt="" className="img"/>
                </div>
                       
                <div className="card-body">
                    <h5 className="card-title">{original_title}</h5>
                    <p className="card-text">Puan: {vote_average}</p>
                    <p className="card-text">Yapım Yılı:{release_date}</p>
                    <Link to={`/movie/${id}`} className="btn btn-primary">Details</Link>
                </div>
                
            </div>
                   
            
        )
    }
}

export default Movie
