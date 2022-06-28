import React from 'react'

export const GifGridItem = ({url,title}) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <h5>{title}</h5>
            <img src={url} alt={title}></img>
        </div>
    )
}
