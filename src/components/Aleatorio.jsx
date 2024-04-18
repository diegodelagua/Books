// Función para mezclar un array en un orden aleatorio
function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  
  // Obtener los primeros 10 productos del array mezclado
  const productosAleatorios = shuffleArray(productos).slice(0, 10);
  
  // Renderizar los productos aleatorios
  <div className="flex flex-wrap">
    {productosAleatorios.map((producto, index) => (
      <div key={index} className="">
        <h2>{producto.titulo}</h2>
        <img className="" src={producto.img} alt={producto.titulo} />
        <p>{producto.precio}</p>
        <button>Ver Detalles</button>
      </div>
    ))}
  </div>