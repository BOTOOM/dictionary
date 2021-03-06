import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 20
    },
    texto: {
        margin: '0 2px',
    },
    boton: {
        margin: '0 2px',
        // height: '150%'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
});

interface State {
    word: string;
}

const SearchCard = ({ onTipeWord }) => {
    const classes = useStyles();
    const history = useHistory()
    // const [dictionary, setDictionary] = useState('Academic')

    // const bull = <span className={classes.bullet}>•</span>;

    const [values, setValues] = React.useState<State>({
        word: '',
    });

    const _handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            console.log('do validate', values.word);
            sendWord();
        }
    }

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const sendWord = () => {
        onTipeWord(values.word.toLowerCase());
    }

    const onClickHandler = React.useCallback(() => {
        console.log(history)
        // history.push(`/urban`)
        if (history['location']['pathname'] === "/urban") {
            // setDictionary('Academic')
            history.push(`/academic`)
            return;
        }
        if (history['location']['pathname'] === "/academic") {
            history.push(`/urban`)
            // setDictionary('Urban')
            return;
        }
    }, [history])

    return (
        <Card className={classes.root}>
            <CardContent>

                <Typography variant="h5" component="h2">
                    What word do you want to search for?
                  </Typography>
                <TextField size="small" className={classes.texto} id="outlined-basic" label="Type your word" variant="outlined"
                    onChange={handleChange('word')} onKeyDown={_handleKeyDown} value={values.word} />
                <Button className={classes.boton} size="large" variant="outlined" color="primary" onClick={sendWord}>
                    Search
                </Button>
                <Button className={classes.boton} size="large" variant="outlined" color="secondary" onClick={onClickHandler}>
                    Academic / Urban
                </Button>
            </CardContent>
        </Card>
    );
}

export default SearchCard;