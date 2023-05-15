import React from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { leagues } from '../../../data/leagues';
import { Back } from '../../Back-Btn/Back';
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

                    <Col lg={5} className='mt-4 mt-lg-0 d-flex flex-column-reverse flex-lg-column'>

                        <OtherLeaguesPicks leagues={leagues} />

                        <Row>
                            <Col className='mt-0 mt-lg-3 mb-3'>
                                <Link
                                    to={`/leagues/${league.alias}/scoreboard`}
                                    className='picks--btn'
                                >
                                    View {league.name}'s Scoreboard
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
