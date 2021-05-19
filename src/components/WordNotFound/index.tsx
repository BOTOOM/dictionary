import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './index.css'


const WordNotFound = ({ word }) => {
    return (
        <Card className="CardError" >
            <CardContent>
                    <strong>{word}</strong>  not found
            </CardContent>
        </Card>
    )
}

export default WordNotFound
