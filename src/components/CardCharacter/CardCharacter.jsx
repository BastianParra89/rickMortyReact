import axios from 'axios'
import React, {useState, useEffect} from 'react'
import useCharacterApi from '../../hooks/useCharacterApi'
import  './CardCharacter.css'



const CardCharacter = ({resident}) => {

    const  character = useCharacterApi(resident)

    return (
    
    
    <article    className='card'>
        
        <img src={character?.image} alt="" />
        <h2>{character?.name}</h2>
        <p><span>Status: </span>  {character?.status}</p>
        <p><span>Origin: </span> {character?.origin.name}</p>
        <p><span>Episodes: </span> {character?.episode.length}</p>
    </article>
   
  )
}

export default CardCharacter