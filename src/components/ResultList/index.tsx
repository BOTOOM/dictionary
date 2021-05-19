import React from 'react'
import PronunciationCard from '../PronunciationCard'
// import InterpretationCard from '../InterpretationCard'
import LexemesCard from '../LexemesCard'
import EntrieCard from '../EntrieCard'
import BannerAcademic from '../BannerAcademic'

const renderCards = (responseArrayData) => {
    return (
        <div>
            <EntrieCard dataEntry={responseArrayData['entry']} />
            {responseArrayData.hasOwnProperty('pronunciations') && <PronunciationCard dataEntry={responseArrayData['pronunciations']} />}
            {/* {responseArrayData['interpretations'] ?<InterpretationCard dataEntry={responseArrayData['interpretations']} />:'' } */}
            {responseArrayData['lexemes']?<LexemesCard dataEntry={responseArrayData['lexemes']} />:'Lexemes not Found'}
        </div>
    )
}

const ResultList = ({ responseArray }) => {
    return (
        <div>
            {( Object.keys(responseArray).length > 0 ) ?renderCards(responseArray) : 
            <BannerAcademic nameImage='academic' />}
        </div>
    )
}

export default ResultList;
