import React from 'react'
import { Container, Accordion } from 'react-bootstrap'
import { Scoreboard_Club } from './Scoreboard_Club'
// import { Club } from './Club'
import { useParams, Link } from 'react-router-dom'
import { leagues } from '../data/leagues'

export const League = () => {

    let { leagueAlias } = useParams();

    const league = leagues.find((league) => league.alias === leagueAlias)

    console.log(league.name);

    console.log(league.clubs);

    return (
        <Container fluid className='club--body'>
            <Container>
                <Scoreboard_Club leagueName={league.name} leagueLogo={league.logo} />

                {/* TEAM'S LIST HERE */}
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{league.name} Clubs</Accordion.Header>
                        <Accordion.Body>
                            {league.clubs.map((club) => {
                                return (
                                    <div key={club.id}>
                                        {/* <Link to={club.alias} > */}
                                        {club.name}
                                        {/* </Link> */}
                                    </div>
                                )
                            })}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


            </Container>
        </Container>
    )
}
