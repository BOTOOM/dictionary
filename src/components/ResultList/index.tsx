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
            {responseArrayData['pronunciations']?<PronunciationCard dataEntry={responseArrayData['pronunciations']} />: ''}
            {/* {responseArrayData['interpretations'] ?<InterpretationCard dataEntry={responseArrayData['interpretations']} />:'' } */}
            {responseArrayData['lexemes']?<LexemesCard dataEntry={responseArrayData['lexemes']} />:'Lexemes not Found'}
        </div>
    )
}

const ResultList = ({ responseArray }) => {
    console.log(responseArray)
    return (
        <div>
            {/* {responseArray.entries? responseArray.entries[0].entry: "no hay nada" } */}
            {responseArray['entry'] ?renderCards(responseArray) : <BannerAcademic/>}

        </div>
    )
}

export default ResultList;
