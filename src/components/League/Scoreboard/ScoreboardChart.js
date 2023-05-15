import React, { useState, useEffect } from 'react';
import { Col, Table, Button, Image } from 'react-bootstrap';
import { FaAngleDown } from 'react-icons/fa';
import './ScoreboardChart.css';


// import { leagues } from '../../data/leagues';
// import { useParams } from 'react-router-dom'

// export const ScoreboardChart = ({ league }) => {
export const ScoreboardChart = ({ league }) => {

    // let { leagueAlias } = useParams();

    // const league = leagues.find((league) => league.alias === leagueAlias)

    const [clubs, setClubs] = useState(league.clubs)


    // console.log('THIS IS CLUBS:', clubs);

    // SORT ABC
    const sortABC = (param) => {
        let temp = [...param].sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        setClubs(prevData => temp);
        console.log(temp);
    };

    // SORT WINS
    const sortWins = (param) => {
        let temp = [...param].sort((a, b) => {
            return (
                a.win < b.win ? 1 : -1
            )
        })
        setClubs(prevData => temp);
        console.log(temp);
    }

    // SORT LOSS
    const sortLoss = (param) => {
        let temp = [...param].sort((a, b) => {
            return (
                a.lose < b.lose ? 1 : -1
            )
        })
        setClubs(prevData => temp);
        console.log(temp);
    }

    // SORE POINTS
    const sortPoints = (param) => {
        let temp = [...param].sort((a, b) => {
            return (
                a.points < b.points ? 1 : -1
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

            <div className='d-flex align-items-center'>
                <h2 style={{ color: "white" }}>
                    {league?.name} Scoreboard
                </h2>
                <Image
                    src={league.logo}
                    style={{ maxHeight: "36px" }}
                    className='ms-3'
                    fluid />
            </div>

            <div className='sb--table' >
                <Table borderless>

                    <thead>
                        <tr>
                            <th>
                                <Button
                                    onClick={() => sortABC(clubs)}
                                    className='abc--btn'
                                >
                                    Club
                                    {/* <BsFillCaretDownFill className='ms-2' /> */}
                                    {/* <BsChevronDown className='ms-2' /> */}
                                    <FaAngleDown className='ms-1' />
                                </Button>
                            </th>
                            <th>
                                <Button
                                    onClick={() => sortWins(clubs)}
                                    className='win--btn'
                                >
                                    W
                                    {/* <BsFillCaretDownFill className='ms-2' /> */}
                                    {/* <BsChevronDown className='ms-2' /> */}
                                    <FaAngleDown className='ms-1' />
                                </Button>
                            </th>
                            <th>
                                <Button
                                    onClick={() => sortLoss(clubs)}
                                    className='lose--btn'
                                >
                                    L
                                    {/* <BsFillCaretDownFill className='ms-2' /> */}
                                    {/* <BsChevronDown className='ms-2' /> */}
                                    <FaAngleDown className='ms-1' />
                                </Button>
                            </th>
                            <th>
                                <Button
                                    onClick={() => sortPoints(clubs)}
                                    className='pts--btn'
                                >
                                    P
                                    {/* <BsFillCaretDownFill className='ms-2' /> */}
                                    {/* <BsChevronDown className='ms-2' /> */}
                                    <FaAngleDown className='ms-1' />
                                </Button>
                            </th>
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
