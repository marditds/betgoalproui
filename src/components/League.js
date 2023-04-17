import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Scoreboard_League } from './Scoreboard_League'
import { Predict_Entry } from './Predict_Entry'
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

                <Link to={`./picks`}>
                    <p>GO TO PICKS for {league.alias}</p>
                </Link>
                {/* to='/scoreboard' */}
                // <Scoreboard_League leagueName={league.name} leagueLogo={league.logo} />



            </Container>
        </Container>
    )
}
