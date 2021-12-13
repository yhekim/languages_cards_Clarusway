import React from 'react'

const Card = ({ img, name }) => {
    return (
        <div>
              <img src={img} alt="" />
      <h4>{name}</h4>
        </div>
    )
}

export default Card
