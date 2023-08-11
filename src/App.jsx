import { Route, Routes } from 'react-router-dom'

import './App.css'
import Login from './pages/Login/Login'
import { ToastContainer } from 'react-toastify'
import Signup from './pages/Signup/Signup'
import Welcome from './pages/Welcome/Welcome'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Welcome />} ></Route>
        {/* <Route path="/home" element={<Home />} ></Route> */}
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/signup" element={<Signup />} ></Route>
      </Routes>
      <ToastContainer autoClose={1000} />
    </div>
  )
}

export default App
