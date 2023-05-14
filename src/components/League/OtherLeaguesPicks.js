import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Col } from 'react-bootstrap';
import './OtherLeaguesPicks.css'

export const OtherLeaguesPicks = ({ leagues }) => {
    return (
        <Col lg={5} className='mt-4 mt-lg-0'>
            <h4 className='other--leagues--h4'>Other Leagues</h4>
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
        </Col>
    )
}
