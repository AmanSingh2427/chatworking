import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home'
import CreateGroup from './components/CreateGroup';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<SignupForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-group" element={<CreateGroup/>} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;