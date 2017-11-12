import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Grid, Cell } from 'react-mdl'
import MemberCard from './memberCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as memberActions from '../../actions/memberActions'
import AddDialog from './addDialog'
import fetch from 'node-fetch'

let sent = false
let sendMail = (team) => {
    let date = new Date
    if(sent===false && date.getHours() === 22 && date.getMinutes()===0){
        sent= true
        fetch('http://localhost:3003/mail', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...team})
        })
            .then(res => console.log(res))
    }
}

class TeamPage extends Component {

    state = {
        dialogHidden: true,
        dialogTime: 0,
        dialogName:''
    }
    
    componentDidMount(){
        this.interval = setInterval(this.props.actions.countdownTime, 1000)
    }

    onMemberPause(name) {
        this.props.actions.pauseJob(name)
    }

    onMemberAdd(name) {
        this.props.actions.addTime(name)
    }

    onMemberDone(name) {
        this.props.actions.doneJob(name)
    }

    onMemberClose(name) {
        this.props.actions.closeJob(name)
    }

    onMemberResume(name) {
        this.props.actions.resumeJob(name)
    }

    onMemberStart(name) {
        this.setState({
            ...this.state,
            dialogHidden: false,
            dialogName:name
        })
    }

    onDialogCancel() {
        this.setState({
            ...this.state,
            dialogHidden: true
        })
    }

    onDialogAddJob(name, hours, job) {
        this.setState({
            ...this.state,
            dialogHidden: true
        })
        this.props.actions.startJob(name, hours, job)
    }

    renderRow(name, i) {
        return (
            <Cell col={4} key={i}>
                <MemberCard
                    name={name}
                    member={this.props.team[name]}
                    onPause={this.onMemberPause.bind(this)}
                    onAdd={this.onMemberAdd.bind(this)}
                    onDone={this.onMemberDone.bind(this)}
                    onClose={this.onMemberClose.bind(this)}
                    onResume={this.onMemberResume.bind(this)}
                    onStart={this.onMemberStart.bind(this)} />
            </Cell>
        )
    }

    render() {
        return (
            <div>
                <Grid className="demo-grid-3">
                    {Object.keys(this.props.team).map(this.renderRow.bind(this))}
                </Grid>
                <AddDialog
                    name={this.state.dialogName}
                    hidden={this.state.dialogHidden}
                    onAddJob={this.onDialogAddJob.bind(this)}
                    onCancel={this.onDialogCancel.bind(this)} />
            </div>
        )
    }
}

TeamPage.propTypes = {
    actions: PropTypes.object.isRequired,
    team: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    sendMail(state.team)
    return {
        team: state.team
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(memberActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage)


