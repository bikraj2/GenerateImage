import React, { useState, useContext, useEffect } from 'react';

import Axios from 'axios';
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('A acute baby with blue eyes');
  const [imageUrl, setImageUrl] = useState(
    'https://wallpapercave.com/wp/wp7455241.png'
  );
  const [imageList, setImageList] = useState([]);
  const [userId, setUserId] = useState('6399f93e8f38a7a974705152');
  const fetchSearchTerm = async () => {
    console.log('vall here');
    try {
      const res = await Axios.get(
        `http://localhost:5000/image?prompt=${searchTerm}`,
        {
          headers: {
            userId: userId,
          },
        }
      );
      setImageUrl(res.data.image);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchSearchTerm();
  }, [searchTerm]);
  return (
    <AppContext.Provider
      value={{
        setSearchTerm,
        imageUrl,
        searchTerm,
        userId,
        imageList,
        setImageList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
