import { useContext } from 'react'
import CategoriasContext from "../context/CategoriasProvider"

import React from 'react';

const useCategorias = () => {
    return useContext(CategoriasContext)
}

export default useCategorias