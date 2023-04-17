import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import { leagues } from '../data/leagues'
import './League.css'

export const League = () => {

    let { leagueAlias } = useParams();

    const league = leagues.find((league) => league.alias === leagueAlias)

    console.log(league.name);

    console.log(league.clubs);

    return (
        <Container fluid className='club--body'>
            <Container>

                <Link to={`./picks`}>
                    <Row>
                        <Col className='league--col'>
                            YOUR PICKS for {league.alias}
                        </Col>
                    </Row>
                </Link>


                <Link to={`./scoreboard`}>
                    <Row>
                        <Col className='league--col'>
                            SCOREBOARD for {league.alias}
                        </Col>
                    </Row>
                </Link>



            </Container>
        </Container>
    )
}
