import {useState, useEffect, useContext, createContext} from "react";
import axios from "axios";
import React from 'react';

const BebidasContext = createContext()

const BebidasProvider = ({children}) => {
    const [bebidas, setBebidas] = useState([])
    const [modal, setModal] = useState(false)
    const [tragoId, setTragoId] = useState(null)
    const [receta, setReceta] = useState({})

    useEffect(() => {
        const obtenerReceta = async () => {
            if(!tragoId) return
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${tragoId}`
                const { data } = await axios(url)
                setReceta(data.drinks[0])
            } catch(error) {
                console.log(error)
            }
        }
        obtenerReceta()
    }, [tragoId])

    const consultarBebidas = async datos => {
        try{
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}` //Se utiliza ``
            const { data } = await axios(url)
            setBebidas(data.drinks)
        } catch (error){
            console.log(error)
        }
    }
    const handleModalClick = () => {
        setModal(!modal)
    }

    const handleTragoIdClick = id => {
        setTragoId(id)
    }

    return(
        <BebidasContext.Provider
            value={{ consultarBebidas, bebidas, handleModalClick, modal, handleTragoIdClick, receta, setReceta }}
        >
            {children}
        </BebidasContext.Provider>
    );
};

export {BebidasProvider};

export default BebidasContext