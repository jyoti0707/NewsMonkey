import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import React, { Component, useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

const App = () => {
  const pageSize = 5;
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY

  const [progress, setProgress] = useState(10)

    
    return (
      <Router>
      <div>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route  exact  path="/business" element={<News setProgress  = {setProgress} api_key = {API_KEY} key="business"  country="in" pageSize={pageSize} category="business" />} />
          <Route  exact path="/entertainment" element={<News setProgress  = {setProgress} api_key = {API_KEY} key="entertainment" country="in" pageSize={pageSize} category="entertainment" />} />
          <Route exact path="/" element={<News setProgress  = {setProgress} api_key = {API_KEY}  key="general" country="in" pageSize={pageSize} category="general" />} />
          <Route  exact path="/health" element={<News setProgress  = {setProgress} api_key = {API_KEY} key="health" country="in" pageSize={pageSize} category="health" />} />
          <Route  exact path="/science" element={<News setProgress  = {setProgress} api_key = {API_KEY} key="science" country="in" pageSize={pageSize} category="science" />} />
          <Route  exact path="/sports" element={<News setProgress  = {setProgress} api_key = {API_KEY} key="sports" country="in" pageSize={pageSize} category="sports" />} />
          <Route exact path="/technology" element={<News setProgress  = {setProgress} api_key = {API_KEY} key="technology"  country="in" pageSize={pageSize} category="technology" />} />
        </Routes>
      </div>
    </Router>
    )
  
}

export default App;
