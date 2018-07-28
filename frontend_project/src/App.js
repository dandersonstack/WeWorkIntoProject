import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './components/SimpleMap';
import Grid from '@material-ui/core/Grid';
import SimpleMap from "./components/SimpleMap";
import { withStyles } from '@material-ui/core/styles';
import ResterauntList from './components/ResterauntList';
import AppHeader from './components/AppHeaderComponent/AppHeader';
import Flexbox from 'flexbox-react';
import FiltersComponentWrapper from './components/FiltersToolBar/FiltersToolBar';

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
        width:"40vw",
    },
    gridContainer: {
        marginTop: '3px',
    },
    mapContainer: {
        height: "76vh",
        width: "80%",
        padding: "5px",
    }
});

class App extends Component {

  render() {
        const {classes} = this.props;
        return (
          <div className="App">
              <AppHeader/>
              <Flexbox flexDirection="row" className={classes.gridContainer}>
                  <Flexbox flexDirection="column" className={classes.listAndFiltersGrid}>
                      <FiltersComponentWrapper/>
                      <ResterauntList/>
                  </Flexbox>
                  <Flexbox  className={classes.mapContainer} >
                      <SimpleMap/>
                  </Flexbox>

                  {/*<Grid container spacing={0} >*/}
                      {/*<Grid item xs={12} sm={4} className={classes.listAndFiltersGrid}>*/}

                      {/*</Grid>*/}
                      {/*<Grid item xs={12} sm={8}>*/}

                      {/*</Grid>*/}
                  {/*</Grid>*/}
              </Flexbox>

          </div>
        );
        }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
