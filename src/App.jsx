import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Support from "./components/Support";
import FreeLearningModules from "./components/FreeLearningModules";
import Consultant from "./components/Consultant";
import Blog from "./components/Blog";
import Dashboard from "./components/Dashboard";

function App() {
  const user = localStorage.getItem("token");

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={user ? <HomePage /> : <Signup />} />
        <Route path="/login" element={user ? <HomePage /> : <Login />} />
        <Route path="/consultant" element={<Consultant />} />
        <Route path="/support" element={<Support />} />
        <Route
          path="/free-learning-modules"
          element={<FreeLearningModules />}
        />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />
        <Route path="/blog/:slug" element={<Blog />} /> {/* Dynamic route for blogs */}
      </Routes>
    </div>
  );
}

export default App;
