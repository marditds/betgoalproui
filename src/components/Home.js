import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Leagues } from './Leagues'
// import { ResultsBoard } from './ResultsBoard'
import { CurrentMatches } from './CurrentMatches'
import "./Home.css"

export const Home = () => {
    return (
        <Container>
            {/* <Row className='d-flex flex-column'> */}
            {/* <Row > */}
            {/* <Col > */}
            <CurrentMatches />
            {/* </Col> */}

            {/* <Col> */}
            <Leagues />
            {/* </Col> */}


            {/* </Row> */}
        </Container>
    )
}
