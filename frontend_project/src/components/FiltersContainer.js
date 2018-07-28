import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Flexbox from 'flexbox-react';
import 'rc-slider/assets/index.css';
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
        maxWidth: '600px',
        height: '70px',
        maxHeight: '200px',
        padding: '3px',
        backgroundColor: '#cbd0d8',
        borderRadius: '3px',
        borderColor: 'black',
        border: 'thin solid',
},
    filtersHeader: {
        fontSize: '2.5vmin',
        padding: '5px'
    },
    filterItem: {
        paddingBottom:'10px'
    },
    simpleSlider: {

        // width: '100%'
    },
    sliderContainer: {
        width: '90%',
        minWidth: '200px',
        // height: '10vh',
        paddingBottom:'10px'
    }
});

class FiltersContainer extends Component {
    state = {
        value: 10
    };

    onSliderChange = (value) => {
        console.log(value);
        this.setState({
            value,
        });
    };

    render() {
        const {classes, filterName} = this.props;
        // const optionalSliderSettings = {
        //     min: 0,
        //
        // };

        return (
            <Flexbox className={classes.root} flexDirection="column" >
                <Flexbox className={classes.filtersHeader} justifyContent="center">
                    <Flexbox>{filterName || 'Distance(Km)'}</Flexbox>
                </Flexbox>
                <Flexbox className={classes.filterItem} flexDirection="row" justifyContent="center">
                    <div className={classes.sliderContainer}>
                        {/*TODO: https://github.com/react-component/slider/issues/53*/}
                        <Slider
                            className={classes.simpleSlider}
                            step={5}
                            dots={true}
                            min={0}
                            max={30}
                            marks={marks}
                            defaultValue={10}
                            onChange={this.onSliderChange}/>
                    </div>
                </Flexbox>
            </Flexbox>
        );
    }
}

FiltersContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    filterName: PropTypes.object.isRequired,
};

export default withStyles(styles)(FiltersContainer);
