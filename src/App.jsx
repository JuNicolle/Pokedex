import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import GenerationPage from './Pages/GenerationPage'
import PokemonDetailPage from './Pages/PokemonDetailPage'


function App() {
  

  return <>
    <div id="body">
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/pokemon" element={<HomePage/>}/>
        <Route path="/generations" element={<GenerationPage/>}/>
        <Route path="/pokemon/:id" element={<PokemonDetailPage/>}/>
        
      </Routes>
      
      </BrowserRouter>
    </div>
    </>
    
}

export default App
