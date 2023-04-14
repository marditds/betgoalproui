import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Leagues } from './Leagues'
import { ResultsBoard } from './ResultsBoard'

export const Home = () => {
    return (
        <Container>
            <Row className='d-flex flex-column'>
                <Col >
                    <ResultsBoard />
                </Col>

                <Col>
                    <Leagues />
                </Col>


            </Row>
        </Container>
    )
}
