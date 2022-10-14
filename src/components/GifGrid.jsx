
import {getGifs} from '../helpers/getGifs'
import useFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem';

// use effect sirve para disparar efectos secundarios 

console.log(getGifs);

  export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category)

  
   // array vacio significa que ese hook se va a disparar la primera vez que se crea

  return (
    <>
        <h3> {category} </h3> 
        {
          isLoading ? ( <h2 className='loader'> Loading </h2>) : null
        }
       
        <div className="card-grid">
         { 
            images.map((image) => (
                <GifItem key={image.id} {...image} />
            ))
          }
         
          </div>   
     </>
    )
}

export default GifGrid

