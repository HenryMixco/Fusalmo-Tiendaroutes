import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Header, CenterInfo } from './estilos-componentes/styles-comp'
import Home from './components/Home'
import SearchPage from './components/SearchPage'
import Celulares from './components/Celulares'
import CelularDetails from './components/CelularDetails'
import NavLink from './components/NavLink'

function App() {

  return (

    <div>
      <Header>
        <img src='/public/HDMI.png'></img>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/search-page">Pagina de busqueda</NavLink></li>
          </ul>
        </nav>
      </Header>

      <CenterInfo>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/search-page' element={<SearchPage />} />
          <Route path='/celulares/:nameCelular' element={<Celulares /> }>
            <Route path='details' element={<CelularDetails />}/>
          </Route>
          <Route path='*' element={ <h1>Page Not Found</h1> }/>
        </Routes>
      </CenterInfo>
    </div>
  )
}

export default App
