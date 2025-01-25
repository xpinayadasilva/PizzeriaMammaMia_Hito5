import { useState } from 'react'
import './App.css'
import NavBar from '../components/NavBar'
/* import Home from '../pages/Home'
import Cart from '../components/Cart'
import Login from '../components/LoginPage'
import Register from '../components/RegisterPage'
import Pizza from '../components/Pizza' */

function App() {
  
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <NavBar />
        <main className='flex-grow'>
          <Home />
          <Cart />
          <Login />
          <Register />
          <Pizza />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
