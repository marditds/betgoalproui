import React from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
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
                    <Col lg={5} className='mt-4 mt-lg-0'>

                        <OtherLeaguesPicks leagues={leagues} />

                        <Row>
                            <Col className='mt-3 mb-2'>
                                <Link
                                    to={`/leagues/${league.alias}/scoreboard`}
                                    className='picks--btn'
                                >
                                    {league.name} Scoreboard
                                </Link>
                            </Col>
                        </Row>
                        {/* leagues/Bundesliga/scoreboard */}
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
