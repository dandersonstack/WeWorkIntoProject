import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ResterauntListItem from './ResterauntListItem';

const styles = theme => ({
    root: {
        width: '100%',
        // maxHeight: '100%',
        overflow: 'scroll',
    },
});

function ResterauntList(props) {
    const { classes } = props;
    return (
        <List component="nav" className={classes.root}>
            <ResterauntListItem primaryText='Dennys Bar and Grill'>
            </ResterauntListItem>
            <ResterauntListItem primaryText='Dennys Bar and Grill'>
            </ResterauntListItem>
            <ResterauntListItem primaryText='Dennys Bar and Grill'>
            </ResterauntListItem>
            <ResterauntListItem primaryText='Dennys Bar and Grill'>
            </ResterauntListItem>
            <ResterauntListItem primaryText='Dennys Bar and Grill'>
            </ResterauntListItem>
            <ResterauntListItem primaryText='Dennys Bar and Grill'>
            </ResterauntListItem>
            <ResterauntListItem primaryText='Dennys Bar and Grill'>
            </ResterauntListItem>
            <ResterauntListItem primaryText='Dennys Bar and Grill'>
            </ResterauntListItem>
            <ResterauntListItem primaryText='Dennys Bar and Grill'>
            </ResterauntListItem>
            <ResterauntListItem primaryText='Dennys Bar and Grill'>
            </ResterauntListItem>
            <ResterauntListItem primaryText='Dennys Bar and Grill'>
            </ResterauntListItem>
            <ResterauntListItem primaryText='Dennys Bar and Grill'>
            </ResterauntListItem>
        </List>
    );
}

ResterauntList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResterauntList);
