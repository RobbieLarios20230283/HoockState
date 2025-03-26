import { useState } from 'react'
import './App.css'
import Calculadora from './components/Calculadora/Calculadora'
import Todo from './components/Todo/Todo'
import Estudiantes from './components/Estudiante/Estudiante'

function App() {

  return (
    <>
     <h1>Hook UseState</h1>

     <Calculadora/>
     <Estudiantes/>
     <Todo/>

    </>
  )
}

export default App

