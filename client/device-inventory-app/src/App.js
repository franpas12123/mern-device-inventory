import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

import Navbar from "./components/NavbarComponent"
import AddDevice from "./components/AddDevice"
import DevicesList from "./components/DevicesList"
import EditDevice from "./components/EditDevice"
// import Home from "./components/Home"

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      {/* <Route path='/' component={Home} /> */}
      <Route path='/devices' component={DevicesList} />
      <Route path='/create' component={AddDevice} />
      <Route path='/edit/:id' component={EditDevice} />
    </Router>
  );
}

export default App;
