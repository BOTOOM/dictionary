import React, { useState,useEffect, FC } from 'react'
import NavBar from './components/NavBar';
import SearchCard from './components/searchCard';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

import './App.css';

const App: FC = () => {

  const [resultSearch, setResultSearch] = useState({})
  const [word, setWord] = useState('');

  useEffect(() => {

    const getDictionary = async (palabra) => {
      console.log('get dictionary',palabra)
      try {
        if (palabra !== '') {
          const response = await axios.request({
            method: 'GET',
            baseURL: 'https://lingua-robot.p.rapidapi.com/language/v1',
            url: `/entries/en/${palabra}`,
            headers: {
              'x-rapidapi-key': `${process.env.api_key}`,
              'x-rapidapi-host': 'lingua-robot.p.rapidapi.com'
            }
          });
          console.log(response.data)
        }
        // setResultSearch(respo)
      } catch (error) {
        console.log('ÉRROR',error)
      }
      

    }
    // // return () => {
    // //   cleanup
    // // }
    getDictionary(word);
  }, [word])
  
  return (
    <div className="contenedor_general">
      <NavBar />
      <Container fixed>
        <SearchCard onTipeWord={(value) =>  {
          console.log(value)
          setWord(value);
          // getDictionary()
          } } />
      </Container>
    </div>
  );
}

export default App;
