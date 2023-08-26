import './Navbar.css'
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Home from '../Home/Home';
import Cart from '../Cart_Items/Cart';
import { fridges } from '../Fridge/FridgeData';
import FridgeBridge from '../Fridge/FridgeBridge';
import Fridge from '../Fridge/Fridge';



function Navbar(){
   
    const [show,setshow] = useState(false);
   // const [navbar,setnavbar] = useState('');
    //console.log(navbar);
     
   
   
    const [targett,settarget] =useState("");
    const fly="hii prajeesh";
    const bulk=[];
      
  // {<Fridge fridges={fridges.filter((note)=>{note.name.toLowerCase().includes(navbar)})}  />}

  //const fridges={fridges.filter((note)=>note.name.toLowerCase().includes(navbar))} 
    
    return(
        <>
       

      <nav className='navbar navbar-expand-lg  ' id='navs'>

              {/* <img className='nav-header bg-info' src={''} id='img1'></img> */}
              <div className='navbar-header text-white' >PHONIX</div>

          {/*******************************************************************************/}

          {/* <select className='dropdown-menu' >
          <option className='dropdown-item' value='good'>Good</option>
          <option value='bad'>Bad</option>
          </select> */}
          
        {/*******************************************************************************/}
          <div className='d-flex'>
                  <input className='form-control w-50 mx-5' id='bar'  placeholder='Search Your Products' type='text'  />
                  
             <button className='btn btn-outline-info' type='submit' id='ok' onClick={(e)=>{
                e.preventDefault();
                  <Home targett={targett}/>
                //<Home fly={fly}/>
             }} >Search</button>
              </div>

          {/* <div className='dropdown' id='kgf'>
            <button className='btn btn-danger dropdown-toggle' type='button' id='goods' data-toggle='dropdown'aria-haspopup="true" aria-expanded="false">Launguage</button>
              <div className='dropdown-menu' aria-labelledby='goods'>
                  <a href='#' className='dropdown-item'>Eng</a>
                  <a href='#' className='dropdown-item'>Tamil</a>
              </div>
          </div> */}
          <Link to='/Maps' className='btn btn-warning'>Maps</Link>
            <div className='bg-info'>

                {/* This button can show the selected cart items..
                I used usestate method to hide and show the cart item contents
                Once clicked the button automatically the usestate intial value can be changed true so now its display.. */
                }
                <button className='btn btn-dark' onClick={()=>
                    setshow(true)
                }> Cart <span>0</span></button>
            </div>
   
      {/* This button can show the selected cart items..
                I used usestate method to hide and show the cart item contents
                Once clicked the button automatically the usestate intial value can be changed false so now its hide.. */
}
            <div className='locate d-flex p-1'>
             <button className='btn btn-dark' onClick={()=>setshow(false)}  >Close</button>
          </div>
          <Link to='/Signin' className='btn btn-dark'>Sign in</Link>

          
          <div className='collapse navbar-collapse'>
              <ul className='navbar-nav ms-auto'>
                  <li className='nav-item'>
                      <Link to='/' className='nav-link' id='q'>Home</Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/Iphones' className='nav-link' id='w'>Gadgets</Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/Foods' className='nav-link' id='e'>Foods</Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/Sticky' className='nav-link' id='r'>Notes</Link>
                  </li>
              </ul>
          </div>

      </nav>

      
      {/* This is the logic code.. 
      once the show variable is true then its show Cart component contents otherwise hide...        */}

                    {show? <Cart/>:null}
                    
                   

              </>
    )
}
export default Navbar;