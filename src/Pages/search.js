import React from 'react'
import SearchForm from '../components/searchForm'
import SingleImage from '../components/singleImage'
import './Search.css'
import { useGlobalContext } from '../globalContext'
function SearchResult() {
  const { imageUrl, searchTerm, } = useGlobalContext();
  return (
    <div className='search-Box'>
      <SearchForm />
      <SingleImage props= {{searchTerm,imageUrl}}/>
    </div>
  );
}

export default SearchResult