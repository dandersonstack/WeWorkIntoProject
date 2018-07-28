import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './components/SimpleMap';
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
        padding: '5px',
        paddingLeft: '5px',
        overflow: 'scroll',
        width:"35vw",
        minWidth: "360px",
    },
    gridContainer: {
        marginTop: '3px',
        height: '78vh',
    },
    mapContainer: {
        height: "76vh",
        width: "63%",
        padding: "5px",
        minWidth: "360px",
    }
});

class App extends Component {




  render() {
        const {classes} = this.props;


        return (
          <div className="App">
              <AppHeader/>
              <Flexbox flexDirection="row"  className={classes.gridContainer} flexWrap="wrap">
                  <Flexbox flexDirection="column"  className={classes.listAndFiltersGrid}>
                      <FiltersComponentWrapper/>
                      <ResterauntList/>
                  </Flexbox>
                  <Flexbox  className={classes.mapContainer} >
                      <SimpleMap/>
                  </Flexbox>
              </Flexbox>

          </div>
        );
        }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
