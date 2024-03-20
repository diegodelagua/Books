import {useState}  from "react"

export default function ItemCountComponent() {

    const [contador, setContador] = useState (1);

    const incrementar = () => {
        setContador (contador + 1);
    };

    const decrementar = () => {
        if (contador > 1){
            setContador (contador - 1);
        }
    
    }

    return (
        <>
        <div className="flex gap-2 justify-center   items-center p-1">
            <button className="rounded-md bg-blue-500 p-2" onClick={decrementar}>-</button>
            <p className="p-2">{contador}</p>
            <button className="rounded-md bg-blue-500 p-2" onClick={incrementar}>+</button>
        </div>
        <div className="flex justify-center">
            <button className="rounded-md bg-blue-500 p-2">Agregar al carrito</button>
        </div>
        
        </>
    );
}