
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import GenerationPage from './Pages/GenerationPage'


function App() {
  

  return <>
    <div id="body">
      
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/generations" element={<GenerationPage/>}/>
        
      </Routes>
      
      </BrowserRouter>
    </div>
    </>
    
}

export default App
