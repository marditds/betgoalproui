import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap';
import { leagues } from '../../data/leagues';
import { Back } from '../Back-Btn/Back';
import { ScoreboardLeague } from './ScoreboardLeague';
import { OtherLeaguesScoreboard } from './OtherLeaguesScoreboard';

export const Scoreboard = () => {

    let { leagueAlias } = useParams();

    const league = leagues.find((league) => league.alias === leagueAlias)

    return (
        <Container fluid>
            <Container>
                <Back />

                <Row>
                    <ScoreboardLeague league={league} />
                    {/* <ScoreboardLeague /> */}

                    <OtherLeaguesScoreboard leagues={leagues} />
                </Row>
            </Container>
        </Container>
    )
}
