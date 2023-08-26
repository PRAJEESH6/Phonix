import './Foods.css';
import { Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa'
import { useState } from 'react';
import axios from 'axios';
import Chinese from './Chinese';

function Foods(){
       
    const [label, setlabel]=useState(null);    
    const [label1, setlabel1]=useState(null);    
    const [label2, setlabel2]=useState(null);    
    const [label3, setlabel3]=useState(null);    
    const [chinese, setChinese]=useState([]);

    // ***********************************************************************************************

const options98 = {
//     method: 'GET',
//     url: 'https://chinese-food-db.p.rapidapi.com/',
//     headers: {
//       'X-RapidAPI-Key': '6cb98b3de0msh5680e09b81dc952p121e81jsn9a7b0ae80475',
//       'X-RapidAPI-Host': 'chinese-food-db.p.rapidapi.com'
//   }
};

axios.request(options98).then(response1=>{
	const chinese=(response1.data);
    setChinese(chinese);
}). catch ((error)=> {
	console.error(error);
})

// ***********************************************************************************************

    const options = {
        // method: 'GET',
        // url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
        // params: {
        //   query: 'italian wedding soup'
        // },
        // headers: {
        //   'X-RapidAPI-Key': 'da1e38c751msh7427d0cbc1046aap17ef2ejsnb3755b01aae9',
        //   'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
        // }
      };
      
 axios.request(options).then(response=>{;
	setlabel(response.data[0].title);
    setlabel1(response.data[1].title);
    setlabel2(response.data[2].title);
    setlabel3(response.data[3].title);
    
 }). catch ((error)=> {
	console.error(error);
})



    // **********************************************************************************************************
    
    /**
     * The Rating useState is used for to store current clickable stars....
     * The Hover useState is used for to store current Mouse enter points stars..and mouse pointer leave stars to check and update it... 
     */
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const [rating1, setRating1] = useState(null);
    const [hover1, setHover1] = useState(null);

    const [rating2, setRating2] = useState(null);
    const [hover2, setHover2] = useState(null);

    const [rating3, setRating3] = useState(null);
    const [hover3, setHover3] = useState(null);
    
    return(
        <>
        {/* /**
          The card is used for to show varity food items and images..
          And I used rating features in this all cards... 
         */ }
        <div className='toy'>
        <h1>hello i am from food</h1>
        <Link to='/' className='btn btn-primary'>Back to Home</Link>
        </div>

               
               <div className='container-fluid'>
                <div className='row'>
                    <div className='col-4'>
                           
                           <div className='card p-2 my-4 mx-4 ' >
                            <img className='card-img-top' src='https://th.bing.com/th/id/OIP.eJFwd46Yn-iCeaw8wN9w4wHaHa?w=208&h=208&c=7&r=0&o=5&pid=1.7'></img>
                            <div className='card-title my-3'>{label}</div>

                            {/* Rating Purposes codes */}

                            <div className='d-flex' id='gap'>

                                {/* 1. First we can declared array and use spread value and give the value 5 */}
                                {[...Array(5)].map((star, index) =>{

                                    // We can give currentraring variable because we can give description it stores index+1 value
                                    // Because index value must be started 0... 
                                    const Current_Rating = index + 1;
                                     return(
                                        // 1. We can give the label tag , this label tag constaints all rating stars
                                     
                                        <label>

                                            {/* 1.  The label tag containts radio input tag and it have onclick function
                                                     because which star user can be click that star index  will be stored rating
                                                     useState.... 
                                                2.   We can give name because the useState identeficatioin purposes...
                                                3.   And we can give the value is current Ratimng becaue update each and avery time...*/}
                                            <input

                                             type='radio' 
                                             name='rating' 
                                             value={Current_Rating} 
                                             onClick={()=>
                                                setRating(Current_Rating)
                                            }>

                                            </input>

                                            {/* We can give the Fastar icon 
                                            And we can give the color the Current_Rating is <= hover useState variable value or rating useState variable value The color will be show yellow otherwise shows gray... */}
                                            <FaStar className='star' size={35} color={Current_Rating <= (hover || rating) ? "#ffc107" :"#e4e5e5"}

                                            //ON Mouse Enter event is used to isdentify mouse pointer will be entered in which stars...
                                            //Incase the mouse pointer will be entered in 3rd stars then automatecally sethover function will be stored current rating...
                                            onMouseEnter={()=>setHover(Current_Rating)}

                                            //The mouse pointer will be leave in the particular stars then automatically sethover functioin will be worked on  null...
                                            onMouseLeave={()=>setHover(null)}/>
                                        </label>
                                     )
                                })}
                            
                            </div>
                            <p>Give Your Rating {rating} outof 5</p>
                            <Link to='/Food_Details' className='btn btn-danger' >More Info...</Link>
                           </div>
                           </div>
                   
 {/* ************************************************************************************************************************** */}
                   
                   <div className='col-4'>
                           <div className='card p-2 my-4 mx-4'>
                            <img className='card-img-top' src='https://th.bing.com/th/id/OIP.eJFwd46Yn-iCeaw8wN9w4wHaHa?w=208&h=208&c=7&r=0&o=5&pid=1.7'></img>
                            <div className='card-title'>{label1}</div>

                            {/* Rating Purposes codes */}

                            <div className='d-flex' id='gap'>

                                {/* 1. First we can declared array and use pread value and give the value 5 */}
                                {[...Array(5)].map((star, index1) =>{

                                    // We can give currentraring variable because we can give description it stores index+1 value
                                    // Because index value must be started 0... 
                                    const Current_Rating1 = index1 + 1;
                                     return(
                                        // 1. We can give the label tag , this label tag constaints all rating stars
                                     
                                        <label>

                                            {/* 1.  The label tag containts radio input tag and it have onclick function
                                                     because which star user can be click that star index  will be stored rating
                                                     useState.... 
                                                2.   We can give name because the useState identeficatioin purposes...
                                                3.   And we can give the value is current Ratimng becaue update each and avery time...*/}
                                            <input

                                             type='radio' 
                                             name='rating' 
                                             value={Current_Rating1} 
                                             onClick={()=>
                                                setRating1(Current_Rating1)
                                            }>

                                            </input>

                                            {/* We can give the Fastar icon 
                                            And we can give the color the Current_Rating is <= hover useState variable value or rating useState variable value The color will be show yellow otherwise shows gray... */}
                                            <FaStar className='star' size={35} color={Current_Rating1 <= (hover1 || rating1) ? "#ffc107" :"#e4e5e5"}

                                            //ON Mouse Enter event is used to isdentify mouse pointer will be entered in which stars...
                                            //Incase the mouse pointer will be entered in 3rd stars then automatecally sethover function will be stored current rating...
                                            onMouseEnter={()=>setHover1(Current_Rating1)}

                                            //The mouse pointer will be leave in the particular stars then automatically sethover functioin will be worked on  null...
                                            onMouseLeave={()=>setHover1(null)}/>
                                        </label>
                                     )
                                })}
                            
                            </div>

                            <p>Give Your Rating {rating1} outof 5</p>
                            <Link to='/Food1' className='btn btn-danger' >More Info...</Link>
                           </div>
                           </div>

          {/* ************************************************************************************************************************** */}

                   <div className='col-4'>
                           <div className='card p-2 my-4 mx-4'>
                            <img className='card-img-top' src='https://th.bing.com/th/id/OIP.eJFwd46Yn-iCeaw8wN9w4wHaHa?w=208&h=208&c=7&r=0&o=5&pid=1.7'></img>
                            <div className='card-title'>{label2}</div>
                            
                            {/* Rating Purposes codes */}

                            <div className='d-flex' id='gap'>

                                {/* 1. First we can declared array and use pread value and give the value 5 */}
                                {[...Array(5)].map((star, index2) =>{

                                    // We can give currentraring variable because we can give description it stores index+1 value
                                    // Because index value must be started 0... 
                                    const Current_Rating2 = index2 + 1;
                                     return(
                                        // 1. We can give the label tag , this label tag constaints all rating stars
                                     
                                        <label>

                                            {/* 1.  The label tag containts radio input tag and it have onclick function
                                                     because which star user can be click that star index  will be stored rating
                                                     useState.... 
                                                2.   We can give name because the useState identeficatioin purposes...
                                                3.   And we can give the value is current Ratimng becaue update each and avery time...*/}
                                            <input

                                             type='radio' 
                                             name='rating' 
                                             value={Current_Rating2} 
                                             onClick={()=>
                                                setRating2(Current_Rating2)
                                            }>

                                            </input>

                                            {/* We can give the Fastar icon 
                                            And we can give the color the Current_Rating is <= hover useState variable value or rating useState variable value The color will be show yellow otherwise shows gray... */}
                                            <FaStar className='star' size={35} color={Current_Rating2 <= (hover2 || rating2) ? "#ffc107" :"#e4e5e5"}

                                            //ON Mouse Enter event is used to isdentify mouse pointer will be entered in which stars...
                                            //Incase the mouse pointer will be entered in 3rd stars then automatecally sethover function will be stored current rating...
                                            onMouseEnter={()=>setHover2(Current_Rating2)}

                                            //The mouse pointer will be leave in the particular stars then automatically sethover functioin will be worked on  null...
                                            onMouseLeave={()=>setHover2(null)}/>
                                        </label>
                                     )
                                })}
                            
                            </div>
                            <p>Give Your Rating {rating2} outof 5</p>
                            <Link to='/Food2' className='btn btn-danger' >More Info...</Link>
                           </div>
                           </div>

 {/* ************************************************************************************************************************** */}
                              
                   <div className='col-4'>
                           <div className='card p-2 my-4 mx-4'>
                            <img className='card-img-top' src='https://th.bing.com/th/id/OIP.eJFwd46Yn-iCeaw8wN9w4wHaHa?w=208&h=208&c=7&r=0&o=5&pid=1.7'></img>
                            <div className='card-title'>{label3}</div>
                             
                             {/* Rating Purposes codes */}

                            <div className='d-flex' id='gap'>

{/* 1. First we can declared array and use pread value and give the value 5 */}
{[...Array(5)].map((star, index3) =>{

    // We can give currentraring variable because we can give description it stores index+1 value
    // Because index value must be started 0... 
    const Current_Rating3 = index3 + 1;
     return(
        // 1. We can give the label tag , this label tag constaints all rating stars
     
        <label>

            {/* 1.  The label tag containts radio input tag and it have onclick function
                     because which star user can be click that star index  will be stored rating
                     useState.... 
                2.   We can give name because the useState identeficatioin purposes...
                3.   And we can give the value is current Ratimng becaue update each and avery time...*/}
            <input

             type='radio' 
             name='rating' 
             value={Current_Rating3} 
             onClick={()=>
                setRating3(Current_Rating3)
            }>

            </input>

            {/* We can give the Fastar icon 
            And we can give the color the Current_Rating is <= hover useState variable value or rating useState variable value The color will be show yellow otherwise shows gray... */}
            <FaStar className='star' size={35} color={Current_Rating3 <= (hover3 || rating3) ? "#ffc107" :"#e4e5e5"}

            //ON Mouse Enter event is used to isdentify mouse pointer will be entered in which stars...
            //Incase the mouse pointer will be entered in 3rd stars then automatecally sethover function will be stored current rating...
            onMouseEnter={()=>setHover3(Current_Rating3)}

            //The mouse pointer will be leave in the particular stars then automatically sethover functioin will be worked on  null...
            onMouseLeave={()=>setHover3(null)}/>
        </label>
     )
})}

</div>
                            <p>Give Your Rating {rating3} outof 5</p>
                            <Link to='/Food3' className='btn btn-danger' >More Info...</Link>
                           </div>
                           </div>


 {/* ************************************************************************************************************************** */}
                           </div>
                    </div>

                   
                   <div className='container-fluid'>
                    <div className='row'>
                        {chinese.map((food)=>{
                            return <Chinese key={food.id} {...food}/>
                        })}
                    </div>
                   </div>






        </>
    )
}
export default Foods;