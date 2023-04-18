import React from 'react'
import { useParams, Link, Outlet } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { leagues } from '../../data/leagues'
import { Back } from '../Back-Btn/Back'



export const Predict_Entry = ({ leagueName, clubName }) => {

    let { leagueAlias } = useParams();

    const league = leagues.find((league) => league.alias === leagueAlias)


    console.log('PREDITCT');
    return (
        <Container fluid>
            <Container>
                <Back />
                <h2>Make Your Picks for {league.name}</h2>
                <Row>
                    <Col>{clubName}Team A</Col>
                    <Col>{clubName}Team B</Col>
                </Row>
                <Row>
                    <Col>{clubName}Team A</Col>
                    <Col>{clubName}Team B</Col>
                </Row>
                <Row>
                    <Col>{clubName}Team A</Col>
                    <Col>{clubName}Team B</Col>
                </Row>
                <Row>
                    <Col>{clubName}Team A</Col>
                    <Col>{clubName}Team B</Col>
                </Row>
            </Container>
        </Container>
    )
}
