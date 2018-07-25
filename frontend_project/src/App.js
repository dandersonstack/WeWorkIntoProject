import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './components/SimpleMap';
import Grid from '@material-ui/core/Grid';
import SimpleMap from "./components/SimpleMap";
import { withStyles } from '@material-ui/core/styles';
import ResterauntList from './components/ResterauntList';
import FiltersContainer from './components/FiltersContainer';
import AppHeader from './components/AppHeader';


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
        paddingLeft: '5px',
        marginBottom: '10px',
        overflow: 'scroll',
    },
    gridContainer: {
        marginTop: '3px',
    }
});

class App extends Component {

  render() {
        const {classes} = this.props;
        return (
          <div className="App">
            <AppHeader/>
              <Grid container spacing={0} className={classes.gridContainer}>
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
