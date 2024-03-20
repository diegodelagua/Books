import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import { cargarProducto } from '../../products';
import ItemCountComponent from '../itemcount/ItemCountComponent';

export default function ItemDetailContainerComponent () {
    const {prodId} = useParams ();

    const[product, setProduct] = useState ({})

    useEffect (()=>{
        setProduct(cargarProducto(prodId))
    },[prodId])

    return (
        <>
        <section className='flex justify-center p-2'>
        <div className='flex flex-col items-center w-80 bg-amber-100 gap-2 p-2 border border-solid border-black text-center'>
        <h3>''{product.titulo}''</h3>
        <img className='w-56' src={product.img} alt={product.titulo} />
        <p>Autor: {product.autor}.</p>
        <p>Categoria: {product.categoria}.</p>
        <p>Año: {product.año}.</p>
        <p>Descripcion: {product.descripcion}</p>
        <p>Precio: ${product.precio}</p>
        <ItemCountComponent/>
        </div>
        </section>
        </>
    );
}