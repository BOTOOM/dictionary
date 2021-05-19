import React from 'react'
import { useHistory } from 'react-router-dom'

import './index.css'
const BannerAcademic = () => {
    const history = useHistory()

    const onClickHandler = React.useCallback(() => {
        history.push(`/academic`)
    }, [history])

    return (
        <div className="container-notfound" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/academic.svg'})`
        }}>
           
        </div>
    )
}

export default BannerAcademic
