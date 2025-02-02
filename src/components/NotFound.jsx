import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const NotFound = () => {
return (    
  <>
  <Header />  
  <div className='flex bg-black bg-blach text-white px-4 py-2 justify-center items-center'>     
    <div className=''>  
      <h3 className='text-2xl text-yellow-500'>404 página no encontrada</h3>
      <p>Estamos revisando el inconveniente</p>
      <Link to='/' className="space-x-1 px-3 py-2">
        <button className="text-black border border-gray-500 hover:text-red-800 border border-cyan-500"> 
            🍕 Home
        </button>
      </Link>
    </div>   
  </div> 
  <Footer />
  </>  
  )
}
export default NotFound;