import React from 'react'
import SearchForm from '../components/searchForm'
import SingleImage from '../components/singleImage'
import './Search.css'
function SearchResult() {
  return (
    <div className='search-Box'>
      <SearchForm />
      <SingleImage/>
    </div>
  );
}

export default SearchResult