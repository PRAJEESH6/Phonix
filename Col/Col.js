import Tour from './Tour'

//import Col from './Col/Col';

 const Col =({item})=>{
    
                  
    return(
        <>
       
                    <div className='container-fluid  '>
                    <div className='row'>
   
               
               { item.map((food)=>{
                  return <Tour key={food.id} {...food}/>
                })}
               

 
                             </div>
                             </div>
            
       

        </>
    )
    
}
export default Col;