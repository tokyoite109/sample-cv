import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CvMenu from './components/cvMenu/CvMenu';
import CvMain from './components/cvMainPage/CvMain';
import Projects from './components/cvProjects/CvProjects';
import Stack from './components/cvStack/CvStack';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <CvMenu />     
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CvMain/>}/>                  
        <Route path='/Education&Work' element={<CvMain/>}/>|{" "}  
        <Route path='/Projects' element={<Projects/>}/>|{" "}             
        <Route path='/Stack' element={<Stack/>}/>|{" "}
        <Route path="*" element={<div>NOT FOUND</div>} />
      </Routes>
    </BrowserRouter>  
      <Outlet />
    </> 
);
}

export default App;