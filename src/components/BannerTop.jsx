import React from 'react';
import foto1 from '../assets/1.jpg'
import foto2 from '../assets/2.jpeg'
import foto3 from '../assets/3.jpeg'
import foto5 from '../assets/5.png'
import iturcemi from '../assets/R.png'




const ImageBanner = () => {
  return (
    <>
    {/* Logo del club */}
    <div className=' flex gap-10 justify-center place-items-center'>
    <img
    src={foto5} // Reemplaza con la ruta de tu segunda imagen
    alt="Imagen 2"
    
  />
  <img
    src={iturcemi} // Reemplaza con la ruta de tu segunda imagen
    alt="Imagen 2"
    
  />
  
  </div>
  <div className=' flex pt-8 justify-center place-items-center'>

  </div>
  {/* Imagenes para el banner */}
    <div className='w-1/6 h-1/3 p-8  flex flex-nowrap gap-3 items-center  '>
      <img
        src={foto2} // Reemplaza con la ruta de tu primera imagen
        alt="Imagen 1"
      />
       <img
        src={foto2} // Reemplaza con la ruta de tu primera imagen
        alt="Imagen 1"
      />
       <img
        src={foto2} // Reemplaza con la ruta de tu primera imagen
        alt="Imagen 1"
      />
       <img
        src={foto2} // Reemplaza con la ruta de tu primera imagen
        alt="Imagen 1"
      />
     
      <img
        src={foto2} // Reemplaza con la ruta de tu tercera imagen
        alt="Imagen 3"
      />
       <img
        src={foto2} // Reemplaza con la ruta de tu tercera imagen
        alt="Imagen 3"
      />
       <img
        src={foto2} // Reemplaza con la ruta de tu tercera imagen
        alt="Imagen 3"
      />
      
    </div>
</>
  );
};

// const styles = {
//   banner: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '300px', // Ajusta la altura según tus necesidades
//   },
//   image: {
//     maxWidth: '100%',
//     maxHeight: '100%',
//     borderRadius: '8px', // Opcional: Añade bordes redondeados a las imágenes
//     margin: '0 10px', // Espacio entre las imágenes
//   },
// };

export default ImageBanner;