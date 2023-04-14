import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

export const Scoreboard_Club = ({ leagueName, leagueLogo }) => {

    return (
        <>
            <Row>
                <Col>
                    <h1 style={{ color: "white" }}>
                        {leagueName} Results
                    </h1>
                </Col>
                {/* <Col><Image src={leagueLogo} /></Col> */}
                <Col></Col>
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
