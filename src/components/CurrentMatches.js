import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { leagues } from '../data/leagues'

export const CurrentMatches = () => {
    return (
        <div>
            <h1>Current Matches</h1>
            <Row className='justify-content-center current--match--row' >

                <Col className='d-flex justify-content-center  current--match--col' sm={5}
                    style={{ background: `url(${leagues[2].logo})` }}
                >
                    <h5>Team 1</h5>
                    <h5>Team 2</h5>
                </Col>
                <Col className='d-flex justify-content-center  current--match--col' sm={5}
                    style={{ background: `url(${leagues[2].logo})` }}
                >
                    <h5>Team 1</h5>
                    <h5>Team 2</h5>
                </Col>
            </Row>
            {/* </div> */}
            {/* // <div className='d-flex justify-content-evenly'> */}
            <Row className='justify-content-center current--match--row' >
                <Col className='d-flex justify-content-center  current--match--col' sm={5}
                    style={{ background: `url(${leagues[3].logo})` }}
                >
                    <h5>Team 1</h5>
                    <h5>Team 2</h5>
                </Col>
                <Col className='d-flex justify-content-center  current--match--col' sm={5}
                    style={{ background: `url(${leagues[2].logo})` }}
                >
                    <h5>Team 1</h5>
                    <h5>Team 2</h5>
                </Col>
            </Row>
        </div>

    )
}
