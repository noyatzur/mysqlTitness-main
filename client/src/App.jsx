import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import './css/Header.css'
import './css/NoteBox.css'
import Login from "./pages/Login";
import Card from './components/Card';
import Card2 from "./components/CardLogin";
import Header from "./pages/Header";
import Register  from './pages/Register';
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import MYProfile from "./pages/MyProfile";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />}   />
          <Route path="Register" element={<Register />} />
          <Route path="Videos" element={<Videos />} />
          <Route path="MYProfile" element={<MYProfile />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    
      
    </BrowserRouter>
    
  )
}

export default App