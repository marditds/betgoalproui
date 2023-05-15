import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Row } from 'react-bootstrap';
import './OtherLeaguesPicks.css'

export const OtherLeaguesPicks = ({ leagues }) => {
    return (
        <Row>
            <h4 className='other--leagues--h4'>Other Leagues</h4>
            <div>
                <Stack className='other--leagues--div'>
                    {leagues.map((tournoment, i) => {
                        return (
                            <div className='other--leagues--link--div' key={i}>
                                <Link className='d-flex other--leagues--link' to={`/leagues/${tournoment.alias}/picks`}>
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
