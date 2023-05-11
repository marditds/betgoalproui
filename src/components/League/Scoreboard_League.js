import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Back } from '../Back-Btn/Back'
import { leagues } from '../../data/leagues'

export const Scoreboard_League = () => {

    let { leagueAlias } = useParams();

    const league = leagues.find((league) => league.alias === leagueAlias);


    return (
        <Container fluid>
            <Container>
                <Back />
                <Row>
                    <Col>
                        <h2 style={{ color: "white" }}>
                            {league.name} Scoreboard
                        </h2>
                    </Col>
                    {/* <Col><Image src={leagueLogo} /></Col> */}
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
