import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { leagues } from '../data/leagues'

export const Leagues = () => {
    return (
        <ListGroup
            defaultActiveKey="#link1"
            variant="flush"
        >
            {leagues.map((league) => {
                return (
                    <ListGroup.Item action href={`/leagues/${league.alias}`} key={league.id}>
                        {league.name}
                    </ListGroup.Item>
                )
            })}

        </ListGroup>
    )
}
