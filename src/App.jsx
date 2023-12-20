import './App.css'
import Inicio from './components/Inicio.jsx'
import {Route, Routes } from 'react-router-dom';
import Sets3 from './components/Sets3.jsx'
import Pruebas from './components/Pruebas.jsx'
function App() {

  return (
    <>
<Routes>
<Route path="/" element={<Inicio />} />    
<Route path="/marcador" element={<Sets3 />} />
<Route path="/pruebas" element={<Pruebas />} />
</Routes>
    
    </>
  )
}

export default App
