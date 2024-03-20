const products = [
    {
        id:1,
        titulo:"Dune",
        precio:22000,
        img:"https://i.pinimg.com/236x/ad/b0/94/adb094940402535ab82022f93df76853.jpg",
        categoria:"Ciencia-Ficción",
        descripcion:"'Dune' es una novela de ciencia ficción escrita por Frank Herbert y publicada por primera vez en 1965. La historia se desarrolla en un futuro lejano en un universo intergaláctico donde diversas casas nobles compiten por el control del desierto planeta Arrakis.",
        autor:"Frank Herbert",
        año:1965
    },
    {
        id:2,
        titulo:"Cronicas Marcianas",
        precio:21000,
        img:"https://i.pinimg.com/236x/e6/ae/18/e6ae1851942fce532f3f44f65de86982.jpg",
        categoria:"Ciencia-Ficción", 
        descripcion:"'Crónicas marcianas' es una colección de relatos escrita por Ray Bradbury y publicada por primera vez en 1950. La obra es una serie de cuentos interconectados que exploran la colonización de Marte por parte de los seres humanos.",
        autor:"Ray Bradbury",
        año:1950, 
    },
    {  
        id:3,
        titulo:"Yo, Robot" , 
        precio:17000 , 
        img:"https://i.pinimg.com/236x/c2/d5/12/c2d5121783c9602afe12a0510e76f5fe.jpg" ,
        categoria:"Ciencia-Ficción" ,
        descripcion:"'Yo, Robot' es una colección de cuentos de ciencia ficción escrita por Isaac Asimov, publicada por primera vez en 1950. Los relatos están unidos por la presencia de robots y la exploración de las 'Leyes de la Robótica' establecidas por Asimov.", 
        autor:"Isaac Asimov",
        año:1950,
    },
    {
        id:1000,
        titulo:"Frankestein" ,
        precio:27000 ,
        img:"https://i.pinimg.com/236x/8f/c0/ea/8fc0eaf59c6b4481ba9305e98d36ca28.jpg" , 
        categoria:"Terror" , 
        descripcion:"'Frankestein' es una novela escrita por Mary Shelley, publicada por primera vez en 1818. La trama sigue a Victor Frankenstein, un estudiante de ciencias en Ginebra, Suiza, obsesionado con descubrir el secreto de la creación de la vida. Mediante la experimentación y la alquimia, Victor logra dar vida a una criatura, pero se horroriza por el aspecto físico grotesco de su creación y por las consecuencias morales y éticas de sus acciones.", 
        autor:"Mary Shelley", 
        año:1818,
    },
    {
        id:1001,
        titulo:"El Exorcista" , 
        precio:27000 ,
        img:"https://i.pinimg.com/236x/da/4e/a6/da4ea622954ba4a656b392f53a4bf760.jpg" , 
        categoria:"Terror" ,
        descripcion:"'El exorcista' es una novela de terror escrita por William Peter Blatty y publicada en 1971. La historia sigue a Chris MacNeil, una actriz y madre soltera que vive en Washington D.C. con su hija de doce años, Regan. La vida de la familia toma un giro aterrador cuando Regan comienza a experimentar cambios de comportamiento extremos y perturbadores.", 
        autor:"William Peter Blatty",
        año:1971,
    },
    {
        id:1002 ,
        titulo:"Dracula" ,
        precio:24000 ,
        img:"https://i.pinimg.com/236x/3e/13/93/3e139323383fdff5378887df696e033a.jpg" , 
        categoria:"Terror" ,
        descripcion:"'Dracula' es una novela de horror gótico escrita por el autor irlandés Bram Stoker y publicada por primera vez en 1897. La historia comienza con Jonathan Harker, un joven abogado inglés, que viaja a Transilvania para brindar servicios legales al conde Drácula. Pronto se da cuenta de que su anfitrión es un ser sobrenatural con poderes vampíricos.", 
        autor:"Bram Stoker", 
        año:1897
    },
    {
        id:2000,
        titulo:"Las Aventuras De Sherlock Holmes" ,
        precio:20000 ,
        img:"https://i.pinimg.com/236x/4c/aa/7c/4caa7ce3c7b41286dcca351650e967f9.jpg" , 
        categoria:"Thriller" , 
        descripcion:"'Las aventuras de Sherlock Holmes' es una colección de cuentos cortos escritos por Sir Arthur Conan Doyle, que fueron publicados por primera vez en 1892. La obra presenta al famoso detective consultor Sherlock Holmes y su fiel amigo, el Dr. John Watson, resolviendo diversos casos intrigantes en la Londres victoriana.",
        autor:"Arthur Conan Doyle",
        año:1892},
    {
        id:2001,
        titulo:"El Sueño Eterno" , 
        precio:26000 ,
        img:"https://i.pinimg.com/236x/6c/30/07/6c3007aa28eebbb257593dffe08ca92f.jpg" , 
        categoria:"Thriller" ,
        descripcion:"'El sueño eterno' es una novela negra escrita por Raymond Chandler y publicada por primera vez en 1939. La trama sigue al detective privado Philip Marlowe mientras investiga el caso de la desaparición del millonario Charles Sternwood. La historia se desarrolla en la decadente ciudad de Los Ángeles durante la década de 1930", 
        autor:"Raymond Chandler", 
        año:1939
    },
    {
        id:2002 ,
        titulo:"Huye Rapido, Vete Lejos" ,
        precio:29000 ,
        img:"https://i.pinimg.com/236x/32/91/5b/32915bfd6f52fcf22f926fd4ab6fdd9e.jpg" ,
        categoria:"Thriller" ,
        descripcion:"'Huye rapido, vete lejos' es una novela escrita por Fred Vargas, una reconocida autora francesa de novelas policíacas. Publicada en 2001, la historia sigue al comisario Jean-Baptiste Adamsberg mientras investiga una serie de misteriosos asesinatos que parecen estar conectados por un antiguo y oscuro ritual.",
        autor:"Fred Vargas",
        año:2001
    },
    {
        id:3000 ,
        titulo:"1984",
        precio:22000 ,
        img:"https://i.pinimg.com/236x/17/1e/0c/171e0c8b35f4e2bb6f36cd2bdb374423.jpg" ,
        categoria:"Novela Distópica" ,
        descricpion:"'1984 es una novela distópica escrita por George Orwell y publicada por primera vez en 1949. La historia se desarrolla en un futuro totalitario y opresivo bajo el control del Partido y su líder, el Gran Hermano.", 
        autor:"George Orwell", 
        año:1949
    },
    {
        id:3001,
        titulo:"Apocalipsis" , 
        precio:20000 , 
        img:"https://i.pinimg.com/236x/26/c6/97/26c6970c061a118f84d1b4e86f207708.jpg" ,
        categoria:"Novela Distópica" , 
        descricpion:"'Apocalipsis' de Stephen King, también conocido como 'The Stand' en inglés. Publicada en 1978, es una novela épica de terror postapocalíptico que sigue a un grupo de supervivientes después de la liberación accidental de un virus mortal. La historia explora la lucha entre el bien y el mal en un mundo desolado, con personajes que se ven envueltos en eventos sobrenaturales y enfrentamientos épicos.",
        autor:"Stephen King",
        año:1978
    },
    {
        id:3002,
        titulo:"La Corporacion" ,
        precio:20000 ,
        img:"https://i.pinimg.com/236x/71/fe/4f/71fe4fc2c6b5ba308af2cb3cc0b76d66.jpg" ,
        categoria:"Novela Distópica" ,
        descricpion:"El mundo ya no es lo que era. La violencia armada, el desempleo y el  cambio climático lo han convertido en un polvorín inhabitable. En medio  de todo ese caos, Cloud, una poderosa corporación tecnológica, se erige  como salvadora. No solo pretende vender a los ciudadanos cualquier cosa  que necesiten, sino convertirse en un hogar para ellos. A cambio,  tendrán que trabajar. El trato parece justo, pero las apariencias siempre engañan.",
        autor:"Rob Hart",
        año:2020
    },
    {
        id:4001,
        titulo:"Don Quijote De La Mancha",
        precio:20000,
        img:"https://i.pinimg.com/236x/62/4f/a5/624fa522ff5bcbb1b3cd2bfe2c6e3576.jpg",
        categoria:"fantasia-aventura",
        descricpion:"'Don quijote de la mancha' es una novela escrita por Miguel de Cervantes Saavedra y publicada en dos partes, la primera en 1605 y la segunda en 1615. Es considerada una de las obras más importantes y destacadas de la literatura mundial y es ampliamente reconocida como la primera novela moderna.",
        autor:"Miguel de Cervantes Saavedra",
        año:1605
    },
    {
        id:4002,
        titulo:"Moby Dick" ,
        precio:20000,
        img:"https://i.pinimg.com/236x/57/5d/76/575d761c2d1c7ef9da6bd6e686ec2d43.jpg",
        categoria:"fantasia-aventura",
        descricpion:"'Moby Dick' es una novela escrita por Herman Melville y publicada por primera vez en 1851. La historia está narrada por Ishmael, un marinero, y sigue la obsesiva persecución del capitán Ahab, al mando del ballenero Pequod, para vengarse de Moby Dick, un enorme cachalote blanco que le arrancó una pierna en un encuentro previo.",
        autor:"Herman Melville",
        año:1851
    },
    {
        id:4003,
        titulo:"Mary Poppins",
        precio:20000,
        img:"https://i.pinimg.com/236x/e9/d1/bc/e9d1bc78e45e4618dd26a838b8f87b75.jpg",
        categoria:"fantasia-aventura",
        descricpion:"'Mary Poppins' es una serie de libros escrita por la autora australiana P.L. Travers. El primer libro, titulado 'Mary Poppins', fue publicado en 1934. La serie sigue las mágicas y extraordinarias aventuras de la niñera Mary Poppins y los niños a los que cuida: Jane, Michael, los gemelos John y Bárbara, y otros niños que se unen a la familia a lo largo de la historia.",
        autor:"P.L. Travers",
        año:1934
    },

]

export const carrousel = [
    {id: "C1", img:"https://i.pinimg.com/564x/15/67/35/15673553e1b6cf9ab7da06ebd215b873.jpg"},
    {id: "C2", img:"https://i.pinimg.com/236x/b1/a8/8e/b1a88e6dad76d86cf4c2f6fbedd716a1.jpg"},
    {id: "C3", img:"https://i.pinimg.com/236x/3b/5a/96/3b5a96f97407cee5becc0806650f9de2.jpg"},
    {id: "C4", img:"https://i.pinimg.com/236x/fc/e0/f6/fce0f6027d2fcbbd232fddcd71873f03.jpg"},
]; 

export const cargarProductos = new Promise ((resolve) => {
    setTimeout (()=> {
        resolve (products);
    },);
});

export const cargarProducto = (id) => {
    return products.find ((prod) => prod.id == id);
};


