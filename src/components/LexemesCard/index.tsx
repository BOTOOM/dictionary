import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid'

import './lexem.css';


const LexemesCard = ({ dataEntry }) => {
    console.log('LEXE', dataEntry)
    const [lexemes, setLexemes] = useState([])

    useEffect(() => {
        setLexemes(dataEntry)
        // return () => {
        //     cleanup
        // }
    }, [dataEntry])
    return (
        <Card className="entrie_card">
            {
                lexemes.length > 0 ? <CardContent>
                    <div>
                        <strong>Lexemes</strong>
                        <br />
                        <br />
                        {lexemes.map((lexem, index) => {
                            return (
                                <div key={`${lexem['lemma']}-${index}`}>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header" >
                                            <Typography>Definitions: {lexem['lemma']} | <small>{lexem['partOfSpeech']}</small> </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid container>
                                                <Grid item md={12} xs={12}>
                                                    <List className="lista">

                                                        {lexem['senses'].map((sense, index) => {
                                                            return (
                                                                <ListItem key={`${sense['definition'].length}-${index}`} >
                                                                    <ListItemText>
                                                                        {sense['labels']?sense['labels'].map((labelunit) => (<Chip
                                                                            label={labelunit}
                                                                            color="secondary"
                                                                            size="small"
                                                                            className="chips"
                                                                        />)) :'' }   {sense['definition']}
                                                                        <br />
                                                                        {sense['usageExamples'] ? <div>
                                                                            <small><strong>Example:</strong></small>
                                                                            {sense['usageExamples']}
                                                                        </div> : ''}
                                                                    </ListItemText>
                                                                </ListItem>
                                                            )
                                                        })
                                                        }
                                                    </List>

                                                </Grid>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            )
                        })}
                    </div>
                </CardContent> : ''
            }
        </Card>
    )
}

export default LexemesCard
