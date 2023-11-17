<<<<<<< HEAD
import React from 'react';
import Card from './components/card';  // Ajusta el nombre del componente Card según tu estructura de archivos
import Menu from './components/menu';  // Ajusta el nombre del componente
import Cars from './components/cars';  // Ajusta el nombre del componente Cars según tu estructura de archivos
import Button from './components/button';  // Ajusta el nombre del componente Button según tu estructura de archivos
import './App.css';

function App() {
  return (
    <div className='App-container'>
      {tienda.map((car, index) => (
        <Card key={index} cars={car}>
          <Menu menu />
          <Cars cars={car} />
          <Button button />
        </Card>
      ))}
    </div>
  );
=======
import { useState } from 'react';
import Home from './components/home';
import Barra from './components/barra';
import SelectPP from './components/selectPP';
import './App.css'

function App() {


  return (
    <>
      <Home/>
      <Barra />
      <SelectPP />
    </>
  )
>>>>>>> f9506f904b9c80559955b31ab3ed005d5983f2e1
}

export default App;

export const tienda = [
  {
    title: "Sedans",
    description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    imgUrl: "/queque.png",
    theme: "orange",
  },
];
