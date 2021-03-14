import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <div className="container">
                    <Link to="/" className="navbar-brand">
                    <i className={this.props.icon}></i> {this.props.title}
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item">
                                <Link to="about" className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                   
                </nav>
            </div>
        )
    }
}


Navbar.defaultProps={
    title:"Default Movie Finder"
} //eğer <Navbar/> içerisinde bir title göndermemişsek default olarak ne geleceğini burada belirtebiliriz.

// Navbar.prototype={
//     title:PropTypes.string.isRequired
// } //burada ise yukarıdaki default kısmı olmasa ve Navbar içerisinden bir parametre gönderilmese 
// //string tipte bir title beklendiği ve bunun zorunlu olduğuna dair bir hata alırdık.

export default Navbar
