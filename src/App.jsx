import './App.css'
import Inicio from './components/Inicio.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sets3 from './components/Sets3.jsx'
import Pruebas from './components/Pruebas.jsx'
function App() {

  return (
    <>
<Router>
<Routes>
<Route path="/" element={<Inicio />} />    
<Route path="/marcador" element={<Sets3 />} />
<Route path="/3setsoro" element={<Pruebas />} />
       
    </Routes>
    </Router>
    </>
  )
}

export default App
