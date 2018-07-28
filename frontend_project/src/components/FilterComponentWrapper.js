import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Flexbox from 'flexbox-react';
import 'rc-slider/assets/index.css';
import FiltersContainer from "./FiltersContainer";
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';


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
        maxWidth: '620px',
        borderRadius: '3px',
        borderColor: 'black',
        color: 'white',
        backgroundColor: '#cbd0d8',
        border: 'thin solid',
    },
    filtersHeader: {
        borderTopLeftRadius: '3px',
        borderTopRightRadius: '3px',
        backgroundColor: 'grey',
    },
    filtersHeaderText: {
        marginLeft: '10px'
    },
    filtersHeaderIcon: {
        marginRight: '10px'
    },
    icon: {
        margin: '3px',
    },
    button: {

    }
});

function HomeIcon(props) {

    return (
        <SvgIcon {...props} style={{color: 'white'}}>
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        </SvgIcon>
    );
}

class FilterComponentWrapper extends Component {
    state = {
        value: 10,
        collapsed: false,
    };

    render() {
        const {classes} = this.props;


        return (
            <Flexbox className={classes.root} flexDirection="column" justifyContent="center">

                <Flexbox className={classes.filtersHeader} flexDirection="row">

                    <Flexbox className={classes.filtersHeaderText} flexDirection="column">
                        <Flexbox flexGrow={1}></Flexbox>
                        <Flexbox>Hide Filters</Flexbox>
                        <Flexbox flexGrow={1}></Flexbox>

                    </Flexbox>
                    <Flexbox flexGrow={1}></Flexbox>
                    <Flexbox className={classes.filtersHeaderIcon}>
                        <IconButton
                            aria-label="Delete"
                            onClick={()=>{
                                this.setState({collapsed: !this.state.collapsed})
                            }}
                        >
                            <HomeIcon className={classes.icon} />
                        </IconButton>
                    </Flexbox>
                </Flexbox>
                {this.state.collapsed ?
                    <div>
                        <FiltersContainer filterName="Distance(Km)"/>
                        <FiltersContainer filterName = "Cost" />
                        <FiltersContainer filterName = "Rating" />
                    </div>: ""
                }
            </Flexbox>
        );
    }
}

FiltersContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilterComponentWrapper);
