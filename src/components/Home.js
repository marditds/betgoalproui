import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Leagues } from './Leagues'
import { ResultsBoard } from './ResultsBoard'

export const Home = () => {
    return (
        <Container>
            <Row className='d-flex flex-column'>
                <Col>
                    <Leagues />
                </Col>

                <Col>
                    <ResultsBoard />
                </Col>
            </Row>
        </Container>
    )
}
