import React from 'react'
import  "./Card.css"

const Card = ({location}) => {

console.log(location)
  return (
    <article    >
       <h2>Location: {location?.name}</h2>
    <ul>
        <li><span>Type:</span>  {location?.type} </li>
        <li><span>Dimension:</span> {location?.dimension} </li>
        <li><span>Population:</span>    {location?.residents.length} </li>
    </ul>
       
    </article>
  )
}

export default Card