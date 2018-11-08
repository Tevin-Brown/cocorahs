import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width:'20%',
        backgroundColor:'#FCFED5',
        height: '100%',
        overflow:'hidden',
        position:'fixed',
        padding:'2em',
    },
}

const linklist = [
    'About',
    'Parameters',
    'Example One',
    'Example Two',
    'Example Three',
    'Example Four',
]


function IndexPanel(props){
    const {classes} = props;
    const content = linklist.map((link)=>
        <Typography variant='h5'>{link}</Typography>
    );
    return(
        <div className={classes.root}>
           {content} 
        </div>
    );
}
IndexPanel.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(IndexPanel)