import { useState } from 'react'
import {BrowserRouter, createBrowserRouter,createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './App.css'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Home/>}>
//       <Route path='about' element={<About/>}/>
//     </Route>
//   )
// )

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    </>
  )
}

export default App
