import { Route, Routes } from 'react-router-dom';

import './App.css';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Welcome from './pages/Welcome/Welcome';
import Home from './pages/Home/Home';
import Explore from './pages/Explore';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
