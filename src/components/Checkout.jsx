import React,{useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import {useForm} from "react-hook-form"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import Swal from "sweetalert2"
import { data } from "autoprefixer";

export default function Checkout () {

    const [pedidoId, setPedidoId] = useState ("");
    
    const {register, handleSubmit} = useForm ();

    const {carrito, precioFinal, vaciarCarrito} = useContext(CartContext);

    const comprar = (data) => {
            const pedido = {
                cliente: data,
                producto: carrito,
                total: precioFinal ()
            }
            console.log(pedido);
    
    

    const pedidosRef = collection (db,"pedidos");

    addDoc (pedidosRef, pedido)
        .then ((doc) => {
            setPedidoId (doc.id);
            vaciarCarrito();
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Muchas Gracias por Tu Compra ♥",
                showConfirmButton: false,
                timer: 2000
              });
        })
    }

    if (pedidoId) {
        return (
            <div className="text-center p-4">
                <h1 className="font-bold">Tu número de pedido es: {pedidoId}</h1>
            </div>
        )
    }
    return (
        <div className=" block justify-center items-center p-8 gap-5 max-w-3xl m-auto">
        <h1 className="text-center font-bold text-2xl pb-8" >Finalizar compra</h1>
        <form className="flex flex-col gap-3 p-2 rounded-md w-full  border bg-amber-700 border-black " onSubmit={handleSubmit(comprar)}>

            <input className="rounded-md p-2" type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input className="rounded-md p-2" type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input className="rounded-md p-2" type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
            <input className="rounded-md p-2" type="phone" placeholder="Ingresá tu dirección" {...register("direccion")} />
            <input className="rounded-md p-2" type="phone" placeholder="Ingresá tu ciudad" {...register("ciudad")} />

            <button className="bg-green-900 rounded-md text-white font-bold p-2 cursor-pointer hover:bg-green-700 transform active:bg-green-500" type="submit">Comprar</button>

        </form>
    </div>
  )

}