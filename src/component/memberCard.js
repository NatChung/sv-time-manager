import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardText,
    CardTitle,
    CardMenu,
    IconButton
} from 'react-mdl';
import { sprintf } from 'sprintf-js'
import * as memberStatus from './memberStatus'

const createCardMenu = (props) => {
    switch (props.member.status) {
        case memberStatus.STARTED:
            return (
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="pause" onClick={() => { props.onPause(props.name) }}/>
                    <IconButton name="add" onClick={() => { props.onAdd(props.name) }}/>
                    <IconButton name="done" onClick={() => { props.onDone(props.name) }}/>
                    <IconButton name="close" onClick={() => { props.onClose(props.name) }}/>
                </CardMenu>

            )

        case memberStatus.PAUSED:
            return (
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name='play_arrow' onClick={() => { props.onResume(props.name) }}/>
                </CardMenu>

            )
        case memberStatus.STOPED:
        default:
            return (
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="settings_power" onClick={() => { props.onStart(props.name) }} />
                </CardMenu>
            )
    }
}

const getColorFromStatus = (status) => {
    switch (status) {
        case memberStatus.STOPED: return 'black'
        case memberStatus.STARTED: return 'green'
        case memberStatus.PAUSED: return 'gray'
        default: return 'blue'
    }
}

const getTargeTime = (targetSeconds) => {
    let number = targetSeconds / 3600
    return number.toFixed((number % 1) ? 1 : 0)
}

const getFormattingRestOfTime = (restOfSeconds) => {
    let rest = restOfSeconds
    let hours = Math.floor(rest / 3600)
    rest = (rest % 3600)
    let minutes = Math.floor(rest / 60)
    let seconds = rest % 60

    return sprintf("%02d:%02d:%02d", hours, minutes, seconds)
}

const MemberCard = (props) => (
    <Card shadow={0} style={{ width: '512px', margin: 'auto' }}>
        <CardTitle
            style={{
                color: '#fff',
                height: '90px',
                alignItems: 'flex-start',
                background: getColorFromStatus(props.member.status)
            }}>
            <h5 style={{ marginTop: '0' }} >
                {props.name}: {props.member.status}<br /><br />
                {getFormattingRestOfTime(props.member.doing.restOfSeconds)} / {getTargeTime(props.member.doing.targetSeconds)} H
        </h5>
        </CardTitle>
        <CardText>{props.member.doing.item}</CardText>
        {createCardMenu(props)}
    </Card>

)

MemberCard.propTypes = {
    member: PropTypes.object.isRequired,
    onPause: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    onDone: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onResume: PropTypes.func.isRequired,
    onStart: PropTypes.func.isRequired
}

export default MemberCard   