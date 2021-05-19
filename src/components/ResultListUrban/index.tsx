import React from 'react'
import BannerAcademic from '../BannerAcademic'

const ResultListUrban = ({responseArray}) => {
    return (
        <div>
            {( responseArray.length > 0 ) ?'resultado' : 
            <BannerAcademic nameImage='urban'/>}
        </div>
    )
}

export default ResultListUrban
