import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import PokemonDetailPage from './Pages/PokemonDetailPage'
import Typepage from './Pages/TypePage'
import GenerationPage from './Pages/GenerationPage'
import GameVersionPage from './Pages/GameVersionPage'


function App() {
  

  return <>
    <div id="body">
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/pokemon" element={<HomePage/>}/>
        <Route path="/type/" element={<Typepage/>}/>
        <Route path="/generation/:gen" element={<GenerationPage/>}/>
        <Route path="/pokemon/:id" element={<PokemonDetailPage/>}/>
        <Route path="/type/:type" element={<Typepage/>}/>
        <Route path="/generation/:gameversion" element={<GameVersionPage/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
    </>
    
}

export default App
