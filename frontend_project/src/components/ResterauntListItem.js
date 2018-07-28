import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Flexbox from 'flexbox-react';
const styles = theme => ({
    root: {
        backgroundColor: 'grey',
        // marginBottom: '5px',
        height: '8vh',
        border: 'thin solid black',
        borderRadius: '5px',
    },
    itemText: {
      paddingTop: '5px'
    },
    mainImage: {

    }
});

class ResterauntListItem extends ListItem {
    render() {
        const {classes, primaryText} = this.props;
        let value = 1;
        return(
            <Flexbox className={classes.root}
                key={value}
                role={undefined}
                onClick={()=>{console.log('hi')}}
                flexDirection="row"
            >
                <Flexbox>
                    <Flexbox className={classes.mainImage}>
                        <image src="https://vignette.wikia.nocookie.net/logopedia/images/1/1e/Plain-mcdonalds-logo.jpg/revision/latest?cb=20161208155014"></image>
                    </Flexbox>
                </Flexbox>
                <Flexbox flexGrow={1}></Flexbox>
                <Flexbox>

                </Flexbox>

            </Flexbox>
    );
    }
}


export default withStyles(styles)(ResterauntListItem);