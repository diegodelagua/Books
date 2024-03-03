export default function Categories () {

    return(
    <>    
        <div className="flex flex-col items-center p-8 lg:flex-row lg:justify-around">
            <button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">Ciencia ficción</button>
            <button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">Terror</button>
            <button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">Thiller</button>
            <button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">Novela distópica</button>
            <button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">Fantasía/Aventura</button>
        </div>
    </>
    )
}