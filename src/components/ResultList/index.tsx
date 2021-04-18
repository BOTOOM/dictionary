import React from 'react'

const ResultList = ({responseArray}) => {
    console.log(responseArray)
    return (
        <div>
            {responseArray.entries[0].entry}
        </div>
    )
}

export default ResultList;
