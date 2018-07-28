import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ResterauntListItem from './ResterauntListItem';
import Flexbox from 'flexbox-react';


const styles = theme => ({
    root: {
        width: '100%',
        overflow: 'scroll',
        maxHeight: '100vh',
    },
});

function ResterauntList(props) {
    const { classes } = props;
    return (
        <Flexbox height='20%' flexGrow={1}>
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
        </Flexbox>
    );
}

ResterauntList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResterauntList);
