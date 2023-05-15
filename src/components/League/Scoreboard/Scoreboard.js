import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { leagues } from '../../../data/leagues';
import { Back } from '../../Back-Btn/Back';
import { ScoreboardChart } from './ScoreboardChart';
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

                    <ScoreboardChart league={league} />

                    <Col lg={5} className='mt-4 mt-lg-0 d-flex flex-column-reverse flex-lg-column'>
                        <OtherLeaguesScoreboard leagues={leagues} />

                        <Row>
                            <Col className='mt-0 mt-lg-3 mb-3'>
                                <Link
                                    to={`/leagues/${league.alias}/picks`}
                                    className='sb--btn'
                                >
                                    Make Your Picks for {league.name}
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
