import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar';
import ResterauntIcon from '@material-ui/icons/Work';
const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: 'grey',
        marginBottom: '5px',
        height: '8vh',
        borderRadius: '5px',
    },
    itemText: {
      paddingTop: '5px'
    },
});

class ResterauntListItem extends ListItem {
    render() {
        const {classes, primaryText} = this.props;
        let value = 1;
        return(
            <div className={classes.root}
                key={value}
                role={undefined}
                onClick={()=>{console.log('hi')}}
            >
                <ListItemAvatar>
                    <ResterauntIcon />
                </ListItemAvatar>
                <ListItemText className={classes.itemText} primary={primaryText}/>
            </div>
    );
    }
}


export default withStyles(styles)(ResterauntListItem);