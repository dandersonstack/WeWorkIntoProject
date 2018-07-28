import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Flexbox from 'flexbox-react';
import 'rc-slider/assets/index.css';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import {RATING_FILTER_MARKS} from '../../../constants';

const SliderWithTooltip = createSliderWithTooltip(Slider);

const styles = theme => ({
    sliderContainer: {
        width: '90%',
        minWidth: '200px',
        paddingBottom:'10px'
    }
});

class FilterSliderRatings extends Component {

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
        const {classes} = this.props;
        return (
            <div className={classes.sliderContainer}>
                <SliderWithTooltip
                    dots={false}
                    step={.1}
                    min={0}
                    max={5}
                    marks={[0,1,2,3,4,5]}
                    defaultValue={4}
                    onChange={this.onSliderChange}
                />
            </div>
        );
    }
}

export default withStyles(styles)(FilterSliderRatings);
