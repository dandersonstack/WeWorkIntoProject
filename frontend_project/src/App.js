import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';
import './SimpleMap';
import Grid from '@material-ui/core/Grid';
import SimpleMap from "./SimpleMap";
import Background from './assets/tapas-food-top-view-foods-collection-hero-header-77244457.jpg';
import { withStyles } from '@material-ui/core/styles';
import MapDetailsTab from './MapDetailsTab';
import ResterauntList from './ResterauntList';
import FiltersContainer from './FiltersContainer';
import TextField from '@material-ui/core/TextField'
import AppHeader from './AppHeader';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'grey'
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    listAndFiltersGrid: {
        padding: '3px',

    },
});

class App extends Component {

  render() {
        const {classes} = this.props;
        return (
          <div className="App">
            <AppHeader/>
              <Grid container spacing={0} >
                  <Grid item xs={12} sm={4} className={classes.listAndFiltersGrid}>
                      <FiltersContainer/>
                      <ResterauntList/>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                      <SimpleMap/>
                  </Grid>
              </Grid>
          </div>
        );
        }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
