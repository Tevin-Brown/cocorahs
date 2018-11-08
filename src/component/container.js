import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import About from './about';

const styles = {
    root: {
        backgroundColor:'lightblue',
        width:'80%',
        height:'100%',
        position:'fixed',
        right:0,
        overflow:'auto',
        padding:'2em'
    },
}
function Container(props){
    const {classes} = props;
    return(
        <div className={classes.root}>
            <About/>
        </div>
    );
} 

Container.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Container)