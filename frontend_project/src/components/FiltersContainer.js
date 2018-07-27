import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Flexbox from 'flexbox-react';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const SliderWithTooltip = createSliderWithTooltip(Slider);

const marks = {
    0: '0km',
    5: '5km',
    10: '10km',
    15: '15km',
    20: '20km',
    25: '25km',
    30: '30km',
};

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: '350px',
        height: '20%',
        minHeight: '60px',
        backgroundColor: '#cbd0d8',
        borderRadius: '3px',
        borderColor: 'black',
        border: 'thin solid',
        // alignItems: 'center',

},
    filtersHeader: {
        fontSize: '2.5vmax',
        padding: '5px'
    },
    filterItem: {
        paddingBottom:'10px'
    },
    simpleSlider: {
        marginRight: '20px',
        marginLeft: '20px',
        width: '100%'
    },
    sliderContainer: {
        width: '90%',
        paddingBottom:'10px'
    }
});

function percentFormatter(v) {
    return `${v} km`;
}

class FiltersContainer extends Component {


    // onSliderChange = (value) => {
    //     log(value);
    //     this.setState({
    //         value,
    //     });
    // };
    // onAfterChange = (value) => {
    //     console.log(value); //eslint-disable-line
    // };

    render() {
        const {classes} = this.props;
        return (
            <Flexbox  className={classes.root} flexDirection="column" >
                <Flexbox  className={classes.filtersHeader}>
                    <Flexbox flexGrow={1}></Flexbox>
                    <Flexbox>Distances(km)</Flexbox>
                    <Flexbox flexGrow={1}></Flexbox>
                </Flexbox>
                <Flexbox className={classes.filterItem} flexDirection="row">
                    <Flexbox flexGrow={1}></Flexbox>
                    <Flexbox flexGrow={1} className={classes.sliderContainer}>
                        <Slider
                            className={classes.simpleSlider}
                            step={5}
                            dots={true}
                            min={0}
                            max={30}
                            marks={marks}
                            defaultValue={10}
                            onChange={()=>{console.log('hi')}}/>
                    </Flexbox>
                    <Flexbox flexGrow={1}></Flexbox>
                </Flexbox>
            </Flexbox>
        );
    }
}

FiltersContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FiltersContainer);
