import { Col, Card, Button } from 'react-bootstrap'
import UseBebidas from "../hooks/useBebidas";
import React from 'react';
import useBebidas from "../hooks/useBebidas";

const Bebida = ({bebida}) => {

    const { handleModalClick, handleTragoIdClick } = useBebidas()

    return (
        <Col md={6} lg={3}>
            <Card >
                <Card.Img
                    variant={'top'}
                    src={bebida.strDrinkThumb}
                    alt={`Imagen de ${bebida.strDrink}`}
                    onClick={ () => {
                        handleModalClick()
                        handleTragoIdClick(bebida.idDrink)
                    }}
                />
            </Card>
            <Card.Body>

                <Card.Title>{bebida.strDrink}</Card.Title>
                <Button
                    variant={'warning'}
                    className={'w-100 text-uppercase mt-1 mb-3'}
                    onClick={ () => {
                        handleModalClick()
                        handleTragoIdClick(bebida.idDrink)
                    }}
                >
                    Ver Receta
                </Button>
            </Card.Body>
        </Col>
        );
};
export default Bebida;