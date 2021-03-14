import React, { useState } from 'react'
import Navbar from './Navbar'
import Movies from './Movies'
import Search from './Search'
import Alert from './Alert'
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'
import AboutPage from './AboutPage'
import MovieDetails from './MovieDetails'
import MovieState from '../context/movie/MovieState'
import AlertState from '../context/alert/alertState'
import NotFoundPage from './NotFoundPage'

const api_key="046270245306c37d836ebf79264b3576"

const App = () => {
    
    return (
      <MovieState>
        <AlertState>
          <BrowserRouter>
            <Navbar title="Movie Finder" icon="fab fa-imdb"/>
            <Alert />
            <Switch>
              <Route exact path='/' render={ props=>(
                <>
                  <Search />
                  <Movies />
                </>
              )
              }/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/movie/:id" component={MovieDetails}/>
              <Route component={NotFoundPage}/>
            </Switch>
          </BrowserRouter>
        </AlertState>
      </MovieState>
    )
  }

//component yerine render metodunu kullanarak props+başka göndermek istediğimiz bilgileri 
//gönderebiliriz.
export default App
