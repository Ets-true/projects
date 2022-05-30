// import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shop from './components/Shop';
import Editor from './components/Editor';
import Basket from './components/Basket';
import './css/style.css'
import './css/reset.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  const [Choise, setChoise] = useState(["unchosen", "All", "unchosen", "All"]);
  


  
  

  function chooseBrand(){

  }


  return (

    <div className="main">
      <Router>
        <Navbar></Navbar>
          <Routes>
            <Route path="/editor" element={<Editor/>} />
            <Route path="/basket" element={<Basket/>} />
            <Route path="/" element={<Shop/>} />
          </Routes>
      </Router>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App;
