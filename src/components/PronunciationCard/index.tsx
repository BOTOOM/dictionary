import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
        marginTop: 1,
    },
    sound: {
        maxWidth: 105,
        paddingRight: 30,
        paddingLeft: 1
    }
});

function createData(region, transcription, audio) {
    return { region, transcription, audio };
}

const PronunciationCard = ({ nameEntry, dataEntry }) => {
    const [proninciation, setProninciation] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        console.log('PRONUNCIATION', dataEntry)
        const rows = (dataEntry as any[]).map(data => {
            return createData(data['context']['regions'], data['transcriptions'] ? data['transcriptions'][0]['transcription'] : '', data['audio'] ? data['audio']['url'] : null)
        });
        // console.log(dataEntry)
        console.log('ROWS', rows)
        setProninciation(rows)
        // return () => {
        //     cleanup
        // }
    }, [dataEntry])

    return (
        <Card className="entrie_card">
            <CardContent>
                <Typography>
                    <strong>{nameEntry}</strong>
                    <br />
                    Pronunciation
                    <br />
                    {proninciation.length > 0 ? <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Region</TableCell>
                                    <TableCell align="left">Transcription</TableCell>
                                    <TableCell align="left">Audio</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {proninciation.map((row) => (
                                    <TableRow key={row.region}>
                                        <TableCell align="left" size="small" scope="row">
                                            {row.region}
                                        </TableCell>
                                        <TableCell align="left">{row.transcription}</TableCell>
                                        <TableCell align="left">{row.audio ? <audio src={row.audio} className={classes.sound} controls></audio> : 'No Audio'}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer> : ''}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PronunciationCard
