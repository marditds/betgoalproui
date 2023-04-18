import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { leagues } from '../../data/leagues'

export const CurrentMatches = () => {
    return (
        <Container>
            <h1 className='mb-0'>Current Matches</h1>
            <Row className='justify-content-center current--match--row' >

                <Col className='d-flex justify-content-center  current--match--col' sm={5}
                    style={{ background: `url(${leagues[2].logo})` }}
                >
                    <h5>Arsenal</h5>
                    <h2>VS</h2>
                    <h5>Man. Utd.</h5>
                </Col>
                <Col className='d-flex justify-content-center  current--match--col' sm={5}
                    style={{ background: `url(${leagues[1].logo})` }}
                >
                    <h5>Hoffenheim</h5>
                    <h2>VS</h2>
                    <h5>FC Köln</h5>
                </Col>
            </Row>
            {/* </div> */}
            {/* // <div className='d-flex justify-content-evenly'> */}
            <Row className='justify-content-center current--match--row' >
                <Col className='d-flex justify-content-center  current--match--col' sm={5}
                    style={{ background: `url(${leagues[3].logo})` }}
                >
                    <h5>Osasuna</h5>
                    <h2>VS</h2>
                    <h5>Valencia</h5>
                </Col>
                <Col className='d-flex justify-content-center  current--match--col' sm={5}
                    style={{ background: `url(${leagues[2].logo})` }}
                >
                    <h5>Everton FC</h5>
                    <h2>VS</h2>
                    <h5>Fulham</h5>
                </Col>
            </Row>
        </Container>

    )
}
