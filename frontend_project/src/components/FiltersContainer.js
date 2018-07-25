import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        width: '100%',
        height: '20%',
        backgroundColor: '#cbd0d8',
        borderRadius: '3px',
        borderColor: 'black',
        border: 'thin solid'
    },
});

function FiltersContainer(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            Filters will go here
        </div>
    );
}

FiltersContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FiltersContainer);
