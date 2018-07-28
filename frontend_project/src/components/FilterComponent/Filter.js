import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Flexbox from 'flexbox-react';
import 'rc-slider/assets/index.css';
import FilterSliderDistance from './FilterSliders/FilterSliderDistance';
import FilterSliderPrice from './FilterSliders/FilterSliderPrice';
import FilterSliderRatings from './FilterSliders/FilterSliderRatings';
import styles from './FilterStyles';

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
