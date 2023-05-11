import React from 'react';
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import { leagues } from '../../data/leagues';
import { Back } from '../Back-Btn/Back';
import { Predict_Entry } from './Predict_Entry';


export const Picks = () => {

    let { leagueAlias } = useParams();

    const league = leagues.find((league) => league.alias === leagueAlias)

    return (
        <Container fluid>
            <Container>
                <Back />

                <h2>Make Your Picks for {league.name}</h2>
                <Row>
                    <Predict_Entry league={league} />

                    <Col lg={5}>BBBBBBBBB</Col>

                </Row>
            </Container>
        </Container>
    )
}
