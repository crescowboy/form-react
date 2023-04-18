import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Formzona from '../paginas/Formzona'
import Formpreguntas from '../paginas/Formpreguntas'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Formzona></Formzona>}></Route>
        <Route path='/preguntas' element={<Formpreguntas></Formpreguntas>}></Route>
        
      </Routes>
    </>
  )
}

export default Router
