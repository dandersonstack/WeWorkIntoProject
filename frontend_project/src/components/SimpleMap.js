import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {GOOGLE_API_KEY, ELEMENTS_TO_RENDER} from '../constants';
import PlaceIcon from '@material-ui/icons/Place';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    icon: {
        fontSize: '30px',
        stopColor: 'red'
    },
    mainMap: {
        borderRadius: '10px'
    }

});


class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat:  32.072454,
            lng:  34.778935,
        },
        zoom: 15
    };

    fetchResteraunts(){

    }

    componentDidMount(){
        this.fetchResteraunts();
    }

    render() {
        const classes = this.props;
        return (
            // Important! Always set the container height explicitly
                <GoogleMapReact
                    styles={classes.mainMap}
                    bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {
                        ELEMENTS_TO_RENDER.map((comp, i) =>{
                            return(
                                <PlaceIcon
                                    key={i}
                                    styles={classes.icon}
                                    lat={comp.lat}
                                    lng={comp.lng}
                                    text={comp.name}
                                    color={'red'}
                                />
                            )
                        })
                    }
                </GoogleMapReact>
        );
    }
}

export default withStyles(styles)(SimpleMap);