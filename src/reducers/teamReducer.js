import * as types from '../actions/actionTypes'
import * as memberStatus from '../component/team/memberStatus'
import teamInitialState from './teamInitialState'

export default (state = teamInitialState, action) => {
    switch(action.type) {
        case types.START:
            state[action.name].status = memberStatus.STARTED
            state[action.name].doing.targetSeconds = Math.floor(action.hours * 3600)
            state[action.name].doing.restOfSeconds = Math.floor(action.hours * 3600)
            state[action.name].doing.item = action.item
            return {...state}
        
        case types.COUNTDOWN:
            Object.keys(state).forEach((name) => {
                if(state[name].status === memberStatus.STARTED){
                    --state[name].doing.restOfSeconds
                }
            })
            return {...state}

        case types.PAUSE:
            state[action.name].status = memberStatus.PAUSED
            return {...state}

        case types.CLOSE:
            state[action.name].status = memberStatus.STOPED
            return {...state}

        case types.RESUME:
            state[action.name].status = memberStatus.STARTED
            return {...state}
        
        case types.DONE:
            let duration = state[action.name].doing.targetSeconds - state[action.name].doing.restOfSeconds
            state[action.name].done.push({
                duration,
                item: state[action.name].doing.item
            })
            state[action.name].status = memberStatus.STOPED
            return {...state}

        case types.ADDTIME:
            state[action.name].doing.restOfSeconds += 0.5 * 3600
            return {...state}

        default:
            return state
    }
}

