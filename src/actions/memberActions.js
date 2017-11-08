import * as types from './actionTypes'

export function startJob(name, hours, item){
    return {type: types.START,name, hours, item}
}

export function countdownTime() {
    return {type: types.COUNTDOWN}
}

export function pauseJob(name) {
    return {type: types.PAUSE, name}
}

export function closeJob(name) {
    return {type: types.CLOSE, name}
}

export function resumeJob(name) {
    return {type: types.RESUME, name}
}

export function doneJob(name) {
    return {type: types.DONE, name}
}

export function addTime(name){
    return {type: types.ADDTIME, name}
}