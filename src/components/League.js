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


            </Container>
        </Container>
    )
}
