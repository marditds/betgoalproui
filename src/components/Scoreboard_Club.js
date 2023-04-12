import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const Scoreboard_Club = ({ leagueName }) => {

    return (
        <>
            <Row>
                <Col>
                    <h1 style={{ color: "white" }}>
                        {leagueName} Results
                    </h1>
                </Col>
            </Row>

            <Row>
                <Col>a</Col>
                <Col>c</Col>
            </Row>

            <Row>
                <Col>a</Col>
                <Col>c</Col>
            </Row>

            <Row>
                <Col>a</Col>
                <Col>c</Col>
            </Row>

            <Row>
                <Col>a</Col>
                <Col>c</Col>
            </Row>

            <Row>
                <Col>a</Col>
                <Col>c</Col>
            </Row>
        </>
    )
}
