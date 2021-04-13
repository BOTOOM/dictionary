import React, { useState, FC } from 'react'
import NavBar from './components/NavBar';
import SearchCard from './components/searchCard';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import './App.css';

const App: FC = () => {
  return (
    <div className="contenedor_general">
      <NavBar />
      <Container fixed>
        <SearchCard/>
      </Container>
    </div>
  );
}

export default App;
