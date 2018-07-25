import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ResterauntIcon from './ResterauntIcon';
import {GOOGLE_API_KEY} from './constants';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const elementsToRender = function () {
    return [
        {
            lat: 32.072454,
            lng:34.778935,
            name:'Beer Garden'
        }
        ]
};


class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat:  32.072454,
            lng:  34.778935,
        },
        zoom: 15
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '76vh', padding: "10px" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {
                        elementsToRender().map((comp, i) =>{
                            return(
                                <AnyReactComponent
                                    lat={comp.lat}
                                    lng={comp.lng}
                                    text={comp.name}/>
                            )
                        })
                    }
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;