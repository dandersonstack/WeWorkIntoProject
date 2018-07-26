import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SimpleMap';
import Background from '../assets/cubed-watermelon-mold-640x533.jpg';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Flexbox from 'flexbox-react';
import SearchIcon from './SearchIcon';


const styles = theme => ({
    appHeader: {
        height: '22vh',
        color: 'black',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
    },
    appDescription: {
      paddingRight: '20px',
        fontFamily: 'Marker Felt, fantasy'
    },
    appTitle: {
        textAlign: 'center',
        paddingBottom: '10px',
        margin: '0px',
        fontSize: '5vw',
        color: 'white',
        fontFamily: 'Marker Felt, fantasy'
    },
    searchContainer: {
        backgroundColor: 'white',
        padding: '14px',
    },
    bootstrapRoot: {
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    bootstrapInput: {
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: '1.7vw',
        padding: '10px 12px',
        width: 'calc(100% - 24px)',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
});

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
