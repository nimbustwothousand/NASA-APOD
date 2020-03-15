import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Previous from './components/Previous';
require('dotenv').config();

const App = () => {
  const [url, setUrl] = useState(process.env.REACT_APP_API_URL);
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
      {apod ? <Container apod={apod} /> : <div className='container mx-auto py-2 px-6 text-xl'>Loading...</div>}
      <Previous changeUrl={setUrl} />
    </div>
  );
}

export default App;