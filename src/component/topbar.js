import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      flexGrow: 1,
      textAlign: 'center',
      padding: '1.25em',
      backgroundColor: 'lightgray',
      height: '5em',
      position:'static',
    },
  };

class TopBar extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div>
                <AppBar className = {classes.root} color='primary'> 
                    <Typography variant='h4' style={{color:'white'}}>CoCoRaHS API</Typography>
                </AppBar>
            </div>
        );
    }
}

TopBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
export default withStyles(styles)(TopBar)
