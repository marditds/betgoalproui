import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { leagues } from '../../data/leagues'
import { Link } from 'react-router-dom'

export const CurrentMatches = () => {
    return (
        <Container>
            <h1 className='mb-0'>Current Matches</h1>
            <Row>
                <Col className='current--match--parent--col'>
                    <Link to={'leagues/Premier_League/picks'}>
                        <Col className='d-flex justify-content-center current--match--child--col'
                            style={{ background: `url(${leagues[2].logo})` }}
                        >

                            <h5>Brentford</h5>
                            <h2>VS</h2>
                            <h5>Crystal Palace</h5>

                        </Col>
                    </Link>
                </Col>
                <Col className='current--match--parent--col'>
                    <Link to={'leagues/Bundesliga/picks'}>
                        <Col className='d-flex justify-content-center current--match--child--col'
                            style={{ background: `url(${leagues[1].logo})` }}
                        >
                            <h5>FC Köln</h5>
                            <h2>VS</h2>
                            <h5>FC Augsburg</h5>
                        </Col>
                    </Link>
                </Col>

            </Row>

            <Row>
                <Col className='current--match--parent--col'>
                    <Link to={'leagues/LaLiga/picks'}>
                        <Col className='d-flex justify-content-center current--match--child--col'
                            style={{ background: `url(${leagues[3].logo})` }}
                        >
                            <h5>Barcelona</h5>
                            <h2>VS</h2>
                            <h5>Celta Vigo</h5>
                        </Col>
                    </Link>
                </Col>
                <Col className='current--match--parent--col'>
                    <Link to={'leagues/Premier_League/picks'}>
                        <Col className='d-flex justify-content-center current--match--child--col'
                            style={{ background: `url(${leagues[2].logo})` }}
                        >
                            <h5>Chelsea</h5>
                            <h2>VS</h2>
                            <h5>B&H</h5>
                        </Col>
                    </Link>
                </Col>
            </Row>
            {/* <Row className='justify-content-center current--match--row' >

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
            </Row> */}

            {/* <Row className='justify-content-center current--match--row' >
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
            </Row> */}
        </Container>

    )
}
