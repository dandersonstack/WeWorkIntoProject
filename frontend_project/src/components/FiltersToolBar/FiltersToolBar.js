import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Flexbox from 'flexbox-react';
import 'rc-slider/assets/index.css';
import FiltersContainer from "../FilterComponent/Filter";
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import styles from './FiltersToolBarStyles';

function HomeIcon(props) {

    return (
        <SvgIcon {...props} style={{color: 'white'}}>
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        </SvgIcon>
    );
}

class FiltersToolBar extends Component {
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
                        <Flexbox>{this.state.collapsed ? 'Hide Filters': 'Show Filters'}</Flexbox>
                        <Flexbox flexGrow={1}></Flexbox>

                    </Flexbox>
                    <Flexbox flexGrow={1}></Flexbox>
                    <Flexbox className={classes.filtersHeaderIcon}>
                        <IconButton
                            aria-label="Delete"
                            onClick={()=>{
                                this.setState({collapsed: !this.state.collapsed})
                            }}>
                            <HomeIcon className={classes.icon} />
                        </IconButton>
                    </Flexbox>
                </Flexbox>
                {!this.state.collapsed ?
                    <div>
                        <FiltersContainer filterTitle="Distance(Km)" filterType='distance'/>
                        <FiltersContainer filterTitle ="Cost" filterType='cost'/>
                        <FiltersContainer filterTitle = "Rating" filterType='rating'/>
                    </div>: ""
                }
            </Flexbox>
        );
    }
}

export default withStyles(styles)(FiltersToolBar);
