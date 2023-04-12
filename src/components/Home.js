import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Leagues } from './Leagues'
import { ResultsBoard } from './ResultsBoard'

export const Home = () => {
    return (
        <Container>
            <Row>
                <Col lg={3} md={4} className='d-md-block d-none'>
                    <Leagues />
                </Col>

                <Col>
                    <ResultsBoard />
                </Col>
            </Row>
        </Container>
    )
}
