import React, { useState } from 'react';

const Sets3 = () => {
  const [pareja1, setPareja1] = useState('Pareja 1');
  const [pareja2, setPareja2] = useState('Pareja 2');
  const [sets, setSets] = useState([{ pareja1: 0, pareja2: 0 }]);
  const [juegosPareja1, setJuegosPareja1] = useState(0);
  const [juegosPareja2, setJuegosPareja2] = useState(0);
  const [puntosPareja1, setPuntosPareja1] = useState(0);
  const [puntosPareja2, setPuntosPareja2] = useState(0);
  const [puntosTieBreakPareja1, setPuntosTieBreakPareja1] = useState(0);
  const [puntosTieBreakPareja2, setPuntosTieBreakPareja2] = useState(0);

  const sumarPunto = (pareja) => {
    if (juegosPareja1 >= 6 && juegosPareja2 >= 6) {
      // Juego en empate a 6, manejar tie-break
      if (
        (puntosTieBreakPareja1 >= 7 && puntosTieBreakPareja1 - puntosTieBreakPareja2 >= 2) ||
        (puntosTieBreakPareja2 >= 7 && puntosTieBreakPareja2 - puntosTieBreakPareja1 >= 2)
      ) {
        // Fin del tie-break, actualizar sets y reiniciar juegos y tie-break
        setSets((prevSets) => [...prevSets, { pareja1: 0, pareja2: 0 }]);
        setJuegosPareja1(0);
        setJuegosPareja2(0);
        setPuntosPareja1(0);
        setPuntosPareja2(0);
        setPuntosTieBreakPareja1(0);
        setPuntosTieBreakPareja2(0);
      } else {
        if (pareja === 1) {
          setPuntosTieBreakPareja1((prev) => prev + 1);
        } else {
          setPuntosTieBreakPareja2((prev) => prev + 1);
        }
      }
    } else {
      // Juego normal
      if (puntosPareja1 === 40 && puntosPareja2 === 40) {
        // Empate a 40, manejar ventaja
        if (puntosPareja1 === 'Adv' && puntosPareja2 === 'Adv') {
          // Empate a Adv, volver a 40
          setPuntosPareja1(40);
          setPuntosPareja2(40);
        } else {
          // Uno de ellos tiene ventaja, fin del juego
          if (pareja === 1) {
            setJuegosPareja1((prev) => prev + 1);
          } else {
            setJuegosPareja2((prev) => prev + 1);
          }

          setPuntosPareja1(0);
          setPuntosPareja2(0);

          if (
            (juegosPareja1 >= 6 && juegosPareja1 - juegosPareja2 >= 2) ||
            (juegosPareja2 >= 6 && juegosPareja2 - juegosPareja1 >= 2)
          ) {
            // Fin del set, actualizar sets y reiniciar juegos
            setSets((prevSets) => [...prevSets, { pareja1: 0, pareja2: 0 }]);
            setJuegosPareja1(0);
            setJuegosPareja2(0);
          }
        }
      } else {
        // Otros casos
        if (pareja === 1) {
          setPuntosPareja1((prev) => avanzarPuntos(prev));
        } else {
          setPuntosPareja2((prev) => avanzarPuntos(prev));
        }
      }
    }
  };

  const avanzarPuntos = (puntos) => {
    switch (puntos) {
      case 0:
        return 15;
      case 15:
        return 30;
      case 30:
        return 40;
      default:
        return 'Adv';
    }
  };

  return (
    <div>
      <h2>Marcador de Pádel</h2>
      <div>
        <label>
          Pareja 1:
          <input
            type="text"
            value={pareja1}
            onChange={(e) => setPareja1(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Pareja 2:
          <input
            type="text"
            value={pareja2}
            onChange={(e) => setPareja2(e.target.value)}
          />
        </label>
      </div>
      <div>
        <h3>Sets</h3>
        <ul>
          {sets.map((set, index) => (
            <li key={index}>
              Set {index + 1}: {set.pareja1} - {set.pareja2}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Juegos</h3>
        <p>
          {pareja1}: {juegosPareja1} - {pareja2}: {juegosPareja2}
        </p>
      </div>
      <div>
        <h3>Puntos</h3>
        <p>
          {pareja1}: {puntosPareja1} - {pareja2}: {puntosPareja2}
        </p>
      </div>
      <div>
        <h3>Tie-Break</h3>
        <p>
          {pareja1}: {puntosTieBreakPareja1} - {pareja2}: {puntosTieBreakPareja2}
        </p>
      </div>
      <div>
        <button onClick={() => sumarPunto(1)}>Sumar Punto {pareja1}</button>
        <button onClick={() => sumarPunto(2)}>Sumar Punto {pareja2}</button>
      </div>
    </div>
  );
};

export default Sets3;
