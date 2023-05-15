import React, { useState, useEffect } from 'react';
import { Stack, Col, Table, Button } from 'react-bootstrap';
import './ScoreboardLeague.css';


// import { leagues } from '../../data/leagues';
// import { useParams } from 'react-router-dom'

// export const ScoreboardLeague = ({ league }) => {
export const ScoreboardLeague = ({ league }) => {


    // let { leagueAlias } = useParams();

    // const league = leagues.find((league) => league.alias === leagueAlias)

    const [clubs, setClubs] = useState(league.clubs)


    console.log('THIS IS CLUBS:', clubs);

    const sortWins = (param) => {
        let temp = [...param].sort((a, b) => {
            return (
                a.win < b.win ? 1 : -1
            )
        })
        setClubs(prevData => temp);
        console.log(temp);
    }

    useEffect(() => {
        setClubs((preVal) => league.clubs);
    }, [league.clubs]);


    return (
        <Col>
            <h2 style={{ color: "white" }}>
                {league?.name} Scoreboard
            </h2>

            <Button onClick={() => sortWins(clubs)}>Sort By Wins</Button>

            <div className='sb--table' style={{ borderRadius: '10px' }}>
                <Table>

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
                            clubs?.map((club, i) => {
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
            </div>
        </Col>
    )
}
