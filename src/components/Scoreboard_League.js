import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Back } from './Back'

export const Scoreboard_League = ({ leagueName, leagueLogo }) => {

    return (
        <Container fluid>
            <Container>
                <Back />
                <Row>
                    <Col>
                        <h2 style={{ color: "white" }}>
                            {leagueName} Results
                        </h2>
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
            </Container>
        </Container>
    )
}
