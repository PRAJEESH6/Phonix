import Chicken from './Chicken';
import './Kfc.css'
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import { useState } from 'react';

function Kfc(){
    const [kfc, setkfc] =useState([]);

const options = {
  method: 'GET',
  url: 'https://kfc-chickens.p.rapidapi.com/chickens',
  headers: {
    'X-RapidAPI-Key': 'da1e38c751msh7427d0cbc1046aap17ef2ejsnb3755b01aae9',
    'X-RapidAPI-Host': 'kfc-chickens.p.rapidapi.com'
  }
};

 axios.request(options).then(response=>{
	const kfc=(response.data);
    setkfc(kfc)
}). catch ((error)=> {
	console.error(error);
})
    return(
        <>
       
         <h1>KFC</h1>
        <Link to='/iphones' className="btn btn-info" >Back too All category</Link>

        <div className='container'>
            <div className='row'>
               {kfc.map((chick)=>{
                <Chicken key={chick.id} {...chick}/>
               })}
            </div>
        </div>
        </>
    )
}
export default Kfc;