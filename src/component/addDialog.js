import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Textfield
} from 'react-mdl';

class AddDialog extends Component {
    
    state = {
        hours: '',
        item: ''
    }

    onItemChange(event) {
        this.setState({
            ...this.state,
            item: event.target.value
        })
    }

    onDurationChange(event) {
        this.setState({
            ...this.state,
            hours:  event.target.value
        })
    }

    onDialogDone() {
        this.props.onAddJob(this.props.name, this.state.hours, this.state.item)
        this.setState({
            hours:0,
            item:''
        })
    }

    onDialogCancle = () => {
        this.props.onCancel()
        this.setState({
            hours:0,
            item:''
        })
    }

    render() {
        return (
            <Dialog open={!this.props.hidden} >
                <DialogTitle>{this.props.name}</DialogTitle>
                <DialogContent>
                    <Textfield
                        onChange={this.onDurationChange.bind(this)}
                        pattern="-?[0-9]*(\.[0-9]+)?"
                        error="Input is not a number!"
                        label="Input the hours!"
                        value={this.state.hours.toString()}
                    />
                    <Textfield
                        onChange={this.onItemChange.bind(this)}
                        label="Input the job description!"
                        value={this.state.item}
                        rows={5}
                    />
                </DialogContent>
                <DialogActions>
                    <IconButton name="done" colored onClick={this.onDialogDone.bind(this)} />
                    <IconButton name="close" onClick={this.onDialogCancle.bind(this)} style={{ color: 'red' }} />
                </DialogActions>
            </Dialog>
        )
    }
}

AddDialog.propTypes = {
    hidden: PropTypes.bool.isRequired,
    onAddJob: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}

export default AddDialog;
