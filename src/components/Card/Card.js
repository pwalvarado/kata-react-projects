import React from 'react'

const Card = ({movie}) => {
    return (
        <h2>
            {`#${movie.ranking} - ${movie.list} - (${movie.year})`}
            <img src={movie.img.src} alt={movie.img.alt} width='200' />
            <p>{`Distributor: ${movie.distributor}`}</p>
            <p>{`Amount: ${movie.amount}`}</p>
        </h2>
    )
}

export default Card
