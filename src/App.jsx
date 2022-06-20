import { Container } from "react-bootstrap";
import { useState } from 'react'
import Formulario from "./components/Formulario";
import ListadoBebidas from "./components/ListadoBebidas";
import ModalTrago from "./components/ModalTrago";
import { CategoriasProvider } from "./context/CategoriasProvider";
import { BebidasProvider } from "./context/BebidasProvider";


function App() {

  return (
      <CategoriasProvider>
          <BebidasProvider>
              <header className="py-4">
                  <h1>Buscador de Tragos</h1>
              </header>
              <Container className={"mt-5"}>
                  <Formulario />
                  <ListadoBebidas />
                  <ModalTrago />
              </Container>
          </BebidasProvider>
      </CategoriasProvider>
  )
}

export default App
