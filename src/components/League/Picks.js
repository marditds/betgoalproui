import React from 'react';
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { leagues } from '../../data/leagues';
import { Back } from '../Back-Btn/Back';
import { Predict_Entry } from './Predict_Entry';
import { Other_Leagues } from './Other_Leagues';
import './Picks.css';


export const Picks = () => {

    let { leagueAlias } = useParams();

    const league = leagues.find((league) => league.alias === leagueAlias)

    return (
        <Container fluid>
            <Container>
                <Back />


                <Row>

                    <Predict_Entry league={league} />

                    <Other_Leagues leagues={leagues} />

                </Row>
            </Container>
        </Container>
    )
}
