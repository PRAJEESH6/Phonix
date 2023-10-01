import './Home.css';
import {useState} from "react";
import axios from "axios";
import Col from '../Col/Col';
import Adata from './Adata';
import Navbar from '../Navbar/Navbar';
import market from '../imgs/laad.png';
import {useCart} from 'react-use-cart';
import { Link } from 'react-router-dom';


function Home(){

  const [item, setitem] = useState([]);

  const [pizza,setpizza]= useState([]);

  const optionsp = {
    // method: 'GET',
    // url: 'https://pizza-and-desserts.p.rapidapi.com/pizzas',
    // headers: {
    //   'X-RapidAPI-Key': 'da1e38c751msh7427d0cbc1046aap17ef2ejsnb3755b01aae9',
    //   'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
    // }
    };
    
 axios.request(optionsp).then(response=>{ 
   const lion=(response.data); 
   setpizza(lion);  
   
}). catch ((error) =>{
    console.error(error); 
})


 // const prajeesh=[];
  const options2 = {
    method: 'GET',
    url: 'https://the-vegan-recipes-db.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': 'cfcc9815d0mshaed41f8a7b377a6p188758jsn56008a558f96',
      'X-RapidAPI-Host': 'the-vegan-recipes-db.p.rapidapi.com'
    }
  };


axios.request(options2).then(response=>{
  const item=(response.data);
  //const item=response.json();
  setitem(item);

}).catch ((error)=> {
console.error(error);
})   

  //******************************************************************************************** */

  //  const {title, difficulty, image} = this.props.item;
   

    /**
     * All api category data's are stored in useState();(Amazon-real time data);
     */
    const [itemss , setItems]=useState(null);
    const [itemss1 , setItems1]=useState(null);
    const [itemss2 , setItems2]=useState(null);
    const [itemss3 , setItems3]=useState(null);
    const [itemss4 , setItems4]=useState(null);
    const [itemss5 , setItems5]=useState(null);
    const [itemss6 , setItems6]=useState(null);
    const [itemss7 , setItems7]=useState(null);
    const [itemss8 , setItems8]=useState(null);
    const [itemss9 , setItems9]=useState(null);
    const [itemss10 , setItems10]=useState(null);
    const [itemss11 , setItems11]=useState(null);
    const [itemss12 , setItems12]=useState(null);
   
   


    /**
     * This array can stored all api data and divide data's through indexes...
     * @type {*[]}
     */
    const datas=[];

    /**
     * This is the Api All product Data Category lists ~(Amazon-real time data);
     * @type {{headers: {"X-RapidAPI-Host": string, "X-RapidAPI-Key": string}, method: string, params: {country: string}, url: string}}
     */
   
const options = {
    method: 'GET',
    // url: 'https://real-time-amazon-data.p.rapidapi.com/product-category-list',
    // params: {country: 'US'},
    headers: {
    //   'X-RapidAPI-Key': '6cb98b3de0msh5680e09b81dc952p121e81jsn9a7b0ae80475',
    //   'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };

    axios.request(options).then((response)=>{
        /**
         * All api data's can stored datas array through push function...
         */
        datas.push(response.data);

        /**
         * Stored datas in our useState variables...
         */
        setItems(datas[0].data[0].name);
        setItems1(datas[0].data[1].name);
        setItems2(datas[0].data[2].name);
        setItems3(datas[0].data[3].name);
        setItems4(datas[0].data[4].name);
        setItems5(datas[0].data[5].name);
        setItems6(datas[0].data[6].name);
        setItems7(datas[0].data[7].name);
        setItems8(datas[0].data[8].name);
        setItems9(datas[0].data[9].name);
        setItems10(datas[0].data[10].name);
        setItems11(datas[0].data[11].name);
        setItems12(datas[0].data[12].name);
       
      
        



    }).catch ((error)=> {
        console.error(error)
    })
    return(
        <>
                          {/* <div className='row'>
            <div className='list-group col-3 g-1 mx-3 my-3'>
                
                <a href='#' className='list-group-item'>{itemss}</a>
                <a href='#' className='list-group-item'>{itemss1}</a>
                <a href='#' className='list-group-item'>{itemss2}</a>
                <a href='#' className='list-group-item'>{itemss3}</a>
                <a href='#' className='list-group-item'>{itemss4}</a>
                <a href='#' className='list-group-item'>{itemss5}</a>
                <a href='#' className='list-group-item'>{itemss6}</a>
                <a href='#' className='list-group-item'>{itemss7}</a>
                <a href='#' className='list-group-item'>{itemss8}</a>
                <a href='#' className='list-group-item'>{itemss9}</a>
                <a href='#' className='list-group-item'>{itemss10}</a>
                <a href='#' className='list-group-item'>{itemss11}</a>
                <a href='#' className='list-group-item'>{itemss12}</a>
            </div> 

        </div>*/}

        {/* <div className='video'></div>
              <video autoPlay loop muted plays-Inline className='back'>
                <source src={market} type='video/mp4'></source>
              </video> */}
              <div className='d-flex'>
                <div className='row'>
                  
                  <div className='col-6'>
                  <h4 id='main'>Phoenix Shopper's Delight </h4>
              <span id='main1'>Elevate Your Adventure!</span><br></br>
              <h5 id='det'>The sunny climate and outdoor-friendly atmosphere of Phoenix encourage an active lifestyle. Highlight how your e-commerce platform caters to the needs of individuals who value both leisure and convenience.</h5>
             
              <div className='animes'>
            <div className='borders' ></div>
            <Link to='/Iphones'  id='fooss'>Shop Now</Link>
          </div>
                  </div>


                  <div className='col-6'>
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" id='mer'>
                   <path fill="#72DE33" d="M64.7,-37.4C75.6,-18.4,70.6,9.7,57.1,29.2C43.7,48.7,21.9,59.5,2.4,58.1C-17.1,56.7,-34.2,43.1,-48.3,23.3C-62.5,3.4,-73.8,-22.9,-65.2,-40.5C-56.7,-58.2,-28.4,-67.3,-0.7,-66.8C26.9,-66.4,53.7,-56.5,64.7,-37.4Z" transform="translate(100 100)" />
                </svg>
                    <img src={market} alt='pic' id='malar' />
                  </div>
                </div>
              </div>
             
           
              
        <div>
       

        <div className='container-fluid'>
            <div className='row'>
            <h1 className='text-danger' id='pizza'>Pizza is not a trend, it's a way of life</h1>
           {pizza.map((water)=>{
                return <Adata key={water.id}  {...water} />
            })}
            </div> 
        </div>    
        </div>
           

           <Col item={item}/>
                     
             {/* <Col/> */}
            
            </>
    )

            }
export default Home;