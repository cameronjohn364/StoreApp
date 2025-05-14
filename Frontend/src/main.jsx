import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import "./index.css"

import { AuthProvider, useAuth } from './Files/Tags/AuthProvider'

import App from "./App"

import HomePage from './Files/Pages/HomePage'
import AdminPage from './Files/Pages/AdminPage'
import LoginPage from './Files/Pages/LoginPage'
import RegisterPage from './Files/Pages/RegisterPage'
import OTPconfirmPage from './Files/Pages/OTPconfirmPage'
import StoresPage from "./Files/Pages/StoresPage"


const RouteWrapper = () => {

  const {Logged} = useAuth()

  return(


    <Routes>

      <Route path="/test" element={<App/>}/>

      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/register" element={Logged ? <Navigate to="/home" replace/> : <RegisterPage/>}/>
      <Route path="/login" element={Logged ? <Navigate to="/home" replace/> : <LoginPage/>}/>
      <Route path="/register/otp-confirm" element={Logged ? <Navigate to="/home" replace/> : <OTPconfirmPage/>}/>
      <Route path="/stores" element={<StoresPage/>}/>

    </Routes>

  );

}



createRoot(document.getElementById('root')).render(
  
  
  <BrowserRouter>

    <AuthProvider>
      
      <RouteWrapper/>

    </AuthProvider>

  </BrowserRouter>
)