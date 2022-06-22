import React from 'react'
import  "./Search.css"

const Search = ({setSearchLocation}) => {


    const   searchLocation  =   e   =>  {
        e.preventDefault()
        setSearchLocation(e.target.children[0].value)

    }
  return (
    
    <form onSubmit={searchLocation} >
        <input  type="text"  placeholder="Search for characters" />
        <button >Search</button>
    </form>
   
  )
}

export default Search