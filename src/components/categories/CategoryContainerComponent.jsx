import { Link } from "react-router-dom"
export default function CategoryContainerComponent () {

    
    return(
        <>
        <div className="flex flex-col m-auto items-center justify-center p-5 lg:flex-row">
         <Link to = {'/categoria/ciencia-ficción'}><button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">Ciencia Ficción</button></Link>
         <Link to = {'/categoria/terror'}><button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">Terror</button></Link>
         <Link to = {'/categoria/thriller'}><button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">Thriller</button></Link>
         <Link to = {'/categoria/novela'}><button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">Novela Distópica</button></Link>
         <Link to = {'/categoria/fantasia-aventura'}><button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">Fantasia/Aventura</button></Link>
         </div>
        </>
    )
}