import React, { Component } from 'react';
import './style.css';
import Routes from './routes.js';
import Header from './components/header';


class App extends Component {
    render() {
        return (
            <div className='app'>
                <Header></Header>
                
                    <Routes></Routes>
                
                
         
            </div>
        );
    }
}
export default App;