import React, { Component } from 'react';
import './header.css';
import {Link, BrowserRouter} from 'react-router-dom';
import Home from '../../pages/Home';



class Header extends Component {
    render() {
        return (
            <div className='header'>
                <BrowserRouter>
                    <Link to="/" > Filmaria </Link> 
                </BrowserRouter>
               
            
            </div>
        );
    }
}
export default Header;