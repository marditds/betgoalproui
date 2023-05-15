import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { leagues } from '../../data/leagues';
import { Back } from '../Back-Btn/Back';
import { ScoreboardLeague } from './ScoreboardLeague';
import { OtherLeaguesScoreboard } from './OtherLeaguesScoreboard';
import './Scoreboard.css';

export const Scoreboard = () => {

    let { leagueAlias } = useParams();

    const league = leagues.find((league) => league.alias === leagueAlias)

    return (
        <Container fluid>
            <Container>
                <Back />

                <Row>
                    <ScoreboardLeague league={league} />

                    <Col lg={5} className='mt-4 mt-lg-0'>
                        <OtherLeaguesScoreboard leagues={leagues} />

                        <Row>
                            <Col className='mt-3 mb-2'>
                                <Link
                                    to={`/leagues/${league.alias}/picks`}
                                    className='sb--btn'
                                >
                                    Make Your Picks
                                </Link>
                                {/* /leagues/Bundesliga/picks */}
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Container>
        </Container>
    )
}
