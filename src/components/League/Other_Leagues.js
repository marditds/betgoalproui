import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Row, Col } from 'react-bootstrap';
import './Other_Leagues.css'

export const Other_Leagues = ({ leagues }) => {
    return (
        <Col lg={5}>
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
