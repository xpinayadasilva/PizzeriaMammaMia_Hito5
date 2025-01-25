import formatCurrency from "../assets/utils/formatCurrency.js";  
import React, { useState, useEffect } from 'react';

const Pizza = () =>{
  const [pizzas, setPizzas]= useState([])
  
      /* useEffect(()=> {
          fetch('http://localhost:5000/api/pizzas')
          .then((res)=> res.json())
          .then((data)=>{
              console.log(data)
              setPizzas(data);            
          })
      },[]) */

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
        {pizzas.map((pizza) => {  
          return (    
            <div class="inline-flex items-center px-3 py-2 backdrop:max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">          
          
            <div className="p-5">
              <a href="#">
              <h2 className="mb-2 text-m font-semibold tracking-tight text-gray-800 dark:text-white">
                {pizza.desc}</h2>
              </a>
              <a href="#" >
              <img className="w-50 h-10 items-center rounded" 
                src={pizza.img} alt={pizza.desc} />
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <span>Ingredientes: 
                <p className="list-unstyled items-start justify-items-center text-s">                 
                 🍕                                
                  <li key={pizza.id}>{pizza.ingredients.join(", ")}</li>
                </p>                
              </span>
              <div>$ {pizza.price}</div>
              <div className="inline-flex items-center px-3 py-2 backdrop:max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
              <button className="bg-white border-gray-500 hover:bg-blue-700 text-black font-bold py-1 px-2 rounded">
                  Ver más 👀
              </button>
              <button className="bg-black border-gray-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              🛒 Añadir 
              </button>
          </div>
            </p>
            {/* <div>$ {formatCurrency({pizza.price})}</div>  */}
            
          </div>                      
        </div> 
          )
        })  
      }        
      </>      
    )
  }
  export default Pizza;