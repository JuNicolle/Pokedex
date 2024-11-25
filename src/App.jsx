import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import GenerationPage from './Pages/GenerationPage'
import PokemonDetailPage from './Pages/PokemonDetailPage'
import Typepage from './Pages/TypePage'


function App() {
  

  return <>
    <div id="body">
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/pokemon" element={<HomePage/>}/>
        <Route path="/type/" element={<Typepage/>}/>
        <Route path="/generations" element={<GenerationPage/>}/>
        <Route path="/pokemon/:id" element={<PokemonDetailPage/>}/>
        <Route path="/type/:type" element={<Typepage/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
    </>
    
}

export default App
