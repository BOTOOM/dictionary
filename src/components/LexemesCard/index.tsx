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
import Divider from '@material-ui/core/Divider';
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
                                                                        {sense['labels'] ? sense['labels'].map((labelunit) => (<Chip
                                                                            label={labelunit}
                                                                            color="secondary"
                                                                            size="small"
                                                                            className="chips"
                                                                        />)) : ''}   {sense['definition']}
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
                        <br />
                        {lexemes.map(data => data['antonymSets']).length > 0 ?
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header" >
                                    <Typography variant="h6">Antonyms  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container>
                                        <Grid item md={12} xs={12}>
                                            <List className="lista">
                                                {lexemes.map((lememAntonym, index) => {
                                                    return (
                                                        <ListItem key={`${lememAntonym['lemma']}-${index}-antonym`}>
                                                            {
                                                                <List >
                                                                    {
                                                                        lememAntonym['antonymSets'] ? lememAntonym['antonymSets'].map((antonymList) => {
                                                                            return (
                                                                                <ListItem className="items_antonimos" key={`${antonymList['antonyms'].length}-${antonymList['sense']}`}>
                                                                                    {antonymList['sense']?`${antonymList['antonyms']}  :   ${antonymList['sense']}`:`${antonymList['antonyms']}`}
                                                                                    <Divider />
                                                                                </ListItem>
                                                                            )
                                                                        }) : ''
                                                                    }
                                                                </List>

                                                            }
                                                        </ListItem>
                                                    )
                                                })}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion> : ''}
                            <br />
                        {lexemes.map(data => data['synonymSets']).length > 0 ?
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header" >
                                    <Typography variant="h6">Synonyms</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container>
                                        <Grid item md={12} xs={12}>
                                            <List className="lista">
                                                {lexemes.map((lememSynonym, index) => {
                                                    return (
                                                        <ListItem key={`${lememSynonym['lemma']}-${index}-synonym`}>
                                                            {
                                                                <List >
                                                                    {
                                                                        lememSynonym['synonymSets'] ? lememSynonym['synonymSets'].map((synonymList) => {
                                                                            return (
                                                                                <ListItem className="items_antonimos" key={`${synonymList['synonyms'].length}-${synonymList['sense']}`}>
                                                                                    {/* {`${synonymList['synonyms']}  :   ${synonymList['sense']}`} */}
                                                                                    {synonymList['sense']?`${synonymList['synonyms']}  :   ${synonymList['sense']}`:`${synonymList['synonyms']}`}

                                                                                    <Divider />
                                                                                </ListItem>
                                                                            )
                                                                        }) : ''
                                                                    }
                                                                </List>

                                                            }
                                                        </ListItem>
                                                    )
                                                })}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion> : ''}
                            <br/>
                            <div>
                            <Accordion className="acordeon">
                                <AccordionSummary className="acordeon"
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content1"
                                    id="panel1a-header1" >
                                    <Typography variant="h6">Froms </Typography>
                                </AccordionSummary>
                                <AccordionDetails>holis </AccordionDetails>
                            </Accordion>
                            </div>

                    </div>
                </CardContent> : ''
            }
        </Card>
    )
}

export default LexemesCard
