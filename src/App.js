import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Container from './components/Container';
require('dotenv').config();

const App = () => {
  const [apod, setApod] = useState(null)
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL)
      .then(res => {
        console.log(res.data);
        setApod(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])
  return (
    <div className="App bg-gray-900 text-white h-100 min-h-screen">
      <Navbar />
      {apod ? <Container apod={apod} /> : <div className='container mx-auto py-2 px-6 text-xl'>Loading...</div>}
    </div>
  );
}

export default App;