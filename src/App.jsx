import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Random from "./Random/Random";
import Qutes from "./Qutes/Qutes";
import Toggle from "./Theme/Toggle";
import SignupForm from "./Signup/Signup";
import "./App.css"; // Import your main CSS file

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/random">Random</Link>
          <Link to="/qutes">Quotes</Link>
          <Link to="/toggle">Theme Toggle</Link>
          <Link to="/signup">Signup</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Welcome to Class-Based Components</h1>} />
          <Route path="/random" element={<Random />} />
          <Route path="/qutes" element={<Qutes />} />
          <Route path="/toggle" element={<Toggle />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;