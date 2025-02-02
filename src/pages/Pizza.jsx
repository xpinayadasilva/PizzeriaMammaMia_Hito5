import formatCurrency from "../assets/utils/formatCurrency.js";  
import React, { useState, useEffect } from 'react';

const Card = ({ index, title,description, image, ingredients, price }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-l  text-black-500">{title}</h2>
      <a href="#">
        <h2 className="mb-2 text-m tracking-tight text-black dark:text-white">
          {description}</h2>
      </a>
      <a href="#" >
        <img className="w-100 h-50 items-center rounded" 
            src={image} alt={description} />
      </a>
      <div className="mb-3 font-normal text-gray-900 dark:text-gray-400">
        <span className="text-l font-semibold">Ingredientes: 
          <p className="list-unstyled items-start justify-items-center text-s">                 
                                                   
            <li key={index}>{ingredients.join(", ")}</li>
          </p>                
        </span>
      </div>
      <div>$ {price}</div>
      <div className="inline-flex items-center px-3 py-2 backdrop:max-w-sm bg-white rounded-lg  dark:bg-gray-800 dark:border-gray-700">
        <button className="bg-gray border border-gray-800 hover:bg-blue-700 text-black font-bold py-1 px-2 rounded">
              Ver más 👀
        </button>
        <button className="bg-black border border-gray-800 hover:bg-blue-700 text-black font-bold py-1 px-2 rounded">
            🛒 Añadir 
        </button>
      </div>
    </div>
    ) 
  }

const Pizza = () =>{
  const [pizzas, setPizzas]= useState([])
  
      useEffect(() => {
        consultarApi();
        }, []);

        //Función que consulta la API
        const consultarApi = async () => {
          fetch('http://localhost:5000/api/pizzas')
          .then((response)=> response.json())
          .then((data)=>{              
              setPizzas([...data]);                        
          })
          .catch((err) => {
            console.log(err.message);
         })         
        };        
   
    return (       
      <>        
          {pizzas.map((pizza,index) => {  
            return (   
              <Card key={index} title={pizza.title} description={pizza.desc} image={pizza.img} ingredients={pizza.ingredients} price={pizza.price} />                                 
            )
          })   
        }            
      </>    
    )
  }
  export default Pizza;