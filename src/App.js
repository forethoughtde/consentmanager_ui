import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

function App(){
    return (
        <div className="App">
           <AppBar position="fixed" color="primary">
               <Toolbar variant="regular">

               </Toolbar>
           </AppBar>
        </div>
    );
}

export default App;
