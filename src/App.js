import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
require('dotenv').config();

const App = () => {
  const url = process.env.REACT_APP_API_URL;
  const [apod, setApod] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setApod(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [url]);


  return (
    <div className="App bg-gray-900 text-white h-100 min-h-screen">
      <Navbar />
      <Home apod={apod} />
    </div>
  );
}

export default App;