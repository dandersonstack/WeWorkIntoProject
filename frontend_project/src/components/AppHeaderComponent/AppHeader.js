import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../SimpleMap';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Flexbox from 'flexbox-react';
import styles from './AppHeaderStyles.js';

class AppHeader extends Component {

    render() {
        const {classes} = this.props;
        return (
            <Flexbox className={ classes.appHeader } flexDirection="row" element="header">
                <Flexbox flexGrow={.8}></Flexbox>
                <Flexbox flexGrow={1} flexDirection="column" alignItems="center">
                    <Flexbox flexGrow={1}></Flexbox>
                    <h1 className={classes.appTitle}>We Eat^3</h1>
                    <Flexbox flexDirection="row">
                        <TextField
                            defaultValue="please enter an address"
                            id="bootstrap-input"
                            InputProps={{
                                disableUnderline: true,
                                classes: {
                                    root: classes.bootstrapRoot,
                                    input: classes.bootstrapInput,
                                },
                            }}/>
                    </Flexbox>
                    <Flexbox flexGrow={1}></Flexbox>
                </Flexbox>
                <Flexbox flexGrow={.8}></Flexbox>
            </Flexbox>

        );
    }
}

AppHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);
