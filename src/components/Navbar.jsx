import Cartwidget from "./Cartwidget";

export default function Navbar () {
    
    return (
    <>
    <nav className="flex justify-around p-8">
        <img className="w-20" src="src\assets\Books.png" alt="logo" />
        <Cartwidget/>
    </nav>
    </>
    )
}

