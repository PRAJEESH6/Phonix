import './Mobile.css'
import { Link } from 'react-router-dom';
import Furniture from './Furniture.js';
import axios from 'axios';
import { useState } from 'react';

function Mobile(){

    const [shoe,setshoe]=useState([]);

    const options9 = {
        // method: 'GET',
        // url: 'https://shoes-collections.p.rapidapi.com/shoes',
        // headers: {
        //   'X-RapidAPI-Key': 'da1e38c751msh7427d0cbc1046aap17ef2ejsnb3755b01aae9',
        //   'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
        // }
      };
      
 axios.request(options9).then(response=>{
	const shoe=(response.data);
  setshoe(shoe);
  //console.log(shoe)
}). catch ((error)=> {
	console.error(error);
})
    return(
        <>
        <h1>hello i am from Shoes</h1>
        <Link to='/iphones' className="btn btn-info" >Back too All Category</Link>

        <div className='container-fluid'>
            <div className='row'>

        
           { shoe.map((sleep)=>{
                return <Furniture key={sleep.id} {...sleep}/>
            })}
        
               
            </div>
        </div>
        </>

        
    )
}
export default Mobile;