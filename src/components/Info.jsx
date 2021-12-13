import React from 'react'

const Info = ({ options }) => {
    return (
        <div>
            <ul className="info">
      {options.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

            
        </div>
    )
}

export default Info
