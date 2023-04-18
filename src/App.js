import React from 'react'
import Formzona from './paginas/Formzona'
import Formpreguntas from './paginas/Formpreguntas'
import { BrowserRouter, Router } from 'react-router-dom'
import Provider from './contexto/Provider'


const App = () => {

  return (

    <>
    <Provider>
    <Router></Router>
    </Provider>
      {/* <Formzona></Formzona> */}
      {/* <Formpreguntas></Formpreguntas> */}

      </>
  )
}

export default App
