import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
return (  
  <div>
    <h3>404 página no encontrada</h3>
    <p>Estamos revisando el inconveniente</p>
    <Link to='/' className="flex items-center space-x-1 px-3 py-2 bg-black-200 rounded hover:bg-gray-600">
      <button className="sm:hidden text-gray-600 hover:text-gray-800"> 
          <span>🍕 Home </span>
      </button>
    </Link>
  </div>   
  )
}
export default NotFound;