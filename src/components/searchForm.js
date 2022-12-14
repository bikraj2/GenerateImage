import React from 'react';
import './serachForm.css';
import { useGlobalContext } from '../globalContext';
function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const inputRef = React.createRef()
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value
    setSearchTerm(value)
    console.log(value)
  };
  return (
    <div className='search-form'>
      <form className='form' onSubmit={handleSubmit}>
        <input className='search-box' ref={inputRef}/>
        <button className='btn'>Submit</button>
      </form>
    </div>
  );
}
export default SearchForm;
