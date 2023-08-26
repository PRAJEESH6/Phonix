import './Cart.css';
import {BsFillTrashFill} from 'react-icons/bs';
import {AiFillCloseCircle} from 'react-icons/ai';
import img from '../imgs/gold2.png';
import { useState } from 'react';
import { useEffect } from 'react';

function Deleted(){
    // alert("Are you sure to delete");
  this.Element.remove();

};



const Cart=()=>{
   
 
    console.log("hii",)
    return(
        <>


        {/* This is the cart method tag ..This method can contains all cart property....  */}
        
      
        
       <div className='cart' key={''} >
                <div className='cart-title'>Cart Items</div>
                    <div className='cart-content'>
                     
                    {/* This cart box containts all spacific details like img price qty.... */}
                  
                        <div className='cart-box'>
                            <img src={img} alt='pic' id='no'/>

                            <div className='cart-detail'>
                                <div className='cart-food-title'>{''}</div>

                                <div className='price-box'>
                                <div className='cart-price'>Rs 80/-</div>
                                <div className='cart-amt'>Rs 80/-</div>
                                </div>

                                <input type='number' value='1' className='form-control' id='cart-quantity' onChange={(e)=>{
                                     if(isNaN(this.value) || (this.value < 1)){
                                        this.value = 1;
                                    }
                                }}/>
                            </div>

                            <BsFillTrashFill name='trash' className='cart-remove' onClick={()=>{
                               
                            }}/>
                            
                        </div>

                    </div>
                    
                    {/* This is the Second box */}
                    
                    <div className='cart-box'>
                            <img src={img} alt='pic' id='no'/>

                            <div className='cart-detail'>
                                <div className='cart-food-title'>hello</div>

                                <div className='price-box'>
                                <div className='cart-price'>Rs 80/-</div>
                                <div className='cart-amt'>Rs 80/-</div>
                                </div>

                                <input type='number' value='1' className='form-control' id='cart-quantity'/>
                            </div>

                            <BsFillTrashFill name='trash' className='cart-remove' onClick={Deleted}/>
                        </div>
                        
                         
                         <div className='total'>
                        <div className='cart-total'>Total</div>
                        <div className='total-amt'>Rs. 78</div>
                    
                        </div>


                        <button className='btn btn-dark'>Place Order</button>
                        <AiFillCloseCircle id='bee' onClick={()=>{}}/>

                    
               
</div>
   
                      
                        
        
        </>
    )
}

export default Cart;