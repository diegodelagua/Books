
import { Link } from 'react-router-dom';
export default function NavBarComponent () {
    
    return (
    <>
    <nav className="flex justify-around p-2 bg-green-900">
        <Link to = {'/'}><img className='w-20 md:w-40 pt-2 md:p-0 ' src="src\assets\Diseño sin título.png" alt="logo" /></Link>
        <div className='flex gap-3 md:gap-44'>
        <button className=' text-white font-bold  md:px-10 md:text-2xl '>
          <Link to={'/products'}>Productos</Link>
        </button>
        <button className=' text-white font-bold  md:px-10 md:text-2xl'>
          <Link to={'/contact'}>Contacto</Link>
        </button>
      </div>
        <Link to = {'/cart'}>
          <div className="flex justify-center  md:text-4xl ">
          <svg xmlns="http://www.w3.org/2000/svg"  width="36" height="25" className="m-auto bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
            <span className='p-1 text-white font-bold'>0</span>
        </div></Link>
    </nav>
    </>
    )
}

