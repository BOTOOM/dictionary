import React from 'react'

import './index.css'
const BannerAcademic = ({nameImage}) => {
   

    return (
        <div className="container-notfound" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${nameImage}.svg)`
        }}>
        </div>
    )
}

export default BannerAcademic
