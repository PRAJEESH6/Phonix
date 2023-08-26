import './Books.css';
import { Link } from 'react-router-dom';
import Author from './Author';
import { useState } from "react";
import axios from "axios";

function Books(){

    const [author1, setauthor] =useState([]);
   
    const options1 = {
        // method: 'GET',
        // url: 'https://hapi-books.p.rapidapi.com/top_authors',
        // headers: {
        //   'X-RapidAPI-Key': '6cb98b3de0msh5680e09b81dc952p121e81jsn9a7b0ae80475',
        //   'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
       // }
      };
    
    axios.request(options1).then(response=>{
    const author1=(response.data);
     setauthor(author1);
   // console.log(author);
    }). catch ((error)=> { 
    console.error(error);
    })
    return(
        <>
        <div className='python'>
        <h1>hello i am from books</h1>
        <Link to='/iphones' className="btn btn-info" >Back too All Category</Link>
        </div>

        <div className='container-fluid'>
            <div className='row'>
           {author1.map((data)=>{
                return <Author key={data.id} {...data}/>
            })}
            </div>
        </div>
        </>
    )
}
export default Books;