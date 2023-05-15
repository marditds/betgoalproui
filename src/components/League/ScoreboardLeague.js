import React from 'react';
import { Stack, Col, Table } from 'react-bootstrap';
import { ScoreeboardLeague } from './ScoreboardLeague.css';
import { BsTrainFrontFill } from 'react-icons/bs';

export const ScoreboardLeague = ({ league }) => {

    return (
        <Col>
            <h2 style={{ color: "white" }}>
                {league?.name} Scoreboard
            </h2>

            <Table borderless>

                <thead>
                    <tr>
                        <th>Club</th>
                        <th>W</th>
                        <th>L</th>
                        <th>P</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        league?.clubs?.map((club, i) => {
                            return (
                                <tr key={i}>
                                    <td className='d-block d-sm-none'>
                                        {
                                            club.name.split(" ").slice(0, 2).length > 1
                                                ?
                                                club.name.split(" ").slice(0, 2).map((team, i) =>
                                                    <React.Fragment key={i}>
                                                        {team.slice(0, 3)}
                                                        {" "}
                                                    </React.Fragment>
                                                ) :
                                                club.name
                                        }
                                    </td>
                                    <td className='d-none d-sm-block'>{club.name}</td>
                                    <td>{club.win}</td>
                                    <td>{club.lose}</td>
                                    <td>{club.points}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Col>
    )
}
