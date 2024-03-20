export default function ContactComponent() {
  return (
    <>
    
           
      <div className=" block justify-center items-center gap-5 p-10 max-w-3xl m-auto h-screen">
        <p className="text-center font-bold text-2xl p-7">Contactanos</p>
        <form action="" className="flex flex-col gap-2 p-2 rounded-md w-full  border bg-amber-700 border-black ">
                  <label className="rounded-md text-white font-bold p-1" htmlFor="nombre">Nombre</label>
                  <input className="rounded-md p-1" type="text" placeholder="Escriba su nombre aqui"/>
                  <label className="rounded-md text-white font-bold p-1" htmlFor="apellido">Apellido</label>
                  <input className="rounded-md p-1" type="text" placeholder="Escriba su apellido aqui" />
                  <label className="rounded-md text-white font-bold p-1" htmlFor="tel">Numero de telefono</label>
                  <input className="rounded-md p-1" type="text" placeholder="Numero de Telefono" />
                  <label className="rounded-md text-white font-bold p-1" htmlFor="email">Email</label>
                  <input className="rounded-md p-1" type="email" placeholder="Escriba su Email aqui" />
                  <label className="rounded-md text-white font-bold p-1" htmlFor="mensaje">Mensaje(Opcional)</label>
                  <textarea className="max-h-36 rounded-md p-1" name="mensaje" id="" cols="10" rows="10" maxLength={300}></textarea>
                  <input className="bg-amber-200 rounded-md" type="submit"/>
        </form>
      </div>
    </>
  );
}
