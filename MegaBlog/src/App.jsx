import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log((import.meta.env.VITE_APPWRITE_URL = "TEST"));
  return (
    <>
      <div>
        <p>This is a paragraph</p>
      </div>
    </>
  )
}

export default App
