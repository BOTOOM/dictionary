import React from 'react'
import EntrieCard from '../EntrieCard'

const ResultList = ({responseArray}) => {
    console.log(responseArray)
    return (
        <div>
            {/* {responseArray.entries? responseArray.entries[0].entry: "no hay nada" } */}
            <EntrieCard/>
        </div>
    )
}

export default ResultList;
