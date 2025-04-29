import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Botao from './componentes/Botao'
import Header from './componentes/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
        <Botao></Botao>
      </div>
      
    </>
  )
}

export default App
