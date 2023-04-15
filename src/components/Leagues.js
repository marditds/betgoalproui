import React from 'react'
import { Row, Col, Image, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { leagues } from '../data/leagues'

export const Leagues = () => {
    return (
        <>
            <h3 className='d-none d-md-flex'>Leagues</h3>
            <Row className='d-none d-md-flex justify-content-lg-evenly justify-content-md-start'>
                {leagues.map((league) => {
                    return (
                        <Col key={league.id} md={4} lg={2} className=' my-3'>
                            <Link to={`/leagues/${league.alias}`}>
                                <Image src={league.logo} fluid className='club--logo' />
                            </Link>
                        </Col>
                    )
                })}
            </Row>

            <Accordion className='d-block d-md-none'>
                <Accordion.Item>
                    <Accordion.Header>Leagues</Accordion.Header>
                    <Accordion.Body>
                        <Row className='d-flex' >
                            {leagues.map((league) => {
                                return (
                                    <Col key={league.id} sm={4}
                                        className='col-4 my-3'
                                    >
                                        <Link to={`/leagues/${league.alias}`}  >
                                            <Image src={league.logo} fluid className='club--logo--accordion' />
                                        </Link>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </>

    )
}
