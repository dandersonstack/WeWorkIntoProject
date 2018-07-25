import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SimpleMap';
import Grid from '@material-ui/core/Grid';
import Background from '../assets/tapas-food-top-view-foods-collection-hero-header-77244457.jpg';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'


const styles = theme => ({
    appHeader: {
        backgroundColor: '#222',
        height: '22vh',
        color: 'white',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover'
    },
    appTitle: {
        textAlign: 'center',
        paddingTop: '50px',
        paddingBottom: '10px',
        margin: '0px',
        fontSize: '60px',
        color: 'white',
        fontFamily: 'Marker Felt, fantasy'
    },
    searchContainer: {
        backgroundColor: 'white',
        padding: '10px',
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
        fontSize: 16,
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

            <header className={ classes.appHeader }>
                <Grid container spacing={0} >
                    <Grid item xs={12} sm={4}>
                        <h1 className={classes.appTitle}>We Eat</h1>
                        <TextField
                            defaultValue="restaurant"
                            id="bootstrap-input"
                            InputProps={{
                                disableUnderline: true,
                                classes: {
                                    root: classes.bootstrapRoot,
                                    input: classes.bootstrapInput,
                                },
                            }}/>
                    </Grid>
                </Grid>
            </header>

        );
    }
}

AppHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);
