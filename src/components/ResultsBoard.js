import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const ResultsBoard = () => {
    return (
        <>
            <Row>
                <Col className='text-center'>
                    <h1>Results</h1>
                </Col>
            </Row>

            <Row>
                <Col className='text-center' xs={12}>
                    <h3>Premier League</h3>
                </Col>
                <Col>a</Col>
                <Col>c</Col>
            </Row>

            <Row>
                <Col className='text-center' xs={12}>
                    <h3>Budesliga</h3>
                </Col>
                <Col>a</Col>
                <Col>c</Col>
            </Row>

            <Row>
                <Col className='text-center' xs={12}>
                    <h3>LaLiga</h3>
                </Col>
                <Col>a</Col>
                <Col>c</Col>
            </Row>

            <Row>
                <Col className='text-center' xs={12}>
                    <h3>Serie A</h3>
                </Col>
                <Col>a</Col>
                <Col>c</Col>
            </Row>

            <Row>
                <Col className='text-center' xs={12}>
                    <h3>Ligue 1</h3>
                </Col>
                <Col>a</Col>
                <Col>c</Col>
            </Row>
        </>
    )
}
