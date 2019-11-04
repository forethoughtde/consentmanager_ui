import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

function App(){
    return (
        <div className="App">
            <Container fixed>
                <AppBar position="fixed" color="primary">
                    <Toolbar variant="regular">
                        <Header/>
                    </Toolbar>
                </AppBar>
            </Container>
        </div>
    );
}

export default App;
