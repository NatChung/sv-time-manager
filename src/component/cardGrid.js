import React from 'react'
import { Grid, Cell } from 'react-mdl'
import JobCard from './jobCard'


const renderRow = (item, i) => (
    <Cell col={6} key={i}>
        <JobCard name={item.name} />
    </Cell>
)

const CardGrid = (props) => (
    <Grid className="demo-grid-3">
        {props.team.map(renderRow)}
    </Grid>
)

export default CardGrid


