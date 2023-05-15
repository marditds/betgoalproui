import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Row } from 'react-bootstrap';
import './OtherLeaguesScoreboard.css'

export const OtherLeaguesScoreboard = ({ leagues }) => {
    return (
        <Row>
            <h4 className='sb--other--leagues--h4'>Other Leagues</h4>
            <div>
                <Stack className='sb--other--leagues--div'>
                    {leagues.map((tournoment, i) => {
                        return (
                            <div className='sb--other--leagues--link--div' key={i}>
                                <Link className='d-flex sb--other--leagues--link' to={`/leagues/${tournoment.alias}/scoreboard`}>
                                    {tournoment.name}
                                </Link>
                            </div>
                        )
                    }
                    )}
                </Stack>
            </div>
        </Row>
    )
}
