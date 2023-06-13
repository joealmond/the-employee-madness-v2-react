import React from 'react';

const Search = ({searchQuery, setSearchQuery}) => {

  return (
    <label>
        Search:
        <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} type="text" />
    </label>
  )
}

export default Search