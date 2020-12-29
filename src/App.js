import React, { Component } from 'react';
import './App.scss';
import Navbar from  "./Components/Navbar/Navbar";
import TourList from "./Components/TourList/TourList";



class App extends Component  {
  render() {
    return (
        <main>
      
        <h1> Cities of the World Tours </h1>
        <Navbar   />
        <TourList />      
      </main>
    ) 
 }
}
export default App;

