import './Iphones.css';
import {Link} from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../imgs/laad.png';



function Iphones(){


      return(
    <>
         <div className='java'>
        <h1>helo iphone</h1>
        <Link to='/' className="btn btn-info" >Back too Home</Link>

          </div>
        

        <div className='container'>
            <nav className=''>
                <div className='navbar navbar-expand-lg bg-dark'>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className='navbar-nav ms-auto'>

                        <li  className='nav-item'>
                            <Link to='/Books' className='nav-link' >Books</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Watches' className='nav-link' >Watches</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Shoes' className='nav-link' >Shoes</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Kfc' className='nav-link' >KFC</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Grocery' className='nav-link' >Grocerry</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Saree' className='nav-link' >Saree</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Camera' className='nav-link' >Camera</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Mobilees' className='nav-link' >Mobiles</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Toys' className='nav-link' >Toys</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Pendrive' className='nav-link' >Pendrive</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Airpods' className='nav-link' >Airpods</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/SmartTv' className='nav-link' >Smart Tv</Link>
                        </li>

                        <li  className='nav-item'>
                            <Link to='/Fridge' className='nav-link' >Fridge</Link>
                        </li>

                        
                    </ul>
                </div>

                </div>
            </nav>
        </div>
      
    </>
    )

}
export default Iphones;