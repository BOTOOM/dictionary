import { LinearProgress } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ResultListUrban from '../../components/ResultListUrban';
import SearchCard from '../../components/searchCard';
import WordNotFound from '../../components/WordNotFound';

const Urban = () => {
    const [word, setWord] = useState('');
    const [searcking, setSearcking] = useState(false)

    const [resultSearch, setResultSearch] = useState([])
    useEffect(() => {

        const getDictionary = async (palabra) => {
          console.log('get dictionary', palabra)
          try {
            if (palabra !== '') {
              setSearcking(true)

              const response = await axios.request({
                method: 'GET',
                url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
                params: {term: palabra},
                headers: {
                  'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
                  'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com'                }
              });
              console.log(response)
            //   const dataProcessed = processResponse(response.data.entries);
              setResultSearch(response.data.list);
            setSearcking(false)

            }
          } catch (error) {
            console.log('ÉRROR', error)
            setSearcking(false)

          }
        }
    
        
        // // return () => {
        // //   cleanup
        // // }
        getDictionary(word);
      }, [word])

    return (
        <div>
            <SearchCard onTipeWord={(value) => {
          console.log(value)
          setWord(value);
        }} />
        <br />
        {searcking &&  <LinearProgress />}
        {(resultSearch.length === 0 && word.length > 0 && searcking === false) && <WordNotFound word={word}/> }
        <ResultListUrban  responseArray={resultSearch} />
        </div>
    )
}

export default Urban
