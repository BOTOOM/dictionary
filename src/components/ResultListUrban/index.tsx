import React from 'react'
import BannerAcademic from '../BannerAcademic'
import CardUrbanDefinition from '../CardUrbanDefinition'

const ResultListUrban = ({responseArray}) => {
    return (
        <div>
            {( responseArray.length > 0 ) ?responseArray.map( (response,index) => {
                return (
                    <CardUrbanDefinition key={`${index}-urban`}  definition={response}/>
                )
            } ) : 
            <BannerAcademic nameImage='urban'/>}
        </div>
    )
}

export default ResultListUrban
