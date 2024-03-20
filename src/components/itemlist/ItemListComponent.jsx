import CategoryContainerComponent from "../categories/CategoryContainerComponent"
import { cargarProductos } from '../../products'
import { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'

export default function ItemListComponent () {
    const navigate = useNavigate ();
    const categoria = useParams ().categoria ;

    const [products, setProducts] = useState ([]);

    useEffect(() => {
        cargarProductos
            .then((data) => {
                if (categoria) {
                    const filteredProducts = data.filter((product) => product.categoria.toLowerCase().includes(categoria));
                    setProducts(filteredProducts);   
                } else {
                    setProducts(data);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                // Manejo de errores aquí
            });
    }, [categoria]);

    const handleClick = (id) => {
        navigate (`/product/${id}`);
    };
    
    return (
        <>
        <div>
            <CategoryContainerComponent/>
        </div>
        <div className='flex flex-col justify-between '>
            
            
            {
               categoria ? <h1 className="text-center capitalize font-bold p-2">{categoria}</h1> : <h1 className="font-bold text-center p-2 ">Nuestros libros</h1>

            }
              
            <section className="grid grid-cols-2 p-2 gap-2 m-auto justify-center lg:grid-cols-4 lg:gap-10">
            {products.map((product)=>(
                <article 
                key={product.id}
                 className="flex flex-col shadow-md max-w-80 bg-amber-500  p-3 border border-solid border-black text-center"
                >
                    <h4 className='h-[20%] m-auto text-center items-center flex font-bold' >{product.titulo}</h4>
                    <img className='h-[80%]' src={product.img} alt={product.nombre} />
                    <p className='font-bold p-4'>Precio: ${product.precio}</p>
                    <button className='font-bold bg-orange-200  p-2 m-auto' onClick={()=> handleClick(product.id)}>Ver Detalles</button>
                </article>
            ))}
            </section>
        </div> 
        </>
    )
        
    
} 