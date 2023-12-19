import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Support from "./components/Support";
import FreeLearningModules from "./components/FreeLearningModules";
import Features from "./components/Features";
import Footer from "./components/Footer";
function App() {


  const user = localStorage.getItem("token");

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={user ? <HomePage/> : <Signup/>} />
        <Route path="/login" element={user ? <HomePage/> : <Login/>} />
        <Route path="/support" element={<Support />} />
        <Route
          path="/free-learning-modules"
          element={<FreeLearningModules />}
        />
        <Route path="/features" element={<Features />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
