import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';


const PronunciationCard = ({nameEntry, dataEntry}) => {
    console.log(dataEntry)
    return (
        <Card className="entrie_card">
            <CardContent>
                <Typography>
                    <strong>{nameEntry}</strong>
                    <br/>
                    Pronunciation
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PronunciationCard
