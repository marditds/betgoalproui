import React from 'react'
import { Container } from 'react-bootstrap'
import { Scoreboard_Club } from './Scoreboard_Club'
import { useParams } from 'react-router-dom'
import { leagues } from '../data/leagues'

export const League = () => {

    let { leagueAlias } = useParams();

    const league = leagues.find((league) => league.alias === leagueAlias)

    console.log(league.name);

    return (
        <Container>
            <Scoreboard_Club leagueName={league.name} />
        </Container>
    )
}
