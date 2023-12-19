import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
function App() {

  return (
    <div className='App'>
      <Navbar />
      <HomePage />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
