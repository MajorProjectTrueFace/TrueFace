import React from 'react'

function Card({imgSrc, name, scholarNo}) {
    return (
        <div className='cardConatiner'>
            <div className="card info">
                <img src={imgSrc} className="card-img-top image" alt="Couldn't Find" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{scholarNo}</p>
                </div>
            </div>
        </div>
    )
}

export default Card