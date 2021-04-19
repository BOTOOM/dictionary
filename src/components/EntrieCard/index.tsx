import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';



const EntrieCard = () => {
    return (
        <Card className="EntrieCard">
            <CardContent>
                <Typography>
                    <strong>palabra</strong>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default EntrieCard
