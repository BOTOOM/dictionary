import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';



const EntrieCard = ({dataEntry}) => {
    return (
        <Card className="entrie_card">
            <CardContent>
                <Typography>
                    <strong>{dataEntry}</strong>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default EntrieCard
