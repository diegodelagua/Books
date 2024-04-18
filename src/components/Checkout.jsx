import React,{useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import {useForm} from "react-hook-form"
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import Swal from "sweetalert2"


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
                title: "😁😁😁",
                text: "Muchas gracias por tu compra",
                imageUrl: "https://images.ecestaticos.com/l-QTTSrZraidt3kuLaBqXlConyI=/23x0:937x687/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fc8c%2F11e%2Fe86%2Fc8c11ee865c08762417dc0fc922e19fe.jpg",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image"
              });
        })
    }

    if (pedidoId) {
        return (
            <div className="text-center p-12 h-screen ">
                <h1 className="font-bold text-2xl">Tu número de pedido es: {pedidoId}</h1>
            </div>
        )
    }
    return (
        <div className=" block justify-center items-center p-8 gap-5 max-w-3xl m-auto">
        <h1 className="text-center font-bold text-2xl pb-8" >Finalizar compra</h1>
        <form className="flex flex-col gap-3 p-2 rounded-md w-full  border bg-amber-700 border-black " onSubmit={handleSubmit(comprar)}>

            <input className="rounded-md p-2" type="text" placeholder="Ingresá tu nombre" {...register("nombre")} required/>
            <input className="rounded-md p-2" type="text" placeholder="Ingresá tu Apellido" {...register("apellido")} required/>
            <input className="rounded-md p-2" type="email" placeholder="Ingresá tu e-mail" {...register("email")} required/>
            <input className="rounded-md p-2" type="tel" placeholder="Ingresá tu teléfono" {...register("telefono")} required/>
            <input className="rounded-md p-2" type="text" placeholder="Ingresá tu dirección" {...register("direccion")} required/>
            <input className="rounded-md p-2" type="text" placeholder="Ingresá tu ciudad" {...register("ciudad")} required/>
            <input className="rounded-md p-2" type="text" placeholder="Ingresá tu codigo postal" {...register("CP")} required/>

            <button className="bg-green-900 rounded-md text-white font-bold p-2 cursor-pointer hover:bg-green-700 transform active:bg-green-500" type="submit">Comprar</button>

        </form>
    </div>
  )

}