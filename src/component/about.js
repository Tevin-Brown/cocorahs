import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root : {
        textAlign:'center',
    }
}

function About(props){
    const {classes} = props
    return(
        <div className={classes.root}>
            <Typography variant='h3'>About</Typography>
            <Typography variant='h6'>
                This page is for gathering CoCoRaHS data using the API documented below. <br></br>
                Examples will be given using cURL, Python, Javascript, Java, R, and Matlab. <br></br>
            </Typography>
        </div>
    );
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(About)