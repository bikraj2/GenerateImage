import './App.css';

import Axios from 'axios';
import React from 'react';
import { useState} from 'react';
function App() {
  const [searchTerm, setSearchTerm] = useState('A car with a lion');
  const [loading,setLoading] = useState(true)
  const [image_url,setImageUrl] = useState('')
  const inputRef = React.useRef('')
  const fetchData = async (e) => {
    e.preventDefault()
    const value = inputRef.current.value
    setSearchTerm(value)
    try {
      console.log(searchTerm)
      const res = await Axios.get(`http://localhost:5000/image?prompt=${searchTerm}`);
      setLoading(false)
      setImageUrl(res.data.image)
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <form onSubmit={fetchData}>
        <input ref={inputRef}></input>
        <button onSubmit={(e) => {}}>Submit</button>
      </form>
      {loading ? (
        <div> I am seraching for Iamge</div>
      ) : (
        <img src={image_url} className="image"></img>
      )}
    </div>
  );
}

export default App;