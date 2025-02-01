import Header from "../components/Header.jsx";  
/* import { useEffect, useState } from "react"; */
import Pizza from './Pizza.jsx';


function Home(){
    /* const [pizzas, setPizzas]= useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/api/pizzas')
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data)
            setPizzas(data);            
        })
    },[]) */

    return(
        <div>
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold text-center mb-8">Menú de Pizzas</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">                    
                    <Pizza />                
                </div>
            </div>
        </div>
    )
}
export default Home;
