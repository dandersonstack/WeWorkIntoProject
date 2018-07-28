import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Flexbox from 'flexbox-react';
import 'rc-slider/assets/index.css';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import FilterSliderDistance from './FilterSliders/FilterSliderDistance';
import FilterSliderPrice from './FilterSliders/FilterSliderPrice';
import FilterSliderRatings from './FilterSliders/FilterSliderRatings';

const styles = theme => ({
    root: {
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
    sliderContainer: {
        width: '90%',
        minWidth: '200px',
        // height: '10vh',
        paddingBottom:'10px'
    }
});

class Filter extends Component {

    filterSliderFromType(filterType){
        if (filterType==='distance') {
            return  <FilterSliderDistance/>;
        }else if (filterType==='cost') {
            return  <FilterSliderPrice/>;
        } else {
            return  <FilterSliderRatings/>;
        }
    }

    render() {
        const {classes, filterTitle, filterType} = this.props;
        return (
            <Flexbox className={classes.root} flexDirection="column" >
                <Flexbox className={classes.filtersHeader} justifyContent="center">
                    <Flexbox>{filterTitle || 'Distance(Km)'}</Flexbox>
                </Flexbox>
                <Flexbox className={classes.filterItem} flexDirection="row" justifyContent="center">
                    {this.filterSliderFromType(filterType)}
                </Flexbox>
            </Flexbox>
        );
    }
}

Filter.propTypes = {
    filterTitle: PropTypes.string.isRequired,
};

export default withStyles(styles)(Filter);
