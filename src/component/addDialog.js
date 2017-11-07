import React from 'react';
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

const AddDialog = (props) => (
    <div>
        <Dialog open={!
            props.hidden}>
            <DialogTitle>Allen</DialogTitle>
            <DialogContent>
                <Textfield
                    onChange={() => { }}
                    pattern="-?[0-9]*(\.[0-9]+)?"
                    error="Input is not a number!"
                    label="Number..."
                />
                <Textfield
                    onChange={() => { }}
                    label="Item..."
                    rows={5}
                />
            </DialogContent>
            <DialogActions>
                <IconButton name="done" colored/>
                <IconButton name="close" colored style={{color:'red'}} />
        </DialogActions>
        </Dialog>
    </div>
)

AddDialog.propTypes = {
    hidden: PropTypes.bool.isRequired,
}

export default AddDialog