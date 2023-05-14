import React from 'react';
import { Stack, Col } from 'react-bootstrap';
import { ScoreeboardLeague } from './ScoreboardLeague.css';

export const ScoreboardLeague = ({ league }) => {

    return (
        <Col>
            <h2 style={{ color: "white" }}>
                {league.name} Scoreboard
            </h2>

            <Stack>
                {
                    league.clubs.map((club) => {
                        return (
                            <div>
                                {club.name}
                            </div>
                        )
                    })
                }
            </Stack>
        </Col>
    )
}
