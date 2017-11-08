import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Textfield
} from 'react-mdl';

class AddDialog extends Component {
    
    state = {
        time: 0,
        item: ''
    }

    onItemChange = (event) => {
        console.log(this.state)
        this.setState({
            ...this.state,
            item: event.target.value
        })
    }

    onDurationChange = (event) => {
        console.log(this.state)
        this.setState({
            ...this.state,
            time:  Math.floor(event.target.value * 3600)
        })
    }

    onDialogDone = () => {
        this.props.onAddJob({
            name: this.state.name
        })
    }

    onDialogCancle = () => {
        this.props.onCancel()
    }

    render = () => {
        return (
            <Dialog open={!this.props.hidden} >
                <DialogTitle>{this.props.name}</DialogTitle>
                <DialogContent>
                    <Textfield
                        onChange={this.onDurationChange}
                        pattern="-?[0-9]*(\.[0-9]+)?"
                        error="Input is not a number!"
                        label="Duration..."
                    />
                    <Textfield
                        onChange={this.onItemChange}
                        label="Item..."
                        rows={5}
                    />
                </DialogContent>
                <DialogActions>
                    <IconButton name="done" colored onClick={this.onDialogDone} />
                    <IconButton name="close" onClick={this.onDialogCancle} style={{ color: 'red' }} />
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
