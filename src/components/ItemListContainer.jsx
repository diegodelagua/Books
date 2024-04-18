import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../firebase/config"

export default function ItemListContainer (){

    const [productos, setProductos] = useState ([]);
    
    const [seccion, setSeccion] = useState ("Nuestros Libros");
    
    const categoria = useParams ().categoria;
    
    
        useEffect (()=> {

            const librosRef = collection (db, "libros");

            const filtro = categoria ? query (librosRef, where ("categoria", "==", categoria)) : librosRef;


            getDocs(filtro)
                .then ((resp) => {

                    setProductos (
                        resp.docs.map ((doc) => {
                            return {...doc.data(), id: doc.id}
                        })
                    )

                })
        
    },[categoria])

    return (
        <div >
            <div className="flex flex-col m-auto items-center justify-center p-5 lg:flex-row text-center">
                <Link to={'/productos/ciencia-ficcion'} className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 border hover:bg-amber-600 text-white m-2 items-center text-lg font-bold transform active:bg-amber-400">Ciencia Ficcion</Link>
                <Link to={'/productos/terror'} className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 border hover:bg-amber-600 text-white m-2 items-center text-lg font-bold transform active:bg-amber-400">Terror</Link>
                <Link to={'/productos/novela-distopica'} className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 border hover:bg-amber-600 text-white m-2 items-center text-lg font-bold transform active:bg-amber-400">Novela Distopica</Link>
                <Link to={'/productos/thriller'} className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 border hover:bg-amber-600 text-white m-2 items-center text-lg font-bold transform active:bg-amber-400">Thriller</Link>
                <Link to={'/productos/fantasia-aventura'} className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 border hover:bg-amber-600 text-white m-2 items-center text-lg font-bold transform active:bg-amber-400">Fantasia/Aventura</Link>
            </div>
            <div>
                <ItemList productos={productos} seccion={seccion}/>   
            </div>
        </div>
    )

}