import React from 'react'
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
  });
  
  function createData(region, transcription, audio) {
    return { region, transcription, audio};
  }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0),
//     createData('Ice cream sandwich', 237, 9.0,),
//     createData('Eclair', 262, 16.0),
//     createData('Cupcake', 305, 3.7),
//     createData('Gingerbread', 356, 16.0),
//   ];

const PronunciationCard = ({ nameEntry, dataEntry }) => {
    const classes = useStyles();
    const rows = (dataEntry as any[]).map(data => {
        return createData(data['context']['regions'],data['transcriptions'][0]['transcription'],data['audio']?data['audio']['url']:'')
    });

    console.log(dataEntry)
    console.log(rows)
    return (
        <Card className="entrie_card">
            <CardContent>
                <Typography>
                    <strong>{nameEntry}</strong>
                    <br />
                    Pronunciation
                    <br />
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Region</TableCell>
                                    <TableCell align="left">Transcription</TableCell>
                                    <TableCell align="left">Audio</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.region}>
                                        <TableCell align="left" size="small" scope="row">
                                            {row.region}
                                        </TableCell>
                                        <TableCell align="left">{row.transcription}</TableCell>
                                        <TableCell align="left">{row.audio}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PronunciationCard
