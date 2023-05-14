import React from 'react';
import { useParams } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap';
import { leagues } from '../../data/leagues';
import { Back } from '../Back-Btn/Back';
import { PredictEntry } from './PredictEntry';
import { OtherLeaguesPicks } from './OtherLeaguesPicks';
import './Picks.css';


export const Picks = () => {

    let { leagueAlias } = useParams();

    const league = leagues.find((league) => league.alias === leagueAlias)

    return (
        <Container fluid>
            <Container className='stuff'>
                <Back />

                <Row>

                    <PredictEntry league={league} />

                    <OtherLeaguesPicks leagues={leagues} />

                </Row>
            </Container>
        </Container>
    )
}
