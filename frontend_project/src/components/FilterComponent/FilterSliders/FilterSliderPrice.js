import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Flexbox from 'flexbox-react';
import 'rc-slider/assets/index.css';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import {PRICE_FILTER_MARKS} from '../../../constants';

const SliderWithTooltip = createSliderWithTooltip(Slider);

const styles = theme => ({
    sliderContainer: {
        width: '90%',
        minWidth: '200px',
        paddingBottom:'10px'
    }
});

class FilterSliderDistance extends Component {

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
                <Slider
                    dots={true}
                    min={0}
                    max={3}
                    marks={PRICE_FILTER_MARKS}
                    defaultValue={10}
                    onChange={this.onSliderChange}
                />
            </div>
        );
    }
}

export default withStyles(styles)(FilterSliderDistance);
