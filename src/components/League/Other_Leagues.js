import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import './Other_Leagues.css'

export const Other_Leagues = ({ leagues }) => {
    return (
        <Col lg={5}>
            <h4>Other Leagues</h4>
            {leagues.map((tournoment, i) => {
                return (
                    <Link key={i} className='d-flex other--leagues--link' to={`/leagues/${tournoment.alias}/picks`}>
                        {tournoment.name}
                    </Link>
                )
            }
            )}
        </Col>
    )
}
