import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const CardUrbanDefinition = ({definition}) => {
    return (
        <Card className="entrie_card">
            <CardContent>
                <Typography>
                    {definition.definition}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardUrbanDefinition
