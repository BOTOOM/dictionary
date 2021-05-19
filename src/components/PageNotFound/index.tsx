import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';

import './index.css'
const PageNotFound = () => {
    const history = useHistory()

    const onClickHandler = React.useCallback(() => {
        history.push(`/academic`)
    }, [history])

    return (
        <div className="container-notfound" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/empty.svg'})`
        }}>
            <Button variant="contained" color="primary" onClick={onClickHandler}>
                Go to Home
      </Button>
        </div>
    )
}

export default PageNotFound
