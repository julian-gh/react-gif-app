import React from 'react'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <div className="img-container">
                <img src={ url } alt={ title } />
            </div> 
            <p> { title } </p>
        </div>
    )
}
