import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const LexemesCard = ({dataEntry}) => {
    console.log(dataEntry)
    return (
        <Card className="entrie_card">
            <CardContent>
                <Typography>
                    <strong>palabra</strong>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default LexemesCard
