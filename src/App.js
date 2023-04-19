import React from 'react'
import Formzona from './paginas/Formzona'
import Formpreguntas from './paginas/Formpreguntas'


import Provider from './contexto/Provider'

import Router from './Router/Router'


const App = () => {

  return (

    <>
    <Provider>
    <Router/>
    </Provider>
      {/* <Formzona></Formzona> */}
      {/* <Formpreguntas></Formpreguntas> */}

      </>
  )
}

export default App
