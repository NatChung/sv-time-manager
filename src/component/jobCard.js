import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Card,
    CardText,
    CardTitle,
    CardActions,
    CardMenu,
    IconButton
} from 'react-mdl';
import {sprintf} from 'sprintf-js'

const createCardMenu = (status) => {
    switch (status) {
        case 'stopped':
            return (
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="settings_power" />
                </CardMenu>

            )

        case 'started':
            return (
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="pause" />
                    <IconButton name="add" />
                    <IconButton name="done" />
                    <IconButton name="close" />
                </CardMenu>

            )

        case 'paused':
            return (
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name='play_arrow' />
                    <IconButton name="close" />
                </CardMenu>

            )

        default:
            return (
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name='play_arrow' />
                    <IconButton name="pause" />
                    <IconButton name="add" />
                    <IconButton name="done" />
                    <IconButton name="close" />
                    <IconButton name="settings_power" />
                </CardMenu>

            )
            return
    }
}

const getColorFromStatus = (status) => {
    switch (status) {
        case 'stopped': return 'black'
        case 'started': return 'green'
        case 'paused': return 'gray'
        default:  return 'blue'
    }
}

const getTargeTime = (targetSeconds) => {
    let number = new Number(targetSeconds/3600)
    return number.toFixed( (number % 1) ? 1 : 0 )
}

const getFormattingRestOfTime = (restOfSeconds) => {
    let rest = restOfSeconds
    let hours = Math.floor(rest / 3600)
    rest = (rest % 3600)
    let minutes = Math.floor(rest / 60)
    let seconds = rest % 60

    return sprintf("%02d:%02d:%02d", hours, minutes, seconds)
}

const JobCard = (props) => (
    <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
        <CardTitle
            style={{
                color: '#fff',
                height: '90px',
                alignItems: 'flex-start',
                background: getColorFromStatus(props.member.status)
            }}>
            <h5 style={{ marginTop: '0' }} >
                {props.member.name}: {props.member.status}<br /><br />
                {getFormattingRestOfTime(props.member.doing.restOfSeconds)} / {getTargeTime(props.member.doing.targetSeconds)} H
        </h5>
        </CardTitle>
        <CardText>{props.member.doing.item}</CardText>
        {createCardMenu(props.member.status)}
    </Card>

)

JobCard.propTypes = {
    member: PropTypes.object.isRequired
}

export default JobCard   