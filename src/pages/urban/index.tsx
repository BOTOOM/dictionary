import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SearchCard from '../../components/searchCard';

const Urban = () => {
    const [word, setWord] = useState('');
    // const [resultSearch, setResultSearch] = useState({})
    useEffect(() => {

        const getDictionary = async (palabra) => {
          console.log('get dictionary', palabra)
          try {
            if (palabra !== '') {
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
            //   setResultSearch(dataProcessed);
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

    return (
        <div>
            <SearchCard onTipeWord={(value) => {
          console.log(value)
          setWord(value);
        }} />
        <br />
        </div>
    )
}

export default Urban
