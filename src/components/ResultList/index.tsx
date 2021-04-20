import React from 'react'
import PronunciationCard from '../PronunciationCard'
import InterpretationCard from '../InterpretationCard'
import LexemesCard from '../LexemesCard'

const renderCards = (responseArrayData) => {
    return (
        <div>
            <PronunciationCard nameEntry={responseArrayData['entry']} dataEntry={responseArrayData['pronunciations']} />
            <InterpretationCard dataEntry={responseArrayData['interpretations']} />
            <LexemesCard dataEntry={responseArrayData['lexemes']} />
        </div>
    )
}

const ResultList = ({ responseArray }) => {
    console.log(responseArray)
    return (
        <div>
            {/* {responseArray.entries? responseArray.entries[0].entry: "no hay nada" } */}
            {responseArray['entry'] ?renderCards(responseArray) : ("no hay nada")}

        </div>
    )
}

export default ResultList;
