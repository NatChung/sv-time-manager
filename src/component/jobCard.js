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

const JobCard = (props) => (
    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle 
        style={{
            color: '#fff', 
            height: '90px', 
            alignItems: 'flex-start',
            background: '#3E4EB8'}}>
        <h5 style={{marginTop: '0'}} >
            {props.name}: Start<br /><br />
            1:11:23 / 1.5 Hours
        </h5>
        
    
    </CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>More</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        
        <IconButton name='play_arrow'/>
        <IconButton name="pause" />
        <IconButton name="add" />
        <IconButton name="done" />
        <IconButton name="close" />
        <IconButton name='mood_bad'/>
        <IconButton name="settings_power" />
        
    </CardMenu>
</Card>

)

JobCard.propTypes = {
    name: PropTypes.string.isRequired,
}

export default JobCard   