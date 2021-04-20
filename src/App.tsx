import React, { useState, useEffect, FC } from 'react'
import NavBar from './components/NavBar';
import SearchCard from './components/searchCard';
import ResultList from './components/ResultList'
import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// require('dotenv').config()
import axios from 'axios';


import './App.css';

const App: FC = () => {

  const [resultSearch, setResultSearch] = useState({})
  const [word, setWord] = useState('');




  useEffect(() => {

    const getDictionary = async (palabra) => {
      console.log('get dictionary', palabra)
      try {
        if (palabra !== '') {
          const response = await axios.request({
            method: 'GET',
            baseURL: 'https://lingua-robot.p.rapidapi.com/language/v1',
            url: `/entries/en/${palabra}`,
            headers: {
              'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
              'x-rapidapi-host': 'lingua-robot.p.rapidapi.com'
            }
          });
          setResultSearch(processResponse(response.data.entries))
        }
      } catch (error) {
        console.log('ÉRROR', error)
      }


    }
    // // return () => {
    // //   cleanup
    // // }
    getDictionary(word);
  }, [word])


  const processResponse = (values: any[]) => {
    console.log('pross', values)
    const objProcessed = {}
    Object.keys(values[0]).forEach(key => {
      // console.log(key)
      if (key !== 'entry') {
        const array1 = values.map(dato => dato[key]);
        // console.log('array1', array1)
        const array2 = [].concat(...array1);
        // console.log('array2', array2)
        const uniqueArray = uniq(array2.map(data => JSON.stringify(data))).map(dataUniq => JSON.parse(dataUniq))
        // console.log('uniqueArray1', uniqueArray)
        objProcessed[key] = uniqueArray
      }
    });
    // console.log(objProcessed)
    objProcessed['entry'] = values[0]['entry']
    delete objProcessed['license']
    delete objProcessed['sourceUrls']
    return objProcessed
  }

  function uniq(a) {
    var seen = {};
    return a.filter(function (item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
  }

  return (
    <div className="contenedor_general">
      <NavBar />
      <Container fixed>
        <SearchCard onTipeWord={(value) => {
          console.log(value)
          setWord(value);
        }} />
        <br />
        <ResultList responseArray={resultSearch} ></ResultList>
      </Container>
    </div>
  );
}

export default App;
