import React, { useState } from 'react';
import BannerTop from './BannerTop.jsx'

const Pruebas = () => {
  const [pareja1, setPareja1] = useState('Pareja 1');
  const [pareja2, setPareja2] = useState('Pareja 2');
  const [puntos1, setPuntos1] = useState(0);
  const [puntos2, setPuntos2] = useState(0);
  const [sets1, setSets1] = useState(0);
  const [sets2, setSets2] = useState(0);
  const [juegos1, setJuegos1] = useState(0);
  const [juegos2, setJuegos2] = useState(0);
  const [tie1, setTie1] = useState(0);
  const [tie2, setTie2] = useState(0);

  const puntos = [0, 15, 30, 40];
  const sets = [0, 1, 2];
  const juegos = [0, 1, 2, 3, 4, 5, 6, 7];

  const sumarPuntos1 = () => {
    setPuntos1((puntos1 + 1) % puntos.length);
    if (puntos1 === puntos.length - 1) {
      setJuegos1((juegos1 + 1) % juegos.length);
      setPuntos2(0);
    }

    // Verificar el empate a 5 y llegar a 7 juegos
    if (juegos1 >= 5 && juegos2 >= 5) {
      if ((juegos1 === 7 || juegos2 === 7) && !(juegos1 === 6 && juegos2 === 6)) {
        setSets1((sets1 + 1) % sets.length);
        setJuegos1(0);
        setJuegos2(0);
      }
    } else if (juegos1 === 6) {
      if (juegos2 === 6) {
        // Ambos jugadores llegaron a 6, inicia el tie-break
        setTie1(0);
        setTie2(0);
      } else {
        setSets1((sets1 + 1) % sets.length);
        setJuegos1(0);
        setJuegos2(0);
      }
    }
  };

  const sumarPuntos2 = () => {
    setPuntos2((puntos2 + 1) % puntos.length);
    if (puntos2 === puntos.length - 1) {
      setJuegos2((juegos2 + 1) % juegos.length);
      setPuntos1(0);
    }

    // Verificar el empate a 5 y llegar a 7 juegos
    if (juegos1 >= 5 && juegos2 >= 5) {
      if ((juegos1 === 7 || juegos2 === 7) && !(juegos1 === 6 && juegos2 === 6)) {
        setSets2((sets2 + 1) % sets.length);
        setJuegos1(0);
        setJuegos2(0);
      }
    } else if (juegos2 === 6) {
      if (juegos1 === 6) {
        // Ambos jugadores llegaron a 6, inicia el tie-break
        setTie1(0);
        setTie2(0);
      } else {
        setSets2((sets2 + 1) % sets.length);
        setJuegos1(0);
        setJuegos2(0);
      }
    }
  };

  const sumarTieBreak1 = () => {
    setTie1(tie1 + 1);

    if (tie1 === 6 && tie2 <= 5) {
      // Ganó el tie-break
      setSets1((sets1 + 1) % sets.length);
      setJuegos1(0);
      setJuegos2(0);
      setTie1(0);
      setTie2(0);
    } else if ((tie1 >=6 && tie2 >= 6) && (tie1-tie2===2)) {
      // Se necesitan al menos 7 puntos y una ventaja de 2
      // pero puedes ajustar estas condiciones según las reglas específicas
      setSets1((sets1 + 1) % sets.length);
      setJuegos1(0);
      setJuegos2(0);
      setTie1(0);
      setTie2(0);
    }
  };

  const sumarTieBreak2 = () => {
    setTie2(tie2 + 1);

    if (tie2 === 6 && tie1 <= 5) {
      // Ganó el tie-break
      setSets2((sets2 + 1) % sets.length);
      setJuegos1(0);
      setJuegos2(0);
      setTie1(0);
      setTie2(0);
    } else if ((tie2 >=6 && tie1 >= 6) && (tie2-tie1===2)) {
      // Se necesitan al menos 7 puntos y una ventaja de 2
      // pero puedes ajustar estas condiciones según las reglas específicas
      setSets2((sets2 + 1) % sets.length);
      setJuegos1(0);
      setJuegos2(0);
      setTie1(0);
      setTie2(0);
    }
  };
  const restarPuntos1 = () => {
    if (puntos1 > 0) {
      setPuntos1(puntos1 - 1);
    }
  };
  
  const restarJuegos1 = () => {
    if (juegos1 > 0) {
      setJuegos1(juegos1 - 1);
    }
  };
  const restarJuegos2 = () => {
    if (juegos2 > 0) {
      setJuegos2(juegos2 - 1);
    }
  };
  const restarPuntos2 = () => {
    if (puntos2 > 0) {
      setPuntos2(puntos2 - 1);
    }
  };
  const restarSets1 = () => {
    if (sets1 > 0) {
      setSets1(sets1 - 1);
    }
  };
  const sumarJuegos1 = () => {
    setJuegos1((juegos1 + 1) % juegos.length);
  
    // Resto del código...
  };
  
  const sumarJuegos2 = () => {
    setJuegos2((juegos2 + 1) % juegos.length);
  
    // Resto del código...
  };
  const sumarSets1 = () => {
    setSets1((sets1 + 1) % sets.length);
    
  };
  
  const sumarSets2 = () => {
    setSets2((sets2 + 1) % sets.length);
    
  };
  const restarSets2 = () => {
    if (sets2 > 0) {
      setSets2(sets2 - 1);
    }
  };
  

  return (
    <>
    {/* <BannerTop/> */}
    <div className='grid  grid-cols-1 '>
      <div className='grid grid-cols-4  p-4 justify-evenly'>
        <div className='grid content-center'>
        <textarea
            type="text"
            value={pareja1}
            onChange={(e) => setPareja1(e.target.value)}
            className="bg-black text-white p-2 rounded-md w-auto resize-none truncate text text-5xl col-span-2"  
            spellCheck="false"
            />     
            </div>
      <div className='grid grid-cols-2'>

            <h1 className='text text-4xl p-2 col-span-2 grid content-center ml-8'>SETS</h1>
            <h2 className='text text-9xl p-2 col-span-1 grid content-center justify-center'>{sets[sets1]} </h2>
      
            <div className='  grid justify-items-start  '>
            <button className=' text text-9xl' onClick={sumarSets1}>🔼</button>  
      <button className='text text-9xl  ' onClick={restarSets1}>🔽</button>  
      </div>

      </div>  
      <div className='grid grid-cols-2'>
      <h1 className='text text-4xl p-2 col-span-2 grid content-center'>JUEGOS </h1>
      <h2 className='text text-9xl p-2 col-span-1 grid content-center justify-center'> {juegos[juegos1]} </h2>
    <div>
      <button className='text text-9xl grid content-start' onClick={sumarJuegos1}>🔼</button>
      <button className='text text-9xl grid content-start' onClick={restarJuegos1}>🔽</button>
</div>
</div>

      <div className='grid grid-cols-2'>
      <h1 className='text text-4xl p-2 col-span-2 grid content-center'>PUNTOS </h1>
      <h2 className='text text-9xl col-span-1 grid content-center justify-center'> {puntos[puntos1]}</h2>
      <div>
      <button className='text text-9xl grid content-start' onClick={sumarPuntos1}>🔼</button>
      <button className='text text-9xl grid content-start' onClick={restarPuntos1}>🔽</button>
      </div>
     
      
      </div>
      
    </div>
    <div className='grid grid-cols-4 border-t-2  justify-evenly'>
        <div className='grid content-center'>
          <textarea
            type="text"
            value={pareja2}
            onChange={(e) => setPareja2(e.target.value)}
            className="bg-black text-white p-2 rounded-md w-auto resize-none truncate text text-5xl col-span-2"  
            spellCheck="false"
          />
 
        
        
        
      </div>
      <div className='grid grid-cols-2'>

<h1 className='text text-4xl p-2 col-span-2 grid content-center'> </h1>
<h2 className='text text-9xl p-2 col-span-1 grid content-center justify-center'>{sets[sets2]} </h2>

<div className=' '>
<button className=' text text-9xl grid content-start' onClick={sumarSets2}>🔼</button>  
<button className='text text-9xl  ' onClick={restarSets2}>🔽</button>  
</div>

</div>  
<div className='grid grid-cols-2'>
<h1 className='text text-4xl p-2 col-span-2 grid content-center'>  </h1>
<h2 className='text text-9xl p-2 col-span-1 grid content-center justify-center'> {juegos[juegos2]} </h2>
<div>
<button className='text text-9xl grid content-start' onClick={sumarJuegos2}>🔼</button>
<button className='text text-9xl grid content-start' onClick={restarJuegos2}>🔽</button>
</div>
</div>

<div className='grid grid-cols-2'>
<h1 className='text text-4xl p-2 col-span-2 grid content-center'>  </h1>
<h2 className='text text-9xl col-span-1 grid content-center justify-center'> {puntos[puntos2]}</h2>
<div>
<button className='text text-9xl grid content-start' onClick={sumarPuntos2}>🔼</button>
<button className='text text-9xl grid content-start' onClick={restarPuntos2}>🔽</button>
</div>


</div>
      </div>
        {juegos1 === 6 && juegos2 === 6 && (
          <div>
            <div className='grid grid-cols-3'> 
            <div className='grid grid-cols-1 col-span-2 '>
            <h2 className='text text-6xl text-center truncate p-4'>{pareja1}</h2>
            <p className='text text-6xl text-center  '>Puntos:</p> <p className='text text-6xl truncate text-center'>{tie1}</p>
          </div>
          <button className=' text text-6xl text-center border-2 mt-2' onClick={sumarTieBreak1}>+</button>
          </div>
          <div className='grid grid-cols-3 '> 
          <div className='grid grid-cols-1 col-span-2 '>
          <h2 className='text text-6xl text-center truncate p-4'>{pareja2}</h2>
            <p className='text text-6xl text-center truncate '>Puntos:</p><p className='text text-6xl truncate text-center'>{tie2}</p>
            </div>
            
            <button className='text text-6xl text-center border-2 mt-2' onClick={sumarTieBreak2}>+</button>
            

            </div>
          </div>
        )}
      
    </div>
    </>
  );
};

export default Pruebas;
